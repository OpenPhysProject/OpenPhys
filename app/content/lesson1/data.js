(function (scope) {
  var s = {};

  s.title   = "The Electronic Structure of the Atom";
  s.preview = "/content/lesson1/assets/icon_atomicstructure.svg"; //svg image for tile
  s.route   = "ElectronicStructureOfTheAtom";
  // s.themeColor = "rgba(255, 100, 100, 1)";
  s.info = "";
  s.primaryPathIndex = 2;  // 3
  s.rowLeadNumber = 10;      // index for top row
  s.rowIncrement = 10;

  s.contentMapData = [
    // index 0
    {
        mapCards: [
            {title:"", route:""},
            {title:"", route:""},
            {title:"", route:""},
            {title:"", route:""},
            {title:"", route:""},
        ],
    },   
    // index 1
    {
        mapCards: [
            {route:"",                                          title:""},
            {route:"",                                          title:""},
            {route:"",                                          title:""},           
            {route:"CP",   template:"R1_ClassicalPhysics.ejs",  title:"Classical Physics (1800s)"},
            {route:"",                                          title:""},
            {route:"",                                          title:""},
            {route:"Waves",template:"R1_Travelling.ejs",        title:"Classical Travelling Waves", icons:["video"]},
            {route:"",                                          title:""},
            {route:"",                                          title:""},
            {route:"",                                          title:""},
        ],
    },  
    //index 2
    {
        mapCards: [
            {route:"",                                          title:""},
            {route:"",                                          title:""},
            {route:"",                                          title:""},          
            {route:"EM",           template:"R2_EM.ejs",        title:"Classical Electro - magnetism" },
            {route:"Angular",      template:"R2_Angular.ejs",   title:"Angular Momentum",    icons:["video"]},
            {route:"",                                          title:""},
            {route:"StandingWaves",template:"R2_Standing.ejs",  title:"Classical Standing Waves",  icons:["video"]},
            {route:"",                                          title:""}, 
            {route:"",                                          title:""},           
        ]
    }, 
    // index 3 
    {
        startNode: true,
        endNode: true,
        horizontalLinks: OER.linkType.strong,
        mapCards: [
           {route:"Models",    template:"R3_Models.ejs",    title:"Atomic Models",           icons:["interaction"]},
           {route:"Dalton",    template:"R3_Dalton.ejs",    title:"Dalton's Atoms (1805)",   icons:["interaction"]},
           {route:"Plum",                                   title:"Plum Pudding Atom (1904)"},  
           {route:"Rutherford",                             title:"Classical Rutherford Nuclear Atom (1910's)",  icons:["interaction"]}, 
           {route:"Bohr",                                   title:"Quantized Bohr Atom \n(1913)" }, 
           {route:"QM",                                     title:"Quantum Mechanics:\n De Broglie Matter Waves"},
           {route:"QAtomOne",                               title:"Electrons in the Quantum Atom",               icons:["video"]},
           {route:"Potential",                              title:"The Nuclear Potential in the Quantum Atom" }, 
           {route:"Orbitals",                               title:"More on Electron Orbitals" },
           {route:"Beyond",                                 title:"Beyond the Quantum Atom"}, 
           {route:"Quiz",                                   title:"Quiz",                    icons:["quiz"]},              
        ],
    },
    // index 4 
    {
        mapCards: [
           {route:"500_0",  title:""},
           {route:"500_1",  title:""},
           {route:"500_2",  title:""},
           {route:"Fail",   title:"Classical Atom - Failures" },
           {route:"",       title:""},
           {route:"SE",     title:"The Schrodinger Equation"},
           {route:"EMore",  title:"More on Electrons in the Quantum Atom"},
           {route:"",       title:""},
           {route:"Shell",  title:"Modern Electron Shell Model"},          
        ], 
    },
    // index 5  
    {
        mapCards: [
           {route:"",       title:""},
           {route:"",       title:""},
           {route:"",       title:""},
           {route:"Spectra", title:"Atomic Spectra & Rydberg Formula", }, 
           {route:"",       title:""},
           {route:"WF",     title:"The Wave Function", },
           {route:"",       title:""},
           {route:"",       title:""}, 
           {route:"Success", title:"Successes of Quantum Atom"},          
        ],
    },
      // index 6 
//      {
//        mapCards: [
//           {title:"", image:"", route:""},
//           {title:"", image:"", route:""},
//           {title:"", image:"", route:""},
//           {title:"", image:"", route:"700_3"}      
//        ],
//    },
    ];

    scope.lesson1 = s;

}(window.OER.data = window.OER.data || {}));
