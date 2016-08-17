(function (scope) {
    var s = {};
    
    s.title = "Pair Production";
    s.preview = "/content/lesson7/assets/icon_pairproduction.svg"; //svg image
    s.themeColor = "#F44336";
    s.route = "Pair";
    s.info = "";
    s.jumpNav = true;
    s.primaryPathIndex = 1;
    s.rowLeadNumber = 1;
    s.rowIncrement = 1;
    
    s.contentMapData = [
        // index 0
        {
            mapCards: [
                {title: "", image: "", route: ""},
                {title: "", image: "", route: ""},            
                {title: "matter & antimatter", image: "", route: "Matter"},
            ],
        },
        // index 1
        {
            startNode: true,
            endNode: true,
            horizontalLinks: OER.linkType.strong,
            mapCards: [
               {title: "introduction", image: "", route: "Intro"},
               {title: "pair production animation", image: "", route: "Anim"},           
               {title: "pair production overview", image: "", route: "Pair"},
               {title: "electron & positron production event", image: "", route: "Prod"}, 
               {title: "absorption of dose", image: "", route: "Dose"}, 
               {title: "annhiliation event", image: "", route: "Ann"}, 
               {title: "summary", image: "", route: "Summary"}, 
               {title: "quiz", image: "", route: "Quiz", icons:["quiz"]},          
            ],
        },
        // index 2
        {
            mapCards: [
                {title: "", image: "", route: ""},
                {title: "", image: "", route: ""},
                {title: "", image: "", route: ""},
                {title: "energy balance in production event", image: "", route: "Balance"},           
                {title: "", image: "", route: ""},            
                {title: "positron emission tomography (PET)", image: "", route: "PET"},
            ], 
        },
        // index 3
        {
            mapCards: [
                {title: "", image: "", route: ""},
                {title: "", image: "", route: ""},
                {title: "", image: "", route: ""},
                {title: "cross section", image: "", route: "Cross"}, 
                {title: "", image: "", route: ""},            
                {title: "", image: "", route: ""},
            ],
        },
        // index 4
        {
            mapCards: [
                {title: "", image: "", route: ""},
                {title: "", image: "", route: ""},
                {title: "", image: "", route: ""},
                {title: "energy dependence of production event", image: "", route: "Energy"}, 
                {title: "", image: "", route: ""},            
                {title: "", image: "", route: ""},
            ],
        },
         // index 5
         {
            mapCards: [
                {title: "", image: "", route: ""},
                {title: "", image: "", route: ""},
                {title: "", image: "", route: ""},
                {title: "Z dependence of production event", image: "", route: "Z"}, 
                {title: "", image: "", route: ""},            
                {title: "", image: "", route: ""},
            ], 
        },
        // index 6
        {
            mapCards: [
                {title: "", image: "", route: ""},
                {title: "", image: "", route: ""},
                {title: "", image: "", route: ""},
                {title: "interactive graph", image: "", route: "Graph"}, 
                {title: "", image: "", route: ""},            
                {title: "", image: "", route: ""},
            ],
        },
        // index 7
        {
            mapCards: [
                {title: "", image: "", route: ""},
                {title: "", image: "", route: ""},
                {title: "", image: "", route: ""},
                {title: "quiz: production event", image: "", route: "Quiz", icons:["quiz"]}, 
                {title: "", image: "", route: ""},            
                {title: "", image: "", route: ""},
            ],
        },

    ];
    
    scope.lesson7 = s;

}(window.OER.data = window.OER.data || {}));
