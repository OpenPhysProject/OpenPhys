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
        this.contentContainer = $("#rlo-base-content-container", this.$el);
        this.setSubViews();
    };
    
    p.setSubViews = function() {
        this.navView = new OER.Views.NavView({model:this.model});
        this.$el.append(this.navView);
        
        this.updateContent("intro");    // OJR get first content name
    };
    
    p.updateContent = function(targetView) {
        if (this.content) { this.content.remove(); }
        this.currentView = targetView;
        // check if view exists, which should always be the case in final release
        if (OER.Views[this.currentView]) {
            this.content = new OER.Views[this.currentView]();
        } else {
            this.content = new OER.Views.DefaultContentView();
        }
        this.contentContainer.append(this.content);
    };
 
    p.render = function() {
        this.setElement(this.template(this.model.toJSON()));
    };
    
    p.updateModel = function(newModel) {
      this.model = newModel;
      this.content.remove();
      this.navView.remove();
      
      //this.render();
      // update current render
      
      this.setSubViews();
    };
    
    p.updateSubViews = function(targetView) {
        // update data
        // refresh navView
        this.updateContent(targetView);  // OJR this might not be needed if this listens to data change
    };
    
    p.toggleNav = function () {
        this.navView.toggle();
    };
    
    p.hide = function () {
        this.$el.removeClass("in");
        this.$el.addClass("out");
    };
    
    p.show = function () {
        this.$el.removeClass("out");
        this.$el.addClass("in");
    };

    OER.Views.RLOBaseView = Backbone.View.extend(p, s);
})();
