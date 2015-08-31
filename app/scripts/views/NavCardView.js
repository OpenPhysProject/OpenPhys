/*global OER, Backbone, JST*/

OER.Views = OER.Views || {};

(function () {
    'use strict';

    OER.Views.NavCardView = Backbone.View.extend({
        
        template: JST['app/scripts/templates/NavCardView.ejs'],

        events: {
            'mouseup': 'visited',
            'click': 'showDetailContent'
        },
        
        initialize: function () {
            this.render();
        },
        
        render: function () {
            this.setElement(this.template(this.model.toJSON()));
        },
        
        // set the "visited" state of the model.
        visited: function () {
            this.model.visited();
        },
        
        // show the detail content of the clicked card.
        // have not been used now since design work is still under construction
        showDetailContent: function () {
            
        }
    });

})();
