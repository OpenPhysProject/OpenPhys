/*global OER, Backbone, JST*/

OER.Views = OER.Views || {};

(function () {
    'use strict';

    OER.Views.NavCardView = Backbone.View.extend({
        
        templateWithContent: JST['app/scripts/templates/NavCardView.ejs'],
        templateEmpty: JST['app/scripts/templates/NavCardViewEmpty.ejs'],
        
        events: {
            'click': 'toggleCurrent'
        },
        
        initialize: function () {
            this.listenTo(this.model, 'change:current', this.onCurrentChange);
            this.render();
        },
        render: function () {
            if(this.model.get('title')){
                 this.setElement(this.templateWithContent(this.model.toJSON()));
            }
            else{
                 this.setElement(this.templateEmpty(this.model.toJSON()));
            }
        },
        // set the "visited" state of the model.
        setVisited: function () {
            this.model.setVisited();
            this.$el.addClass('visited');
        },
        
        toggleCurrent: function(){
            if(!this.model.get('current'))
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
