(function (scope) {
    var s = {};
    
    s.title = "Compton X-Ray Scattering";
    s.preview = "/content/lesson6/assets/Compton.svg"; //svg image
    s.route = "Compton";
    s.info = "";
    s.jumpNav = true;    
    s.primaryPathIndex = 0;
    
    s.contentMapData = [  
        // index 0,
        {
            mapCards: [
                {title:"10.0 LEVEL: Introduction to X-Rays",      image:"", route:"10_0"},
                {title:"10.1 X-Rays as Particles", image:"", route:"Particles", icons:["interaction"]},
                {title:"",      image:"", route:"10_2"},
                {title:"", image:"", route:""},
                {title:"", image:"", route:""},            
                {title:"10.5 Level Summary (X-rays)", image:"", route:"10_5"},             
                {title:"10.6 Level Quiz", image:"", route:"10_6", icons:["quiz"]},           
            ],
        },
        // index 1,
        {
            startNode: true,
            endNode: true,
            horizontalLinks: OER.linkType.strong,
            mapCards: [
                {title:"100 - COMPTON SCATTERING - BASIC CONCEPTS", image:"", route:"100_0"},
                {title:"100.1 Photon Scattering",    image:"", route:"Incident", icons:["interaction"]},
                {title:"100.2 Scatterer Properties (& Rayleigh)",       image:"", route:"100_2"},  
                {title:"100.3 Scattered X-Ray",                   image:"", route:"100_3"}, 
                {title:"100.4 Compton Recoil Electron", image:"", route:"100_4"},
                {title:"100.5 Level Summary (Basic)", image:"", route:"100_5"},  
                {title:"100.6 Level Quiz (Basic)",    image:"", route:"100_6", icons:["quiz"]},             
            ], 
        },
         // index 2,
         {
            mapCards: [
                {title:"200 - THE SCATTERING ANGLE", image:"", route:"200_0"},
                {title:"200.1 Incident Photon Impact Parameter",          image:"", route:"200_1"},
                {title:"200.2 Scattering Angle and Scatterer",  image:"", route:"200_2"},  
                {title:"200.3 The Scattered Photon Angle", image:"", route:"200_3"}, 
                {title:"200.4 Angle & Recoil Electron (GRAPH)", image:"", route:"200_4"},
                {title:"200.5 Level Summary (Angle)",         image:"", route:"200_5"},  
                {title:"200.6 Level Quiz (Angle)",          image:"", route:"200_6", icons:["quiz"]},            
            ],
        },
         // index 3,
         {
            mapCards: [
                {title:"300 - INCIDENT PHOTON ENERGY",     image:"", route:"300_0"},
                {title:"300.1 Energy of Incident X-Ray",   image:"", route:"300_1"},
                {title:"300.2 Energy & Scatterer",         image:"", route:"300_2"},  
                {title:"300.3 Energy & Scattered Photon",  image:"", route:"300_3"}, 
                {title:"300.4 Energy & Recoil Electron",  image:"", route:"300_4"},          
                {title:"300.5 Level Summary (Energy)",    image:"", route:"300_5"},  
                {title:"300.6 Level Quiz (Energy)",       image:"", route:"300_6", icons:["quiz"]},            
            ],        
        },  
    ];

    scope.lesson6 = s;

}(window.OER.data = window.OER.data || {}));
