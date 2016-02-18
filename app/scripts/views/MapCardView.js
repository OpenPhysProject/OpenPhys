OER.Views = OER.Views || {};

(function () {
    'use strict';

    /**
     * MapCardView is to add behavior to cards on navigation map view.
     * 
     * @class MapCardView
     * @constructor
    */    
    OER.Views.MapCardView = Backbone.View.extend({
        
        templateWithContent: JST['app/scripts/templates/MapCardView.ejs'],
        templateEmpty: JST['app/scripts/templates/MapCardViewEmpty.ejs'],
        
        events: {
            'click': 'setCurrent'
        },
        
        /**
         * setup view
         * @method initialize
         */
        initialize: function () {
            this.listenTo(this.model, 'change:current', this.onCurrentChange);
            this.render();
            if (this.model.get("current")) {
                this.$el.addClass("current");
            } 
            if (this.model.get("visited")) {
                this.setVisited();
            }
        },
        
        /**
         * create the related html using the template and model
         * @method render
         */
        render: function () {
            var t = this.model.get("title");
            if(t){
                this.setElement(this.templateWithContent(this.model.toJSON()));
                // add \n support to title
                t = t.replace(/\n/gi, "<br />");
                $(".map-card-title", this.$el).html(t);
                // set icons
            }
            else{
                this.setElement(this.templateEmpty(this.model.toJSON()));
            }
        },
        
        /**
         *  set the "visited" state of the model and html
         *  @method setVisited
         */
        setVisited: function () {
            this.model.set("visited", true);
            this.$el.addClass("visited");
        },
        
        /**
         * set current value on model when this is clicked
         * @method setCurrent
         */
        setCurrent: function () {
            if (!this.model.get("current") && this.model.get("title"))
                this.model.set("current", true);
        },
        
        /**
         * when current value changes in model, update class appropriate
         * @method onCurrentChange
         */
        onCurrentChange: function () {
            if (this.model.get("current")) {
                this.$el.addClass("current");
            } else {
                this.$el.removeClass("current");
                if (!this.model.get("visited"))
                    this.setVisited();
            }
        }
    });
    
})();