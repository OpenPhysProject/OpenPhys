(function (scope) {
    "use strict";
    
    var Application = function () {
        this.init();
    };
    var p = Application.prototype;
    
    p.Models = {};
    p.Collections = {};
    p.Views = {};
    p.Routers = {};
    
    p.homeView = null;
    p.RLOView = null;
    p.loader = null;
    
    p.RLOs = null;
    
    p.init = function () {
        this.loader = new scope.Loader();
        this.loader.hide();
        this.homeView = $(".RLOList");
        
        this.loadData();
        this.createTileView();
        
        // todo start preloading assets with PreloadJS
        // todo setup router and route handling
        this.showHomeView(); // OJR when route handling is in, this may need to route to different RLO views instead
    };
    
    p.loadData = function () {
        // todo load real data
        
        //placeholder data
        this.RLOs = new scope.Collections.RLOCollection();
        for (var i = 0; i < 12; i++) {
            var m = new scope.Models.RLOModel({"title":"title " + i});
            this.RLOs.add(m);
        }
    };
    
    p.createTileView = function() {
        var v;
        for (var i = 0, l = this.RLOs.length; i < l; i++ ) {
            v = new scope.Views.RLOTileView({model:this.RLOs.at(i)});
            this.homeView.append(v.el);
        }
    };
    
    p.showHomeView = function() {
        this.homeView.addClass("in");
    };
    
    p.showRLOView = function() {
        this.homeView.addClass("out");
        
    };
    
    scope.Application = Application;

})(window.OER = window.OER || {});

$(document).ready(function () {
    'use strict';
    
    var app = new OER.Application();
});