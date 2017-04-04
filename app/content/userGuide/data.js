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
          {route:"Guide1",    template:"Guide1.ejs",       title:"overview\n\n CLICK HERE NEXT!"},
          {route:"Nav",       template:"Nav.ejs",          title:"navigate with arrow keys" },
          {route:"Special",   template:"SpecialPages.ejs", title:"special pages" },
          {route:"Students",  template:"Students.ejs",     title:"openphys for students" }, 
          {route:"Educators", template:"Educators.ejs",    title:"openphys for educators" },           
          {route:"Credits",   template:"Credits.ejs",      title:"credits" },             
                  // {title:"the map icon",              route:"ContentMap"},
        ]
    },
    ];

    scope.userGuide = s;

}(window.OER.data = window.OER.data || {}));
