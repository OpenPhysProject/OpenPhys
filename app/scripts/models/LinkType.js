(function (scope) {
    "use strict";
    /**
     * Link types used for navigation map connections between mapcards.
     * 
     * Consists of 3 types of links
     * - none meaning no visual link
     * - weak meaning a thin line
     * - strong meaning a thick line
     * 
     * mirrored in styles
     * 
     * @class linkType
     * @constructor
     */
    var s = {};

    s.weak = "weak";
    s.strong = "strong";
    s.none = "none";
    
    scope.linkType = s;

}(window.OER = window.OER || {}));
