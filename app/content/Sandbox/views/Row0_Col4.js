/* OER is our project namespace, used to avoid collisions with other project and browser supported code
 * OER.Views is the scope we use for views to keep things organized
 * OER.Views.Sandbox is the scope for views for this content
 * the || {} is creating an empty object for this if it does not exist already
 */
OER.Views = OER.Views || {};    
OER.Views.Sandbox = OER.Views.Sandbox || {};

(function () {
    'use strict';
    
    var p = {};     // prototype for this class
    var s = {};     // static for this class
    
    p.template= JST['app/content/Sandbox/templates/Row0_Col4.ejs'];     // template used to create html for this view
    p.events = {};  // events, used by backbone to set up event handlers on html elements

    p.button1   = null;     // html button element 
    p.button2   = null;     // html button element     
    p.stage     = null;     // easeljs stage
    p.width     = null;     // stage width
    p.height    = null;     // stage height
    p.electrons = null;     // array of easeljs shapes
    p.nucleus   = null;     // easeljs shape
     
    p.tickerBind = null;    // reference to bound function, binding lets us call back in this scope
    p.button1Bind = null;    // reference to bound function
    p.button2Bind = null;    // reference to bound function
     
    /**
     * backbone initialize function
     * called on creation by OER.RLOBaseView.updateContent
     * @param {Backbone.Model} model A NavCardModel with related data 
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
        
        // Set up reference to button1 and click listener
        this.button1     = $(".rlo-content-button-add", this.$el)[0];    // $ is jquery, this.$el is this views html as a jquery object
        this.button1Bind = this.handleButton1.bind(this);     // create reference to bound function, binding makes a function be called in this scope
        this.button1.addEventListener("click", this.button1Bind); //

        // Set up reference to button2 and click listener
        this.button2     = $(".rlo-content-button-sub", this.$el)[0];    // $ is jquery, this.$el is this views html as a jquery object
        this.button2Bind = this.handleButton2.bind(this);     // create reference to bound function, binding makes a function be called in this scope
        this.button2.addEventListener("click", this.button2Bind); //     
        
        
        // Set up createjs stage and touch support
        var c = $(".rlo-content-canvas-sandbox", this.$el)[0];
        this.stage = new createjs.Stage(c);
        if (createjs.Touch.isSupported()) {createjs.Touch.enable(this.stage);}
        this.width  = c.width;
        this.height = c.height;
        
       // ==== DRAW CONTENT ON THE STAGE ==== 
       // draw Static circle (nucleus)
        this.nucleus = new createjs.Shape();
        this.nucleus.graphics.beginFill("Green").drawCircle(0, 0, 8);
        this.nucleus.x =  this.electronProps.originX; // x position
        this.nucleus.y =  this.electronProps.originY;
        this.stage.addChild(this.nucleus);  // add this shape to the stage
        
        // draw circle (electron)
        this.electrons = [];    // create empty array
        this.handleButton1();   // as if button1 has been presese once.

        // Set up createjs ticker to update stage
        createjs.Ticker.timingMode = createjs.Ticker.RAF;   // sets ticks to happen on browser request animation frame
        this.tickerBind            = this.tick.bind(this);
        createjs.Ticker.addEventListener("tick", this.tickerBind);
    };
    
    /**
     * createjs tick event, that is run multiple frames per second
     * called by createjs tick event
     * @param {type} event
     */
    p.tick = function(event) {
        // update the stage
        this.stage.update(event);   // redraw shapes on the stage
    };

    /*
     * clean up stage events and call super remove
     * called by OER.RLOBaseView
     * @param {type} options
     */
    p.remove = function(options) {
        this.button1.removeEventListener("click");
        if (createjs.Touch.isSupported()) {createjs.Touch.disable(this.stage);}
        createjs.Ticker.removeEventListener("tick", this.tickerBind);

        Backbone.View.prototype.remove.call(this, options);
    };
    
    /**
     * click listener for button1
     */
    p.handleButton1 = function() {
        var e = this.drawElectron1();
        this.stage.addChild(e); // add electron to stage
        this.electrons.push(e); // add electron to array
    };

    p.handleButton2 = function() {
        var e = this.drawElectron2();
        this.stage.addChild(e); // add electron to stage
        this.electrons.push(e); // add electron to array
    };

// ELECTRON CODE *********************************************************************************
    // Math for orbiting 
    p.electronProps = {
        angle:       0.0,
        angleDelta:  3,
        angleRandom: 1,
        angleRandomDelta: 0.10,
        angleChange:      0.05,
        angleChangeDelta: 0.02,
        originX: 100,
        originY: 100,
        radius:      40, 
        radiusDelta: 20,
    };
    
    // draw electron and add it to stage
    p.drawElectron1 = function() {
        var radius = Math.round(Math.random()*this.electronProps.radiusDelta + this.electronProps.radius);
        
        var electron = new createjs.Shape();
        electron.graphics.beginFill("Blue").drawCircle(0, 0, 5); // electron radius
        electron.x =  this.electronProps.originX;           // initial x position
        electron.y =  this.electronProps.originY +radius;
        electron.on("tick",this.electronTick);  // add tick listener to electron, which is called by createjs tick event
        
        var v = electron.tickProps = {};
        v.originX     = this.electronProps.originX;
        v.originY     = this.electronProps.originY;
        v.angle       = Math.random()*this.electronProps.angleDelta + this.electronProps.angle;
        v.angleRandom = Math.random()*this.electronProps.angleRandomDelta + this.electronProps.angleRandom;
        v.angleChange = Math.random()*this.electronProps.angleChangeDelta + this.electronProps.angleChange;
        v.radius      = radius;
        return electron;
    };
    
     // draw electron and add it to stage
    p.drawElectron2 = function() {
        var radius = Math.round(Math.random()*this.electronProps.radiusDelta + this.electronProps.radius);
        
        var electron = new createjs.Shape();
        electron.graphics.beginFill("Yellow").drawCircle(0, 0, 3); // electron radius
        electron.x =  this.electronProps.originX;           // initial x position
        electron.y =  this.electronProps.originY +radius;
        electron.on("tick",this.electronTick);  // add tick listener to electron, which is called by createjs tick event
        
        var v = electron.tickProps = {};
        v.originX     = this.electronProps.originX;
        v.originY     = this.electronProps.originY;
        v.angle       = Math.random()*this.electronProps.angleDelta + this.electronProps.angle;
        v.angleRandom = Math.random()*this.electronProps.angleRandomDelta + this.electronProps.angleRandom;
        v.angleChange = Math.random()*this.electronProps.angleChangeDelta + this.electronProps.angleChange;
        v.radius      = radius;
        return electron;
    };   
    
    p.electronTick = function () {
        this.x = this.tickProps.originX + 0.5 * this.tickProps.radius*Math.sin(this.tickProps.angle*this.tickProps.angleRandom);  // speed
        this.y = this.tickProps.originY + 1.0 * this.tickProps.radius*Math.cos(this.tickProps.angle*this.tickProps.angleRandom);
        this.tickProps.angle += this.tickProps.angleChange;
    };

    // add the above code as a backbone view class in our namespace
    OER.Views.Sandbox.CreateJS2 = Backbone.View.extend(p, s);    

})();
