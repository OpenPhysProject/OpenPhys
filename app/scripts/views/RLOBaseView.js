OER.Views = OER.Views || {};

(function () {
    'use strict';

    var p = {};
    var s = {};
    
    p.template = JST['app/scripts/templates/RLOBaseView.ejs'];
    
    p.navView = null;
    p.content = null;
    p.contentContainer = null;
    p.currentView = "intro";
    
    p.events = {
        "click .rlo-base-menu-button":"toggleNav",
    };
    
    p.initialize = function(model) {
        this.model = model;
        this.render();
    };
    
    p.updateContent = function(targetView) {
        if (this.content) { this.content.remove(); }
        this.currentView = targetView;
        var RLOScope = this.model.get("route");
        // check if view exists, which should always be the case in final release
        if (OER.Views[RLOScope] && OER.Views[RLOScope][this.currentView]) {
            this.content = new OER.Views[RLOScope][this.currentView]();
        } else {
            this.content = new OER.Views.DefaultContentView();  // OJR possibly better to redirect to intro
        }
        OER.router.noGo(RLOScope+"/"+targetView);   // change if we change default view handling
        this.contentContainer.append(this.content.el);
    };
 
    p.render = function() {
        this.setElement(this.template(this.model.toJSON()));
        this.contentContainer = $(".rlo-base-content-container", this.$el);
    };
    
    p.updateModel = function(newModel) {
        if (this.model) {
            this.model.off();
        }
        if (this.content) {
            this.content.remove();
            this.navView.destroy();
        }
        this.model = newModel;
        this.model.on("change:current", this.handleCurrentChange, this);

        //this.render();
        // OJR update render, which requires reattaching el or altering existing dom

        this.navView = new OER.Views.NavView({model:this.model});
        this.$el.append(this.navView.el);
    };
    
    p.updateSubViews = function(targetView) {
        var contentMap = this.model.get("contentMap");
        var navCardModel;
        for(var l = contentMap.length; l--; ) {
            navCardModel = contentMap[l].findWhere({"route":targetView});
            if(navCardModel) {
                navCardModel.set("current", true);
                break; 
            }
        }
    };
    
    p.toggleNav = function () {
        this.navView.toggleNav();
    };
    
    p.hide = function () {
        this.$el.removeClass("in");
        this.$el.addClass("out");
    };
    
    p.show = function () {
        this.$el.removeClass("out");
        this.$el.addClass("in");
    };

    p.showIntro = function () {
        this.$el.removeClass("out");
        this.$el.addClass("in");
        this.navView.toggleNav();
        var navView = this.navView; // for hoisting in timeout
        var introModel = this.model.get("contentMap")[this.model.get("primaryPathIndex")].at(0);
        setTimeout(function() {introModel.set("current", true);}, OER.settings.FIRST_SHOW);
        setTimeout(function() {navView.toggleNav();}, OER.settings.FIRST_SHOW + OER.settings.CLOSE_NAV);
    };
    
    p.handleCurrentChange = function(model) {
        //var currentModel = this.model.get("lastCurrentCollection").findWhere({"current":true});
        var targetView = model.get("route");
        this.updateContent(targetView);
    };

    OER.Views.RLOBaseView = Backbone.View.extend(p, s);
})();
