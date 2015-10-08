OER.Views = OER.Views || {};

(function () {
    'use strict';

    OER.Views.RLOTemplate = {

        template: JST['app/scripts/templates/RLO1/Row0_Col0.ejs'],

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

    };

})();
