(function (scope) {
    var s = {};
    
    s.title = "The Electronic Structure of the Atom";
    s.preview = "/content/lesson1/assets/AtomPlay.svg"; //svg image
    s.route = "ElectronicStructureOfTheAtom";
    s.info = "";
    s.primaryPathIndex = 2;  // 3
    s.rowLeadNumber = 10;      // index for top row
    s.rowIncrement = 10;
    
    s.contentMapData = [
        // index 0
        {
            mapCards: [
                {title:"", image:"", route:""},
                {title:"", image:"", route:""},
                {title:"", image:"", route:""},
                {title:"", image:"", route:""},
                {title:"", image:"", route:""},
            ],
        },   
        // index 1
        {
            mapCards: [
                {route:"",      title:"", image:""},
                {route:"",      title:"", image:""},
                {route:"",      title:"", image:""},           
                {route:"CP",    title:"Classical Physics (1800s)", image:"" },
                {route:"",      title:"", image:""},
                {route:"Waves", title:"Travelling Waves", image:"",icons:["video"]},
                {route:"",      title:"", image:"", },
                {route:"",      title:"", image:""},
                {route:"",      title:"", image:""},
            ],
        },  
        //index 2
        {
            mapCards: [
                {route:"",              title:""},
                {route:"",              title:""},
                {route:"",              title:""},          
                {route:"EM",            title:"Classical Electro - magnetism"},
                {route:"Angular",       title:"Angular Momentum",        icons:["video"]},
                {route:"StandingWaves", title:"Standing Waves",          icons:["video"]},
                {route:"",              title:""}, 
                {route:"QM",            title:"Quantum Mechanics"},           
            ]
        }, 
        // index 3 
        {
            startNode: true,
            endNode: true,
            horizontalLinks: OER.linkType.strong,
            mapCards: [
               {route:"Models",      title:"Atomic Models",     icons:["interaction"]},
               {route:"Dalton",      title:"Dalton's Atoms (1805)",                      icons:["interaction"]},
               {route:"Plum",        title:"Plum Pudding Atom (1904)"},  
               {route:"SolarSystem", title:"Classical Rutherford Nuclear Atom (1910's)",  icons:["interaction"]}, 
               {route:"Bohr",        title:"Quantized Bohr Atom \n(1913)" }, 
               {route:"QAtomOne",    title:"Quantum Atom 1: Matter Waves",               icons:["video"]},
               {route:"Potential",   title:"Quantum Atom 2: Nuclear Potential" }, 
               {route:"Trap",        title:"Quantum Atom 3: Trapped Waves" },
               {route:"Beyond",      title:"Beyond the Quantum Atom",                    icons:["quiz"]},          
            ],
        },
        // index 4 
        {
            mapCards: [
               {title:"",                           image:"", route:"500_0"},
               {title:"",                           image:"", route:"500_1"},
               {title:"",                           image:"", route:"500_2"},
               {title:"Classical Atom - Failures",  image:"", route:"Fail"},
               {title:"",                           image:"", route:"500_4"}, 
               {title:"",                           image:"", route:""},
               {title:"",                           image:"", route:"500_6"},
               {title:"Modern Electron Shell Model", image:"", route:"Shell"},          
            ], 
        },
        // index 4  
        {
            mapCards: [
               {title:"", image:"", route:""},
               {title:"", image:"", route:""},
               {title:"", image:"", route:""},
               {title:"Atomic Spectra & Rydberg Formula", image:"", route:"Spectra"}, 
               {title:"", image:"", route:""},
               {title:"", image:"", route:""},
               {title:"", image:"", route:""}, 
               {title:"Successes of Quantum Atom", image:"", route:"Success"},          
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
