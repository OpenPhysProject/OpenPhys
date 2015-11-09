(function (scope) {
    var s = {};
    
    s.title = "User Guide (Start Here)";
    s.preview = "/images/Intro/info-icon-01.svg"; //svg image
    s.route = "Instructions";
    s.info = "";
    s.primaryPathIndex = 0;
    
    s.contentMapData = [
    // index 0
        [
            {title:"Arrow Keys", image: "", route:"Nav"},
            {title:"Map Icon", image:"", route:"ContentMap"},
             {title:"Larger Maps", image:"", route:"LargerMaps"}, 
             {title:"OpenPhys Logo", image:"", route:"Logo"},         
        ],
        // index 1 OJR this is just testing and will be removed
        [
            {title:"Animation", image: "", route:"Animation"},
        ]
    ];

    scope.Intro = s;

}(window.OER.data = window.OER.data || {}));
