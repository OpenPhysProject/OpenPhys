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
            jumpNav: false,
        },
        
        /**
         * backbone parse function, doing the following for us
         * - change data from an array to a NavCardCollection
         * - add change listeners to each NavCardCollection so we only ever have 1 current
         * - create views when they don't already exist
         * @param {type} response
         * @param {type} options
         * @returns {unresolved}
         */
        parse: function(response, options) {
            var newMap = new Array();
            var currentMap = response.contentMapData;
            // if view namespace does not exist, create it
            OER.Views[response.route] = OER.Views[response.route] || {};
            for (var l = currentMap.length; l--; ) {
                // convert to NavCardCollection
                var c = newMap[l] = new OER.Collections.NavCardCollection(currentMap[l]);
                // add change listener
                c.on("change:current", this.handleCurrentChange, this);
                // create views
                for (var i = c.length; i--; ) {
                    var subRoute = c.at(i).get("route");
                    if (!OER.Views[response.route][subRoute]) {
                        // OJR if we ever need something different, add a .template property to data and use it if it's populated
                         OER.Views.RLOTemplate.template = JST["app/content/"+options.viewPath+"/templates/Row"+l.toString()+ "_Col" +i.toString()+".ejs"];
                         OER.Views[response.route][subRoute] = Backbone.View.extend(OER.Views.RLOTemplate);
                    }
                }
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