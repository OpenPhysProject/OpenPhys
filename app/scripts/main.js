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
    p.RLOBaseView = null;
    p.loader = null;
    
    p.RLOs = null;
    
    p.init = function () {
        this.loader = new scope.Loader();
        this.loader.hide();
        this.homeView = $(".rlo-list");
                
        this.loadData();
        this.createTileView();
        
        this.RLOBaseView = new OER.Views.RLOBaseView(this.RLOs.at(0));
        $(".rlo-view-container").append(this.RLOBaseView.el);
        
        // todo start preloading assets with PreloadJS
        this.setUpRouter();
        
        //this.showHomeView(); // OJR when route handling is in, this may need to route to different RLO views instead
    };
      
    p.loadData = function () {
        // todo load real data
        
        //placeholder data
        this.RLOs = new scope.Collections.RLOCollection();
        for (var i = 0; i < 12; i++) {
            var m = new scope.Models.RLOModel({"title":"RLO " + (i+1), "info":""});
            this.RLOs.add(m);
        }
    };
    
    p.setUpRouter = function () {
        scope.router = new scope.AppRouter();

        // Listen for specific changes
        scope.router.on("route:default", this.showHomeView, this);
        scope.router.on("route:rlo", this.showRLOView, this);

        // Start listening for URL changes
        //Backbone.history.start({pushState:!!window.history});
        this.parseFirstRoute();
        Backbone.history.start({ pushState: true });
    };
    
    /**
     * Check the first route for hashbangs.
     * @method parseFirstRoute
     */
    p.parseFirstRoute = function () {
            var route = window.location.hash;
            if (/^#!\//.test(route)) {
                    route = route.substr(3); // strip hashbang
                    // rewrite the hash, since it is what Backbone reads when start is called.
                    if (!!window.history) {
                            window.history.replaceState({}, '', route);
                    } else {
                            window.location.replace(route);
                    }
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
        this.RLOBaseView.hide();
        this.homeView.removeClass("out");
        this.homeView.addClass("in");
    };
    
    p.showRLOView = function(rloTitle, subView) {
        var m = this.RLOs.findWhere({title: rloTitle});
        if(!m) {
            scope.router.go("");
            return;
        }
        
        this.homeView.removeClass("in");
        this.homeView.addClass("out");
        
        this.RLOBaseView.updateModel(m);
        
        if(subView) {
            this.RLOBaseView.updateSubView(subView);
        }
        
        this.RLOBaseView.show();
    };
    
    scope.Application = Application;

})(window.OER = window.OER || {});

$(document).ready(function () {
    'use strict';
    
    var app = new OER.Application();
});