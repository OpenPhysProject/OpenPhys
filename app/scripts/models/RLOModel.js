OER.Models = OER.Models || {};

(function () {
    'use strict';

    OER.Models.RLOModel = Backbone.Model.extend({

        defaults: {
            title: '',
            preview: '',
            route:"",
            selected: false,
            info: '',
            primaryPathIndex: null,
            contentMap: null,  // 2D array of NavCardCollection
            lastCurrentCollection: null,
        },
        
        /*
        initialize: function(){
            this.on("change:contentMap", this.setContentMapListeners);
        },
        */
        
        parse: function(response, options) {
            //convert contentMap data from arrays to NavCardCollections
            var newMap = new Array();
            var currentMap = response.contentMapData;
            for (var l = currentMap.length; l--; ) {
                newMap[l] = new OER.Collections.NavCardCollection(currentMap[l]);
                newMap[l].on("change:current", this.handleCurrentChange, this); // add change event listener
            }
            response.contentMap = newMap;
            delete response.contentMapData; // no longer needed
            return response;
        },
        
        getPrimaryContent: function() {
            return this.get('contentMap')[this.primaryPathIndex];
        },
        
        getContentByIndex: function(index){
            return this.get('contentMap')[index];
        },
        
        /**
         * OJR this is no longer used and could be deleted
         * add change listeners to all NavCardCollections to handle keeping a single current
         * @returns {undefined}
         */
        setContentMapListeners: function() {
            // TODO if contentMap could ever change, add .off from previous collection
            var cm = this.get("contentMap");
            for(var l = cm.length; l--; ) {
                cm[l].on("change:current", this.handleCurrentChange, this);
            }
        },
        
        /**
         * update NavCardCollections to keep only one current NavCard accross all
         * @returns {undefined}
         */
        handleCurrentChange: function(model, value) {
            if(!value) { return; }
            var navCardCollection = model.collection;
            if(navCardCollection.lastCurrent != null){
                var c = this.get("lastCurrentCollection");
                if (c && c != navCardCollection) {
                    c.removeCurrent();
                }
                this.set("lastCurrentCollection", navCardCollection);
            }
            this.trigger("change:current",model);
        },
        
    });

})();