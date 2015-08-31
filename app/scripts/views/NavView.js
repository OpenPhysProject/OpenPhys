/*global OER, Backbone, JST*/

OER.Views = OER.Views || {};

(function () {
    'use strict';

    OER.Views.NavView = Backbone.View.extend({

        template: JST['app/scripts/templates/NavView.ejs'],

        events: {},

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.setElement(this.template(this.model.toJSON()));
        },
        
        toggleNav: function() {
            this.$el.toggleClass("out");
            this.$el.toggleClass("in");
        }

    });

})();
