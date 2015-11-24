OER.Views = OER.Views || {};
OER.Views.ElectronicStructureOfTheAtom = OER.Views.ElectronicStructureOfTheAtom || {};

(function () {
    'use strict';
    
    var p = {};
    var s = {};
    
    p.template= JST['app/scripts/templates/RLO1/Row3_Col6.ejs'];

    p.events = {};

    p.stage = null;        // easeljs stage
    p.width = null;
    p.height = null;
    p.padding = 20;        // padding between objects and edge of canvas
 
    p.initialize = function (model) {
        if (model) { this.model = model; }
        //this.listenTo(this.model, 'change', this.render);
        this.render();
    };

    p.render= function () {
        if(this.model) {
            this.setElement(this.template(this.model.toJSON()));
        } else {
            this.setElement(this.template());
        }

        var c = $(".rlo-content-canvas", this.$el)[0];
        this.stage = new createjs.Stage(c);
        if (createjs.Touch.isSupported()) {createjs.Touch.enable(this.stage);}
        this.width = c.width;
        this.height = c.height;

        var slice = (this.width - this.padding*4)/ 3;   // 3 objects, 4 gutters //  200

        var g = this.graph.container = this.createGraph();
        g.y = this.padding;
        g.x = slice*2 + this.padding*3;    // 2 objects and 3 gutters over

        this.stage.addChild(g);  

        createjs.Ticker.timingMode = createjs.Ticker.RAF;
        createjs.Ticker.addEventListener("tick", this.tick.bind(this));
        
        this.formulaSetUp();
    };

    p.tick= function(event) {
        this.stage.update(event);
    };

    /*
     * clean up stage events and call super remove
     * @param {type} options
     */
    p.remove= function(options) {
        this.graphRemove();
        if (createjs.Touch.isSupported()) {createjs.Touch.disable(this.stage);}
        createjs.Ticker.removeEventListener("tick");

        Backbone.View.prototype.remove.call(this, options);
    };

// GRAPH *********************************************************************************
   p.graph = {
        container: null,    // container
        graphCurve: null,   // shape
        graphPoint: null,   // shape
        scale: 20,          // graph scale in pixels, for example a difference of 1 is represented by 20 pixels
        lineColor: "grey",
        curveColor: "yellow",
        dotColor: "DeepSkyBlue",
        dotSize: 5,
    };

    p.createGraph= function() {
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

        container.addEventListener("mousedown", this.handleGraphMouseDown.bind(this));
        container.addEventListener("mouseup", this.handleGraphMouseUp.bind(this));

        return container;
    };

    p.drawGraphCurve= function(margin, maxX) {
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
    };

    p.drawGraphPoint= function(margin) {
        var circle = new createjs.Shape();
        circle.graphics.beginFill(this.graph.dotColor).drawCircle(0, 0, this.graph.dotSize);
        var step = 4;   // replace with value from equation
        circle.x = step*margin+margin;  // step = (x - margin) / margin
        circle.y = this.equation(step)*margin+margin;

        return circle;
    };

    p.updateGraphPoint= function (x) {
        var scale = this.graph.scale;
        var step = (x - scale) / scale;
        var y = this.equation(step)*scale+scale;
        if (x > 200 || x < scale || y < scale || y > 200) {return;}
        this.graph.graphPoint.x = x;
        this.graph.graphPoint.y = this.equation(step)*scale+scale;
    };

    p.equation= function(x) {
        return 4 / x;  // OJR replace with proper forumla
    };

    p.handleGraphMouseDown= function(event) {
        if (!event.primary) { return; }
        this.updateGraphPoint(event.localX);
        this.graph.container.addEventListener("pressmove", this.handleGraphMouseMove.bind(this));
    };

    p.handleGraphMouseMove= function(event) {
        this.updateGraphPoint(event.localX);
    };

    p.handleGraphMouseUp= function(event) {
        if (!event.primary) { return; }
        this.graph.container.removeEventListener("pressmove");
    };

    p.graphRemove= function() {
        this.graph.container.removeEventListener("mousedown");
        this.graph.container.removeEventListener("mouseup");
        this.graph.container.removeEventListener("pressmove");
    };

// Formula *********************************************************************************8
    p.formula = {
        vOut: null,
        z: null,
        zOut: null,
        r: null,
        rOut: null,
    };
    /*
            function addInput(propName, elName) {
                    var el = elHash[propName] = document.querySelector(elName+"Out");
                    var slider = document.querySelector(elName);
                    slider.value = el.value = this[propName];
            }
     */
    p.formulaSetUp = function() {
        var f = this.formula;
        f.vOut = $("#vOut", this.$el)[0];
        f.z = $("#z", this.$el)[0];
        f.zOut = $("#zOut", this.$el)[0];
        f.zOut.innerHTML = f.z.value;
        f.r = $("#r", this.$el)[0];
        f.rOut = $("#rOut", this.$el)[0];
        f.rOut.innerHTML = f.r.value * 1.01;

        f.z.addEventListener("input",this.handleZSlider.bind(this));
        f.r.addEventListener("input",this.handleRSlider.bind(this));
        // input does not work in IE 10, needs change event
        // http://www.impressivewebs.com/onchange-vs-oninput-for-range-sliders/
        // http://stackoverflow.com/questions/18544890/onchange-event-on-input-type-range-is-not-triggering-in-firefox-while-dragging
    };

    p.handleZSlider = function(event) {
        this.formula.zOut.innerHTML = event.srcElement.value;
    };

    p.handleRSlider = function(event) {
        this.formula.rOut.innerHTML = 1.01 * event.srcElement.value;    // OJR fix length for 3 error
    };
    
    p.updateV = function() {
        // set value * z / r * 10 -11
    };

    OER.Views.ElectronicStructureOfTheAtom.NuclearPotential = Backbone.View.extend(p, s);

})();
