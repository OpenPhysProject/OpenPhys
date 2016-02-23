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
    //p.button = null;        // html button element    
    p.stage = null;         // easeljs stage
    p.width = null;         // stage width
    p.height = null;        // stage height
    // Easeljs shapes:
    p.electrons = null;     // array of easeljs shapes
    p.photonsource1 = null;  // easeljs shape
  //  p.photonsource2 = null;  // easeljs shape 
  //  p.photonsource3 = null;  // easeljs shape   
    p.target = null;        // target for x-rays
    // EaselJS bitmaps:
    p.background = null;    // background image
    p.tickerBind = null;    // reference to bound function, binding lets us call back in this scope
    p.buttonBind = null;    // reference to bound function
    
    p.photonProps1 = {sourceX: 400, sourceY: 200, source_colour: "darkgreen", 
        colour: "rgba(255,0,0,0.5)", // hi
        size: 12,  scale: 1.000 };    
     
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
        this.stage.on("click",this.stageClick, null, false, null, true);
        //this.stage.mouseChildren = true; // ???
        
       //=============== STATIC CONTENT ====================//
        // Draw Source 1 (clickable)   
//        this.photonProps1.sourceX = this.width *7/8;
//        this.photonProps1.sourceY = this.height/2;
//        this.photonsource1 = this.drawSource(this.photonProps1);
//        this.sourceBind = this.photonsource1Click.bind(this);     
//        this.photonsource1.addEventListener("click", this.sourceBind);
//        this.stage.addChild(this.photonsource1);  // add this shape to the stage        
        
    // external file for background image
       // this.background = new createjs.Bitmap("/content/lesson6/assets/ComptonIncident.svg");
        //this.background.regX = this.background.image.width  *0.5;
        //this.background.regY = this.background.image.height *0.5;        
        //this.stage.addChild(this.background);
        
       // Text 
        this.txt = new createjs.Text("ATOMS", "18px Arial", "#FFF");
        this.txt.x = 40;  this.txt.y = 10;
        //this.txt.rotation = 20;  //txt.outline = true;
        this.stage.addChild(this.txt);
        
       // outside of easeljs...DOES NOT WORK
        var ctx = c.getContext("2d");
        ctx.font = "30px Arial";
        ctx.fillText("Hello World",200,200);        
        
        // Horizontal and angled dashed line
        //this.line1 = new createjs.Shape();
        //this.line1.graphics.setStrokeDash([10,5], 0).setStrokeStyle(1);
        //this.line1.graphics.beginStroke("grey").moveTo(50,y0).lineTo(600, y0   ).endStroke(); // horizontal
        //this.line1.graphics.beginStroke("grey").moveTo(50,y0).lineTo(600, y0-70).endStroke(); // angled  
        //this.line1.graphics.beginStroke("grey").moveTo(50,y0).lineTo(600, y0+70).endStroke(); // angled        
        //this.stage.addChild(this.line1);                     
//===================================================//
        
        // Draw Particles
        this.electrons = [];    // create empty array
        this.drawLattice();
        //this.photonsource1Click();   // start with firing Click Event
      //this.stageClick(); // test this fn
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
    
    p.drawSource = function (Props) {
        // Draw Particle Source (clickable)
        var source = new createjs.Shape();
        // drawRoundRect(x, y, width, height, radius)
        var radius = 5;
        source.graphics.beginFill(Props.source_colour).drawRoundRect(-20, -20, 40, 40, radius);
        source.x =  Props.sourceX;  // x position
        source.y =  Props.sourceY;
        return source;        
    };
    
    /**
     * click listener 
     */
//    p.photonsource1Click = function() {
//        var i;
//        for (i = 0; i < 1; i++)  {
//            var e = this.drawElectron1();
//            this.addParticle(e);
//        }   
//    };
    
    p.drawLattice = function() {
        var x,y, x_lattice_spacing, y_lattice_spacing, x_lattice_size, y_lattice_size;
        var xmin, ymin;
        xmin = 60;
        ymin = xmin;
        x_lattice_spacing = 25;
        y_lattice_spacing = x_lattice_spacing;
        x_lattice_size = 28;
        y_lattice_size = 13;
        for (x =xmin; x < x_lattice_spacing*x_lattice_size+xmin; x+= x_lattice_spacing)  {
            this.photonProps1.sourceX = x;
            for (y=ymin; y < y_lattice_spacing*y_lattice_size+ymin; y+= y_lattice_spacing){
                this.photonProps1.sourceY = y;
                var e = this.drawElectron1();
                this.addParticle(e);
            }
        }   
    };    
           
    p.addParticle = function(e) {
        this.stage.addChild(e);     // add particle to stage
        this.electrons.push(e);     // add electron to array
    };

    // Draw particle and add it to stage   
    p.drawElectron1 = function () {
       var electron = this.drawAtomHelper(this.photonProps1);
       return electron;
    };   
     
   p.drawAtomHelper = function(Props) {
       // make atom from 2 parts
        var electron = new createjs.Shape();
        var nucleus  = new createjs.Shape();
        var c_atom = new createjs.Container();
        var nucleus_size = 2;
        
        electron.graphics.beginFill(Props.colour).drawCircle(0, 0, Props.size); // electron radius
        nucleus.graphics.beginFill("rgba(255,255,255,1.0)").drawCircle(0, 0, nucleus_size); // electron radius
       
        c_atom.addChild(electron, nucleus);
        c_atom.on("tick",this.electronTick);  // add tick listener to electron, which is called by createjs tick event 
       
       // Define parameters to be used for each tick
        var v = c_atom.tickProps = {};
        v.x   = Props.sourceX;  //v.x = 400*Math.random();
        v.y   = Props.sourceY;  //v.y = 200*Math.random();
        //v.scaleX = 2.0;
        var diffusion_level = 3.0;
        v.xinc = diffusion_level*(Math.random()-0.5);
        //v.yinc = 2*(Math.random()-0.5); //* this.photon2Props.source_divergence;  // +ve or -ve amount of divergence
        //v.yinc = -2*(Math.random());   // -ve is up       
        v.scale = Props.scale;
        return c_atom;
    };   
   
   // ============== EVOLUTION ================ //
   p.stageClick = function () {
       // does this work?
       var particle = new createjs.Shape();
        particle.graphics.beginFill("red").drawCircle(0, 0, 200);
        this.stage.addChild(particle);
   };
   
   
    p.electronTick = function () {
        // particle moves
        if (this.tickProps.x > -10 && this.tickProps.x < 810 &&
            this.tickProps.y > -10 && this.tickProps.y < 410) {
            // update Props: "Diffusion"
            this.tickProps.x += 4.0*(Math.random()-0.5); // move right left
            this.tickProps.y += 4.0*(Math.random()-0.5); // move up or down
   
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
    
    function Hello2() {
        var tmp;
        tmp= 10;
        return tmp;
    };

    // add the above code as a backbone view class in our namespace
    OER.Views.ElectronicStructureOfTheAtom.Models = Backbone.View.extend(p, s);    

})();
