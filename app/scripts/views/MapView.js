OER.Views = OER.Views || {};

(function () {
    'use strict';

    /**
     * MapView handles navigation map view rendering and behavior
     * 
     * @class MapView
     * @constructor
    */    
    OER.Views.MapView = Backbone.View.extend({
        template: JST['app/scripts/templates/MapView.ejs'],
        events: {},
        primaryPathIndex: null, // int  indicate which map collection is the primary path
        contentMap: null,       // array     contains map card collections
        closeTimeout: null,     // timeoutID    used for setTimeout to allow animation time before close
        mapCardViews: null,     // array of MapCardView, used to properly cleanup
        

        /**
         * setup view
         * @method initialize
         */        
        initialize: function () {
            this.loadContentMap();
            this.render();
            this.setMapCardViews();
        },
        
        /**
         * create the related html using the template and model
         * @method render
         */
        render: function () {
            this.setElement(this.template(this.model.toJSON()));
        },
        
        /**
         * set internal contentMap properties based on model
         * @method loadContentMap
         */
        loadContentMap: function () {
            this.contentMap = this.model.get("contentMap");
            this.primaryPathIndex = this.model.get("primaryPathIndex");
        },
        
        /**
         * parse contentMap data to create MapCards that make up map view
         * @method setMapCardViews
         */
        setMapCardViews: function () {
            this.mapCardViews = [];
            var mapCardView = null;
            var newdiv = null;
            for (var i = 0, l = this.contentMap.length; i < l; i++) {
                newdiv = JST['app/scripts/templates/MapCollection.ejs']({});
                var $newdiv = $(newdiv);
                if (i === this.primaryPathIndex) {
                    $newdiv.addClass("primary");
                }
                
                // show start node
                if (this.contentMap[i].startNode) {
                    var startNode = $(".map-start-node", $newdiv);
                    startNode.removeClass("out").addClass("in");
                }
                
                // add map cards
                for (var j = 0, n = this.contentMap[i].length; j < n; j++) {
                    var m = this.contentMap[i].at(j);
                    mapCardView = new OER.Views.MapCardView({model: m});
                    if (m.get("title") != "") {
                        mapCardView.$el.on("click", this.handleCardClick.bind(this));
                    }
                    $newdiv.append(mapCardView.el);
                    this.mapCardViews.push(mapCardView);
                }
                
                // add end node
                if (this.contentMap[i].endNode) {
                    //JCS var linkType = this.contentMap[i].at(this.contentMap.length-1).get("linkLeft");
                    // for maps with many rows e.g. nucleus, "linkLeft" became not defined, not allowing
                    // the end node to be set true. I hard coded the link type here and this seems to work.
                    // in my maps the end node is only used for main paths, so the linkType is always 'strong'.
                    var linkType = OER.linkType.strong;
                    var endNode = JST['app/scripts/templates/MapEndNode.ejs']({linkLeft: linkType});
                    $newdiv.append(endNode);
                }
                
                this.$el.append($newdiv);
            }
        },
        
        /**
         * close this view after a card is clicked (after timeout)
         * @method handleCardClick
         */
        handleCardClick: function () {
            window.clearTimeout(this.closeTimeout);
            this.closeTimeout = window.setTimeout(this.toggleNav.bind(this), OER.settings.CLOSE_MAP);
        },
        
        /**
         * Toggle visibility of this view.  Also centers view on currently
         * selected card
         * @method toggleNav
         */
        toggleNav: function () {
            this.$el.toggleClass("out");
            this.$el.toggleClass("in");
            this.trigger("toggleShow");
            var currentMapCard = $(".current", this.$el);
            if (this.$el.hasClass("in") && currentMapCard.length !== 0) {
                // container - card - scroll bars
                var w = this.$el.width() - currentMapCard.outerWidth(true) - 50;    
                var h = this.$el.height() - currentMapCard.outerHeight(true) - 25;
                var scale = 0.2; // css transform value
                this.$el.scrollTop(currentMapCard.position().top/scale  - h / 2 + this.$el.scrollTop());
                this.$el.scrollLeft(currentMapCard.position().left/scale - w / 2 + this.$el.scrollLeft() );
                /* OJR we could animate these, but it doesn't feel right to me
                this.$el.animate({ scrollTop: currentNavCard.position().top/scale  - h / 2 + this.$el.scrollTop(),
                                scrollLeft: currentNavCard.position().left/scale - w / 2 + this.$el.scrollLeft()
                            }, 700, "swing");
                            */
            }
        },
        
        /**
         * cleanup all subviews and this view
         * @method destroy
         */
        destroy: function () {
            for (var l = this.mapCardViews.length; l--; ) {
                this.mapCardViews[l].remove();
            }
            this.remove();
        }

    });

})();