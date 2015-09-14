OER.Models = OER.Models || {};

(function () {
    'use strict';

    OER.Models.RLOModel = Backbone.Model.extend({

        defaults: {
            title: '',
            preview: '',
            selected: false,
            info: '',
            primaryPathIndex: null,
            contentMap: null,  // 2D array of NavCardCollection
            lastCurrentCollection: null,
        },
        
        initialize: function(){
            this.on("change:contentMap", this.setContentMapListeners);
        },

        getPrimaryContent: function() {
            return this.get('contentMap')[this.primaryPathIndex];
        },
        
        getContentByIndex: function(index){
            return this.get('contentMap')[index];
        },
        
        /**
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
        handleCurrentChange: function(model) {
            var navCardCollection = model.collection;
            if(navCardCollection.lastCurrent != null){
                if (this.lastCurrentCollection && this.lastCurrentCollection != navCardCollection) {
                    this.lastCurrentCollection.removeCurrent();
                }
                this.lastCurrentCollection = navCardCollection;
            }
        },
        
    });

})();