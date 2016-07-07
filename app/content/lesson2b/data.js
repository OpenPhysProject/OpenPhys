(function (scope) {
    var s = {};
    
    s.title = "Radioactivity";
    s.preview = "/content/lesson2b/assets/icon_radioactivity.svg"; //svg image
    s.themeColor = "#00BCD4";
    s.route = "Radioactivity";
    s.info = "";
    s.jumpNav = true;
    s.rowLeadNumber = 1;      // index for top row
    s.rowIncrement = 1;
    s.primaryPathIndex = 1;
    
    s.contentMapData = [
//                {route: "RadioactiveNuclides",  title: "radioactive nuclides",  group:"nuclide"},

        //index 0
        { 
            startNode: true,
            endNode: true,
            horizontalLinks: OER.linkType.strong,
            mapCards: [
                {                  title: "Properties of Nuclear Radiation \n - - - - - - - - - - - >>>",  route: "NuclearRadiation"},
                { group:"stability", title: "stable nuclides",  route: "StableNuclides"},
                { group:"nuclide ",  title: " unstable nuclides",  route: "UnstableNuclides"},
                { group:"alpha",       title: "alpha particle radiation",  route: "AlphaParticleRadiation"},
                { group:"beta ",  title: "beta particle radiation",  route: "BetaParticleRadiation"},
                { group:"excited", title: "gamma radiation",  route: "GammaRadiation"},
                { group:"world ",  title: "radiation in the world",  route: "RadiationInWorld"},
                { group:"quiz ",  title: "quiz: radioactivity",  route: "LevelQuiz"},
            ],
        },
        //index 1
        {
            startNode: true,
            endNode: true,
            horizontalLinks: OER.linkType.strong,
            mapCards: [
                {  title: "Nuclear Structure and Radioactive Decay\n - - - - - - - - - - - >>> ",       route: "StructureDecay"},
                { group:"stability",title: "binding energy and mass defect",        route: "BindingEnergy"},
                { group:"nuclide",  title: "activity and exponential decay",        route: "Exponential"},
                { group:"alpha",    title: "alpha decay process",                   route: "AlphaDecay"},
                { group:"beta",     title: "weak-force mediated nuclear change",    route: "NuclearChange"},
                { group:"excited", title: "Decay of Excited States",                route: "ExcitedStateDecay"},
                { group:"world",    title: "nuclear structure in the real world",   route: "NuclearStructureIRL"},
            ],
        },
        //index 2
        {
            mapCards: [
                {                  title: ""},
                { group:"",        title:"",  route:""},
                { group:"",        title:"",  route:""},
                { group:"alpha",   title: "decay chain / series",  route: "DecayChain"},
                { group:"beta",    title: "positron release or electron capture?",  route: "ReleaseCapture"},
                { group:"excited", title: "internal conversion of excitation",  route:"ICE"},
                { group:"world",   title: "links to other resources",  route: "OtherResourcesLinks"},
            ],
        },
        //index 3
        {
            mapCards: [
                { title: ""},
                {title:"",  route:""},
                {title:"",  route:""},
                {title:"",  route:""},
                {title: "",  route: "DecaySchemes"},
                { group:"electrons", title: "holes in an inner shell",  route: "InnerShellHoles"},
                {title:"",  route:""},
            ],
        },
        //index 4
        {
            mapCards: [
               {title: ""},
               {title:"",  route:""},
               {title:"",  route:""},
               {title:"",  route:""},
               {title:"",  route:""},
               { group:"electrons", title: "auger electons",  route: "Auger"},
               {title:"",  route:""},
            ],
        },
    ];
    
    scope.lesson2b = s;

}(window.OER.data = window.OER.data || {}));
