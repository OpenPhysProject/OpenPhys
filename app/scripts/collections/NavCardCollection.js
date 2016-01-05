OER.Collections = OER.Collections || {};

(function () {
    'use strict';

    /**
     * NavCardCollection is a backbone collection of NavCardModels which is 
     * used for the cards in the navigation map view.
     * 
     * @class NavCardCollection
     * @constructor
    */
    OER.Collections.NavCardCollection = Backbone.Collection.extend({
        
        model: OER.Models.NavCardModel, // backbone model
        
        lastCurrent: null,              // NavCardModel, used for tracking the last current page
        
        /**
         * Setup collection to start using it
         * @method initialize
         */
        initialize: function() {
            this.lastCurrent = null;
            this.on( "change:current", this.setLastCurrent, this);
        },
        
        /**
         * Change the NavCardModel that is marked as current.
         * @param {backbone Model} model
         * @param {boolean} value
         * @method setLastCurrent
         */
        setLastCurrent: function(model, value) {
            if(value){
                if (this.lastCurrent) {
                    this.lastCurrent.set("current", false);
                }
                this.lastCurrent = model;
            }
        },
        
        /**
         * Turn off the current property in NavCardModel and unset
         * @method removeCurrent
         */
        removeCurrent: function() {
            if (this.lastCurrent) {
                this.lastCurrent.set("current", false);
            }
            this.lastCurrent = null;
        },
        
        /**
         *  Keep navigation card in grid order.
         *  @method nextOrder
         */
        nextOrder: function () {
            return this.length ? this.last().get("order") + 1 : 1;
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

        // Card models are sorted by their original insertion order.
        comparator: 'order'

    });

})();
