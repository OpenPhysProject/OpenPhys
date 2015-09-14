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
            contentMap: null  // 2D array of NavCardCollection
        },

        getPrimaryContent: function() {
            return this.get('contentMap')[this.primaryPathIndex];
        },
        
        getContentByIndex: function(index){
            return this.get('contentMap')[index];
        }
        
    });

})();