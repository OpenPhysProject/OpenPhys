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
    p.template= JST['app/content/lesson1/templates/Row3_Col1.ejs'];     // template used to create html for this view
    p.events = {};  // events, used by backbone to set up event handlers on html elements
    //p.button = null;        // html button element    
    p.stage = null;         // easeljs stage
    p.width = null;         // stage width
    p.height = null;        // stage height
    // Easeljs shapes:
    p.electrons = null;     // array of easeljs shapes
    p.photonsource1 = null;  // easeljs shape
    p.photonsource2 = null;  // easeljs shape   
    p.target = null;        // target for x-rays
    // EaselJS bitmaps:
    p.background = null;    // background image
    
    p.tickerBind = null;    // reference to bound function, binding lets us call back in this scope
    p.buttonBind = null;    // reference to bound function
    
    p.photonProps = {
        sourceX: 200,   // near left
        sourceY: 100,  // middle
        source2X: 100,   
        source2Y: 100,  // middle
        //source_divergence: 0.25,
        source_colour: "darkgreen", colour: "green",
        source_colour2: "darkred", colour2: "red",
        size: 9
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
        
       //=============== STATIC CONTENT ====================//
        // Draw Source 1 (clickable)
        this.photonsource1 = new createjs.Shape();
        // drawRoundRect(x, y, width, height, radius)
        this.photonsource1.graphics.beginFill(this.photonProps.source_colour).drawRoundRect(-20, -20, 40, 40, 5);
        this.photonsource1.x =  this.photonProps.sourceX;  // x position
        this.photonsource1.y =  this.photonProps.sourceY;
        // create reference to bound function, binding makes a function be called in this scope
        this.sourceBind = this.photonsource1Click.bind(this);     
        this.photonsource1.addEventListener("click", this.sourceBind);
        this.stage.addChild(this.photonsource1);  // add this shape to the stage       
  
      // Draw Source 2 (clickable)
         this.photonsource2 = new createjs.Shape();
        // drawRoundRect(x, y, width, height, radius)
        this.photonsource2.graphics.beginFill(this.photonProps.source_colour2).drawRoundRect(-20, -20, 40, 40, 5);
        this.photonsource2.x = this.photonProps.source2X;  // x position
        this.photonsource2.y = this.photonProps.source2Y;
        // create reference to bound function, binding makes a function callable in this scope
        this.sourceBind = this.photonsource2Click.bind(this);     
        this.photonsource2.addEventListener("click", this.sourceBind);
        this.stage.addChild(this.photonsource2);  // add this shape to the stage 
         
        // 
    // external file for background image
       // this.background = new createjs.Bitmap("/content/lesson6/assets/ComptonIncident.svg");
        //this.background.regX = this.background.image.width  *0.5;
        //this.background.regY = this.background.image.height *0.5;        
        //this.stage.addChild(this.background);
        
       // Text 
        this.txt = new createjs.Text("Click to add Atoms", "16px Arial", "#FFF");
        this.txt.x = 10;  this.txt.y = 20;
        //this.txt.rotation = 20;  //txt.outline = true;
        this.stage.addChild(this.txt);
        
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
        
        // start with firing a Click Event
        this.photonsource1Click();
        this.photonsource2Click();

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
    
    /**
     * click listener 
     */
    p.photonsource1Click = function() {
        var i;
        for (i = 0; i < 10; i++)  {
            var e = this.drawElectron();
            this.stage.addChild(e); // add electron to stage
            this.electrons.push(e); // add electron to array
        }   
    };
    p.photonsource2Click = function() {
        var i;
        for (i = 0; i < 10; i++)  {
            var e = this.drawElectron2();
            this.stage.addChild(e); // add electron to stage
            this.electrons.push(e); // add electron to array
        }   
    };
    // PHOTON CODE *********************************************************************************
    // 
    //  var fillCommand = myGraphics.beginFill("red").command;
     // ... later, update the fill style/color:
     //fillCommand.style = "blue";
     // or change it to a bitmap fill:
     //fillCommand.bitmap(myImage);
  
    // Draw particle and add it to stage
    p.drawElectron = function() {
        var electron = new createjs.Shape();
        electron.graphics.beginFill(this.photonProps.colour).drawCircle(0, 0, this.photonProps.size); // electron radius
        electron.on("tick",this.electronTick);  // add tick listener to electron, which is called by createjs tick event
        // Define parameters to be used for each tick
        var v = electron.tickProps = {};
        v.x   = this.photonProps.sourceX;  //v.x = 400*Math.random();
        v.y   = this.photonProps.sourceY;  //v.y = 200*Math.random();
        //v.scaleX = 2.0;
        v.xinc = 2*(Math.random()-0.5);
        v.yinc = 2*(Math.random()-0.5); //* this.photonProps.source_divergence;  // +ve or -ve amount of divergence
        return electron;
    };
   
   p.drawElectron2 = function() {
        var electron = new createjs.Shape();
        electron.graphics.beginFill(this.photonProps.colour2).drawCircle(0, 0, this.photonProps.size); // electron radius
        electron.on("tick",this.electronTick);  // add tick listener to electron, which is called by createjs tick event
        // Define parameters to be used for each tick
        var v = electron.tickProps = {};
        v.x   = this.photonProps.source2X;  //v.x = 400*Math.random();
        v.y   = this.photonProps.source2Y;  //v.y = 200*Math.random();
        //v.scaleX = 2.0;
        v.xinc = 2*(Math.random()-0.5);
        v.yinc = 2*(Math.random()-0.5); //* this.photonProps.source_divergence;  // +ve or -ve amount of divergence
        return electron;
    };
   
   // ============== EVOLUTION ================ //
    p.electronTick = function () {
        // particle moves
        if (this.tickProps.x > -10 && this.tickProps.x < 410 &&
            this.tickProps.y > -10 && this.tickProps.y < 210) {
            this.tickProps.x += this.tickProps.xinc; // move right left
            this.tickProps.y += this.tickProps.yinc; // move up or down
            this.scaleX *= 0.991;   // size of the particles
            this.scaleY *= 0.991;   //        
        }
        else {
            // remove this particle from stage
            this.stage.removeChild(this);
        };
        this.x = this.tickProps.x;
        this.y = this.tickProps.y;
    };

    // add the above code as a backbone view class in our namespace
    OER.Views.ElectronicStructureOfTheAtom.Dalton = Backbone.View.extend(p, s);    

})();
