/*global OER, Backbone, JST*/

OER.Views = OER.Views || {};

(function () {
    'use strict';

    OER.Views.RLOBaseView = Backbone.View.extend({

        template: JST['app/scripts/templates/RLOBaseView.ejs'],

        events: {},

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render); // OJR currently model will not change
            this.render();
        },

        render: function () {
            this.setTemplate(this.template(this.model.toJSON()));
        }

    });

})();
