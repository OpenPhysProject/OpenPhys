OER.Collections = OER.Collections || {};

(function () {
    'use strict';

    OER.Collections.RLOCollection = Backbone.Collection.extend({

        model: OER.Models.RLOModel,

        // Selected might not be used now since design work is still under construction
        selected: function () {
        	return this.where ({selected: true});
        },

        // The same as selected
        remaining: function () {
        	return this.where({selected:false});
        },

		// We keep the RLOModels in grid order.
		nextOrder:function() {
			return this.length ? this.last().get('order') + 1 : 1;
		},

		// RLOModels are sorted by their original insertion order.
		comparator: 'order'
	});

	// Create our global collection of **RLOCollection**
	// OER.Collections = new OER.Collections.RLOCollection();

})();