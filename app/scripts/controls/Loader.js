/* Loader control */

var OER = OER || {};
(function () {
    'use strict';

    var Loader = function () {
        this.init();
    };
    var p = Loader.prototype;

    p._loader = null;
    
    p.init = function () {
        if (this._loader === null) {
            this._loader = $('.loader');
        }
    };
    
    p.show = function () {
        this._loader.removeClass('out');
        this._loader.addClass('in');
    };

    p.hide = function () {
        this._loader.removeClass('in');
        this._loader.addClass('out');
    };

    OER.Loader = Loader;
})();