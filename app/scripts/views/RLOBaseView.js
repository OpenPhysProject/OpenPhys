OER.Views = OER.Views || {};

(function () {
    'use strict';

    /**
     * RLOBaseView is the wrapper for all content and handles all related 
     * behavior including navigation, opening the nav map view, etc.
     * 
     * @class RLOBaseView
    */    
   
    var p = {};
    var s = {};

    p.template = JST['app/scripts/templates/RLOBaseView.ejs'];

    p.title = null;             // dom title div
    p.navView = null;           // NavView
    p.content = null;           // Content specific views, ie OER.Views.RLO1.L200_2
    p.contentUpdateBind = null; // bound function for handling events
    p.oldContent = null;        // content specific views that are being transitioned out
    p.contentContainer = null;  // dom  div that holds content views
    p.currentView = "";         // string   the name/route of the the current view

    // nav
    p.hammerObject = null;      // Hammer JS object used for swipe
    p.rowInContentMap = 0;
    p.colInContentMap = 0;
    p.navLeft = null;
    p.navUp = null;
    p.navDown = null;
    p.navRight = null;
    p.changeDirection = "";
    p.events = {
        "click .rlo-base-menu-button": "toggleNav",
    };

// Setup ********************************************************************
    p.initialize = function (model) {
        this.model = model;
        this.render();
        this.title = $(".rlo-base-title", this.$el);
        this.contentContainer = $(".rlo-base-content-container", this.$el);
        this.navLeft = $(".ui-nav-left", this.$el);
        this.navUp = $(".ui-nav-up", this.$el);
        this.navDown = $(".ui-nav-down", this.$el);
        this.navRight = $(".ui-nav-right", this.$el);
        this.contentUpdateBind = this.handleContentUpdate.bind(this);

        this.hammerObject = new Hammer(this.el, {
            touchAction: 'auto',
        });
        this.hammerObject.get('swipe').set({
            threshold: 60,
            direction: Hammer.DIRECTION_ALL
        });
    };

    /**
     * create the related html using the template and model
     * @method render
     */
    p.render = function () {
        this.setElement(this.template(this.model.toJSON()));
    };

// Model and Content changing ********************************************************************
    /**
     * Update content to targetView
     * @param {string} targetView
     * @method updateContent
     */
    p.updateContent = function (targetView) {
        if (this.content && !this.changeDirection) {
            this.content.remove();
            this.oldContent = null;
        } else {
            this.oldContent = this.content;
        }
        this.currentView = targetView;
        var RLOScope = this.model.get("route");
        // check if view exists, which should always be the case in final release
        if (OER.Views[RLOScope] && OER.Views[RLOScope][this.currentView]) {
            this.content = new OER.Views[RLOScope][this.currentView]();
        } else {
            this.content = new OER.Views.DefaultContentView();  // OJR possibly better to redirect to intro
        }
        OER.router.noEventGo(RLOScope + "/" + targetView);   // change if we change default view handling

        this.contentContainer.append(this.content.el);
        this.content.on("update", this.contentUpdateBind);
        
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, this.content.el]);
        window.scrollTo(0, 1);   // hide chrome on mobile browser

        this.handleContentTransaction();
        this.changeDirection = "";
    };
    
    /**
     * Handle when content is updated internally
     */
    p.handleContentUpdate = function() {
        this.contentContainer.append(this.content.el);
    };

    /**
     * Update the model of this view and update related subviews
     * @param {backbone Model} newModel
     * @method updateModel
     */
    p.updateModel = function (newModel) {
        if (this.model) {
            this.model.off();
        }
        if (this.content) {
            this.content.remove();
            this.content = null;
            this.navView.destroy();
        }
        this.model = newModel;
        this.model.on("change:current", this.handleCurrentChange, this);

        this.title.html(this.model.get("title"));

        this.navView = new OER.Views.NavView({model: this.model});
        this.$el.append(this.navView.el);
    };

    /**
     * update subviews when model is changed
     * @param {string} targetView
     * @method updateSubViews
     */
    p.updateSubViews = function (targetView) {
        var contentMap = this.model.get("contentMap");
        var navCardModel;
        for (var l = contentMap.length; l--; ) {
            navCardModel = contentMap[l].findWhere({"route": targetView});
            if (navCardModel) {
                if (navCardModel.get("current")) {
                    this.handleCurrentChange(navCardModel);
                } else {
                    navCardModel.set("current", true);
                }
                break;
            }
        }
    };

