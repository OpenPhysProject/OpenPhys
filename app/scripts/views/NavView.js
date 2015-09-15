OER.Views = OER.Views || {};

(function () {
    'use strict';

    OER.Views.NavView = Backbone.View.extend({

        template: JST['app/scripts/templates/NavView.ejs'],

        events: {},
        
        /** 
         * Integer
         * indicate which nav collection is the primary path
         **/
        primaryPathIndex: null,
        /** 
         * Array
         * contains nav card collections.
         */
        contentMap: null,
        /**
         * timeoutID used for setTimeout to allow animation time before close
         */
        closeTimeout: null,

        initialize: function () {
            this.loadContentMap();
            this.render();
            this.setNavCardViews();
        },

        render: function () {
            this.setElement(this.template(this.model.toJSON()));
        },
        
        loadContentMap: function(){
            this.contentMap = this.model.get("contentMap");
            this.primaryPathIndex = this.model.get("primaryPathIndex");
        },
        
        setNavCardViews: function() {
            var navCardView = null;
            var newdiv = null;
            for (var i = 0, l = this.contentMap.length; i < l; i++ ) {
                for(var j = 0, n = this.contentMap[i].length; j < n; j++) {
                    if(j === 0) {
                        newdiv = document.createElement('div');
                        newdiv.className = 'nav-collection';
                        if(i === this.primaryPathIndex){
                            newdiv.className += ' primary';
                        }
                    }
                    var m = this.contentMap[i].at(j);
                    navCardView = new OER.Views.NavCardView({model:m});
                    if(m.get("title") != "" ) {
                        navCardView.$el.on("click", this.handleCardClick.bind(this));
                    }
                    $(newdiv).append(navCardView.el);
                }
                this.$el.append(newdiv);
            }
        },
        
        handleCardClick: function() {
            window.clearTimeout(this.closeTimeout);
            this.closeTimeout = window.setTimeout(this.toggleNav.bind(this), OER.settings.CLOSE_NAV);
        },
        
        toggleNav: function() {
            this.$el.toggleClass("out");
            this.$el.toggleClass("in");
        }

    });

})();