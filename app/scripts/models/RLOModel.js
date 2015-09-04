OER.Models = OER.Models || {};

(function () {
    'use strict';

    // Oer Model
    // ---------

    // Our basic **RLO** model has `title`, `preview`, `selected`, `info` attributes
    OER.Models.RLOModel = Backbone.Model.extend({

        url: '',

        // Default attributes for the oer
        // and ensure that each oer created `title` and `selected` keys.
        // Also, it might contain more extended info.
        defaults: {
            title: '',
            preview: '',
            selected: false,
            info: ''
        },

        // Initialize the model in JSON
        initialize: function() {
            //alert("Initialized");
            if( !this.get('contentMap') ) {
                this.set({
                    contentMap: []
                });
            }
            this.primaryPathIndex = null;
            return this;
        },

        
        setPrimaryPathIndex: function(index) {
            this.primaryPathIndex = index;
        },
        
        getPrimaryPathIndex: function() {
            return this.primaryPathIndex;
        },
        
        addContent: function( navCardCollection ) {
            this.get('contentMap').push( navCardCollection ) ;
        },
        
        getContentMap: function(){
            return this.get('contentMap');
        },
        
        getPrimaryContent: function() {
            return this.get('contentMap')[this.primaryPathIndex];
        },
        
        getContentByIndex: function(index){
            return this.get('contentMap')[index];
        },
        
        validate: function(attrs, options) {

        },

        parse: function(response, options)  {
            return response;
        }
    });

})();