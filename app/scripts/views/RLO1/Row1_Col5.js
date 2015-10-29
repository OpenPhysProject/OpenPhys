OER.Views = OER.Views || {};
OER.Views.ElectronicStructureOfTheAtom = OER.Views.ElectronicStructureOfTheAtom || {};

(function () {
    'use strict';

    OER.Views.ElectronicStructureOfTheAtom.NuclearPotential = Backbone.View.extend({

        template: JST['app/scripts/templates/RLO1/Row1_Col5.ejs'],

        events: {},
        
        stage: null,        // easeljs stage
        width: null,
        height: null,
        padding: 20,        // padding between objects and edge of canvas
        graph: {
            container: null,    // container
            graphCurve: null,   // shape
            graphPoint: null,   // shape
            scale: 20,          // graph scale in pixels, for example a difference of 1 is represented by 20 pixels
            lineColor: "grey",
            curveColor: "yellow",
            dotColor: "DeepSkyBlue",
            dotSize: 5,
            targetPoint: null,  // creatjs Point
        },

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
            createjs.Touch.enable(this.stage);
            this.width = c.width;
            this.height = c.height;
            
            var slice = (this.width - this.padding*4)/ 3;   // 3 objects, 4 gutters
            
            var g = this.graph.container = this.createGraph();
            g.y = this.padding;
            g.x = slice*2 + this.padding*3;    // 2 objects and 3 gutters over
            g.addEventListener("mousedown", this.handleGraphMouseDown.bind(this));
            g.addEventListener("mouseup", this.handleGraphMouseUp.bind(this));
        
            this.stage.addChild(g);  

            createjs.Ticker.timingMode = createjs.Ticker.RAF;
            createjs.Ticker.addEventListener("tick", this.tick.bind(this));
        },
        
        tick: function(event) {
            this.stage.update(event);
        },
        
    // GRAPH *********************************************************************************8
        createGraph: function() {
            var margin = this.graph.scale;
            var container = new createjs.Container();
            
            var graph = new createjs.Shape();
            graph.graphics.beginStroke(this.graph.lineColor).moveTo(margin, 0).lineTo(margin, 200).endStroke(); // y axis
            graph.graphics.beginStroke(this.graph.lineColor).moveTo(0, margin).lineTo(200, margin).endStroke(); // x axis
            
            // draw hint lines
            var hintLines = new createjs.Shape();
            for(var i = margin*2; i < 200; i += margin) {
                hintLines.graphics.beginStroke(this.graph.lineColor).moveTo(margin, i).lineTo(200, i).endStroke(); // y axis
            }
            
            this.graph.graphCurve = this.drawGraphCurve(margin, 200);
            this.graph.graphPoint = this.drawGraphPoint(margin);

            container.addChild(graph, hintLines, this.graph.graphCurve, this.graph.graphPoint);
            
            var hitArea = new createjs.Shape();
            hitArea.graphics.beginFill(this.graph.lineColor).drawRect(0, 0, 200, 200);
            container.hitArea = hitArea;
            
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
            curve.graphics.setStrokeStyle(2,"round", "bevel").beginStroke(this.graph.curveColor).moveTo(x, y);
            
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
            circle.graphics.beginFill(this.graph.dotColor).drawCircle(0, 0, this.graph.dotSize);
            var step = 4;   // replace with value from equation
            circle.x = step*margin+margin;  // step = (x - margin) / margin
            circle.y = this.equation(step)*margin+margin;
            
            return circle;
        },
        
        updateGraphPoint: function (x) {
            var scale = this.graph.scale;
            var step = (x - scale) / scale;
            var y = this.equation(step)*scale+scale;
            if (x > 200 || x < scale || y < scale || y > 200) {return;}
            this.graph.graphPoint.x = x;
            this.graph.graphPoint.y = this.equation(step)*scale+scale;
        },
        
        equation: function(x) {
            return 4 / x;  // OJR replace with proper forumla
        },
        
        handleGraphMouseDown: function(event) {
            if (!event.primary) { return; }
            this.graph.targetPoint = new createjs.Point(event.localX, event.localY);
            this.updateGraphPoint(event.localX);
            this.graph.container.addEventListener("pressmove", this.handleGraphMouseMove.bind(this));
        },
        
        handleGraphMouseMove: function(event) {
            this.updateGraphPoint(event.localX);
        },
        
        handleGraphMouseUp: function(event) {
            if (!event.primary) { return; }
            this.graph.container.removeEventListener("pressmove");
        },
        
        
        /*
        // TODO clean up stage
        createjs.Touch.disable(stage);
        createjs.Ticker.removeEventListener("tick");
        */

    });

})();
