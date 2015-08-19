/*global OER, Backbone*/

OER.Models = OER.Models || {};

(function () {
    'use strict';

    OER.Models.RLOModel = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
