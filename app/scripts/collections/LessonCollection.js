OER.Collections = OER.Collections || {};

(function () {
    'use strict';

    /**
     * LessonCollection is a backbone collection of LessonModel which is 
     * used for the different sections of content.
     * 
     * @class LessonCollection
     * @constructor
    */
    OER.Collections.LessonCollection = Backbone.Collection.extend({

        model: OER.Models.LessonModel,     // backbone model

        /**
         *  We keep the LessonModels in grid order.
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

        // LessonModels are sorted by their original insertion order.
        comparator: 'order'
    });

})();