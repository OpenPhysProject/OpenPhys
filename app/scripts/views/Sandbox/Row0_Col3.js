OER.Views = OER.Views || {};
OER.Views.Sandbox = OER.Views.Sandbox || {};

(function () {
    'use strict';
    
    var p = {};
    var s = {};
    
    p.template= JST['app/scripts/templates/Sandbox/Row0_Col3.ejs'];
    p.events = {};

    p.button = null;        
    p.stage = null;        // easeljs stage
    p.width = null;
    p.height = null;
    p.electrons = null;    // array of easeljs shapes
    p.nucleus = null;
     
    p.tickerBind = null;
    p.buttonBind = null;
    
    /**
     * backbone initialize function, called on creation 
     * @param {type} model
     */
    p.initialize = function (model) {
        if (model) { this.model = model; }
        //this.listenTo(this.model, 'change', this.render);
        this.render();
    };

    /**
     * backbone render function, which builds html from template
     */
    p.render = function () {
        if(this.model) {
            this.setElement(this.template(this.model.toJSON()));
        } else {
            this.setElement(this.template());
        }
        
        // setup reference to button and click listener
        this.button = $(".rlo-content-button", this.$el)[0];
        this.buttonBind = this.handleButton.bind(this);
        this.button.addEventListener("click", this.buttonBind);

        // setup createjs stage and touch support
        var c = $(".rlo-content-canvas-sandbox", this.$el)[0];
        this.stage = new createjs.Stage(c);
        if (createjs.Touch.isSupported()) {createjs.Touch.enable(this.stage);}
        this.width = c.width;
        this.height = c.height;
        
       // draw Static circle (nucleus)
        this.nucleus = new createjs.Shape();
        this.nucleus.graphics.beginFill("Red").drawCircle(0, 0, 8);
        this.nucleus.x =  this.electronProps.originX; // x position
        this.nucleus.y =  this.electronProps.originY;
        this.stage.addChild(this.nucleus);
        
        // draw circle (electron)
        this.electrons = [];
        this.handleButton();

        // set up createjs ticker to update stage
        createjs.Ticker.timingMode = createjs.Ticker.RAF;
        this.tickerBind = this.tick.bind(this);
        createjs.Ticker.addEventListener("tick", this.tickerBind);
    };
    
    /**
     * createjs tick event, that is run multiple frames per second
     * @param {type} event
     */
    p.tick = function(event) {
        
        // update the stage
        this.stage.update(event);
    };

    /*
     * clean up stage events and call super remove
     * @param {type} options
     */
    p.remove = function(options) {
        this.button.removeEventListener("click");
        if (createjs.Touch.isSupported()) {createjs.Touch.disable(this.stage);}
        createjs.Ticker.removeEventListener("tick", this.tickerBind);

        Backbone.View.prototype.remove.call(this, options);
    };
    
    /**
     * click listener for button
     */
    p.handleButton = function() {
        var e = this.drawElectron();
        this.stage.addChild(e);
        this.electrons.push(e);
    };

// ELECTRON CODE *********************************************************************************
    // Math for orbiting 
    p.electronProps = {
        angle: 0.0,
        angleDelta: 3,
        angleRandom: 1,
        angleRandomDelta: 0.1,
        angleChange: 0.05,
        angleChangeDelta: 0.02,
        originX: 100,
        originY: 100,
        radius: 40, 
        radiusDelta: 20,
    };
    
    // draw electron and add it to stage
    p.drawElectron = function() {
        var radius = Math.round(Math.random()*this.electronProps.radiusDelta + this.electronProps.radius);
        
        var electron = new createjs.Shape();
        electron.graphics.beginFill("Blue").drawCircle(0, 0, 5); // electron radius
        electron.x =  this.electronProps.originX;           // initial x position
        electron.y =  this.electronProps.originY +radius;
        electron.on("tick",this.electronTick);
        
        var v = electron.tickProps = {};
        v.originX = this.electronProps.originX;
        v.originY = this.electronProps.originY;
        v.angle = Math.random()*this.electronProps.angleDelta + this.electronProps.angle;
        v.angleRandom = Math.random()*this.electronProps.angleRandomDelta + this.electronProps.angleRandom;
        v.angleChange = Math.random()*this.electronProps.angleChangeDelta + this.electronProps.angleChange;
        v.radius = radius;
        
        return electron;
    };
    
    p.electronTick = function () {
        this.x = this.tickProps.originX + this.tickProps.radius*Math.sin(this.tickProps.angle*this.tickProps.angleRandom);  // speed
        this.y = this.tickProps.originY + this.tickProps.radius*Math.cos(this.tickProps.angle*this.tickProps.angleRandom);
        this.tickProps.angle += this.tickProps.angleChange;
    };

    OER.Views.Sandbox.CreateJS = Backbone.View.extend(p, s);

})();
