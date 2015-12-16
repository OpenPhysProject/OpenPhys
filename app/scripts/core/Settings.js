(function (scope) {
    "use strict";
    /**
     * Used to store timing settings that are used for animation / transitions
     * 
     * mirrored in styles/settings/transition.scss, must be kept in sync
     * 
     * @class settings
     * @constructor
     */
    // Timing in milliseconds
    // OJR scope under timing or animation if we add more settings
    var t = {
        duration_loop: 1200,
        duration_longer: 800,
        duration_long: 500,
        duration_default: 300,
        duration_short: 100
    };

    var s = {};

    s.MAIN_TO_CONTENT = t.duration_default; // delay when switching between home/tile view and base/content view
    s.CLOSE_NAV = t.duration_default;       // delay before closing NavView after card selected
    s.FIRST_SHOW = t.duration_default;      // delay before a nav card is selected
    s.TRANS_CONTENT = t.duration_long;
    
    scope.settings = s;

}(window.OER = window.OER || {}));
