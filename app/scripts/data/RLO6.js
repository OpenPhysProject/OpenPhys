(function (scope) {
    var s = {};
    
    s.title = "Compton X-Ray Scattering";
    s.preview = "/images/RLO1/AtomPlay.svg"; //svg image
    s.route = "Compton";
    s.info = "";
    s.jumpNav = true;    
    s.primaryPathIndex = 0;
    
    s.contentMapData = [  
    // index 0,
        [
            {title:"10.0 LEVEL: Introduction",      image:"", route:"10_0"},
            {title:"10.1 X-Rays as Particles", image:"", route:"10_1"},
            {title:"",      image:"", route:"10_2"},
            {title:"", image:"", route:""},
            {title:"", image:"", route:""},
            {title:"", image:"", route:""},
            {title:"", image:"", route:""},             
            {title:"10.7 Summary", image:"", route:"10_7"},             
            {title:"10.8 Level Quiz", image:"", route:"10_8"},           
        ],
 
    // index 1,
        [
            {title:"100.0 LEVEL: Single Photon", image:"", route:"100_0"},
            {title:"100.1 Incident X-Ray",          image:"", route:"100_1"},
            {title:"100.2 Absorber",       image:"", route:"100_2"},  
            {title:"100.3 Scattered X-Ray", image:"", route:"100_3"}, 
            {title:"100.4 Recoil Electron", image:"", route:"100_4"},
            {title:"100.5 Ionized Atom", image:"", route:"100_5"},
            {title:"", image:"", route:"100_6"},
            {title:"100.7 Summary", image:"", route:"100_7"},  
            {title:"100.8 Quiz", image:"", route:"100_8"},             
        ], 
       
     // index 2,
        [
            {title:"200.0 LEVEL: Single Energy. Multiple Scattering Angles", image:"", route:"200_0"},
            {title:"200.1 Incident X-Ray",          image:"", route:"200_1"},
            {title:"200.2 Absorber",       image:"", route:"200_2"},  
            {title:"200.3 Scattered X-Ray", image:"", route:"200_3"}, 
            {title:"200.4 Recoil Electron", image:"", route:"200_4"},
            {title:"200.5 Ionized Atom", image:"", route:"200_5"},             
            {title:"", image:"", route:""},
            {title:"200.7 Summary, Multi-Angle", image:"", route:"200_7"},  
            {title:"200.8 Quiz, Multi-Angle", image:"", route:"200_8"},            
        ],
        
     // index 3,
        [
            {title:"300.0 LEVEL: Multiple Incident Energy & Scattering Angles", image:"", route:"300_0"},
            {title:"300.1 Incident X-Ray, Multi-Energy & Angle",          image:"", route:"300_1"},
            {title:"300.2 Absorber, Multi-Energy & Angle",       image:"", route:"300_2"},  
            {title:"300.3 Scattered X-Ray, Multi-Energy & Angle", image:"", route:"300_3"}, 
            {title:"300.4 Recoil Electron, Multi-Energy & Angle", image:"", route:"300_4"},
            {title:"300.5 Ionized Atom, Multi-Energy & Angle", image:"", route:"300_5"},             
            {title:"", image:"", route:""},          
            {title:"300.7 Summary, Multi-Energy & Angle", image:"", route:"300_7"},  
            {title:"300.8 Quiz, Multi-Energy & Angle", image:"", route:"300_8"},            
        ],        
               
    ];

    scope.RLO6 = s;

}(window.OER.data = window.OER.data || {}));
