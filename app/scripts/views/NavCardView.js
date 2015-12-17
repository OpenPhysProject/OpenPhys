OER.Views = OER.Views || {};

(function () {
    'use strict';

    /**
     * NavCardView is to add behavior to cards on nav map view.
     * 
     * @class NavCardView
     * @constructor
    */    
    OER.Views.NavCardView = Backbone.View.extend({
        
        templateWithContent: JST['app/scripts/templates/NavCardView.ejs'],
        templateEmpty: JST['app/scripts/templates/NavCardViewEmpty.ejs'],
        
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
            if(this.model.get("title")){
                 this.setElement(this.templateWithContent(this.model.toJSON()));
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