OER.Views = OER.Views || {};
OER.Views.RLORoute = OER.Views.RLORoute || {};

(function () {
    'use strict';

    /**
     * Row0_Col0 is the default view used to create new views by content creators.
     * See content/HowToAddRLOView.md for more details
     * 
     * @class Row0_Col0
     * @constructor
    */
    // change RLORoute and NavCardRoute to match your data
    OER.Views.RLORoute.NavCardRoute = Backbone.View.extend({

        /**
         *  template that provides html for this view.  This should be changed to
         *  match the template from your data
         *  @property template
         */
        template: JST['app/content/RLOX/templates/Row0_Col0.ejs'],

        // can be used to set up event handling on html from template
        // see http://backbonejs.org/ to learn more
        events: {},
        
        /**
         * setup view
         * @param {backbone Model} model
         * @method initialize
         */
        initialize: function (model) {
            if (model) { this.model = model; }
            //this.listenTo(this.model, 'change', this.render);
            this.render();
        },

        /**
         * create the related html using the template and model
         * @method render
         */
        render: function () {
            if(this.model) {
                this.setElement(this.template(this.model.toJSON()));
            } else {
                this.setElement(this.template());
            }
        }
        
    });

})();
