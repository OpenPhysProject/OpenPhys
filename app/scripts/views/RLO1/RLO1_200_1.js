OER.Views = OER.Views || {};

(function () {
    'use strict';

    OER.Views.RLO1_200_1 = Backbone.View.extend({

        template: JST['app/scripts/templates/RLO1/RLO1_200_1.ejs'],

        events: {},

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.setElement(this.template(this.model.toJSON()));
        }

    });

})();
