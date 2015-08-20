/*global OER, Backbone*/

OER.Collections = OER.Collections || {};

(function () {
    'use strict';

    OER.Collections.RLOCollection = Backbone.Collection.extend({

        model: OER.Models.RLOModel,


		// We keep the Oers in grid order.
		// GUID in the database. This generates the next order number for new item.
		nextOrder:function() {
			return this.length ? this.last().get('order') + 1 : 1;
		},

		// Oers are sorted by their original insertion order.
		comparator: 'order'
	});

	// Create our global collection of **oers**
	// OER.Collections = new OER.Collections.RLOCollection();

})();