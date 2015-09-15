



(function (scope) {
    "use strict";
    // mirrored in styles/settings/transition.scss, must be kept in sync
    var t = {
        duration_loop: 1200,
        duration_longer: 800,
        duration_long: 500,
        duration_default: 300,
        duration_short: 100
    };


    var s = {};

    // Timing in milliseconds
    // OJR scope under timing or animation
    s.MAIN_TO_CONTENT = t.duration_longer;
    s.CLOSE_NAV = t.duration_default;
    s.FIRST_SHOW = t.duration_default;

    scope.settings = s;

}(window.OER = window.OER || {}));
