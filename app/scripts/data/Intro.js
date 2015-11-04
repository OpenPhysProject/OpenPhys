(function (scope) {
    var s = {};
    
    s.title = "Instructions";
    s.preview = "/images/RLO1/Charge_and_Field_001.png"; //svg image
    s.route = "Instructions";
    s.info = "";
    s.primaryPathIndex = 0;
    
    s.contentMapData = [
    // index 0
        [
            {title:"Navigation", image: "", route:"Nav"},
            {title:"Content Map", image:"", route:"ContentMap"},
            {title:"Open Phys Logo", image:"", route:"Logo"},
        ],
    ];

    scope.Intro = s;

}(window.OER.data = window.OER.data || {}));