// In Outs  ********************************************************************
    /**
     * toggle visibility of nav map view
     * @method toggleNav
     */
    p.toggleNav = function () {
        this.navView.toggleNav();
        window.scrollTo(0, 1);   // hide chrome on mobile browser
    };

    /**
     * transition this view out and remove key and swipe listeners
     * @method out
     */
    p.out = function () {
        this.$el.removeClass("in");
        this.$el.addClass("out");
        $(document).off("keydown");
        this.hammerObject.off("swipeleft swiperight swipeup swipedown");
    };

    /**
     * make this view no longer visible
     * @method hide
     */
    p.hide = function () {
        this.$el.addClass("hidden");
    };

    /**
     * make this view visible and set timeout to add in class
     * @method _show
     */
    p._show = function () {
        this.$el.removeClass("hidden");
        setTimeout(this._showIn.bind(this), 33);
    };

    /**
     * transition view in and add key and swipe listeners
     * @method _showIn
     */
    p._showIn = function () {
        this.$el.removeClass("out");
        this.$el.addClass("in");
        $(document).off("keydown");
        this.hammerObject.off("swipeleft swiperight swipeup swipedown");
        $(document).on("keydown", this.handleKeydown.bind(this));
        this.hammerObject.on("swipeleft swiperight swipeup swipedown", this.handleSwipe.bind(this));
    };

    /**
     * show this view
     * @method show
     */
    p.show = function () {
        this._show();
        window.scrollTo(0, 1);
    };

    /**
     * like show, but triggers a first view experience
     * @method showIntro
     */
    p.showIntro = function () {
        this._show();
        this.navView.toggleNav();
        var navView = this.navView; // for hoisting in timeout
        var introModel = this.model.get("contentMap")[this.model.get("primaryPathIndex")].at(0);
        setTimeout(function () {
            OER.router.noEventReplaceHistoryGo("");
            introModel.set("current", true);
        }, OER.settings.FIRST_SHOW);
        setTimeout(function () {
            navView.toggleNav();
        }, OER.settings.FIRST_SHOW + OER.settings.CLOSE_NAV);
    };

