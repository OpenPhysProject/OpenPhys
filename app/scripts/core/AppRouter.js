(function (scope) {
	"use strict";

	var p = {};
	var s = {};

	p.routes = {
		"":"default",
		":title":"rlo",
                ":title/:subview": "rlo"   // rlo1/intro
	};

	p.initialize = function() {

	};

	/**
	 * Shorthand method for router.navigate(route, {trigger: true});
	 * @param route
	 */
	p.go = function(route) {
		this.navigate(route, {trigger:true});
	};

	p.noGo = function(route) {
		this.navigate(route, {trigger:false});
	};

	p.noHistoryGo = function(route) {
		this.navigate(route, {trigger:false, remove: true});
	};

	scope.AppRouter = Backbone.Router.extend(p, s);

}(window.OER = window.OER || {}));
