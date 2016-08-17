(function (scope) {
    var s = {};
    
    s.title = "User Guide (Start Here)";
    s.preview = "/content/userGuide/assets/icon_userguide.svg"; //svg image
    s.themeColor = "#3F51B5";
    s.route = "Instructions";
    s.primaryPathIndex = 0;
    s.horizontalLinks = OER.linkType.strong;
    s.rowLeadNumber = 1;
    s.rowIncrement = 1;
    
    s.contentMapData = [
    // index 0
    {
        horizontalLinks: OER.linkType.strong,
        startNode: true,
        endNode: true,
        mapCards: [
            {title:"the lesson concept map",    route:"Tile"},
            {title:"navigate with arrow keys",  route:"Nav"},
            {title:"the map icon",              route:"ContentMap"},
            {title:"exploring larger maps",     route:"LargerMaps"},   
        ]
    },
    ];

    scope.userGuide = s;

}(window.OER.data = window.OER.data || {}));
