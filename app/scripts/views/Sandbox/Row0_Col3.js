OER.Views = OER.Views || {};
OER.Views.Sandbox = OER.Views.Sandbox || {};

(function () {
    'use strict';
    
    var p = {};
    var s = {};
    // Math for orbiting 
    var angle = 0.0;
    var originX = 100;
    var originY = 100;
    var radius = 40, radius2 = 60;
    var i;
    
    p.template= JST['app/scripts/templates/Sandbox/Row0_Col3.ejs'];
    p.events = {};

    p.button = null;        
    p.stage = null;        // easeljs stage
    p.width = null;
    p.height = null;
    p.electron = null;        // easeljs shape
    p.electron2 = null;        // easeljs shape    
    p.nucleus = null;
     
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
        this.button.addEventListener("click", this.togglePause.bind(this));

        // setup createjs stage and touch support
        var c = $(".rlo-content-canvas-sandbox", this.$el)[0];
        this.stage = new createjs.Stage(c);
        if (createjs.Touch.isSupported()) {createjs.Touch.enable(this.stage);}
        this.width = c.width;
        this.height = c.height;

       // draw Static circle (nucleus)
        this.nucleus = new createjs.Shape();
        this.nucleus.graphics.beginFill("Red").drawCircle(0, 0, 8);
        this.nucleus.x =  originX; // x position
        this.nucleus.y =  originY;
        this.stage.addChild(this.nucleus);
        
        // draw circle and add it to the stage
        this.electron = new createjs.Shape();
        this.electron.graphics.beginFill("Blue").drawCircle(0, 0, 5); // electron radius
        this.electron.x =  originX;           // initial x position
        this.electron.y =  originY +radius;
        this.stage.addChild(this.electron); 
        
          // draw 2nd electron and add it to the stage
        this.electron2 = new createjs.Shape();
        this.electron2.graphics.beginFill("Blue").drawCircle(0, 0, 5); // electron radius
        this.electron2.x =  originX;           // initial x position
        this.electron2.y =  originY + radius2;
        this.stage.addChild(this.electron2); 
        
        // set up createjs ticker to update stage
        createjs.Ticker.timingMode = createjs.Ticker.RAF;
        createjs.Ticker.addEventListener("tick", this.tick.bind(this));
    };

    /**
     * createjs tick event, that is run multiple frames per second
     * @param {type} event
     */
    p.tick = function(event) {
        // if not paused, animate electron
        if (!createjs.Ticker.getPaused()) {
            // Increment Position
            this.electron.x = originX + radius*Math.sin(angle*1.1);  // speed
            this.electron.y = originY + radius*Math.cos(angle*1.1);
            this.electron2.x = originX + radius2*Math.sin(angle);  // speed
            this.electron2.y = originY + radius2*Math.cos(angle);           
            angle += 0.06;
            
           // if (this.electron.x > this.width+50) 
           //     { this.electron.x = -30; 
           //       this.electron.y = 20 + 100*Math.random(); // random vertical position
           //     }
        }
            
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
        createjs.Ticker.removeEventListener("tick");

        Backbone.View.prototype.remove.call(this, options);
    };
    
    /**
     * click listener for button, sets animation to paused or running
     */
    p.togglePause = function() {
        var paused = !createjs.Ticker.getPaused();
        createjs.Ticker.setPaused(paused);
        this.button.value = paused ? "Resume" : "Pause";
    };

    OER.Views.Sandbox.CreateJS = Backbone.View.extend(p, s);

})();
