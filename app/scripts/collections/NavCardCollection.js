/*global OER, Backbone*/

OER.Collections = OER.Collections || {};

(function () {
    'use strict';

    OER.Collections.NavCardCollection = Backbone.Collection.extend({
        
        model: OER.Models.NavCardCollection,
        
        // Filter down the list of all the visited card are finished.
        visited: function () {
            return this.where({visited: true});
        },
        
        remaining: function () {
            return this.where({visited: false});
        },
        
        // Keep navigation card in grid order.
        nextOrder: function () {
            return this.length ? this.last().get('order') + 1 : 1;
        },
        
        // Card models are sorted by their original insertion order.
        comparator: 'order'

    });

})();
