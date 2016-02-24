OER.Models = OER.Models || {};

(function () {
    'use strict';

    /**
     * MapCardModel is the data model for the cards shown in navigation map view
     * 
     * @class MapCardModel
     * @constructor
    */    
    OER.Models.MapCardModel = Backbone.Model.extend({
        
        defaults: {
            title:  "",     // supports \n for new lines
            number: "",     // ie 100.1 or "A_1", if not defined can be calculated by MapCardCollection.rowNumberLabel or LessonModel.rowLeadNumber and related values
            group:  "",     // can be null
            route:  "",     // is the url for route handling
            icons:  [],     // an array of icon names, defaults include ["quiz", "interaction", "video"], currenly supports a visual max of 2
            linkLeft: OER.linkType.none,    // [weak, strong, null] show this type of link to the left of this card in navigation map view
            linkTop:  OER.linkType.none,    // [weak, strong, null] show this type of link on the top of this card in navigation map view
            template: null, // ejs template file name, if not used this value will default to row and col of 2d mapping, ie Row1_Col1.ejs
            
            visited: false,
            current: false
        },
        
        initialize: function () {
            return this;
        },
        
        toggleCurrent: function () {
            this.set({
                current: !this.get('current')
            });
        }
        
    });

})();
