(function (scope) {
    "use strict";

    var p = {};
    var s = {};

    /**
     * AppRouter handles internal routing and deeplinking.
     * 
     * @class AppRouter
     * @constructor
    */
    p.initialize = function() {

    };

    /**
     * setup url routes and associated events to dispatch
     */
    p.routes = {
            "":"default",
            ":title":"lesson",
            ":title/:subview": "lesson"   // lesson1/intro
    };

    /**
     * navigate to a url and dispatch an event
     * @param {string} route
     */
    p.go = function(route) {
            this.navigate(route, {trigger:true});
    };

    /**
     * navigate to a url and do not dispatch an event
     * @param {string} route
     */    
    p.noEventGo = function(route) {
            this.navigate(route, {trigger:false});
    };

    /**
     * navigate to a url with no event and replacing the last browser history 
     * event (used by back and forward buttons)
     * @param {string} route
     */   
    p.noEventReplaceHistoryGo = function(route) {
            this.navigate(route, {trigger:false, replace: true});
    };

    /**
     * navigate to a url and dispatch event and replace the last browser history 
     * event (used by back and forward buttons)
     * @param {string} route
     */   
    p.replaceHistoryGo = function(route) {
        this.navigate(route, {trigger:true, replace: true});
    };

    scope.AppRouter = Backbone.Router.extend(p, s);

}(window.OER = window.OER || {}));
