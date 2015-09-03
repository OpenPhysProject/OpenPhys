/*global OER, Backbone*/

OER.Collections = OER.Collections || {};

(function () {
    'use strict';

    OER.Collections.NavCardCollection = Backbone.Collection.extend({
        
        model: OER.Models.NavCardCollection,
        
        initialize: function() {
            this.lastCurrent = null;
            this.on( "change:current", this.setLastCurrent, this);
        },
        
        setLastCurrent: function(model) {
            if(model.get('current')){
                if (this.lastCurrent) {
                    this.lastCurrent.toggleCurrent();
                }
                    this.lastCurrent = model;
            }
        },
        
        // Filter down the list of all the visited card are finished.
        visited: function () {
            return this.where({visited: true});
        },
        
        remaining: function () {
            return this.where({visited: false});
        },
        
        current: function() {
            return this.where({current: true});
        },
        
        // Keep navigation card in grid order.
        nextOrder: function () {
            return this.length ? this.last().get('order') + 1 : 1;
        },
        
        // Card models are sorted by their original insertion order.
        comparator: 'order'

    });

})();
