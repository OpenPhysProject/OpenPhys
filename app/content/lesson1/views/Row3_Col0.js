/* OER is our project namespace, used to avoid collisions with other project and browser supported code
 * OER.Views is the scope we use for views to keep things organized
 * OER.Views.Sandbox is the scope for views for this content
 * the || {} is creating an empty object for this if it does not exist already
 */
OER.Views = OER.Views || {};    
OER.Views.ElectronicStructureOfTheAtom = OER.Views.ElectronicStructureOfTheAtom || {};

(function () {
    'use strict';
    
    var p = {};     // prototype for this class
    var s = {};     // static for this class
    p.template= JST['app/content/lesson1/templates/Row3_Col0.ejs'];     // template used to create html for this view
    p.events = {};  // events, used by backbone to set up event handlers on html elements   
    p.stage = null;         // easeljs stage
    p.width = null;         // stage width
    p.height = null;        // stage height
    // Easeljs shapes:
    p.atoms = null;         // array of easeljs shapes
    p.tickerBind = null;    // reference to bound function, binding lets us call back in this scope
    p.buttonBind = null;    // reference to bound function
    p.c_info= null;         // createjs Container for info text
  
    
    p.atomProps1 = {
        //sourceX: 400, // positioning is done by lattice
        //sourceY: 200, 
        colour: "rgba(255,0,0,0.5)",
        cloudColourClicked: "rgba(0,255,0,0.5)",    // colour after clicked
        cloudSize: 15, //12,  
        scale: 1.000, 
        nucleusSize: 2,
        nucleusColour: "rgba(255,255,255,1.0)",
        diffusion: 4,
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
        
        // Attach listener to stage
        //hmm only works if an object is clicked, not the empty stage
        //this.stage.on("click",this.stageClick, null, false, null, true);

       //=============== STATIC CONTENT ====================//
                        
       // Text 
        this.txt = new createjs.Text("ATOMS", "22px Courier New", "#FFF");
        this.txt.x = 40;  this.txt.y = 10;
        //this.txt.rotation = 20;  //txt.outline = true;
        this.stage.addChild(this.txt);
        
        // Draw Particles
        this.atoms = [];    // create empty array
        this.drawLattice();
        
        // Draw Info Button
        this.info = this.drawInfoButton();
        this.infoBind = this.infoClick.bind(this);     
        this.info.addEventListener("click", this.infoBind);
        //this.stage.addChild(this.info);  // add this shape to the stage
        
        this.makeInfoText(); // create text (dont display yet)
        
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
        this.atoms.push(e);     // add electron to array
    };

    // Draw particle and add it to stage   
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

       // Cloud 
       v.electronFillCommand = electron.graphics.beginFill(Props.colour).command;
       electron.graphics.drawCircle(0, 0, Props.cloudSize); // electron radius
       // Nucleus
       nucleus.graphics.beginFill(Props.nucleusColour).drawCircle(0, 0, Props.nucleusSize); //
       //Atom
        c_atom.addChild(electron, nucleus);
        c_atom.on("tick",this.atomTick);  // add tick listener to electron, which is called by createjs tick event 
        c_atom.on("click",this.atomClick); 
       
        v.x         = Props.sourceX;  //v.x = 400*Math.random();
        v.y         = Props.sourceY;  //v.y = 200*Math.random();
        v.diffusion = Props.diffusion;      
        v.scale     = Props.scale;
        v.cloudColourClicked = Props.cloudColourClicked;       
        //v.scaleX = 2.0;
        return c_atom;
    };   
   
   // ============== EVOLUTION ================ //
//   p.stageClick = function () {
//       // does this work?
//       var particle = new createjs.Shape();
//        particle.graphics.beginFill("red").drawCircle(0, 0, 200);
//        this.stage.addChild(particle);
//   };
   
    p.atomClick = function () {
       // Action when an atom is clicked
       this.scaleX = 1.5 * this.tickProps.scale;
       this.scaleY = this.scaleX;
       this.tickProps.diffusion = 2* p.atomProps1.diffusion;   // speed up
       this.tickProps.electronFillCommand.style = this.tickProps.cloudColourClicked;
       //var e = this.getChildByName('electron');
       // this.stage.removeChild(this);
   };   
   
    p.atomTick = function () {
        // Particle moves
        if (this.tickProps.x > -10 && this.tickProps.x < 810 &&
            this.tickProps.y > -10 && this.tickProps.y < 410) {
            // update Props: "Diffusion"
            var distance = this.tickProps.diffusion;
            this.tickProps.x += distance*(Math.random()-0.5); // move right left
            this.tickProps.y += distance*(Math.random()-0.5); // move up or down
   
            // update particle:
            this.scaleX  *= this.tickProps.scale;   // change size of the particles
            this.scaleY  *= this.tickProps.scale;   // 
            this.x        = this.tickProps.x;       // update electron position
            this.y        = this.tickProps.y;  
        }
        else {
            // remove this particle from stage if off screen
            this.stage.removeChild(this);
        };
    };
    
    p.drawInfoButton = function () {
        // Draw Info Button at bottom left corner of canvas
        var source = new createjs.Shape();
        var xpos = 25, ypos = 400 - 60;
        var width = 60, height = 45; 
        var txt;
        // drawRoundRect(x, y, width, height, radius)
        source.graphics.beginFill("rgba(100,100,100,0.8)").drawRoundRect(xpos, ypos, width, height, 5);
       // source.x =  30; //Props.sourceX;  // x position
       // source.y =  320; //Props.sourceY;
        this.stage.addChild(source);

        txt = new createjs.Text("Info", "18px Courier New", "rgba(200,200,200,0.8");
        txt.x = xpos + 10;  
        txt.y = ypos + 13;
        //this.txt.rotation = 20;  //txt.outline = true;
        this.stage.addChild(txt);    
        return source;        
        };
    
    p.makeInfoText = function() {
              // display info text
        // should active a flag for temporary display
        //var c_info   = new createjs.Container();
        p.c_info = new createjs.Container();
        p.c_info.visible = false;
        
        var infoobj, line;
        var infotxt = [
            "This is a simulation of atoms", 
            "The atoms are clickable", 
            " ",
            "(To clear, click info button again.)",
        ];
        var nlines = 4;
        for (line=0; line<nlines; line++)
            {        
                infoobj = new createjs.Text(infotxt[line], "22px Courier", "rgba(200,200,200,0.9");
                infoobj.x = 100;  
                infoobj.y = 100+20*line;
                //this.txt.rotation = 20;  //txt.outline = true;
                p.c_info.addChild(infoobj);
            }
        this.stage.addChild(p.c_info);
        
        return;  
    };
    
    p.infoClick = function () {
        // display info text

        p.c_info.visible = !p.c_info.visible;
        
        return; 
    }
    
    
    function Hello2() {
        var tmp;
        tmp= 10;
        return tmp;
    };

    // add the above code as a backbone view class in our namespace
    OER.Views.ElectronicStructureOfTheAtom.Models = Backbone.View.extend(p, s);    

})();
