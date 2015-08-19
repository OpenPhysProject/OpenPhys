/*global OER, Backbone*/

OER.Collections = OER.Collections || {};

(function () {
    'use strict';

    OER.Collections.RLOCollection = Backbone.Collection.extend({

        model: OER.Models.RLOCollection

    });

})();
