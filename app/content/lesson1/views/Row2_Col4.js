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
    p.template= JST['app/content/lesson1/templates/Row2_Col4.ejs'];     // template used to create html for this view
    p.events = {};  // events, used by backbone to set up event handlers on html elements
    //p.button = null;        // html button element    
    p.stage = null;         // easeljs stage
    p.width = null;         // stage width
    p.height = null;        // stage height
    // Easeljs shapes:
    p.photonsource1 = null;  // easeljs shape   
    p.target = null;        // target for x-rays
    // EaselJS bitmaps:
    p.background = null;    // background image
    p.tickerBind = null;    // reference to bound function, binding lets us call back in this scope
    p.buttonBind = null;    // reference to bound function
    p.Wave = null;
    p.Arc2 = null;
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
        
       //===============  CONTENT ====================//                         
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
        // Text 
        this.txt = new createjs.Text("Angular Momentum", "24px Arial", "#FFF");
        this.txt.x = 320;  this.txt.y = 10;
        //this.txt.rotation = 20;  //txt.outline = true;
        this.stage.addChild(this.txt);
        
        this.drawArc();
        
        // Redraw wave. 
        var wavespeed = 0.5;
        //this.drawWave(1, 0.5,  80, wavespeed,    "red");
        //this.drawWave(3,   0.5, 200, wavespeed, "red");
        //this.drawWave(6, 0.5, 320, wavespeed, "red");       
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
 
     p.drawArc = function() {
     // Arc
        var a, c, s, segments = 32, redcol,greencol, col;
        var angle1=0.00*2*Math.PI, angle2;
        var radius = 150;
        var x0 = 400, y0=200;
        var x1, y1;
        var angle_inc = 2*Math.PI/segments;
        var col_inc = 7; //15
       
//        this.Arc2 = new createjs.Shape();
//        this.Arc2.graphics.setStrokeStyle(1);

        for (a=0; a<segments; a++){  
           s = Math.sin(angle1);
           c = Math.cos(angle1);
            var x1=x0+radius * c;
            var y1=y0+radius * s;
            angle2 = angle1+angle_inc;
            redcol   = (200.0*s*s).toFixed(0);//col_inc*(a+1);
            greencol = (200.0*c*c).toFixed(0);
            col = "rgb(" + redcol + "," + greencol+ ",0)";
            this.Arc2 = new createjs.Shape();
            this.Arc2.graphics.setStrokeStyle(0);
            this.Arc2.graphics.beginFill(col);
            this.Arc2.graphics.beginStroke(col);
            this.Arc2.graphics.moveTo(x0,y0);
            this.Arc2.graphics.lineTo(x1,y1);
            this.Arc2.graphics.arc(x0,y0,radius, angle1,angle2 );  
            this.Arc2.graphics.lineTo(x0,y0);
            this.Arc2.graphics.endStroke(); // horizontal
            this.stage.addChild(this.Arc2);
            angle1 = angle2;
             }
        //this.stage.addChild(this.Arc2);
        //this.Arc2.rotation=90;
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
        var yamp = this.Wave_ymax; // * Math.cos(2*Math.PI* freq * this.t);  
        cycleshift =  2*Math.PI*freq*this.t;
                  
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
    OER.Views.ElectronicStructureOfTheAtom.Angular = Backbone.View.extend(p, s);    

})();
