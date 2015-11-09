OER.Views = OER.Views || {};
OER.Views.Instructions = OER.Views.Instructions || {};

(function () {
    'use strict';

    OER.Views.Instructions.Animation = Backbone.View.extend({

        template: JST['app/scripts/templates/Intro/Row1_Col0.ejs'],

        events: {},
        
        loader: null,
        stage: null,
        images: {},
        //ss: {},
        
        initialize: function (model) {
            if (model) { this.model = model; }
            //this.listenTo(this.model, 'change', this.render);
            this.render();
            
            ss = ss || {};  // OJR this has to change
            
            this.loader = new createjs.LoadQueue(false, "/scripts/assets/RLO7/");
            this.loader.addEventListener("fileload", this.handleFileLoad.bind(this));
            this.loader.addEventListener("complete", this.handleComplete.bind(this));
            this.loader.loadFile({src:"images/pair production main_atlas_.json", type:"spritesheet", id:"pair production main_atlas_"}, true);
            this.loader.loadManifest(lib.properties.manifest);   // OJR this has to change
        },

        render: function () {
            if(this.model) {
                this.setElement(this.template(this.model.toJSON()));
            } else {
                this.setElement(this.template());
            }
        },
        
        handleFileLoad: function(evt) {
            if (evt.item.type == "image") { this.images[evt.item.id] = evt.result; }
        },

        handleComplete: function(evt) {
            var queue = evt.target;
            ss["pair production main_atlas_"] = queue.getResult("pair production main_atlas_");
            var exportRoot = new lib.pairproductionmain();

            var canvas = $(".rlo-content-canvas", this.$el)[0];
            this.stage = new createjs.Stage(canvas);
            this.stage.addChild(exportRoot);
            this.stage.update();

            createjs.Ticker.setFPS(lib.properties.fps);
            createjs.Ticker.addEventListener("tick", this.stage);
        },


        
    });

})();
