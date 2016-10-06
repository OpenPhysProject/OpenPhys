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
    p.template= JST['app/content/lesson6/templates/Row1_Col1.ejs'];     // template used to create html for this view
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
 
    p.photonProps = {
        sourceX: 40,   // near left
        sourceY: 100,  // middle
        source_divergence: 0.25,
        scatter_divergence: 1.00,      
        source_colour: "darkblue",
        colour: "blue",
        size: 2
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
        this.renderSlider();
    };

    p.renderSlider = function() {
        // set up the slider for the scatterer position
       this.slideX = $(".lesson6-scatterY", this.$el)[0];   // slider
       this.dispX  = $(".lesson6-disp-scatterY", this.$el)[0];      // display of vaue
       this.dispX.innerHTML= this.slideX.value + ' ';   
       //
       this.slideXBind = this.handleSlideX.bind(this);
       this.slideX.addEventListener("change", this.slideXBind);   // NOT REMOVED ANYWHERE YET.
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
        this.button = $(".lesson-content-button", this.$el)[0];    // $ is jquery, this.$el is this views html as a jquery object
        this.buttonBind = this.handleButton.bind(this);     // create reference to bound function, binding makes a function be called in this scope
        this.button.addEventListener("click", this.buttonBind); //

        // set up createjs stage and touch support
        var c = $(".lesson-content-canvas-photon", this.$el)[0];
        this.stage = new createjs.Stage(c);
        if (createjs.Touch.isSupported()) {createjs.Touch.enable(this.stage);}
        this.width  = c.width;
        this.height = c.height;
        
       //=============== STATIC CONTENT ====================//
       // Photon source (clickable)
        this.photonsource = new createjs.Shape();
        this.photonsource.graphics.beginFill(this.photonProps.source_colour).drawRoundRect(-20, -40, 20, 80, 5);        
        
        this.photonsource.x =  this.photonProps.sourceX; // x position
        this.photonsource.y =  this.photonProps.sourceY;
        // create reference to bound function, binding makes a function be called in this scope
        this.sourceBind = this.photonsourceClick.bind(this);     
        this.photonsource.addEventListener("click", this.sourceBind);
        this.stage.addChild(this.photonsource);  // add this shape to the stage      

       // Text 
        this.txt = new createjs.Text("X-Ray \nSource", "16px Arial", "#FFF");
        this.txt.x = 10;  this.txt.y = 20;
        //this.txt.rotation = 20;  //txt.outline = true;
        this.stage.addChild(this.txt);
        
        // Text 
        this.txt2 = new createjs.Text("Scatterer", "16px Arial", "#FFF");
        this.txt2.x = 100;  this.txt2.y = 20;
        //this.txt.rotation = 20;  //txt.outline = true;
        this.stage.addChild(this.txt2);       
        
        // Horizontal and angled dashed line
        this.line1 = new createjs.Shape();
        this.line1.graphics.setStrokeDash([10, 5], 0).setStrokeStyle(1);
        this.line1.graphics.beginStroke("grey").moveTo(50,100).lineTo(600,100).endStroke(); // horizontal
        this.line1.graphics.beginStroke("grey").moveTo(50,100).lineTo(600, 30).endStroke(); // angled  
        this.line1.graphics.beginStroke("grey").moveTo(50,100).lineTo(600,170).endStroke(); // angled        
        this.stage.addChild(this.line1);

        // Draw target to 'scatter' the photons
        this.target = new createjs.Shape();
        this.target.graphics.beginFill("Pink").drawEllipse(0, -30, 10,60);
        this.target.x =  this.photonProps.sourceX+90; // x position
        this.target.y =  this.photonProps.sourceY;
        //this.target.rotation = 45;
        this.stage.addChild(this.target);  // add this shape to the stage       
        
        // external file for background image
        this.background = new createjs.Bitmap("/content/lesson6/assets/ComptonIncident.svg");
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

     /* clean up stage events and call super remove
     * called by OER.LessonBaseView
     * @param {type} options
     */
    p.remove = function(options) {
        this.button.removeEventListener("click", this.buttonBind);
        if (createjs.Touch.isSupported()) {createjs.Touch.disable(this.stage);}
        createjs.Ticker.removeEventListener("tick", this.tickerBind);
        Backbone.View.prototype.remove.call(this, options);
    };
    
    /** click listener for button  */
    p.handleButton = function() {
        var e = this.drawElectron();
        this.stage.addChild(e); // add electron to stage
        this.electrons.push(e); // add electron to array
    };

    p.photonsourceClick = function() {
        var i;
        for (i = 0; i < 20; i++)  {
            var e = this.drawElectron();
            this.stage.addChild(e); // add electron to stage
            this.electrons.push(e); // add electron to array
        }
    };    
    
    /* slider to control scatterer */
    p.handleSlideX = function () {
        this.dispX.innerHTML= this.slideX.value + ' pixels';
        this.target.x       = this.slideX.value;  // move the displayed object
    };

// PHOTON CODE *********************************************************************************
// 
//  var fillCommand = myGraphics.beginFill("red").command;
 // ... later, update the fill style/color:
 //fillCommand.style = "blue";
 // or change it to a bitmap fill:
 //fillCommand.bitmap(myImage);
 
    
    // draw particle and add it to stage
    p.drawElectron = function() {
        var electron = new createjs.Shape();
        electron.graphics.beginFill(this.photonProps.colour).drawCircle(0, 0, this.photonProps.size); // electron radius
        electron.x =  this.photonProps.sourceX;           // initial x position
        electron.y =  this.photonProps.sourceY;
        electron.on("tick",this.electronTick);  // add tick listener to electron, which is called by createjs tick event
        
        // Define parameters to be used for each tick
        var v = electron.tickProps = {};
        v.x      = this.photonProps.sourceX;
        v.y      = this.photonProps.sourceY
        v.targetX = this.target.x;
        //v.scaleX = 2.0;
        v.yinc1   = 2*(Math.random()-0.5)* this.photonProps.source_divergence;    // +ve or -ve amount of scattering
        v.yinc2   = 2*(Math.random()-0.5)* this.photonProps.scatter_divergence;    // +ve or -ve amount of scattering       
        return electron;
    };
   
   // ============== EVOLUTION ================ //
    p.electronTick = function () {
        // Electron moves
        if (this.tickProps.x < this.tickProps.targetX) { 
            var velocity2 = 4.0;  //   v^2 = vx^2 + vy^2  velocity is a vector
            var vx = Math.sqrt(velocity2 - this.tickProps.yinc1*this.tickProps.yinc1)
            this.tickProps.x += vx; // move right reduce to keep velocity constant 
            this.tickProps.y += this.tickProps.yinc1; // move up or down
            this.scaleX = 1.0;
            this.scaleY = 1.0;           
        }
        else if (this.tickProps.x < 600+40) {
            var velocity2 = 4.0;  //   v^2 = vx^2 + vy^2  velocity is a vector
            var vx = Math.sqrt(velocity2 - this.tickProps.yinc2*this.tickProps.yinc2)
            this.tickProps.x += vx; // move right reduce to keep velocity constant 
            this.tickProps.y += this.tickProps.yinc2; // move up or down        
            
            //this.tickProps.x += 2*0.7; // move right should reduce to keep velocity constant
            //this.tickProps.y += this.tickProps.yinc2; // move up or down
            //this.scaleX *= 1.0 - 0.01;
            //this.scaleY *= 1.0 - 0.01;           
        };
        //var angle= this.tickProps.angle;
        this.x = this.tickProps.x;
        this.y = this.tickProps.y; //+ this.tickProps.radius*Math.cos(angle);
    };

        
//=========================================================================//
    // add the above code as a backbone view class in our namespace
    OER.Views.Compton.Incident = Backbone.View.extend(p, s);    

})();
