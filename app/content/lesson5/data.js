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
                {route:"Optical",   template:"Optical.ejs",     title:"case 1:\n optical PE effect"},  
                {route:"Beam",      template:"BeamAtten.ejs",   title:"beam attenuation"},                
                {route:"Tissue",    template:"Tissue.ejs",      title:"case 2:\n X-ray PE in tissue" },
                {route:"Metal",    template:"XrayMetal.ejs",    title:"case 3:\n X-ray PE in metal" },               
                {route:"Quiz1",     template:"Quiz1.ejs",       title:"quiz: PE"  ,icons:["quiz"]},      
            ],    
        },
         // index 2,
         {
            mapCards: [ 
                {route:"Scenarios", template:"Scenarios.ejs", title:"scenarios"},               
                {route:"PhotonE", template:"PhotonEnergy.ejs", title:"dependence upon photon energy" },
                {route:"Electron",  template:"ElectronFate.ejs",   title:"fate of photoelectron"},               
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
    ];

    scope.lesson5 = s;

}(window.OER.data = window.OER.data || {}));
