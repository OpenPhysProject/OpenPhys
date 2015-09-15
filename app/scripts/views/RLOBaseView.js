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
    
    p.setSubViews = function() {
        this.navView = new OER.Views.NavView({model:this.model});
        this.$el.append(this.navView.el);

        this.updateContent("intro");    // OJR get first content name
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
            this.navView.off();
            this.navView.remove();
        }
        this.model = newModel;
        this.model.on("change:current", this.handleCurrentChange, this);

        //this.render();
        // OJR update render, which requires reattaching el or altering existing dom

        this.setSubViews();
    };
    
    p.updateSubViews = function(targetView) {
        var contentMap = this.model.get("contentMap");
        var navCardModel;
        for(var l = contentMap.length; l--; ) {
            navCardModel = contentMap[l].findWhere({"route":targetView});
            if(navCardModel) {
                navCardModel.toggleCurrent();
                break; 
            }
        }
        //this.updateContent(targetView);  // OJR this is not be needed if this listens to data change
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
        // OJR show nav
        // delay, then select first element of primary path
    };
    
    p.handleCurrentChange = function(model) {
        //var currentModel = this.model.get("lastCurrentCollection").findWhere({"current":true});
        var targetView = model.get("route");
        this.updateContent(targetView);
    };

    OER.Views.RLOBaseView = Backbone.View.extend(p, s);
})();
