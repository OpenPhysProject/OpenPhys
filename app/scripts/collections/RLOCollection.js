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
        
        /**
         * add ignore case option
         * @method where
         */
        where: function(attrs, first, options){
          options = options || {};

          if (_.isEmpty(attrs)) return first ? void 0 : [];

          return this[first ? 'find' : 'filter'](function(model) {
            for (var key in attrs) {
              if (options.ignoreCase) {
                if (attrs[key].toLowerCase() !== model.get(key).toLowerCase()) return false;
              } else {
                if (attrs[key] !== model.get(key)) return false;
              }
            }

            return true;
          });
        },

        /**
         * add ignore case option
         * @method findWhere
         */
        findWhere: function(attrs, options) {
          return this.where(attrs, true, options);
        },

        // RLOModels are sorted by their original insertion order.
        comparator: 'order'
    });

})();