/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var OER = OER || {};
(function () {
    'use strict';
    
    var Loader =  function(){
        this.init = function(){
            if ( this._loader === null ) {
                this._loader = $('.loader');
            }
        };
        this.init();
    };
    var p = Loader.prototype;
    
    p._loader = null;
    
    p.show = function(){
       // this._loader.show();
        this._loader.removeClass('out');
        this._loader.addClass('in');
    };
    
    p.hide = function(){
       // this._loader.hide();
        this._loader.removeClass('in');
        this._loader.addClass('out');
    };
    
    OER.Loader =  Loader;
})();