OER.Views = OER.Views || {};
OER.Views.ElectronicStructureOfTheAtom = OER.Views.ElectronicStructureOfTheAtom || {};

(function () {
    'use strict';

    OER.Views.ElectronicStructureOfTheAtom.NuclearPotential = Backbone.View.extend({

        template: JST['app/scripts/templates/RLO1/Row1_Col5.ejs'],

        events: {},
        
        stage: null,

        initialize: function (model) {
            if (model) { this.model = model; }
            //this.listenTo(this.model, 'change', this.render);
            this.render();
        },

        render: function () {
            if(this.model) {
                this.setElement(this.template(this.model.toJSON()));
            } else {
                this.setElement(this.template());
            }
            
            var c = $(".rlo-content-canvas", this.$el)[0];
            this.stage = new createjs.Stage(c);
            
            var circle = new createjs.Shape();
            circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
            circle.x = 100;
            circle.y = 100;
            this.stage.addChild(circle);

            createjs.Ticker.timingMode = createjs.Ticker.RAF;
            createjs.Ticker.addEventListener("tick", this.tick.bind(this));
        },
        
        tick: function(event) {
            
            this.stage.update(event);
        }
        
        // TODO clean up stage

    });

})();
