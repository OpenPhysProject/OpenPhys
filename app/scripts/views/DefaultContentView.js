OER.Views = OER.Views || {};

(function () {
    'use strict';

    OER.Views.DefaultContentView = Backbone.View.extend({

        template: JST['app/scripts/templates/DefaultContentView.ejs'],

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.setElement(this.template(this.model.toJSON()));
        }

    });

})();
