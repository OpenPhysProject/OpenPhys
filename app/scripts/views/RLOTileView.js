/*global OER, Backbone, JST*/

OER.Views = OER.Views || {};

(function () {
    'use strict';

    OER.Views.RLOTileView = Backbone.View.extend({

        template: JST['app/scripts/templates/RLOTileView.ejs'],

        tagName: 'div',

        //template: _.template($('#item-template').html()),

        //id: 'RLO',

        //className: 'view',

        /*events: {
            'load .div': 'ToggleCompleted',
            'mouseover .toggle': 'selected'
        },*/

        initialize: function () {
            this.render();
        },

        render: function(){
            // Load the compiled HTML into the Backbone "el"
            this.$el.html( this.template );
        }



        /*render: function () {

            if (this.model.changed.id !== undefined) {
                return;
            }

            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },*/

    });

})(jQuery);