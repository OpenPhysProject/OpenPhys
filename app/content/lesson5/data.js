(function (scope) {
    var s = {};
    
    s.title = "Photoelectric Effect";
    s.preview = "/content/lesson5/assets/icon_photoelectriceffect.svg"; //svg image
    s.themeColor = "#FFC107";
    s.route = "PE";
    s.info = "";
    s.jumpNav = false;    
    s.primaryPathIndex = 0;
    s.rowLeadNumber = 1;
    s.rowIncrement = 1;
    
    s.contentMapData = [  
        // index 0,
          {
            mapCards: [    
                {route:"QLight",  template:"QuantumLight.ejs", title:"quantum light"}, 
                {route:"100_1", title:"" }, 
                {route:"100_2", title:"" },                 
                {route:"History", template:"History.ejs",      title:"Einstein and Millikan"},
                {route:"Beam",    template:"BeamAtten.ejs",   title:"beam attenuation"},                
            ],                  
        },       
        // index 1
        {
            startNode: true,
            endNode: true, 
            horizontalLinks: OER.linkType.strong,
            mapCards: [
                {route:"Hit",       template:"PhotonHitsAtom.ejs", title:"photon hits atom" },
                {route:"Conditions",template:"Conditions.ejs",     title:"conditions for PE interaction" }, 
                {route:"Results",  template:"Results.ejs",      title:"consequences of PE interaction"},            
                {route:"Optical",   template:"Optical.ejs",     title:"optical PE effect\n (scenario 1)"},  
                {route:"Tissue",    template:"Tissue.ejs",      title:"x-ray PE in tissue\n(scenario 2)" },
                {route:"Metal",    template:"XrayMetal.ejs",    title:"x-ray PE in metal\n (scenario 3)" }, 
                {route:"Summary",   template:"Summary.ejs",     title:"PE summary" },               
                {route:"Quiz1",     template:"Quiz1.ejs",       title:"quiz: PE"  ,icons:["quiz"]},      
            ],    
        },
         // index 2,
         {
            mapCards: [ 
                {route:"Scenarios", template:"Scenarios.ejs", title:"three scenarios"},               
                {route:"PhotonE", template:"PhotonEnergy.ejs", title:"dependence upon photon energy" },
                {route:"Electron",  template:"ElectronFate.ejs",   title:"fate of photoelectron"}, 
                {route:"200_0", title:"" },
                {route:"200_1", title:"" },
                {route:"KEdge", template:"KEdge.ejs", title:"K shell effects" },
                {route:"PEvsC", template:"PEvsCompton.ejs", title:"review:\n PE vs. Compton" },
            ],                  
        },
         // index 3,
         {
            mapCards: [ 
                {route:"300_0", title:"" }, 
                {route:"AtomicZ", template:"AtomicZ.ejs", title:"dependence upon Z" },  
                {route:"Atom",    template:"AtomFate.ejs", title:"fate of excited atom"},              
            ],                  
        },   
         // index 4,
         {
            mapCards: [ 
                {route:"400_0", title:"" }, 
                {route:"400_1", title:"" },  
                {route:"Auger", template:"auger.ejs", title:"auger electrons"},              
            ],                  
        },        
    ];

    scope.lesson5 = s;

}(window.OER.data = window.OER.data || {}));
