/*global OER, Backbone*/

OER.Models = OER.Models || {};

(function () {
    'use strict';

    // Oer Model
    // ---------

    // Our basic **Todo** model has `title`, `order`, `selected`, `hovered`
    // and `info` attributes. 
    OER.Models.RLOModel = Backbone.Model.extend({

        url: '',

        // Default attributes for the oer
        // and ensure that each oer created `title` and `selected` keys.
        // Also, it might contain more extended info.
        defaults: {
            title: '',
            preview: '',
            selected: false,
            info: ''
        },

        // Make it a rectangular div and `hovered` state of this oer item
        initialize: function() {
            //alert("Initialized");
        },

        validate: function(attrs, options) {

        },

        parse: function(response, options)  {
            return response;
        }
    });

})();