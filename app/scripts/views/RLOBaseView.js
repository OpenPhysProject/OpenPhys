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
    
    p.initialize = function() {
        this.render();
        this.contentContainer = $("#rlo-base-content-container", this.$el);
        this.setSubViews();
    };
    
    p.setSubViews = function() {
        this.navView = new OER.Views.NavView(this.model);
        this.$el.append(this.navView);
        
        this.updateContent("intro");
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
        this.setTemplate(this.template(this.model.toJSON()));
    };
    
    p.updateModel = function(newModel) {
      this.model = newModel;
      this.content.remove();
      this.navView.remove();
      
      this.render();
      
      this.setSubViews();
    };
    
    p.toggleNav = function () {
        this.navView.toggle();
    };

    OER.Views.RLOBaseView = Backbone.View.extend(p, s);
})();
