OER.Collections = OER.Collections || {};

(function () {
    'use strict';

    /**
     * MapCardCollection is a backbone collection of MapCardModels which is 
     * used for the cards in the navigation map view.
     * 
     * @class MapCardCollection
     * @constructor
    */
    OER.Collections.MapCardCollection = Backbone.Collection.extend({
        
        model: OER.Models.MapCardModel, // backbone model
        
        horizontalLinks: OER.linkType.none,  // OER.linkType.weak|strong|none  turns on horizontal links between nodes, can be overridden by MapCards.linkLeft
        startNode:  false,  // show start node in navigation Map before first card
        endNode:    false,  // show end node in navigation map after last card
        rowNumberLabel: null, // number to give this row in content map, ie 100 or "A"
        lastCurrent: null,  // MapCardModel, used for tracking the last current page
        
        /**
         * Setup collection to start using it
         * @method initialize
         */
        initialize: function() {
            this.lastCurrent = null;
            this.on( "change:current", this.setLastCurrent, this);
        },
        
        /**
         * Change the MapCardModel that is marked as current.
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
         * Turn off the current property in MapCardModel and unset
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
