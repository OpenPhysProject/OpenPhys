OER.Views = OER.Views || {};
OER.Views.ElectronicStructureOfTheAtom = OER.Views.ElectronicStructureOfTheAtom || {};

(function () {
    'use strict';

    OER.Views.ElectronicStructureOfTheAtom.SchrodingerAtom = Backbone.View.extend({

        template: JST['app/scripts/templates/RLO1/Row1_Col7.ejs'],

        events: {},

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
            this.render();
        },

        render: function () {
            this.setElement(this.template());
        }

    });

})();
