OER.Views = OER.Views || {};
OER.Views.ElectronicStructureOfTheAtom = OER.Views.ElectronicStructureOfTheAtom || {};

(function () {
    'use strict';

    OER.Views.ElectronicStructureOfTheAtom.ClassicalElectormagnetism = Backbone.View.extend({

        template: JST['app/scripts/templates/RLO1/Row0_Col1.ejs'],

        events: {},

        initialize: function (model) {
            if (model) { this.model = model; }
            //this.listenTo(this.model, 'change', this.render);
            this.render();
        },

        render: function () {
            if(this.model) {
                this.setElement(this.template(this.model.toJSON()));
            } else {
                this.setElement(this.template());
            }
        }

    });

})();
