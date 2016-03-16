(function (scope) {
  var s = {};

  s.title   = "The Electronic Structure of the Atom";
  s.preview = "/content/lesson1/assets/icon_atomicstructure.svg"; //svg image for tile
  s.themeColor = "#009688";
  s.route   = "ElectronicStructureOfTheAtom";
  s.info = "";
  s.primaryPathIndex = 2;  // 3
  s.rowLeadNumber = 100;      // index for top row
  s.rowIncrement  = 100;

  s.contentMapData = [   
    // index 0
    {
        mapCards: [
            {route:"",                                          title:""},
            {route:"",                                          title:""},
            {route:"",                                          title:""},           
            {route:"CP",   template:"R1_ClassicalPhysics.ejs",  title:"classical physics (1800s)"},
            {route:"Linear",  template:"R1_Linear.ejs",         title:"linear momentum"},
            {route:"",                                          title:""},
            {route:"Waves",template:"R1_Travelling.ejs",        title:"classical travelling waves", icons:["video"]},
            {route:"",                                          title:""},
            {route:"",                                          title:""},
            {route:"",                                          title:""},            
            {route:"Quiz_Classical", template:"Quiz_Classical.ejs", title:"quiz:\n classical physics",icons:["quiz"] },
        ],
    },  
    //index 1
    {
        mapCards: [
            {route:"",                                          title:""},
            {route:"",                                          title:""},
            {route:"",                                          title:""},          
            {route:"EM",           template:"R2_EM.ejs",        title:"classical electro - magnetism" },
            {route:"Angular",      template:"R2_Angular.ejs",   title:"angular momentum",    icons:["video"]},
            {route:"",                                          title:""},
            {route:"StandingWaves",template:"R2_Standing.ejs",  title:"classical standing waves",  icons:["video"]},
            {route:"",                                          title:""}, 
            {route:"",                                          title:""}, 
            {route:"",                                          title:""},            
            {route:"Quiz_Waves", template:"Quiz_Waves.ejs",     title:"quiz:\n waves",icons:["quiz"] },           
        ]
    }, 
    // index 2 
    {
        startNode: true,
        endNode: true,
        horizontalLinks: OER.linkType.strong,
        mapCards: [
           {route:"Models",    template:"R3_Models.ejs",    title:"atomic models",           icons:["interaction"]},
           {route:"Dalton",    template:"R3_Dalton.ejs",    title:"Dalton's atoms (1805)",   icons:["interaction"]},
           {route:"Plum",      template:"R3_Plum.ejs",      title:"plum pudding atom (1904)"},  
           {route:"Rutherford",template:"R3_Ruth.ejs",      title:"classical Rutherford nuclear atom (1910's)",  icons:["interaction"]}, 
           {route:"Bohr",      template:"R3_Bohr.ejs",      title:"quantized Bohr atom \n(1913)" }, 
           {route:"QM",        template:"R3_QM.ejs",        title:"quantum mechanics:\n De Broglie matter waves"},
           {route:"QAtomOne",  template:"R3_QAtomOne.ejs",  title:"electrons in the quantum atom",               icons:["video"]},
           {route:"Potential", template:"R3_Potential.ejs", title:"the nuclear potential in the quantum atom" }, 
           {route:"Orbitals",  template:"R3_Orbitals.ejs",  title:"more on electron orbitals" },
           {route:"Beyond",    template:"R3_Beyond.ejs",    title:"beyond the quantum atom"}, 
           {route:"Quiz_EarlyAtoms", template:"Quiz_EarlyAtoms.ejs",  title:"quiz: early atomic models",   icons:["quiz"]},              
        ],
    },
    // index 3 
    {
        mapCards: [
           {route:"500_0",  title:""},
           {route:"500_1",  title:""},
           {route:"500_2",  title:""},
           {route:"Fail",   template:"R4_Cracks.ejs",   title:"classical atom - failures" },
           {route:"",                                   title:""},
           {route:"SE",     template:"R4_SE.ejs",       title:"the Schrodinger equation"},
           {route:"EMore",  template:"R4_EMore.ejs",       title:"more on electrons in the quantum atom"},
           {route:"",       title:""},
           {route:"Shell",  template:"R4_Shell.ejs",    title:"modern electron shell model"},          
        ], 
    },
    // index 4  
    {
        mapCards: [
           {route:"",       title:""},
           {route:"",       title:""},
           {route:"",       title:""},
           {route:"Spectra", template:"R5_Spectra.ejs", title:"atomic spectra & Rydberg formula", }, 
           {route:"",       title:""},
           {route:"WF",    template:"R5_WF.ejs", title:"the wave function", },
           {route:"",       title:""},
           {route:"",       title:""}, 
           {route:"Success", template:"R5_Success.ejs", title:"successes of quantum atom"},          
        ],
    },

    ];

    scope.lesson1 = s;

}(window.OER.data = window.OER.data || {}));
