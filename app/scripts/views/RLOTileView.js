OER.Views = OER.Views || {};

(function () {
    'use strict';

    OER.Views.RLOTileView = Backbone.View.extend({

        template: JST['app/scripts/templates/RLOTileView.ejs'],

        events: {
        },

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render); // OJR currently model will not change
            this.render();
        },

        render: function(){
            this.setElement(this.template(this.model.toJSON()));
        }

    });

})();