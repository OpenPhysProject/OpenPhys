/*global OER, Backbone, JST*/

OER.Views = OER.Views || {};

(function () {
    'use strict';

    OER.Views.NavCardView = Backbone.View.extend({
        
        template: JST['app/scripts/templates/NavCardView.ejs'],
        
        
        events: {
            'click': 'toggleCurrent'
        },
        
        initialize: function () {
            this.listenTo(this.model, 'change:current', this.onCurrentChange);
            this.render();
        },
        
        render: function () {
            this.setElement(this.template(this.model.toJSON()));
        },
        
        // set the "visited" state of the model.
        setVisited: function () {
            this.model.setVisited();
            this.$el.addClass('visited');
        },
        
        toggleCurrent: function(){
            this.model.toggleCurrent();
        },
        
        
        onCurrentChange: function(){
            if(this.model.get('current')){
                this.$el.addClass("current");
            } else {               
                this.$el.removeClass("current");
                if(!this.model.get('visited'))
                    this.setVisited();
            }
        }
    });
    
})();
