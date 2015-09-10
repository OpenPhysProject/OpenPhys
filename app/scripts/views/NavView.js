OER.Views = OER.Views || {};

(function () {
    'use strict';

    OER.Views.NavView = Backbone.View.extend({

        template: JST['app/scripts/templates/NavView.ejs'],

        events: {},

        initialize: function () {
            this.primaryPathIndex = this.model.getPrimaryPathIndex();
            this.contentMap = this.model.getContentMap();
            this.render();
            this.setNavCardViews();
        },

        render: function () {
            this.setElement(this.template(this.model.toJSON()));
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
                    navCardView = new OER.Views.NavCardView({model:this.contentMap[i].at(j)});
                    $(newdiv).append(navCardView.el);
                }
                this.$el.append(newdiv);
            }
        },
        
        toggleNav: function() {
            this.$el.toggleClass("out");
            this.$el.toggleClass("in");
        }

    });

})();