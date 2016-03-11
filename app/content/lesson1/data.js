(function (scope) {
  var s = {};

  s.title   = "The Electronic Structure of the Atom";
  s.preview = "/content/lesson1/assets/icon_atomicstructure.svg"; //svg image for tile
  s.themeColor = "#009688";
  s.route   = "ElectronicStructureOfTheAtom";
  s.info = "";
  s.primaryPathIndex = 2;  // 3
  s.rowLeadNumber = 100;      // index for top row
  s.rowIncrement = 100;

  s.contentMapData = [
    // index 0
//    {
//        mapCards: [
//            {title:"", route:""},
//            {title:"", route:""},
//            {title:"", route:""},
//            {title:"", route:""},
//            {title:"", route:""},
//        ],
//    },   
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
           {route:"Plum",      template:"R3_Plum.ejs",      title:"Plum Pudding Atom (1904)"},  
           {route:"Rutherford",template:"R3_Ruth.ejs",      title:"Classical Rutherford Nuclear Atom (1910's)",  icons:["interaction"]}, 
           {route:"Bohr",      template:"R3_Bohr.ejs",      title:"Quantized Bohr Atom \n(1913)" }, 
           {route:"QM",        template:"R3_QM.ejs",        title:"Quantum Mechanics:\n De Broglie Matter Waves"},
           {route:"QAtomOne",  template:"R3_QAtomOne.ejs",  title:"Electrons in the Quantum Atom",               icons:["video"]},
           {route:"Potential", template:"R3_Potential.ejs", title:"The Nuclear Potential in the Quantum Atom" }, 
           {route:"Orbitals",  template:"R3_Orbitals.ejs",  title:"More on Electron Orbitals" },
           {route:"Beyond",    template:"R3_Beyond.ejs",    title:"Beyond the Quantum Atom"}, 
           {route:"Quiz",      template:"R3_Quiz.ejs",      title:"Quiz",   icons:["quiz"]},              
        ],
    },
    // index 4 
    {
        mapCards: [
           {route:"500_0",  title:""},
           {route:"500_1",  title:""},
           {route:"500_2",  title:""},
           {route:"Fail",   template:"R4_Cracks.ejs",   title:"Classical Atom - Failures" },
           {route:"",                                   title:""},
           {route:"SE",     template:"R4_SE.ejs",       title:"The Schrodinger Equation"},
           {route:"EMore",  template:"R4_EMore.ejs",       title:"More on Electrons in the Quantum Atom"},
           {route:"",       title:""},
           {route:"Shell",  template:"R4_Shell.ejs",    title:"Modern Electron Shell Model"},          
        ], 
    },
    // index 5  
    {
        mapCards: [
           {route:"",       title:""},
           {route:"",       title:""},
           {route:"",       title:""},
           {route:"Spectra", template:"R5_Spectra.ejs", title:"Atomic Spectra & Rydberg Formula", }, 
           {route:"",       title:""},
           {route:"WF",    template:"R5_WF.ejs", title:"The Wave Function", },
           {route:"",       title:""},
           {route:"",       title:""}, 
           {route:"Success", template:"R5_Success.ejs", title:"Successes of Quantum Atom"},          
        ],
    },

    ];

    scope.lesson1 = s;

}(window.OER.data = window.OER.data || {}));