// Navigation ********************************************************************
    /**
     * When the current content changes, trigger updating the content and the
     * nav icons
     * @param {backbone Model} model
     * @method handleCurrentChange
     */
    p.handleCurrentChange = function (model) {
        var contentMap = this.model.get("contentMap");
        var currentNavCollection = this.model.get("lastCurrentCollection");
        this.rowInContentMap = contentMap.indexOf(currentNavCollection);
        this.colInContentMap = currentNavCollection.indexOf(model);

        var jumpNav = this.model.get("jumpNav");
        if (jumpNav) {
            this.navigateColumnJump(currentNavCollection, -1, 0, this.navLeft);
            this.navigateColumnJump(currentNavCollection, 1, 0, this.navRight);
        } else {
            this.navigateColumn(currentNavCollection, -1, 0, this.navLeft);
            this.navigateColumn(currentNavCollection, 1, 0, this.navRight);
        }
        this.navigateRow(contentMap, -1, this.navUp);
        this.navigateRow(contentMap, 1, this.navDown);

        var targetView = model.get("route");
        this.updateContent(targetView);
    };

    /**
     * setup visibility of left and right nav icons based on surrounding content
     * and allowing you to jump over empty space
     * @param {backbone Collection} navCollection
     * @param {int} colChange
     * @param {int} rowChange
     * @param {jquery object} navEl
     * @method navigateColumnJump
     */
    p.navigateColumnJump = function (navCollection, colChange, rowChange, navEl) {
        var next = false;
        for (var i = this.colInContentMap + colChange; i < navCollection.length && i >= 0; i += colChange) {
            if (navCollection.at(i) && navCollection.at(i).get("title")) {
                next = true;
                break;
            }
        }
        if (next) {
            if (navEl.hasClass("out")) {
                navEl.on("click", {col: colChange, row: rowChange}, this.navigate.bind(this));
                navEl.removeClass("out");
                navEl.addClass("in");
            }
        } else {
            this.navOut(navEl);
        }
    };

    /**
     * setup visibility of left and right nav icons based on surrounding content
     * @param {backbone Collection} navCollection
     * @param {int} colChange
     * @param {int} rowChange
     * @param {jquery object} navEl
     * @method navigateColumn
     */
    p.navigateColumn = function (navCollection, colChange, rowChange, navEl) {
        if (navCollection.at(this.colInContentMap + colChange) && navCollection.at(this.colInContentMap + colChange).get("title")) {
            if (navEl.hasClass("out")) {
                navEl.on("click", {col: colChange, row: rowChange}, this.navigate.bind(this));
                navEl.removeClass("out");
                navEl.addClass("in");
            }
        } else {
            this.navOut(navEl);
        }
    };

    /**
     * setup visibility of up and down nav icons based on surrounding content
     * @param {array} contentMap
     * @param {int} rowChange
     * @param {jqeury object} navEl
     * @method navigateRow
     */
    p.navigateRow = function (contentMap, rowChange, navEl) {
        if (contentMap[this.rowInContentMap + rowChange]) {
            var navCollection = contentMap[this.rowInContentMap + rowChange];
            this.navigateColumn(navCollection, 0, rowChange, navEl);
        } else {
            this.navOut(navEl);
        }
    };

    /**
     * set a nav elements visibilty and click off
     * @param {jquery object} navEl
     * @method navOut
     */
    p.navOut = function (navEl) {
        navEl.off("click");
        navEl.removeClass("in");
        navEl.addClass("out");
    };

    /**
     * handle key presses and perform associated actions
     * @param {event} event
     * @method handleKeyDown
     */
    p.handleKeydown = function (event) {
        var change = {data: {row: 0, col: 0}};
        switch (event.keyCode) {
            // left arrow
            case 37:
                if (this.navLeft.hasClass("in")) {
                    change.data.col = -1;
                    this.navigate(change);
                }
                break;
                // up arrow
            case 38:
                if (this.navUp.hasClass("in")) {
                    change.data.row = -1;
                    this.navigate(change);
                }
                break;
                // right arrow
            case 39:
                if (this.navRight.hasClass("in")) {
                    change.data.col = 1;
                    this.navigate(change);
                }
                break;
                // down arrow
            case 40:
                if (this.navDown.hasClass("in")) {
                    change.data.row = 1;
                    this.navigate(change);
                }
                break;
                // m key
            case 77:
            case 109:
                this.toggleNav();
                break;
        }
    };

    /**
     * handle swipe events and perform associated key presses
     * @param {event} event
     * @method handleSwipe
     */
    p.handleSwipe = function (event) {
        if (this.navView.$el.hasClass("in")) { return; } 
        var change = {data: {row: 0, col: 0}};
        switch (event.type) {
            case 'swiperight':
                if (this.navLeft.hasClass("in")) {
                    change.data.col = -1;
                    this.navigate(change);
                }
                break;
            case 'swipedown':
                if ($(window).scrollTop() === 0 && this.navUp.hasClass("in")) {
                    change.data.row = -1;
                    this.navigate(change);
                }
                break;
            case 'swipeleft':
                if (this.navRight.hasClass("in")) {
                    change.data.col = 1;
                    this.navigate(change);
                }
                break;

            case 'swipeup':
                if ($(window).height() + $(window).scrollTop()
                        === $(document).height() && this.navDown.hasClass("in")) {
                    change.data.row = 1;
                    this.navigate(change);
                }
                break;
        }
    };

    /**
     * navigate to another page of content
     * @param {event} event
     * @method navigate
     */
    p.navigate = function (event) {
        var rowChange = event.data.row;
        var colChange = event.data.col;
        // we don't need to check if it exists because we do that when adding click listener
        var contentMap = this.model.get("contentMap");
        this.content.$el.addClass("old");
        this.determinChangeDirection(rowChange, colChange);
        var targetModel;
        if (colChange != 0 && this.model.get("jumpNav")) {
            var i = this.colInContentMap + colChange;
            var navCollection = contentMap[this.rowInContentMap];
            while (navCollection.at(i) && !navCollection.at(i).get("title")) {
                i += colChange;
            }
            targetModel = navCollection.at(i);
        } else {
            targetModel = contentMap[this.rowInContentMap + rowChange].at(this.colInContentMap + colChange);
        }
        targetModel.set("current", true);
    };

    /**
     * determines which direction to transition content
     * @param {int} rowChange
     * @param {int} colChange
     * @method determinChangeDirection
     */
    p.determinChangeDirection = function (rowChange, colChange) {
        // string   the direction of current view changing. 
        if (rowChange === 1) {
            this.changeDirection = "down";
        } else if (rowChange === -1) {
            this.changeDirection = "up";
        } else if (colChange === 1) {
            this.changeDirection = "next";
        } else {
            this.changeDirection = "prev";
        }
    };
    
    /**
     * transition content when changing content
     * @method handleContentTransaction
     */
    p.handleContentTransaction = function () {
        this.contentContainer.addClass(this.changeDirection);
        var contentContainer = this.contentContainer;
        var oldContent = this.oldContent;
        setTimeout(function () {
            if(oldContent) {oldContent.remove();}
            contentContainer.removeClass("down up next prev");
        }, OER.settings.TRANS_CONTENT);
    };


    OER.Views.RLOBaseView = Backbone.View.extend(p, s);
})();
