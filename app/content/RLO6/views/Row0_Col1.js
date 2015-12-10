/* OER is our project namespace, used to avoid collisions with other project and browser supported code
 * OER.Views is the scope we use for views to keep things organized
 * OER.Views.Sandbox is the scope for views for this content
 * the || {} is creating an empty object for this if it does not exist already
 */
OER.Views = OER.Views || {};    
OER.Views.Compton = OER.Views.Compton || {};

(function () {
    'use strict';
    
    var p = {};     // prototype for this class
    var s = {};     // static for this class
    p.template= JST['app/content/RLO6/templates/Row0_Col1.ejs'];     // template used to create html for this view
    p.events = {};  // events, used by backbone to set up event handlers on html elements
    p.button = null;        // html button element    
    p.stage = null;         // easeljs stage
    p.width = null;         // stage width
    p.height = null;        // stage height
    // Easeljs shapes:
    p.electrons = null;     // array of easeljs shapes
    p.photonsource = null;  // easeljs shape
    p.target = null;        // target for x-rays
    // EaselJS bitmaps:
    p.background = null;    // background image
    
    p.tickerBind = null;    // reference to bound function, binding lets us call back in this scope
    p.buttonBind = null;    // reference to bound function
    
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
        
        // set up reference to button and click listener
        this.button = $(".rlo-content-button", this.$el)[0];    // $ is jquery, this.$el is this views html as a jquery object
        this.buttonBind = this.handleButton.bind(this);     // create reference to bound function, binding makes a function be called in this scope
        this.button.addEventListener("click", this.buttonBind); //

        // set up createjs stage and touch support
        var c = $(".rlo-content-canvas-sandbox", this.$el)[0];
        this.stage = new createjs.Stage(c);
        if (createjs.Touch.isSupported()) {createjs.Touch.enable(this.stage);}
        this.width  = c.width;
        this.height = c.height;
        
       //=============== STATIC CONTENT ====================//
        // Draw Photon source
        this.photonsource = new createjs.Shape();
        this.photonsource.graphics.beginFill("Red").drawCircle(0, 0, 10);
        this.photonsource.x =  this.electronProps.sourceX; // x position
        this.photonsource.y =  this.electronProps.sourceY;
        // try
        this.sourceBind = this.photonsourceClick.bind(this);     // create reference to bound function, binding makes a function be called in this scope
        this.photonsource.addEventListener("click", this.sourceBind);
        
        this.stage.addChild(this.photonsource);  // add this shape to the stage       
               
        // external file for background image
        this.background = new createjs.Bitmap("/content/RLO6/assets/ComptonIncident.svg");
        this.background.regX = this.background.image.width *0.5;
        this.background.regY = this.background.image.height *0.5;        
        //this.stage.addChild(this.background);
        //===================================================//
        
        // draw circle (electron)
        this.electrons = [];    // create empty array
        this.handleButton();

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
     * called by OER.RLOBaseView
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
        this.stage.addChild(e); // add electron to stage
        this.electrons.push(e); // add electron to array
    };

    p.photonsourceClick = function() {
        var e = this.drawElectron();
        this.stage.addChild(e); // add electron to stage
        this.electrons.push(e); // add electron to array
    };


// PHOTON CODE *********************************************************************************
// 
//  var fillCommand = myGraphics.beginFill("red").command;
 // ... later, update the fill style/color:
 //fillCommand.style = "blue";
 // or change it to a bitmap fill:
 //fillCommand.bitmap(myImage);
  
    p.electronProps = {
        sourceX: 20, // near left
        sourceY: 100,  // middle
    };
    
    // draw particle and add it to stage
    p.drawElectron = function() {
        var electron = new createjs.Shape();
        electron.graphics.beginFill("Red").drawCircle(0, 0, 6); // electron radius
        electron.x =  this.electronProps.sourceX;           // initial x position
        electron.y =  this.electronProps.sourceY;
        electron.on("tick",this.electronTick);  // add tick listener to electron, which is called by createjs tick event
        
        // Define parameters to be used for each tick
        var v = electron.tickProps = {};
        v.x   = this.electronProps.sourceX;
        v.y   = this.electronProps.sourceY;
        //v.scaleX = 2.0;
        v.yinc = (Math.random()-0.5)* 0.5; //1.5;   // +ve or -ve amount of divergence
        return electron;
    };
   
   // ============== EVOLUTION ================ //
    p.electronTick = function () {
        // photon moves
        if (this.tickProps.x < 380+40) {
            this.tickProps.x += 2; // move right should reduce to keep velocity constant
            this.tickProps.y += this.tickProps.yinc; // move up or down
            this.scaleX *= 1.0;
            this.scaleY *= 1.0;           
        };
        //var angle= this.tickProps.angle;
        this.x = this.tickProps.x;
        this.y = this.tickProps.y; //+ this.tickProps.radius*Math.cos(angle);
    };

    // add the above code as a backbone view class in our namespace
    OER.Views.Compton.Particles = Backbone.View.extend(p, s);    

})();
