var OER = OER || {};
(function () {
    'use strict';

    /**
     * Loader enables easy control of loading distractor.
     * 
     * @class Loader
     * @constructor
    */
    var Loader = function () {
        this.init();
    };
    var p = Loader.prototype;

    p._loader = null;   // jquery object, visual loading distractor
    
    /**
     * setup loader reference
     * @method init
     */
    p.init = function () {
        if (this._loader === null) {
            this._loader = $('.loader');
        }
    };
    
    /**
     * show loading distractor
     * @method show
     */
    p.show = function () {
        this._loader.removeClass('out');
        this._loader.addClass('in');
    };

    /**
     * hide loading distractor
     * @method hide
     */
    p.hide = function () {
        this._loader.removeClass('in');
        this._loader.addClass('out');
    };

    OER.Loader = Loader;
})();