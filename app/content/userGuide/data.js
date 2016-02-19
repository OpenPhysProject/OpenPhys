(function (scope) {
    var s = {};
    
    s.title = "User Guide (Start Here)";
    s.preview = "/content/userGuide/assets/info-icon-01.svg"; //svg image
    s.route = "Instructions";
    s.primaryPathIndex = 0;
    s.horizontalLinks = OER.linkType.strong;
    
    s.contentMapData = [
    // index 0
    {
        horizontalLinks: OER.linkType.strong,
        startNode: true,
        endNode: true,
        mapCards: [
            {title:"Lesson Tiles",  image:"", route:"Tile"},
            {title:"Arrow Keys",    image:"", route:"Nav"},
            {title:"Map Icon",      image:"", route:"ContentMap"},
            {title:"Larger Maps",   image:"", route:"LargerMaps"}, 
            {title:"OpenPhys Logo", image:"", route:"MapLogo"},         
        ]
    },
    ];

    scope.userGuide = s;

}(window.OER.data = window.OER.data || {}));
