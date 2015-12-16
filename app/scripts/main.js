(function (scope) {
    "use strict";
    
    /**
     * Application is the starting point for launching our app.  It loads all 
     * data files into associated models and collections, sets up routing, and 
     * creates tileView and baseView.
     * 
     * @class Application
     * @constructor
    */
    var Application = function () {
        this.init();
    };
    var p = Application.prototype;
    
    p.homeView = null;      // jquery object, contains all tileViews
    p.outroTile = null;     // jquery object, tile
    p.RLOBaseView = null;   // backbone view, common container for all content views
    p.loader = null;        // js object, handles loading distractor
    p.logo = null;          // jquery object, handles logo
    p.RLOs = null;          // backbone RLO collection, stores all content data
    
    /**
     * setup properties, load data, create views, kick off application
     * @method init
     */
    p.init = function () {
        this.loader = new scope.Loader();
        this.homeView = $(".rlo-list");
        this.outroTile = $(".outro-tile", this.homeView);
        this.logo = $(".logo");
        
        this.setTileMinHeight();
        window.addEventListener("resize", _.debounce(this.setTileMinHeight.bind(this), 60), false);
                
        this.loadData();
        this.createTileView();
        
        this.RLOBaseView = new OER.Views.RLOBaseView(this.RLOs.at(0));
        $(".rlo-view-container").append(this.RLOBaseView.el);
        
        // todo start preloading assets with PreloadJS
        this.setUpRouter();
        this.logo.click("click", this.handleLogoClick);
        this.loader.hide();
    };
    
    /**
     * Used to set minimum height for intro and outro tiles so content is always
     * visible.
     * @method setTileMinHeight
     */
    p.setTileMinHeight = function () {
        var introTile =   $(".intro-tile", this.homeView);
        var h = $(".rlo-tile-content-container-intro", introTile).height() + this.logo.outerHeight() + this.logo.position().top;
        introTile.css("min-height", h);
        
        h = $(".rlo-tile-content-container", this.outroTile).height();
        this.outroTile.css("min-height", h);
    };
      
    /**
     * Load all RLO data into collection
     * @method loadData
     */
    p.loadData = function () {
       this.RLOs = new scope.Collections.RLOCollection();
       var m = new scope.Models.RLOModel(OER.data.Intro, {parse: true, viewPath: "Intro"});
       this.RLOs.add(m);
       
       var m = new scope.Models.RLOModel(OER.data.RLO1, {parse: true, viewPath: "RLO1"});
       this.RLOs.add(m);
       
       m  =  new scope.Models.RLOModel(OER.data.RLO2, {parse: true, viewPath: "RLO2"});
       this.RLOs.add(m);
  
       m  =  new scope.Models.RLOModel(OER.data.RLO3, {parse: true, viewPath: "RLO3"});
       this.RLOs.add(m);
 
       m  =  new scope.Models.RLOModel(OER.data.RLO5, {parse: true, viewPath: "RLO5"});
       this.RLOs.add(m);       
        
       m  =  new scope.Models.RLOModel(OER.data.RLO6, {parse: true, viewPath: "RLO6"});
       this.RLOs.add(m);    
       
       m  =  new scope.Models.RLOModel(OER.data.RLO7, {parse: true, viewPath: "RLO7"});
       this.RLOs.add(m); 
       
       m  =  new scope.Models.RLOModel(OER.data.Sandbox, {parse: true, viewPath: "Sandbox"});
       this.RLOs.add(m);      
    };
    
    /**
     * create router, start listening for route changes, parse the first passed
     * in route for deeplinking, and start the browser history
     * method setUpRouter
     */
    p.setUpRouter = function () {
        scope.router = new scope.AppRouter();

        // Listen for specific changes
        scope.router.on("route:default", this.showHomeView, this);
        scope.router.on("route:rlo", this.showRLOView, this);

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

    /**
     * parse RLO collection and create related tile views shown in homeView
     * @method createTileView
     */
    p.createTileView = function() {
        var v;
        for (var i = 0, l = this.RLOs.length; i < l; i++ ) {
            v = new scope.Views.RLOTileView({model:this.RLOs.at(i)});
            this.outroTile.before(v.el);
        }
    };
    
    /**
     * transition out the RLOBaseView and set timeout to transition in the homeView
     * @method showHomeView
     */
    p.showHomeView = function() {
        this.RLOBaseView.out();
        
        setTimeout(this.showHomeViewHide.bind(this), OER.settings.MAIN_TO_CONTENT);
    };
    
    /**
     * hide RLOBaseView and remove hidden from homeView.  Set timeout to 
     * transition in homeView
     * @method showHomeViewHide
     */
    p.showHomeViewHide = function() {
        this.RLOBaseView.hide();
        this.homeView.removeClass("hidden");
        setTimeout(this.showHomeViewIn.bind(this), 33);
    };
    
    /**
     * transition in homeView
     * @method showHomeViewIn
     */
    p.showHomeViewIn = function() {
        this.homeView.removeClass("out");
        this.homeView.addClass("in");
        this.logo.removeClass("mini");
        var currentTile = $(".current", this.homeView);
        currentTile.removeClass("current");
        this.setTileMinHeight();
        window.scrollTo(0,1);   // OJR hides chrome on mobile browser
    }
    
    /**
     * Show an RLO content view, triggered by routing to an rlo.
     * @param {string} rloRoute  First path in url
     * @param {string} contentRoute  Second path in url
     * @method showRLOView
     */
    p.showRLOView = function(rloRoute, contentRoute) {
        var m = this.RLOs.findWhere({route: rloRoute});
        if(!m) {
            scope.router.go("");
            return;
        }
        
        // tranisition out homeView
        this.homeView.removeClass("in");
        this.homeView.addClass("out");
        this.logo.addClass("mini");
        
        this.RLOBaseView.updateModel(m);
        
        // determine if we have already visited this learning object.  If so, return to same place
        var lcc = m.get("lastCurrentCollection");
        if(!contentRoute && lcc) {
            contentRoute = lcc.lastCurrent.get("route");
        }
        
        var showIntro = true;
        if(contentRoute) {
            scope.router.noEventReplaceHistoryGo(rloRoute+"/"+contentRoute);
            this.RLOBaseView.updateSubViews(contentRoute);
            showIntro = false;
        }
        
        var homeView = this.homeView;       // for function hoisting
        var RLOBaseView = this.RLOBaseView; // for function hoisting
        setTimeout(function () {
            homeView.addClass("hidden");
            if (showIntro) {
                RLOBaseView.showIntro();
            } else {
                RLOBaseView.show();
            }
        }, OER.settings.MAIN_TO_CONTENT);
    };
    
    /**
     * when logo is clicked, route to homeView
     * @method handleLogoClick
     */
    p.handleLogoClick = function (){
      scope.router.go();  
    };
    
    scope.Application = Application;

})(window.OER = window.OER || {});

/**
 * Short script that fires when all scripts and styles are loaded in index.
 * This adds FastClick and starts our application.
 */
$(document).ready(function () {
    'use strict';
    
    $(function() {FastClick.attach(document.body);});

    var app = new OER.Application();
});