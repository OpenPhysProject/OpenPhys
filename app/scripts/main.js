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
    //p.outroTile = null;     // jquery object, tile
    p.lessonBaseView = null;   // backbone view, common container for all content views
    p.loader = null;            // js object, handles loading distractor
    p.lessons = null;          // backbone lesson collection, stores all content data
    
    /**
     * setup properties, load data, create views, kick off application
     * @method init
     */
    p.init = function () {
        this.loader = new scope.Loader();
        this.homeView = $(".lesson-list");
        //this.outroTile = $(".outro-tile", this.homeView);
        
        /*
        this.setTileMinHeight();
        window.addEventListener("resize", _.debounce(this.setTileMinHeight.bind(this), 60), false);
        */  
        
        this.loadData();
        this.createTileView();
        
        this.lessonBaseView = new OER.Views.LessonBaseView(this.lessons.at(0));
        $(".lesson-view-container").append(this.lessonBaseView.el);
        
        // todo start preloading assets with PreloadJS
        this.setUpRouter();
        this.loader.hide();
    };
    
    /**
     * Used to set minimum height for intro and outro tiles so content is always
     * visible.
     * @method setTileMinHeight
     */
    /*
    p.setTileMinHeight = function () {
        var introTile =   $(".intro-tile", this.homeView);
        var introContentContainer = $(".lesson-tile-content-container-intro", introTile);
        var h = introContentContainer.height() + introContentContainer.position().top;
        
        introTile.css("min-height", h);
        
        /*
        h = $(".lesson-tile-content-container", this.outroTile).height();
        this.outroTile.css("min-height", h);
        /
    };
    */
      
    /**
     * Load all lesson data into collection
     * @method loadData
     */
    p.loadData = function () {
       this.lessons = new scope.Collections.LessonCollection();
       var m = new scope.Models.LessonModel(OER.data.userGuide, {parse: true, viewPath: "userGuide"});
       this.lessons.add(m);
       
       var m = new scope.Models.LessonModel(OER.data.lesson1, {parse: true, viewPath: "lesson1"});
       this.lessons.add(m);
       
       m  =  new scope.Models.LessonModel(OER.data.lesson2, {parse: true, viewPath: "lesson2"});
       this.lessons.add(m);
  
       m  =  new scope.Models.LessonModel(OER.data.lesson3, {parse: true, viewPath: "lesson3"});
       this.lessons.add(m);
 
      // m  =  new scope.Models.LessonModel(OER.data.lesson4, {parse: true, viewPath: "lesson4"});
      // this.lessons.add(m);
 
       m  =  new scope.Models.LessonModel(OER.data.lesson5, {parse: true, viewPath: "lesson5"});
       this.lessons.add(m);       
        
       m  =  new scope.Models.LessonModel(OER.data.lesson6, {parse: true, viewPath: "lesson6"});
       this.lessons.add(m);    
       
       m  =  new scope.Models.LessonModel(OER.data.lesson7, {parse: true, viewPath: "lesson7"});
       this.lessons.add(m); 
       
       m  =  new scope.Models.LessonModel(OER.data.Sandbox, {parse: true, viewPath: "Sandbox"});
       this.lessons.add(m);      
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
        scope.router.on("route:lesson", this.showLessonView, this);

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
     * parse lesson collection and create related tile views shown in homeView
     * @method createTileView
     */
    p.createTileView = function() {
        var v;
        for (var i = 0, l = this.lessons.length; i < l; i++ ) {
            v = new scope.Views.LessonTileView({model:this.lessons.at(i)});
            //this.outroTile.before(v.el);
            this.homeView.append(v.el);
        }
    };
    
    /**
     * transition out the LessonBaseView and set timeout to transition in the homeView
     * @method showHomeView
     */
    p.showHomeView = function() {
        this.lessonBaseView.out();
        
        setTimeout(this.showHomeViewHide.bind(this), OER.settings.MAIN_TO_CONTENT);
    };
    
    /**
     * hide LessonBaseView and remove hidden from homeView.  Set timeout to 
     * transition in homeView
     * @method showHomeViewHide
     */
    p.showHomeViewHide = function() {
        this.lessonBaseView.hide();
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
        var currentTile = $(".current", this.homeView);
        currentTile.removeClass("current");
        //this.setTileMinHeight();
        window.scrollTo(0,1);   // OJR hides chrome on mobile browser
    }
    
    /**
     * Show an lesson content view, triggered by routing to an lesson.
     * @param {string} LessonRoute  First path in url
     * @param {string} contentRoute  Second path in url
     * @method showLessonView
     */
    p.showLessonView = function(LessonRoute, contentRoute) {
        var m = this.lessons.findWhere({route: LessonRoute}, {ignoreCase: true});
        if(!m) {
            scope.router.go("");
            return;
        }
        LessonRoute = m.get("route");  // sanitize case
        
        // tranisition out homeView
        this.homeView.removeClass("in");
        this.homeView.addClass("out");
        
        this.lessonBaseView.updateModel(m);
        
        // determine if we have already visited this learning object.  If so, return to same place
        var showMap = !contentRoute;
        var lcc = m.get("lastCurrentCollection");
        if(!contentRoute && lcc) {
            contentRoute = lcc.lastCurrent.get("route");
        }
        
        if(contentRoute) {
            scope.router.noEventReplaceHistoryGo(LessonRoute+"/"+contentRoute);
            this.lessonBaseView.updateSubViews(contentRoute);
        }
        
        var homeView = this.homeView;       // for function hoisting
        var LessonBaseView = this.lessonBaseView; // for function hoisting
        setTimeout(function () {
            homeView.addClass("hidden");
            LessonBaseView.show(showMap);
        }, OER.settings.MAIN_TO_CONTENT);
    };
    
    scope.Application = Application;

})(window.OER = window.OER || {});

/**
 * Short script that fires when all scripts and styles are loaded in index.
 * This adds FastClick and starts our application.
 */
$(document).ready(function () {
    'use strict';
    // FastClick - library removes 300ms delay on touch devices
    $(function() {FastClick.attach(document.body);});

    var app = new OER.Application();
});