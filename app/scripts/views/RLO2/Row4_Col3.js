OER.Views = OER.Views || {};
OER.Views.Radioactivity = OER.Views.Radioactivity || {};

(function () {
    'use strict';

    OER.Views.Radioactivity.SpecialRelativity = Backbone.View.extend({

        template: JST['app/scripts/templates/RLO2/Row4_Col3.ejs'],

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
