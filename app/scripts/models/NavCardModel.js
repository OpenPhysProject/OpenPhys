OER.Models = OER.Models || {};

(function () {
    'use strict';

    /**
     * NavCardModel is the data model for the cards shown in navigation map view
     * 
     * @class NavCardModel
     * @constructor
    */    
    OER.Models.NavCardModel = Backbone.Model.extend({
        
        defaults: {
            title: '',
            image: '',
            route: "",  // is both the url for route handling and the related viewname ie 200.1
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
