(function (scope) {
    var s = {};
    
    s.title = "User Guide (Start Here)";
    s.preview = "/content/userGuide/assets/info-icon-01.svg"; //svg image
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
            {title:"The Lesson Concept Map",    route:"Tile"},
            {title:"Navigate with Arrow Keys",  route:"Nav"},
            {title:"The Map Icon",              route:"ContentMap"},
            {title:"Exploring Larger Maps",     route:"LargerMaps"}, 
            {title:"The OpenPhys Logo",         route:"MapLogo"},         
        ]
    },
    ];

    scope.userGuide = s;

}(window.OER.data = window.OER.data || {}));
