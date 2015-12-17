OER.Views = OER.Views || {};

(function () {
    'use strict';

    /**
     * RLOTemplate is the default view used by all content that does not require
     * extra behavior.  These are automatically created.
     * 
     * @class RLOTemplate
     * @constructor
    */    
    OER.Views.RLOTemplate = {

        // template that provides html for this view.  This is reset when the default views are generated.
        template: JST['app/scripts/templates/RLOTemplate/Row0_Col0.ejs'],

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

    };

})();
