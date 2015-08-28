/*global OER, Backbone*/

OER.Models = OER.Models || {};

(function () {
    'use strict';

    OER.Models.NavCardModel = Backbone.Model.extend({
        
        url: '',
        
        defaults: {
            title: '',
            image: '',
            visited: false
        },
        
        initialize: function () {
            return this;
        },
        
        // Toggle the `visited` state of this card item.
        visited: function () {
            this.set({
                visited: true
            });
        },
        
        validate: function (attrs, options) {
            
        },
        
        parse: function (response, options) {
            return response;
        }
    });

})();
