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
    p.circle = null;        // easeljs shape
 
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
        var c = $(".rlo-content-canvas", this.$el)[0];
        this.stage = new createjs.Stage(c);
        if (createjs.Touch.isSupported()) {createjs.Touch.enable(this.stage);}
        this.width = c.width;
        this.height = c.height;

        // draw something and add it to the stage
        this.circle = new createjs.Shape();
        this.circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
        this.circle.x = 100;
        this.circle.y = 100;
        this.stage.addChild(this.circle);  

        // setup createjs ticker to update stage
        createjs.Ticker.timingMode = createjs.Ticker.RAF;
        createjs.Ticker.addEventListener("tick", this.tick.bind(this));
    };

    /**
     * createjs tick event, that is run multiple frames per second
     * @param {type} event
     */
    p.tick = function(event) {
        // if not paused, animate circle
        if (!createjs.Ticker.getPaused()) {
            this.circle.x += 5;
            if (this.circle.x > this.width) { this.circle.x = 0; }
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
        this.button.value = paused ? "unpause" : "pause";
    };

    OER.Views.Sandbox.CreateJS = Backbone.View.extend(p, s);

})();
