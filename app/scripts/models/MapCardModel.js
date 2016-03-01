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
            title:  "",     // title shown on navigation cards in map view, supports \n for new lines
            number: "",     // [optional] number of content page, ie 100.1 or "A_1", if not defined can be calculated by MapCardCollection.rowNumberLabel or LessonModel.rowLeadNumber and related values
            group:  "",     // [optional] used to show a relation between various mapCards/content pages
            route:  "",     // is the url for route handling and the namespace for the view associated with content page
            icons:  [],     // [options = ["quiz", "interaction", "video"]] used to show icons on mapCard that indicate specific content types, currently supports a visual max of 2
            linkLeft: null, // [OER.linkType.weak|strong|none] show this type of link to the left of this card in navigation map view
            linkTop:  null, // [OER.linkType.weak|strong|none] show this type of link on the top of this card in navigation map view
            template: null, // ejs template file name, if not used this value will default to row and col of 2d mapping, ie Row1_Col1.ejs
            
            visited: false, // true if user has visted this contentPage
            current: false, // true if this contentPage is currently showing
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
