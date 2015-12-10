(function (scope) {
    var s = {};
    
    s.title = "Pair Production";
    s.preview = "/content/RLO7/assets/PairProd.svg"; //svg image
    s.route = "Pair";
    s.info = "";
    s.jumpNav = true;
    s.primaryPathIndex = 1;
    
    s.contentMapData = [
    // index 0
        [
            {title: "", image: "", route: ""},
            {title: "", image: "", route: ""},            
            {title: "100.2 Matter & Antimatter", image: "", route: "Matter"},
        ],
    // index 1
        [
           {title: "200.0 Introduction", image: "", route: "Intro"},
           {title: "200.1 Pair Production Animation", image: "", route: "Anim"},           
           {title: "200.2 Pair Production Overview", image: "", route: "Pair"},
           {title: "200.3 Electron & Positron Production Event", image: "", route: "Prod"}, 
           {title: "200.4 Absorption of Dose", image: "", route: "Dose"}, 
           {title: "200.5 Annhiliation Event", image: "", route: "Ann"}, 
           {title: "200.6 Summary", image: "", route: "Summary"}, 
            {title: "200.6 Quiz", image: "", route: "Quiz"},          
        ],
    // index 2
        [
            {title: "", image: "", route: ""},
            {title: "", image: "", route: ""},
            {title: "", image: "", route: ""},
            {title: "300.3 Energy Balance in Production Event", image: "", route: "Balance"},           
            {title: "", image: "", route: ""},            
            {title: "300.5 Positron Emission Tomography (PET)", image: "", route: "PET"},
        ], 
    // index 3
        [
            {title: "", image: "", route: ""},
            {title: "", image: "", route: ""},
            {title: "", image: "", route: ""},
            {title: "400.3 Collision Cross Section", image: "", route: "Cross"}, 
            {title: "", image: "", route: ""},            
            {title: "", image: "", route: ""},
        ],
    // index 4
        [
            {title: "", image: "", route: ""},
            {title: "", image: "", route: ""},
            {title: "", image: "", route: ""},
            {title: "500.3 Energy Dependence of Production Event", image: "", route: "Energy"}, 
            {title: "", image: "", route: ""},            
            {title: "", image: "", route: ""},
        ],
     // index 5
        [
            {title: "", image: "", route: ""},
            {title: "", image: "", route: ""},
            {title: "", image: "", route: ""},
            {title: "600.3 Z Dependence of Production Event", image: "", route: "Z"}, 
            {title: "", image: "", route: ""},            
            {title: "", image: "", route: ""},
        ],       
    // index 6
        [
            {title: "", image: "", route: ""},
            {title: "", image: "", route: ""},
            {title: "", image: "", route: ""},
            {title: "700.3 Interactive Graph", image: "", route: "Graph"}, 
            {title: "", image: "", route: ""},            
            {title: "", image: "", route: ""},
        ],

    ];
    
    scope.RLO7 = s;

}(window.OER.data = window.OER.data || {}));
