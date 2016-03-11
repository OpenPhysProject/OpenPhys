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
                {route: "Atom",                  title: "Atoms" },
                {route: "AtomsMakeUpEverything", title: "Almost Everything Is Made from Atoms" },
                {route:"",                       title:""  },
                {route: "AtomTypes",            group:"Stability", title: "Different Types of Atom", },
                { title:"",  route:""},
                { title:"",  route:""},
                { title:"",  route:""},
                { title:"",  route:""},
                {route: "AtomPower",            group:"World", title: "The Power of Atoms" },
            ],
        },
        // index 1
        {
            mapCards: [
                {title: "The Active Nucleus",  route: "ActiveNucleus"},
                {title: "(NUCLEUS) The Atomic Nucleus",  route: "AtomicNucleus"},
                { title: "(NUCLEUS) Inside the Nucleus",  route: "InsideNucleus"},
                { title: "(STABILITY) Periodic Table",  route: "PeriodicTable"},
                { title: "(NUCLIDE) Radioactive Nuclides", route: "RadioactiveNuclides"},
                { title:"",  route:""},
                { title:"", route:""},
                { title:"",  route:""},
                { group:"World", title: "Radionuclides in Real Life",  route: "RadionuclidesIRL"},
            ],
        },
        //index 2
        { 
            //startNode: true,
            //endNode: true,
            //horizontalLinks: OER.linkType.strong,
            mapCards: [
                {                  title: "Nuclear Radiation",  route: "NuclearRadiation"},
                { group:"Nucleus", title: "Nuclei Can Radiate",  route: "NucleiRadiate"},
                { group:"Nucleus ", title: "Labeling Nuclides",  route: "LabelingNuclides"},
                { group:"Stability", title: "Stable Nuclides",  route: "StableNuclides"},
                { group:"Nuclide ",  title: " Unstable Nuclides",  route: "UnstableNuclides"},
                { group:"Alpha",  title: "Alpha Particle Radiation",  route: "AlphaParticleRadiation"},
                { group:"Beta ",  title: "Beta Particle Radiation",  route: "BetaParticleRadiation"},
                { group:"Excited", title: "Gamma Radiation",  route: "GammaRadiation"},
                { group:"World ",  title: "Radiation in the World",  route: "RadiationInWorld"},

            ],
        },
        //index 3, primary path
        {
            startNode: true,
            endNode: true,
            horizontalLinks: OER.linkType.strong,
            mapCards: [
                { group:" ",      title: "RADIOACTIVITY \nStructure & Decay",  route: "StructureDecay"},
                { group:"Nucleus", title: "The Sleeper at the Heart",          route: "SleeperAtHeart"},
                { group:"Nucleus", title: "Shell Model of Nuclear Structure",  route: "NuclearStructure"},
                { group:"Stability",title: "Binding Energy and Mass Defect",  route: "BindingEnergy"},
                { group:"Nuclide",  title: "Activity and Exponential Decay", route: "Exponential"},
                { group:"Alpha",    title: "Alpha Decay Process",  route: "AlphaDecay"},
                { group:"Beta",     title: "Weak-force Mediated Nuclear Change",  route: "NuclearChange"},
                { group:"Excited", title: "Decay of Excited States",  route: "ExcitedStateDecay"},
                { group:"World",    title: "Nuclear Structure in the Real World",  route: "NuclearStructureIRL"},
            ],
        },
        //index 4
        {
            mapCards: [
                {                  title: "BONUS LEVEL 1",  route: "Bonus21"},
                {                  title:"",  route:""},
                { group:"Nucleus", title: "Liquid Drop Model",  route: "LiquidDropModel"},
                { group:"Stability", title: "Special Relativity",  route: "SpecialRelativity"},
                { group:"",        title:"",  route:""},
                { group:"Alpha",   title: "Decay Chain / Series",  route: "DecayChain"},
                { group:"Beta",    title: "Positron Release or Electron Capture?",  route: "ReleaseCapture"},
                { group:"Excited", title: "Internal Conversion of Excitation",  route:"ICE"},
                { group:"World",   title: "Links to Other Resources",  route: "OtherResourcesLinks"},
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
                { group:"Electrons", title: "Holes in an Inner Shell",  route: "InnerShellHoles"},
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
               { group:"Electrons", title: "Auger Electons",  route: "Auger"},
               {title:"",  route:""},
            ],
        },
    ];
    
    scope.lesson2 = s;

}(window.OER.data = window.OER.data || {}));
