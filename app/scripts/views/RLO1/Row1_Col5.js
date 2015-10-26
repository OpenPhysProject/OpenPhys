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
            
            this.createGraph();

            createjs.Ticker.timingMode = createjs.Ticker.RAF;
            createjs.Ticker.addEventListener("tick", this.tick.bind(this));
        },
        
        createGraph: function() {
            var STROKE_COLOR = 'red';
            var FILL_COLOR = 'blue';
            var margin = 20;
            var container = new createjs.Container();
            
            var graph = new createjs.Shape();
            graph.graphics.beginStroke(STROKE_COLOR).moveTo(margin, 0).lineTo(margin, 200).endStroke(); // y axis
            graph.graphics.beginStroke(STROKE_COLOR).moveTo(0, margin).lineTo(200, margin).endStroke(); // x axis
            
            // draw hint lines?
            var hintLines = new createjs.Shape();
            for(var i = margin*2; i < 200; ) {
                hintLines.graphics.beginStroke("grey").moveTo(margin, i).lineTo(200, i).endStroke(); // y axis
                i = i + 20;
            }
            
            // draw curve
            var curve = new createjs.Shape();
            curve.graphics.beginStroke("yellow").moveTo(margin, 200).quadraticCurveTo(margin, margin, 200, margin).endStroke();
            
            // draw point
            var circle = new createjs.Shape();
            circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 5);
            circle.x = 40;
            circle.y = 40;

            container.addChild(graph, hintLines, curve, circle);
            this.stage.addChild(container);  
        },
        
        tick: function(event) {
            
            this.stage.update(event);
        }
        
        // TODO clean up stage

    });

})();
