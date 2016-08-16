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
                {title: "Matter & Antimatter", image: "", route: "Matter"},
            ],
        },
        // index 1
        {
            startNode: true,
            endNode: true,
            horizontalLinks: OER.linkType.strong,
            mapCards: [
               {title: "Introduction", image: "", route: "Intro"},
               {title: "Pair Production Animation", image: "", route: "Anim"},           
               {title: "Pair Production Overview", image: "", route: "Pair"},
               {title: "Electron & Positron Production Event", image: "", route: "Prod"}, 
               {title: "Absorption of Dose", image: "", route: "Dose"}, 
               {title: "Annhiliation Event", image: "", route: "Ann"}, 
               {title: "Summary", image: "", route: "Summary"}, 
                {title: "Quiz", image: "", route: "Quiz", icons:["quiz"]},          
            ],
        },
        // index 2
        {
            mapCards: [
                {title: "", image: "", route: ""},
                {title: "", image: "", route: ""},
                {title: "", image: "", route: ""},
                {title: "Energy Balance in Production Event", image: "", route: "Balance"},           
                {title: "", image: "", route: ""},            
                {title: "Positron Emission Tomography (PET)", image: "", route: "PET"},
            ], 
        },
        // index 3
        {
            mapCards: [
                {title: "", image: "", route: ""},
                {title: "", image: "", route: ""},
                {title: "", image: "", route: ""},
                {title: "Cross Section", image: "", route: "Cross"}, 
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
                {title: "Energy Dependence of Production Event", image: "", route: "Energy"}, 
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
                {title: "Z Dependence of Production Event", image: "", route: "Z"}, 
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
                {title: "Interactive Graph", image: "", route: "Graph"}, 
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
                {title: "Quiz: Production Event", image: "", route: "Quiz", icons:["quiz"]}, 
                {title: "", image: "", route: ""},            
                {title: "", image: "", route: ""},
            ],
        },

    ];
    
    scope.lesson7 = s;

}(window.OER.data = window.OER.data || {}));
