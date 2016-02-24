(function (scope) {
    var s = {};
    
    s.title = "The Electronic Structure of the Atom";
    s.preview = "/content/lesson1/assets/AtomPlay.svg"; //svg image
    s.route = "ElectronicStructureOfTheAtom";
    s.info = "";
    s.primaryPathIndex = 2;
    
    s.contentMapData = [
        // index 0
        {
            mapCards: [
                {title:"", image: "", route:"100_0"},
                {title:"", image:"", route:""},
                {title:"", image:"", route:""},
                {title:"", image:"", route:""},
                {title:"", image:"", route:""},
            ],
        },   
        // index 0
        {
            mapCards: [
                {title:"", image:"", route:"200_0"},
                {title:"", image:"", route:"200_1"},
                {title:"", image:"", route:""},           
                {title:"Classical Physics (1800s)", number:"200.3", image:"", route:"200_3"},
                {title:"", image:"", route:""},
                {title:"Travelling Waves",          number:"200.5", image:"", route:"Waves", icons:["video"]},
                {title:"", image:"", route:""},
                {title:"", image:"", route:""},
                {title:"", image:"", route:""},
            ],
        },  
        //index 1
        {
            mapCards: [
                {title:"", image:"", route:""},
                {title:"", image:"", route:""},
                {title:"", image:"", route:""},          
                {title:"Classical Electro - magnetism",    number:"300.3", image:"", route:"300_3"},
                {title:"Angular Momentum",                 number:"300.4", image:"", route:"300_4"},
                {title:"Standing Waves", number:"300.5", image:"", route:"StandingWaves", icons:["video"]},
                {title:"", image:"", route:""}, 
                {title:"Quantum Mechanics", number:"300.7", image:"", route:"300_7"},           
            ],
        }, 
        // index 2 
        {
            startNode: true,
            endNode: true,
            horizontalLinks: OER.linkType.strong,
            mapCards: [
               {title:"Atomic Models",                              number:"400.0", image:"", route:"Models", icons:["interaction"]},
               {title:"Dalton's Atoms (1805)",                      number:"400.1", image:"", route:"Dalton", icons:["interaction"]},
               {title:"Plum Pudding Atom (1904)",                   number:"400.2", image:"", route:"400_2"},  
               {title:"Classical Rutherford Nuclear Atom (1910's)", number:"400.3", image:"", route:"SolarSystem",icons:["interaction"]}, 
               {title:"Quantized Bohr Atom \n(1913)",               number:"400.4", image:"", route:"400_4"}, 
               {title:"Quantum Atom 1: Matter Waves",               number:"400.5", image:"", route:"QAtomOne", icons:["video"]},
               {title:"Quantum Atom 2: Nuclear Potential",          number:"400.6", image:"", route:"NuclearPotential"}, 
               {title:"Quantum Atom 3: Trapped Waves",              number:"400.7", image:"", route:"400_7"},
               {title:"Beyond the Quantum Atom",                    number:"400.8", image:"", route:"400_8", icons:["quiz"]},          
            ],
        },
        // index 3 
        {
            mapCards: [
               {title:"",       image:"", route:"500_0"},
               {title:"",       image:"", route:"500_1"},
               {title:"",       image:"", route:"500_2"},
               {title:"Classical Atom - Failures", number:"500.3", image:"", route:"500_3"},
               {title:"", image:"", route:"500_4"}, 
               {title:"", image:"", route:""},
               {title:"", image:"", route:"500_6"},
               {title:"Modern Electron Shell Model", number:"500.7", image:"", route:"500_7"},          
            ], 
        },
        // index 4  
        {
            mapCards: [
               {title:"", image:"", route:""},
               {title:"", image:"", route:""},
               {title:"", image:"", route:""},
               {title:"Atomic Spectra & Rydberg Formula", number:"600.3", image:"", route:"600_3"}, 
               {title:"", image:"", route:""},
               {title:"", image:"", route:""},
               {title:"", image:"", route:""}, 
               {title:"Successes of Quantum Atom", number:"600.7", image:"", route:"600_7"},          
            ],
        },
          // index 6 
//          {
//            mapCards: [
//               {title:"", image:"", route:""},
//               {title:"", image:"", route:""},
//               {title:"", image:"", route:""},
//               {title:"", image:"", route:"700_3"}      
//            ],
//        },
    ];

    scope.lesson1 = s;

}(window.OER.data = window.OER.data || {}));
