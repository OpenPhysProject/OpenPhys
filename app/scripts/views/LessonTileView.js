OER.Views = OER.Views || {};

(function () {
    'use strict';

    /**
     * LessonTileView is all the tile images on the homeView.
     * 
     * @class LessonTileView
     * @constructor
    */    
    OER.Views.LessonTileView = Backbone.View.extend({

        template: JST['app/scripts/templates/LessonTileView.ejs'],

        events: {
            "click":"handleClick"
        },

        /**
         * setup view
         * @param {backbone Model} model
         * @method initialize
         */
        initialize: function () {
            //this.listenTo(this.model, 'change', this.render); // OJR currently model will not change
            this.render();
        },

        /**
         * create the related html using the template and model
         * @method render
         */
        render: function(){
            this.setElement(this.template(this.model.toJSON()));
        },
        
        /**
         * When a tile is clicked, mark it current and route to the appropriate
         * content.
         * @method handleClick
         */
        handleClick: function() {
            this.$el.addClass("current");
            OER.router.go(this.model.get("route").toString());
        }

    });

})();