(function (scope) {
    var s = {};
    
    s.title = "Radioactivity";
    s.preview = "/content/lesson2/assets/icon_radioactivity.svg"; //svg image
    s.themeColor = "#00BCD4";
    s.route = "Radioactivity";
    s.info = "";
    s.jumpNav = true;
    s.rowLeadNumber = 10;      // index for top row
    s.rowIncrement = 10;
    s.primaryPathIndex = 3;
    
    s.contentMapData = [
        // index 0
        {
            mapCards: [
                {route: "Atom",                  title: "atoms" },
                {route: "AtomsMakeUpEverything", title: "almost everything is made from atoms" },
                {route:"",                       title:""  },
                {route: "AtomTypes",            group:"stability", title: "different types of atom", },
                { title:"",  route:""},
                { title:"",  route:""},
                { title:"",  route:""},
                { title:"",  route:""},
                {route: "AtomPower",            group:"World", title: "the power of atoms" },
            ],
        },
        // index 1
        {
            mapCards: [
                {route: "ActiveNucleus", title: "the active nucleus" },
                {route: "AtomicNucleus", title: "the atomic nucleus",   group:"nucleus"},
                {route: "InsideNucleus", title: "inside the nucleus",   group:"nucleus"},
                {route: "PeriodicTable", title: "periodic table",       group:"stability"},
                {route: "RadioactiveNuclides",  title: "radioactive nuclides",  group:"nuclide"},
                {route:"",                      title:"" },
                {route:"",                      title:"" },
                {route:"",                      title:"" },
                {route: "RadionuclidesIRL",     title: "radionuclides in real life", group:"world" },
            ],
        },
        //index 2
        { 
            //startNode: true,
            //endNode: true,
            //horizontalLinks: OER.linkType.strong,
            mapCards: [
                {                  title: "nuclear radiation",  route: "NuclearRadiation"},
                { group:"nucleus", title: "nuclei can radiate",  route: "NucleiRadiate"},
                { group:"nucleus ", title: "labeling nuclides",  route: "LabelingNuclides"},
                { group:"stability", title: "stable nuclides",  route: "StableNuclides"},
                { group:"nuclide ",  title: " unstable nuclides",  route: "UnstableNuclides"},
                { group:"alpha",       title: "alpha particle radiation",  route: "AlphaParticleRadiation"},
                { group:"beta ",  title: "beta particle radiation",  route: "BetaParticleRadiation"},
                { group:"excited", title: "gamma radiation",  route: "GammaRadiation"},
                { group:"world ",  title: "radiation in the world",  route: "RadiationInWorld"},

            ],
        },
        //index 3, primary path
        {
            startNode: true,
            endNode: true,
            horizontalLinks: OER.linkType.strong,
            mapCards: [
                { group:" ",      title: "RADIOACTIVITY \nstructure & decay",       route: "StructureDecay"},
                { group:"nucleus", title: "the sleeper at the heart",               route: "SleeperAtHeart"},
                { group:"nucleus", title: "shell model of nuclear structure",       route: "NuclearStructure"},
                { group:"stability",title: "binding energy and mass defect",        route: "BindingEnergy"},
                { group:"nuclide",  title: "activity and exponential decay",        route: "Exponential"},
                { group:"alpha",    title: "alpha decay process",                   route: "AlphaDecay"},
                { group:"beta",     title: "weak-force mediated nuclear change",    route: "NuclearChange"},
                { group:"excited", title: "Decay of Excited States",                route: "ExcitedStateDecay"},
                { group:"world",    title: "nuclear structure in the real world",   route: "NuclearStructureIRL"},
            ],
        },
        //index 4
        {
            mapCards: [
                {                  title: "BONUS LEVEL 1",  route: "Bonus21"},
                {                  title:"",  route:""},
                { group:"nucleus", title: "liquid drop model",  route: "LiquidDropModel"},
                { group:"stability", title: "special relativity",  route: "SpecialRelativity"},
                { group:"",        title:"",  route:""},
                { group:"alpha",   title: "decay chain / series",  route: "DecayChain"},
                { group:"beta",    title: "positron release or electron capture?",  route: "ReleaseCapture"},
                { group:"excited", title: "internal conversion of excitation",  route:"ICE"},
                { group:"world",   title: "links to other resources",  route: "OtherResourcesLinks"},
            ],
        },
        //index 5
        {
            mapCards: [
                { title: "BONUS LEVEL 2",  route: "Bonus2"},
                {title:"",  route:""},
                {title:"",  route:""},
                {title:"",  route:""},
                {title:"",  route:""},
                {title:"",  route:""},
                {title: "",  route: "DecaySchemes"},
                { group:"electrons", title: "holes in an inner shell",  route: "InnerShellHoles"},
                {title:"",  route:""},
            ],
        },
        //index 6
        {
            mapCards: [
               {title: "BONUS LEVEL 3",  route: "Bonus3"},
               {title:"",  route:""},
               {title:"",  route:""},
               {title:"",  route:""},
               {title:"",  route:""},
               {title:"",  route:""},
               {title:"",  route:""},
               { group:"electrons", title: "auger electons",  route: "Auger"},
               {title:"",  route:""},
            ],
        },
    ];
    
    scope.lesson2 = s;

}(window.OER.data = window.OER.data || {}));
