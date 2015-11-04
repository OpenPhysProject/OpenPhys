(function (scope) {
    var s = {};
    
    s.title = "Instructions";
    s.preview = "/images/Intro/info-icon-01.svg"; //svg image
    s.route = "Instructions";
    s.info = "";
    s.primaryPathIndex = 0;
    
    s.contentMapData = [
    // index 0
        [
            {title:"Navigation", image: "", route:"Nav"},
            {title:"Content Map", image:"", route:"ContentMap"},
            {title:"OpenPhys Logo", image:"", route:"Logo"},
        ],
    ];

    scope.Intro = s;

}(window.OER.data = window.OER.data || {}));
