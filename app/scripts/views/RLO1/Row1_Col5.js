OER.Views = OER.Views || {};
OER.Views.ElectronicStructureOfTheAtom = OER.Views.ElectronicStructureOfTheAtom || {};

(function () {
    'use strict';

    OER.Views.ElectronicStructureOfTheAtom.NuclearPotential = Backbone.View.extend({

        template: JST['app/scripts/templates/RLO1/Row1_Col5.ejs'],

        events: {},
        
        stage: null,        // easeljs stage
        graph: null,        // container
        graphCurve: null,   // shape
        graphPoint: null,   // shape

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
            
            this.graph = this.createGraph();
            
            this.stage.addChild(this.graph);  

            createjs.Ticker.timingMode = createjs.Ticker.RAF;
            createjs.Ticker.addEventListener("tick", this.tick.bind(this));
        },
        
        createGraph: function() {
            var STROKE_COLOR = 'grey';
            var margin = 20;
            var container = new createjs.Container();
            
            var graph = new createjs.Shape();
            graph.graphics.beginStroke(STROKE_COLOR).moveTo(margin, 0).lineTo(margin, 200).endStroke(); // y axis
            graph.graphics.beginStroke(STROKE_COLOR).moveTo(0, margin).lineTo(200, margin).endStroke(); // x axis
            
            // draw hint lines
            var hintLines = new createjs.Shape();
            for(var i = margin*2; i < 200; i += margin) {
                hintLines.graphics.beginStroke("grey").moveTo(margin, i).lineTo(200, i).endStroke(); // y axis
            }
            
            this.graphCurve = this.drawGraphCurve(margin, 200);
            this.graphPoint = this.drawGraphPoint(margin);

            container.addChild(graph, hintLines, this.graphCurve, this.graphPoint);
            
            return container;
        },
        
        drawGraphCurve: function(margin, maxX) {
            var curve = new createjs.Shape();
            var iteration = 1;
            var x = margin + iteration;
            var y = maxX + 1;
            var step = 0;
            
            // skip values that are outside our drawing range
            for ( ; y > maxX ; x += iteration ) {
                step = (x - margin) / margin;
                y = this.equation(step)*margin+margin;
            }
            curve.graphics.beginStroke("yellow").moveTo(x, y);
            
            for( ; x <= maxX; x += iteration) {
                step = (x - margin) / margin;
                y = this.equation(step)*margin+margin;
                curve.graphics.lineTo(x, y);
            }
            
            curve.graphics.endStroke();
            
            return curve;
        },
        
        drawGraphPoint: function(margin) {
            var circle = new createjs.Shape();
            circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 5);
            var step = 4;   // replace with value from equation
            circle.x = step*margin+margin;  // step = (x - margin) / margin
            circle.y = this.equation(step)*margin+margin;
            
            return circle;
        },
        
        equation: function(x) {
            return 4 / x;  // OJR replace with proper forumla
        },
        
        tick: function(event) {
            this.stage.update(event);
        }
        
        // TODO clean up stage

    });

})();
