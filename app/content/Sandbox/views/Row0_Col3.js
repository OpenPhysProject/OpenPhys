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
    
    p.template= JST['app/content/Sandbox/templates/Row0_Col3.ejs'];     // template used to create html for this view
    p.events = {};  // events, used by backbone to set up event handlers on html elements

    p.addButton = null;     // html add button element    
    p.removeButton = null;  // html remove button element    
    p.stage = null;         // easeljs stage
    p.width = null;         // stage width
    p.height = null;        // stage height
    p.electrons = null;     // array of easeljs shapes
    p.nucleus = null;       // easeljs shape
     
    p.tickerBind = null;    // reference to bound function, binding lets us call back in this scope
    p.addButtonBind = null; // reference to bound function
    p.removeButtonBind = null;  // reference to bound function
    p.nucleusClickBind = null;
    
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
        
        // setup reference to buttons and click listener
        var buttons = $(".lesson-content-button", this.$el);    // $ is jquery, this.$el is this views html as a jquery object
        this.addButton = buttons[0];
        this.removeButton = buttons[1];
        
        this.addButtonBind = this.handleAddButton.bind(this);     // create reference to bound function, binding makes a function be called in this scope
        this.addButton.addEventListener("click", this.addButtonBind); //
        
        this.removeButtonBind = this.handleRemoveButton.bind(this);     // create reference to bound function, binding makes a function be called in this scope
        this.removeButton.addEventListener("click", this.removeButtonBind); //

        // setup createjs stage and touch support
        var c = $(".lesson-content-canvas-sandbox", this.$el)[0];
        this.stage = new createjs.Stage(c);
        if (createjs.Touch.isSupported()) {
            createjs.Touch.enable(this.stage);
        } else {
            // note this has a drawback on the rare devices that support touch and mouse
            this.stage.enableMouseOver();   // enable mouse events needed for hand cursor
        }
        this.width = c.width;
        this.height = c.height;
        
       // draw Static circle (nucleus)
        this.nucleus = new createjs.Shape();
        this.nucleus.colorHSL = 0;
        this.nucleus.color = this.nucleus.graphics.beginFill(createjs.Graphics.getHSL(this.nucleus.colorHSL, 80, 50)).command;    // store off reference to color drawing command to make later changes
        this.nucleus.graphics.drawCircle(0, 0, 8);                              // draw circle
        this.nucleus.cache(-8, -8, 16, 16);                                     // cache image for quicker redraws
        this.nucleus.x =  this.electronProps.originX;                           // x position
        this.nucleus.y =  this.electronProps.originY;
        this.nucleus.cursor = "pointer";                                        // enable hand cursor over object
        this.nucleusClickBind = this.handleNucleusClick.bind(this);
        this.nucleus.addEventListener("click", this.nucleusClickBind);
        this.stage.addChild(this.nucleus);                                      // add this shape to the stage
        
        // draw circle (electron)
        this.electrons = [];    // create empty array
        this.handleAddButton();

        // set up createjs ticker to update stage
        createjs.Ticker.timingMode = createjs.Ticker.RAF;   // sets ticks to happen on browser request animation frame
        this.tickerBind = this.tick.bind(this);
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
     * called by OER.LessonBaseView
     * @param {type} options
     */
    p.remove = function(options) {
        this.addButton.removeEventListener("click", this.addButtonBind);
        this.removeButton.removeEventListener("click", this.removeButtonBind);
        this.nucleus.removeEventListener("click", this.nucleusClickBind);
        if (createjs.Touch.isSupported()) {createjs.Touch.disable(this.stage);}
        createjs.Ticker.removeEventListener("tick", this.tickerBind);

        Backbone.View.prototype.remove.call(this, options);
    };
    
    /**
     * click listener for add button
     */
    p.handleAddButton = function() {
        var e = this.drawElectron();
        this.stage.addChild(e); // add electron to stage
        this.electrons.push(e); // add electron to array
    };

    /**
     * click listener for add button
     */
    p.handleRemoveButton = function() {
        if (this.electrons.length){
            var e = this.electrons.pop();
            this.stage.removeChild(e); // remove electron from stage
        }
    };
    
    /**
     * click listener for nucleus shape
     */
    p.handleNucleusClick = function() {
        this.nucleus.colorHSL = this.nucleus.colorHSL + 20;
        this.nucleus.color.style = createjs.Graphics.getHSL(this.nucleus.colorHSL, 80, 50);    // set color
        this.nucleus.updateCache();
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
        electron.graphics.beginFill("Blue").drawCircle(0, 0, 5);    // electron radius
        electron.cache(-5, -5, 10, 10);                             // cache image for quicker redraws
        electron.x =  this.electronProps.originX;                   // initial x position
        electron.y =  this.electronProps.originY +radius;
        electron.on("tick",this.electronTick);                      // add tick listener to electron, which is called by createjs tick event
        
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
    
    // add the above code as a backbone view class in our namespace
    OER.Views.Sandbox.CreateJS = Backbone.View.extend(p, s);    

})();
