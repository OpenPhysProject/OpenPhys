(function (scope) {
    "use strict";
    /**
     * Used to store timing settings that are used for animation / transitions
     * 
     * mirrored in styles/settings/animation.scss, must be kept in sync
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
    s.CLOSE_MAP = t.duration_default;       // delay before closing MapView after card selected
    s.TRANS_CONTENT = t.duration_long;
    
    s.LESSON_BASE_NAV_BUTTON = t.duration_longer;
            
    scope.settings = s;

}(window.OER = window.OER || {}));
