(function (scope) {
    var s = {};
    
    s.title = "E = mc2";
    s.preview = "/images/RLO3/Emc2.svg"; //svg image
    s.route = "Emc2";
    s.info = "";
    s.jumpNav = true;    
    s.primaryPathIndex = 0;
    
    s.contentMapData = [  

    // index 0,
        [
            {title:"100 Introduction",       image:"", route:"100_0"},
            {title:"100.1 Terms Explained",  image:"", route:"100_1"},
            {title:"100.2 E=mc2 as a Conversion", image:"", route:"100_2"}, 
            {title:"100.3 E=mc2 for a Particle at rest", image:"", route:"100_3"},           
            {title:"100.4 E=mc2 for an Electron", image:"", route:"100_4"}, 
            {title:"100.5 E=mc2 for a Photon?", image:"", route:"100_5"},  
            {title:"100.5 E=mc2 for a Nucleus", image:"", route:"100_6"},            
        ],        
               
    ];

    scope.RLO3 = s;

}(window.OER.data = window.OER.data || {}));
