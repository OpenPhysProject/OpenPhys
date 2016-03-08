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
    p.template= JST['app/content/lesson1/templates/R3_Dalton.ejs'];     // template used to create html for this view
    p.events = {};  // events, used by backbone to set up event handlers on html elements
    //p.button = null;        // html button element    
    p.stage = null;         // easeljs stage
    p.width = null;         // stage width
    p.height = null;        // stage height
    // Easeljs shapes:
    p.electrons = null;     // array of easeljs shapes
    p.photonsource1 = null;  // easeljs shape
    p.photonsource2 = null;  // easeljs shape 
    p.photonsource3 = null;  // easeljs shape   
    p.target = null;        // target for x-rays
    // EaselJS bitmaps:
    p.background = null;    // background image
    p.tickerBind = null;    // reference to bound function, binding lets us call back in this scope
    p.buttonBind = null;    // reference to bound function
    
    p.photonProps1 = {sourceX: 200, sourceY: 370, source_colour: "rgba(0,  255,0,0.7)", colour: "rgba(0, 255,0,0.7)",  size: 20,scale: 0.991 };    
    p.photonProps2 = {sourceX: 400, sourceY: 370, source_colour: "rgba(255,  0,0,0.7)", colour: "rgba(255, 0,0,0.5)",  size: 9, scale: 0.991 }; 
    p.photonProps3 = {sourceX: 600, sourceY: 370, source_colour: "rgba(255,255,0,0.7)", colour: "rgba(255,255,0,0.7)", size: 5, scale: 0.991 };
     
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
        this.photonsource1 = this.drawSource(this.photonProps1);
        this.sourceBind = this.photonsource1Click.bind(this);     
        this.photonsource1.addEventListener("click", this.sourceBind);
        this.stage.addChild(this.photonsource1);  // add this shape to the stage
  
      // Draw Source 2 (clickable)
        this.photonsource2 = this.drawSource(this.photonProps2);
        this.sourceBind = this.photonsource2Click.bind(this);     
        this.photonsource2.addEventListener("click", this.sourceBind);
        this.stage.addChild(this.photonsource2);  // add this shape to the stage     
 
      // Draw Source 3 (clickable)
        this.photonsource3 = this.drawSource(this.photonProps3);
        this.sourceBind = this.photonsource3Click.bind(this);     
        this.photonsource3.addEventListener("click", this.sourceBind);
        this.stage.addChild(this.photonsource3);  // add this shape to the stage         
        
        // 
    // external file for background image
       // this.background = new createjs.Bitmap("/content/lesson6/assets/ComptonIncident.svg");
        //this.background.regX = this.background.image.width  *0.5;
        //this.background.regY = this.background.image.height *0.5;        
        //this.stage.addChild(this.background);
        
       // Text 
        this.txt = new createjs.Text("Click to make Dalton Little 'Ball Atoms'", "15pt Courier", "#FFF");
        this.txt.x = 30;  this.txt.y = 30;
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
        this.photonsource1Click();   // start with firing Click Events
        this.photonsource2Click();
        this.photonsource3Click();

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
        source.graphics.beginFill(Props.source_colour).drawRoundRect(-40, -30, 80, 60, 5);
        source.x =  Props.sourceX;  // x position
        source.y =  Props.sourceY;
        return source;        
    };
    
    /**
     * click listener 
     */
    p.photonsource1Click = function() {
        var i;
        for (i = 0; i < 1; i++)  {
            var e = this.drawElectron1();
            this.addParticle(e);
        }   
    };
    
    p.photonsource2Click = function() {
        var i;
        for (i = 0; i < 10; i++)  {
            var e = this.drawElectron2();
            this.addParticle(e);
        }    
    };
    
    p.photonsource3Click = function() {
        var i;
        for (i = 0; i < 50; i++)  {
            var e = this.drawElectron3();
            this.addParticle(e);
        }    
    };    
    
    
    p.addParticle = function(e) {
        this.stage.addChild(e);     // add particle to stage
        this.electrons.push(e);     // add electron to array
    };

    // Draw particle and add it to stage
    p.drawElectron1 = function () {
       var electron = this.drawElectronHelper(this.photonProps1);
       return electron;
    };   
   
    p.drawElectron2 = function () {
       var electron = this.drawElectronHelper(this.photonProps2);
       return electron;
    };
   
    p.drawElectron3 = function () {
       var electron = this.drawElectronHelper(this.photonProps3);
       return electron;
    };  
   
   p.drawElectronHelper = function(Props) {
        var electron = new createjs.Shape();
        electron.graphics.beginFill(Props.colour).drawCircle(0, 0, Props.size); // electron radius
        electron.on("tick",this.electronTick);  // add tick listener to electron, which is called by createjs tick event
        // Define parameters to be used for each tick
        var v = electron.tickProps = {};
        v.x   = Props.sourceX;  //v.x = 400*Math.random();
        v.y   = Props.sourceY;  //v.y = 200*Math.random();
        //v.scaleX = 2.0;
        v.xinc = 2*(Math.random()-0.5);
        //v.yinc = 2*(Math.random()-0.5); //* this.photon2Props.source_divergence;  // +ve or -ve amount of divergence
        v.yinc = -4.0*(Math.random());   // -ve is up       
        v.scale = Props.scale;
        return electron;
    };   
   
   // ============== EVOLUTION ================ //
    p.electronTick = function () {
        // particle moves
        if (this.tickProps.x > -10 && this.tickProps.x < 810 &&
            this.tickProps.y > -10 && this.tickProps.y < 410) {
            // update Props:
            this.tickProps.x += this.tickProps.xinc; // move right left
            this.tickProps.y += this.tickProps.yinc; // move up or down
            this.tickProps.yinc += 0.02 ;  // gravity 
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
    OER.Views.ElectronicStructureOfTheAtom.Dalton = Backbone.View.extend(p, s);    

})();
