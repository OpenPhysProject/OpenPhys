/*global OER, Backbone*/

OER.Models = OER.Models || {};

(function () {
    'use strict';

    OER.Models.NavCardModel = Backbone.Model.extend({
        
        url: '',
        
        defaults: {
            title: '',
            image: '',
            visited: false,
            current: false
        },
        
        initialize: function () {
            return this;
        },
        
        // Toggle the `visited` state of this card item.
        setVisited: function () {
            this.set({
                visited: true
            });
        },
        
        toggleCurrent: function () {
            this.set({
                current: !this.get('current')
            });
        },
        
        validate: function (attrs, options) {

        },
        
        parse: function (response, options) {
            return response;
        }
    });

})();
