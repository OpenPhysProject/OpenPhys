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
    p.template= JST['app/content/lesson1/templates/Row3_Col5.ejs'];     // template used to create html for this view
    p.events = {};  // events, used by backbone to set up event handlers on html elements
    //p.button = null;        // html button element    
    p.stage = null;         // easeljs stage
    p.width = null;         // stage width
    p.height = null;        // stage height
    // Easeljs shapes:
    p.electrons = null;     // array of easeljs shapes
    p.photonsource1 = null;  // easeljs shape   
    p.target = null;        // target for x-rays
    // EaselJS bitmaps:
    p.background = null;    // background image
    p.tickerBind = null;    // reference to bound function, binding lets us call back in this scope
    p.buttonBind = null;    // reference to bound function
    p.Wave = null;
    p.Wave_ymax = 50;
    p.Wave_yinc = 0.8;      // oscillation speed
    p.t = 0; // time
    
    p.photonProps1 = {sourceX: 400, sourceY: 200, source_colour: "darkgreen", colour: "red", size: 5,  scale: 1.000 };    
     
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
                           
//===================================================//
        
        // Draw Particles
        this.electrons = [];    // create empty array
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
        this.stage.removeAllChildren();  // a bit drastic
        //
        // this.drawLattice();      
        //this.photonsource1Click();   // start with firing Click Event
        // Text 
        this.txt = new createjs.Text("Standing Waves", "24px Arial", "#FFF");
        this.txt.x = 320;  this.txt.y = 10;
        //this.txt.rotation = 20;  //txt.outline = true;
        this.stage.addChild(this.txt);
        
        // Redraw wave, with oscillating amplitude
        //   
        var wavespeed = 3.0;
        this.drawWave(0.5,   0,  80, wavespeed, "yellow");
        this.drawWave(0.5, 0.5,  80, wavespeed,    "red");
        this.drawWave(1,     0, 200, wavespeed, "yellow");
        this.drawWave(1,   0.5, 200, wavespeed, "red");
        this.drawWave(1.5,   0, 320, wavespeed, "yellow");
        this.drawWave(1.5, 0.5, 320, wavespeed, "red");       
        //this.Wave_ymax += this.Wave_yinc;
        //if (Math.abs(this.Wave_ymax) > 50) {this.Wave_yinc *= -1;};
        
        this.t += 1;                // clock for simulations
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
    
    p.drawWave = function(cycles, cycleshift, y0, wavespeed, colour) {
     // sine wave
     // y0: vertical offset of plot
     // cycleshift = 0.0  --> sin
     // cycleshift = 0.5  --> -sin
     // cycleshift = 0.25 --> cos
        var xmin,xmax,xrange,x,y, radians;
        xmin = -1;
        xmax = 800;
        xrange = xmax-xmin; 
        this.Wave = new createjs.Shape();
        //this.Wave.on("tick",this.WaveTick);  // not very useful, so far.
        this.Wave.graphics.setStrokeStyle(3);
        this.Wave.graphics.beginStroke(colour).moveTo(xmin,y0);
        
        // Physics
        var wavelength = xmax/cycles;
        var freq = wavespeed/wavelength;        // relative to tick rate
        var yamp = this.Wave_ymax * Math.cos(2*Math.PI* freq * this.t);      
      
        for (x=0; x<xmax; x++){
            radians = 2*Math.PI*((x/xrange)*cycles - cycleshift);
            this.Wave.graphics.lineTo(xmin+x, y0+yamp*Math.sin(radians));
        };
        
        this.Wave.graphics.endStroke(); // horizontal
        this.stage.addChild(this.Wave);
    };
                 
   // ============== EVOLUTION ================ //
    
    function Hello2() {
        var tmp;
        tmp= 10;
        return tmp;
    };

    // add the above code as a backbone view class in our namespace
    OER.Views.ElectronicStructureOfTheAtom.QAtomOne = Backbone.View.extend(p, s);    

})();
