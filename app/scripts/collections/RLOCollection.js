OER.Collections = OER.Collections || {};

(function () {
    'use strict';

    /**
     * RLOCollection is a backbone collection of RLOModel which is 
     * used for the different sections of content.
     * 
     * @class RLOCollection
     * @constructor
    */
    OER.Collections.RLOCollection = Backbone.Collection.extend({

        model: OER.Models.RLOModel,     // backbone model

        /**
         *  We keep the RLOModels in grid order.
         *  @method nextOrder
         */
        nextOrder:function() {
                return this.length ? this.last().get('order') + 1 : 1;
        },

        // RLOModels are sorted by their original insertion order.
        comparator: 'order'
    });

})();