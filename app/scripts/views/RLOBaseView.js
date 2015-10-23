OER.Views = OER.Views || {};

(function () {
    'use strict';

    var p = {};
    var s = {};

    p.template = JST['app/scripts/templates/RLOBaseView.ejs'];

    p.title = null;     // dom title div
    p.navView = null;   // NavView
    p.content = null;   // Content specific views, ie OER.Views.RLO1.L200_2
    p.contentContainer = null;  // dom  div that holds content views
    p.currentView = "";     // string   the name/route of the the current view

    // nav
    p.rowInContentMap = 0;
    p.colInContentMap = 0;
    p.navLeft = null;
    p.navUp = null;
    p.navDown = null;
    p.navRight = null;

    p.events = {
        "click .rlo-base-menu-button": "toggleNav",
    };

    p.initialize = function (model) {
        this.model = model;
        this.render();
        this.title = $(".rlo-base-title", this.$el);
        this.contentContainer = $(".rlo-base-content-container", this.$el);
        this.navLeft = $(".ui-nav-left", this.$el);
        this.navUp = $(".ui-nav-up", this.$el);
        this.navDown = $(".ui-nav-down", this.$el);
        this.navRight = $(".ui-nav-right", this.$el);
    };

    p.updateContent = function (targetView) {
        if (this.content) {
            this.content.remove();
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
        MathJax.Hub.Queue(["Typeset",MathJax.Hub,this.content.el]);
        window.scrollTo(0,1);   // hide chrome on mobile browser
    };

    p.render = function () {
        this.setElement(this.template(this.model.toJSON()));
    };

    p.updateModel = function (newModel) {
        if (this.model) {
            this.model.off();
        }
        if (this.content) {
            this.content.remove();
            this.navView.destroy();
        }
        this.model = newModel;
        this.model.on("change:current", this.handleCurrentChange, this);

        this.title.html(this.model.get("title"));

        this.navView = new OER.Views.NavView({model: this.model});
        this.$el.append(this.navView.el);
    };

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

    p.toggleNav = function () {
        this.navView.toggleNav();
        window.scrollTo(0,1);   // hide chrome on mobile browser
    };

    p.out = function () {
        this.$el.removeClass("in");
        this.$el.addClass("out");
        $(document).off("keydown");
    };
    
    p.hide = function () {
        this.$el.addClass("hidden");
    };
    
    p._show = function () {
        this.$el.removeClass("out hidden");
        this.$el.addClass("in");
        $(document).on("keydown", this.handleKeydown.bind(this));
    };

    p.show = function () {
        this._show();
        window.scrollTo(0,1);
    };

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

    p.handleCurrentChange = function (model) {
        //var currentModel = this.model.get("lastCurrentCollection").findWhere({"current":true});
        var contentMap = this.model.get("contentMap");
        var currentNavCollection = this.model.get("lastCurrentCollection");
        this.rowInContentMap = contentMap.indexOf(currentNavCollection);
        this.colInContentMap = currentNavCollection.indexOf(model);

        this.navigateColumn(currentNavCollection, -1, 0, this.navLeft);
        this.navigateColumn(currentNavCollection, 1, 0, this.navRight);
        this.navigateRow(contentMap, -1, this.navUp);
        this.navigateRow(contentMap, 1, this.navDown);

        var targetView = model.get("route");
        this.updateContent(targetView);
    };

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

    p.navigateRow = function (contentMap, rowChange, navEl) {
        if (contentMap[this.rowInContentMap + rowChange]) {
            var navCollection = contentMap[this.rowInContentMap + rowChange];
            this.navigateColumn(navCollection, 0, rowChange, navEl);
        } else {
            this.navOut(navEl);
        }
    };

    p.navOut = function (navEl) {
        navEl.off("click");
        navEl.removeClass("in");
        navEl.addClass("out");
    };

    p.navigate = function (event) {
        var rowChange = event.data.row;
        var colChange = event.data.col;

        // we don't need to check if it exists because we do that when adding click listener
        var contentMap = this.model.get("contentMap");
        var targetModel = contentMap[this.rowInContentMap + rowChange].at(this.colInContentMap + colChange);
        targetModel.set("current", true);
    };

    p.handleKeydown = function (event) {
        var change = {data: {row: 0, col: 0}};
        switch (event.keyCode) {
            case 37:
                if (this.navLeft.hasClass("in")) {
                    change.data.col = -1;
                    this.navigate(change);
                }
                break;
            case 38:
                if (this.navUp.hasClass("in")) {
                    change.data.row = -1;
                    this.navigate(change);
                }
                break;
            case 39:
                if (this.navRight.hasClass("in")) {
                    change.data.col = 1;
                    this.navigate(change);
                }
                break;
            case 40:
                if (this.navDown.hasClass("in")) {
                    change.data.row = 1;
                    this.navigate(change);
                }
                break;
        }
    };

    OER.Views.RLOBaseView = Backbone.View.extend(p, s);
})();
