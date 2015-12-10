OER.Views = OER.Views || {};
OER.Views.Pair = OER.Views.Pair || {};

(function () {
    'use strict';

    OER.Views.Pair.Anim = Backbone.View.extend({

        template: JST['app/content/RLO7/templates/Row1_Col1.ejs'],

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
            
            this.loader = new createjs.LoadQueue(false, "/content/RLO7/assets/animation/");
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
