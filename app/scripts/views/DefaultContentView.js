OER.Views = OER.Views || {};

(function () {
    'use strict';

    /**
     * DefaultContentView is used if a template cannot be found for data.
     * 
     * @class DefaultContentView
     * @constructor
    */    
    OER.Views.DefaultContentView = Backbone.View.extend({

        template: JST['app/scripts/templates/DefaultContentView.ejs'],

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
            this.render();
        },

        render: function () {
            this.setElement(this.template());
        }

    });

})();
