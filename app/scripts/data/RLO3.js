(function (scope) {
    var s = {};
    
    s.title = "E = mc2";
    s.preview = "/images/RLO3/Emc2.svg"; //svg image
    s.route = "Emc2";
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
 
    // index 1,
        [
            {title:"", image:"", route:"200_0"},
            {title:"", image:"", route:"200_1"}, 
            {title:"", image:"", route:"200_2"},           
            {title:"200.3 E=mc2 for an Electron at Rest",  image:"", route:"200_3"},  
            {title:"200.4 E=mc2 for Classical Motion",  image:"", route:"200_4"}, 
            {title:"200.5 E=mc2 for Bound Electrons",  image:"", route:"200_5"},            
        ],  
        
     // index 2,
        [
            {title:"", image:"", route:"300_0"},
            {title:"", image:"", route:"300_1"}, 
            {title:"", image:"", route:"300_2"},           
            {title:"300.3 E=mc2 for a Proton at Rest",  image:"", route:"300_3"},
            {title:"300.4 E=mc2 for Relativistic Motion", image:"", route:"300_4"},            
            {title:"300.5 E=mc2 for a Nucleus", image:"", route:"300_5"},           
        ],                 
        
    ];

    scope.RLO3 = s;

}(window.OER.data = window.OER.data || {}));
