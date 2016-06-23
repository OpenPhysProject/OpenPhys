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
    p.template= JST['app/content/lesson1/templates/R3_QAtomOne.ejs'];     // template used to create html for this view
    p.events = {};  // events, used by backbone to set up event handlers on html elements
    //p.button = null;        // html button element    
    p.stage = null;         // easeljs stage
    p.width = null;         // stage width
    p.height = null;        // stage height
    // Easeljs shapes:   
    //p.target = null;        // target for x-rays
    // EaselJS bitmaps:
    p.background = null;    // background image
    p.tickerBind = null;    // reference to bound function, binding lets us call back in this scope
    p.buttonBind = null;    // reference to bound function
    p.Wave = null;
    p.Arc2 = null;
    p.Wave_ymax = 50;
    p.Wave_yinc = 0.8;      // oscillation speed
    p.t = 0; // time
    p.rotation_deg = 0.0;   
     
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
        //                 x0  y0   pattern speed       atom radius
        this.drawAtomWave(200,130, this.rotation_deg*2, 100); //
        this.drawAtomWave(400,200, this.rotation_deg,   180); //       
        this.drawAtomWave(850,425, this.rotation_deg/2, 400);
        this.rotation_deg += 0.5;   // governs the speed of the pattern cycling
        
         // Title on the canvas 
        this.txt = new createjs.Text("Matter Waves", "24px Arial", "#FFF");
        this.txt.x = 30;  this.txt.y = 10;
        //this.txt.rotation = 20;  //txt.outline = true;
        this.stage.addChild(this.txt);      
        
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
 
    p.drawAtomWave = function(x0,y0,rotation_deg, radius) {
        // Draw a pattern made from counter-rotating patterns, one red, one green
        // x0,y0 = origin of arc
        // rotation_deg = controls the 
        // 
        var a, s1,c1,s2,c2,s1_sq,c1_sq,s2_sq,c2_sq; 
        var segments = 90; //180; // number of pizza slices in a circle
        var redcol,greencol, col;
        var angle1=0.0, angle2;
        var x1, y1;     // points used in plotting the pizza
        var angle_inc = 2*Math.PI/segments;             // so that slices make a complete pizza
        var rotation   = -(rotation_deg/360)*2*Math.PI; // rotates fill color
       
        this.Arc2 = new createjs.Shape();
        this.Arc2.graphics.setStrokeStyle(1);

        // draw a set of filled circular segments (pizza slice shape)
        // use sin^4 and cos^4 patterns
        for (a=0; a<segments; a++){  
            s1 = Math.sin(angle1+rotation);  // used to calc the fill colour
            s1_sq = s1*s1;
            c1_sq = 1 - s1_sq; // //c1 = Math.cos(angle1+rotation);
                
            s2 = Math.sin(angle1-rotation);  // rotates the opposite way
            s2_sq = s2*s2;
            c2_sq = 1-s2_sq; // c2 = Math.cos(angle1-rotation);             
            redcol  = (125*(s1_sq*s1_sq + s2_sq*s2_sq)).toFixed(0);
            greencol= (125*(c1_sq*c1_sq + c2_sq*c2_sq)).toFixed(0);
            col     = "rgba(" + redcol + "," + greencol+ ",0, 1.0)";  // fill color for segment
            
            x1 = x0 + radius*Math.cos(angle1);  // first point on disk perimeter
            y1 = y0 + radius*Math.sin(angle1);  //
            angle2 = angle1 + angle_inc;    
            
            // two radii and one arc make a pizza slice
            this.Arc2.graphics.beginFill(col).beginStroke(col);
            this.Arc2.graphics.moveTo(x0,y0).lineTo(x1,y1);
            this.Arc2.graphics.arc(x0,y0,radius, angle1, angle2);  
            this.Arc2.graphics.lineTo(x0,y0).endStroke();
            angle1 = angle2;
             }
        this.stage.addChild(this.Arc2);
    };   
                 
    // add the above code as a backbone view class in our namespace
    OER.Views.ElectronicStructureOfTheAtom.QAtomOne = Backbone.View.extend(p, s);    

})();
