OER.Models = OER.Models || {};

(function () {
    'use strict';

    /**
     * LessonModel is the data model for the learning objects
     * 
     * @class LessonModel
     * @constructor
    */    
    OER.Models.LessonModel = Backbone.Model.extend({

        defaults: {
            title: '',
            preview: '',
            route:"",
            selected: false,
            primaryPathIndex: null,     // index of main MapCardCollection in contentMap
            contentMap: null,           // 2D array of MapCardCollection
            lastCurrentCollection: null,
            jumpNav: false,
            horizontalLinks: OER.linkType.none,  // navigation map horizontal links, can be overwritten by MapCardCollection.horizontalLinks and MapCardModel.linkLeft
            verticalLinks: OER.linkType.weak,   // navigation map vertical links, can be overwritten by MapCardModel.linkTop
        },
        
        /**
         * backbone parse function, doing the following for us
         * - change data from an array to a MapCardCollection
         * - add change listeners to each MapCardCollection so we only ever have 1 current
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
                // convert to MapCardCollection
                var c = newMap[l] = new OER.Collections.MapCardCollection(currentMap[l]);
                // add change listener
                c.on("change:current", this.handleCurrentChange, this);
                // create views
                for (var i = c.length; i--; ) {
                    var subRoute = c.at(i).get("route");
                    if (!OER.Views[response.route][subRoute]) {
                        // OJR if we ever need something different, add a .template property to data and use it if it's populated
                         OER.Views.LessonTemplate.template = JST["app/content/"+options.viewPath+"/templates/Row"+l.toString()+ "_Col" +i.toString()+".ejs"];
                         OER.Views[response.route][subRoute] = Backbone.View.extend(OER.Views.LessonTemplate);
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
         * update MapCardCollections to keep only one current NavCard accross all
         * @returns {undefined}
         */
        handleCurrentChange: function(model, value) {
            if(!value) { return; }
            var MapCardCollection = model.collection;
            if(MapCardCollection.lastCurrent != null){
                var c = this.get("lastCurrentCollection");
                if (c && c != MapCardCollection) {
                    c.removeCurrent();
                }
                this.set("lastCurrentCollection", MapCardCollection);
            }
            this.trigger("change:current",model);
        },
        
    });

})();