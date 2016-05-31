/* OER is our project namespace, used to avoid collisions with other project and browser supported code
 * OER.Views is the scope we use for views to keep things organized
 * OER.Views.Sandbox is the scope for views for this content
 * the || {} is creating an empty object for this if it does not exist already
 */
OER.Views = OER.Views || {};    
OER.Views.Nucleus = OER.Views.Nucleus || {};

(function () {
    'use strict';
    
    var p = {};     // prototype for this class
    var s = {};     // static for this class
    p.template= JST['app/content/lesson2a/templates/Structure.ejs'];     // template used to create html for this view
    p.events = {};  // events, used by backbone to set up event handlers on html elements   
    p.stage = null;         // easeljs stage
    p.width = null;         // stage width
    p.height = null;        // stage height
    // Easeljs shapes:
   // p.atoms = null;     // array of easeljs shapes
    p.tickerBind = null;    // reference to bound function, binding lets us call back in this scope
    p.buttonBind = null;    // reference to bound function
    
    p.atomProps1 = {
        //sourceX: 400, // positioning is done by lattice
        //sourceY: 200, 
        colour:             "rgba(255,0,0,0.9)",
        cloudColourClicked: "rgba(0,150,0,0.5)",    // colour after clicked
        cloudSize: 11, //12,  
        scale: 1.000, 
        nucleusSize: 2,
        nucleusColour:        "rgba(255,255,255,1.0)",
        nucleusColourClicked: "rgba(150,150,150,1.0)",    // colour after clicked        
        diffusion: 0.0,
    };    
  
    p.radProps1 = {
       // sourceX: 400, // positioning is done by lattice
       // sourceY: 200, 
        colour:    "rgba(255,255,0,0.5)",
        cloudSize: 20, //12,  
        scale: 1.000, 
        nucleusSize: 3,
        nucleusColour: "rgba(50,50,50,0.1)",
        speed:       0.1, // was  6.0,
       // diffusion: 0.0,
    };    
    
    /**
     * backbone initialize function
     * called on creation by OER.LessonBaseView.updateContent
     * @param {Backbone.Model} model A MapCardModel with related data 
     */
    p.initialize = function (model) {
        if (model) { this.model = model; }
        //this.listenTo(this.model, 'change', this.render);
        this.render();
    };

    /**
     * backbone render function, which builds html from template
     * called by initialize
     */
    p.render = function () {
        if(this.model) {
            this.setElement(this.template(this.model.toJSON()));    // create the html for this view
        } else {
            this.setElement(this.template());
        }

        // Set up createjs stage and touch support
        var c = $(".lesson-content-canvas", this.$el)[0];
        this.stage = new createjs.Stage(c);
        if (createjs.Touch.isSupported()) {createjs.Touch.enable(this.stage);}
        this.width  = c.width;
        this.height = c.height;

       //=============== STATIC CONTENT ====================//             
       // Text 
        this.txt = new createjs.Text("DECAYING ATOMS", "18px Arial", "#FFF");
        this.txt.x = 40;  this.txt.y = 10;
        //this.txt.rotation = 20;  //txt.outline = true;
        this.stage.addChild(this.txt);
        
        // Draw Particles
        //this.atoms = [];    // create empty array
        this.drawLattice();    
        
        // set up createjs ticker to update stage
        createjs.Ticker.timingMode = createjs.Ticker.RAF;   // sets ticks to happen on browser request animation frame
        this.tickerBind            = this.tick.bind(this);
        createjs.Ticker.addEventListener("tick", this.tickerBind);
    };
    
     /* createjs tick event, that is run multiple frames per second
     * called by createjs tick event
     * @param {type} event
     */
    p.tick = function(event) {
        // update the stage
        this.stage.update(event);   // redraw shapes on the stage
    };

    /*
     * clean up stage events and call super remove
     * called by OER.lessonBaseView
     * @param {type} options
     */
    p.remove = function(options) {
       // this.button.removeEventListener("click");
        if (createjs.Touch.isSupported()) {createjs.Touch.disable(this.stage);}
        createjs.Ticker.removeEventListener("tick", this.tickerBind);
        Backbone.View.prototype.remove.call(this, options);
    };
        
    // ==== RADIATION CODE ===//
    // produced when a radioactive decay occurs
    p.drawRadiation = function () {
        var rad = this.drawRadHelper(this.radProps1);
        this.stage.addChild(rad);
        //return rad;
    };  
        
    // ==== ATOMS CODE ===== //    
    p.drawLattice = function() {
        // Draw a 2D array of particles
        var x,y, x_lattice_spacing, y_lattice_spacing, x_lattice_size, y_lattice_size;
        var xmin, ymin;
        xmin = 60;
        ymin = xmin;
        x_lattice_spacing = 25;
        y_lattice_spacing = x_lattice_spacing;
        x_lattice_size = 28;
        y_lattice_size = 13;
        for (x =xmin; x < x_lattice_spacing*x_lattice_size+xmin; x+= x_lattice_spacing)  {
            this.atomProps1.sourceX = x;
            for (y=ymin; y < y_lattice_spacing*y_lattice_size+ymin; y+= y_lattice_spacing){
                this.atomProps1.sourceY = y;
                var e = this.drawAtom1();
                this.addParticle(e);
            }
        }   
    };    
                  
    p.addParticle = function(e) {
        this.stage.addChild(e);     // add particle to stage
      //  this.atoms.push(e);     // add electron to array. but is this ever used?
    };
   
    p.drawAtom1 = function () {
       var atom = this.drawAtomHelper(this.atomProps1);
       return atom;
    };   
     
    p.drawAtomHelper = function(Props) {
       // make atom from 2 parts
        var electron = new createjs.Shape();
        var nucleus  = new createjs.Shape();
        var c_atom   = new createjs.Container();
        var v       = c_atom.tickProps = {};   // Define parameters to be used for each tick     
       // Electron Cloud 
       v.electronFillCommand = electron.graphics.beginFill(Props.colour).command;
       electron.graphics.drawCircle(0, 0, Props.cloudSize); // electron radius
       //
       // Nucleus
       v.nucleusFillCommand = nucleus.graphics.beginFill(Props.nucleusColour).command;
       nucleus.graphics.drawCircle(0, 0, Props.nucleusSize); 
       //
       //Atom
        c_atom.addChild(electron, nucleus);
        c_atom.on("tick",this.atomTick);  // add tick listener to atom, which is called by createjs tick event 
  //      c_atom.on("click",this.atomClick); 
        v.x         = Props.sourceX;  //v.x = 400*Math.random();
        v.y         = Props.sourceY;  //v.y = 200*Math.random();
        v.diffusion = Props.diffusion;      
        v.scale     = Props.scale;
        v.cloudColourClicked   = Props.cloudColourClicked;
        v.nucleusColourClicked = Props.nucleusColourClicked;
        v.decayed = 0;
        //v.scaleX = 2.0;
        c_atom.x        =v.x;       // update electron position
        c_atom.y        = v.y;      
        return c_atom;
    };   
   
    p.drawRadHelper = function(Props) {
       // make radiation from 2 parts
        var electron = new createjs.Shape();
        var nucleus  = new createjs.Shape();
        var c_rad   = new createjs.Container();
        var v       = c_rad.tickProps = {};   // Define parameters to be used for each tick     
       //  Cloud 
       v.electronFillCommand = electron.graphics.beginFill(Props.colour).command;
       //beginRadialGradientFill ( colors  ratios  x0  y0  r0  x1  y1  r1 )
       var colors=["rgba(255,255,0,255)","rgba(255,255,0,0)"];
       var x0=0, y0=0, x1=0, y1=0;
       var r0 = 1;
       var r1 = Props.cloudSize;
       var ratios = [0,1];
       electron.graphics.beginRadialGradientFill(colors, ratios, x0,y0,r0, x1,y1,r1);
       electron.graphics.drawCircle(0, 0, Props.cloudSize); // electron radius
      //
       // Nucleus
       v.nucleusFillCommand = nucleus.graphics.beginFill(Props.nucleusColour).command;
       nucleus.graphics.drawCircle(0, 0, Props.nucleusSize); 
       //
       //Radiation Particle
        c_rad.addChild(electron, nucleus);
        c_rad.on("tick",this.radTick);  // add tick listener to radiation particle 
        
        c_rad.x = v.x = Props.sourceX;  //
        c_rad.y = v.y = Props.sourceY;  //
        var angle = 2*Math.PI * Math.random(); // radiation emerges at a random angle from the nuclide
        v.xinc    = Props.speed * Math.cos(angle); // 
        v.yinc    = Props.speed * Math.sin(angle); // 
        v.scale   = Props.scale;
        //v.scaleX = 2.0;      
        return c_rad;
    };   
   
   // ============== EVOLUTION ================ //
//   p.atomClick = function () {
//       // Action when an atom is clicked
//       this.scaleX = 1.5 * this.tickProps.scale;
//       this.scaleY = this.scaleX;
//       this.tickProps.diffusion = 2* p.atomProps1.diffusion;   // speed up
//       this.tickProps.electronFillCommand.style = this.tickProps.cloudColourClicked;
//       //var e = this.getChildByName('electron');
//       // this.stage.removeChild(this);
//   };   
   
    p.atomTick = function () {
        // 
        if (Math.random() > 0.999 && this.tickProps.decayed == 0) {
            // Decay event: 1) atom changes appearance
            this.tickProps.decayed = 1;
            this.tickProps.electronFillCommand.style = this.tickProps.cloudColourClicked;
            this.tickProps.nucleusFillCommand.style  = this.tickProps.nucleusColourClicked;  
            // 2) Radiation is created 
            p.radProps1.sourceX = this.x;   // radiation starts at location of decayed atom
            p.radProps1.sourceY = this.y;
            var rad = p.drawRadHelper(p.radProps1);
            this.stage.addChild(rad);  
        }
    };
    
    p.radTick = function () {
        // radiation moves, and eventually disappears       
        if (this.tickProps.x > -10 && this.tickProps.x < 810 &&
            this.tickProps.y > -10 && this.tickProps.y < 410) {
            // update Props:
            //var speed = 2; // could allow to accelerate?
            var accel = 1.09;
            this.tickProps.xinc *= accel;
            this.tickProps.yinc *= accel;
            this.tickProps.x += this.tickProps.xinc; //
            this.tickProps.y += this.tickProps.yinc; //yinc = speed * Math.sin(this.tickProps.angle); // 
           // update radiation particle:
           // this.scaleX  *= this.tickProps.scale;   // change size of the particles
           // this.scaleY  *= this.tickProps.scale;   // 
            this.x        = this.tickProps.x;       // update electron position
            this.y        = this.tickProps.y;  
        }
        else {
            // remove this particle from stage if off screen
            this.stage.removeChild(this);
        };      
    };
    
    function Hello2() {
        var tmp;
        tmp= 10;
        return tmp;
    };

    // add the above code as a backbone view class in our namespace
    OER.Views.Nucleus.Structure = Backbone.View.extend(p, s);    

})();
