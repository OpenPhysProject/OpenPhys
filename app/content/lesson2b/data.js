(function (scope) {
    var s = {};
    
    s.title = "Radioactivity";
    s.preview = "/content/lesson2b/assets/icon_radioactivity.svg"; //svg image
    s.themeColor = "#4D1B52";
    s.route = "Radioactivity";
    s.info = "";
    s.primaryPathIndex = 2;  // 3
    s.rowLeadNumber = 1;      // index for top row
    s.rowIncrement  = 1;
    
    s.contentMapData = [
//                {route: "RadioactiveNuclides",  title: "radioactive nuclides",  group:"nuclide"},

        //index 0
        {
           mapCards: [
                {route:"",                                          title:""},
                {route:"",                                          title:""},
                { group:"nuclide",  title: "intro to exponentials",        route: "ExponentialIntro", template:"exp_intro.ejs"},
           ],
        },

        //index 1
        {             startNode: true,
            //endNode: true,
            horizontalLinks: OER.linkType.strong,
            mapCards: [
                { title: "Properties of Nuclear Radiation \n - - - - - - - - - - - >>>",  route: "NuclearRadiation", template:"properties.ejs"},
                { group:"stability", title: "stable nuclides",  route: "StableNuclides", template:"stable_nuclides.ejs"},
                { group:"nuclide ",  title: " unstable nuclides",  route: "UnstableNuclides", template:"unstable_nuclides.ejs"},
                { group:"alpha",       title: "alpha particle radiation",  route: "AlphaParticleRadiation", template:"R1_alpha.ejs"},
                { group:"beta ",  title: "beta particle radiation",  route: "BetaParticleRadiation", template:"R1_beta.ejs"},
                { group:"excited", title: "gamma radiation",  route: "GammaRadiation", template:"R1_gamma.ejs"},
                { group:"world ",  title: "radiation in the world",  route: "RadiationInWorld", template:"rad_world.ejs"},
                { group:"quiz ",  title: "quiz: radioactivity",  route: "LevelQuiz", template:"quiz_rad.ejs", icons:["quiz"]},
            ],
        },
        //index 2
        {            startNode: true,
            //endNode: true,
            horizontalLinks: OER.linkType.strong,
            mapCards: [
                {  title: "Nuclear Structure and Radioactive Decay\n - - - - - - - - - - - >>> ",       route: "StructureDecay", template:"structure_decay.ejs"},
                { group:"stability",title: "binding energy and mass defect",        route: "BindingEnergy", template:"binding.ejs"},
                { group:"nuclide",  title: "activity and exponential decay",        route: "Exponential", template:"activity_decay.ejs"},
                { group:"alpha",    title: "alpha decay process",                   route: "AlphaDecay", template:"R2_alpha.ejs"},
                { group:"beta",     title: "weak-force mediated nuclear change",    route: "NuclearChange", template:"R2_beta.ejs"},
                { group:"excited", title: "Decay of Excited States",                route: "ExcitedStateDecay", template:"R2_gamma.ejs"},
                { group:"world",    title: "nuclear structure in the real world",   route: "NuclearStructureIRL", template:"structure_world.ejs"},
                { group:"summary",    title: "summary of decay processes",   route: "Summary", template:"summary.ejs"},
                { group:"quiz",    title: "quiz: radioactivity 2",   route: "LevelQuiz2", template:"quiz_rad_2.ejs", icons:["quiz"]},
            ],
        },
        //index 3
        {
            mapCards: [
                {route:"",                                          title:""},
                {route:"",                                          title:""},
                {route:"",                                          title:""},
                { group:"alpha",   title: "decay chain / series",  route: "DecayChain", template:"R3_alpha.ejs"},
                { group:"beta",    title: "positron release or electron capture?",  route: "ReleaseCapture", template:"R3_beta.ejs"},
                { group:"excited", title: "internal conversion of excitation",  route:"ICE", template:"R3_gamma.ejs"},
                { group:"world",   title: "links to other resources",  route: "OtherResourcesLinks", template:"links.ejs"},
            ],
        },
        //index 4
        {
            mapCards: [
                { title: ""},
                {title:"",  route:""},
                {title:"",  route:""},
                {title:"",  route:""},
                {title: "",  route: "DecaySchemes"},
                { group:"electrons", title: "holes in an inner shell",  route: "InnerShellHoles", template:"holes_inner.ejs"},
                {title:"",  route:""},
            ],
        },
        //index 5
        {
            mapCards: [
               {title: ""},
               {title:"",  route:""},
               {title:"",  route:""},
               {title:"",  route:""},
               {title:"",  route:""},
               { group:"electrons", title: "auger electons",  route: "Auger", template:"auger.ejs"},
               {title:"",  route:""},
            ],
        },
    ];
    
    scope.lesson2b = s;

}(window.OER.data = window.OER.data || {}));
