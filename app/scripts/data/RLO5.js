(function (scope) {
    var s = {};
    
    s.title = "Photoelectric";
    s.preview = "/images/RLO5/PE.svg"; //svg image
    s.route = "PE";
    s.info = "";
    s.jumpNav = false;    
    s.primaryPathIndex = 0;
    
    s.contentMapData = [  

    // index 0,
        [
            {title:"100 Introduction",       image:"", route:"100_0"},
            {title:"100.1 Terms Explained",  image:"", route:"100_1"},
            {title:"100.2 E=mc2 as a Conversion between Units", image:"", route:"100_2"}, 
            {title:"100.3 E=mc2 for a Particle at Rest", image:"", route:"100_3"},           
            {title:"100.4 E=mc2 for Particles in Motion", image:"", route:"100_4"}, 
            {title:"100.5 E=mc2 and Binding Energy", image:"", route:"100_5"}, 
            {title:"100.6 E=mc2 for a Photon?", image:"", route:"100_6"},
            {title:"100.7 E=mc2 and Antimatter", image:"", route:"100_7"},  
            {title:"100.8 E=mc2 Summary", image:"", route:"100_8"},           
        ],        
                 
        
    ];

    scope.RLO5 = s;

}(window.OER.data = window.OER.data || {}));
