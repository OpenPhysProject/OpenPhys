/*global OER, Backbone, JST*/

OER.Views = OER.Views || {};

(function () {
    'use strict';

    var p = {};
    var s = {};
    
    p.template = JST['app/scripts/templates/RLOBaseView.ejs'];
    
    p.navView = null;
    p.content = null;
    p.contentContainer = null;
    p.currentView = null;
    
    p.events = {
        
    };
    
    p.initialize = function() {
        this.contentContainer = $("#rlo-base-content-container", this.$el);
        //this.currentView = "intro";   // OJR this will depend on how we set up the model
        this.setSubViews();
    };
    
    p.setSubViews = function() {
        this.navView = new OER.Views.NavView(this.model);
        
        //this.content = new OER.Views[this.currentView]();
    };
    
    p.updateModel = function(newModel) {
      this.model = newModel;
      this.content.remove();
      this.navView.remove();
      
      //set this.currentView
      
      this.setSubViews();
    };
    
    p.render = function() {
        this.setTemplate(this.template(this.model.toJSON()));
    };
    
    OER.Views.RLOBaseView = Backbone.View.extend(p, s);
})();
