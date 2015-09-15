



(function (scope) {
    "use strict";
    var t = {
        duration_loop: 1200,
        duration_longer: 800,
        duration_main_to_content: 700,
        duration_long: 500,
        duration_default: 300,
        duration_close_nav: 250,
        duration_short: 100
    };


    var s = {};




    // Timing in milliseconds
    s.MAIN_TO_CONTENT = t.duration_main_to_content;
    s.CLOSE_NAV = t.duration_close_nav;

    scope.settings = s;

}(window.OER = window.OER || {}));
