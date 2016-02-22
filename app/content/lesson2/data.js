(function (scope) {
    var s = {};
    
    s.title = "Radioactivity";
    s.preview = "/content/lesson2/assets/Nucleus.svg"; //svg image
    s.route = "Radioactivity";
    s.info = "";
    s.jumpNav = true;
    s.primaryPathIndex = 3;
    
    s.contentMapData = [
        // index 0
        {
            mapCards: [
                {title: "10.0 Atoms", image: "", route: "Atom"},
                {title: "10.1 Almost Everything Is Made from Atoms", image: "", route: "AtomsMakeUpEverything"},
                {title:"", image:"", route:""},
                {title: "(STABILITY) 10.3 Different Types of Atom", image: "", route: "AtomTypes"},
                {title:"", image:"", route:""},
                {title:"", image:"", route:""},
                {title:"", image:"", route:""},
                {title:"", image:"", route:""},
                {title: "(WORLD) 10.8 The Power of Atoms", image: "", route: "AtomPower"},
            ],
        },
        // index 1
        {
            mapCards: [
                {title: "30.0 The Active Nucleus", image: "", route: "ActiveNucleus"},
                {title: "(NUCLEUS) 30.1 The Atomic Nucleus", image: "", route: "AtomicNucleus"},
                {title: "(NUCLEUS) 30.2 Inside the Nucleus", image: "", route: "InsideNucleus"},
                {title: "(STABILITY) 30.3 Periodic Table", image: "", route: "PeriodicTable"},
                {title: "(NUCLIDE) 30.4 Radioactive Nuclides", image: "", route: "RadioactiveNuclides"},
                {title:"", image:"", route:""},
                {title:"", image:"", route:""},
                {title:"", image:"", route:""},
                {title: "(WORLD) 30.8 Radionuclides in Real Life", image: "", route: "RadionuclidesIRL"},
            ],
        },
        //index 2
        { 
            startNode: true,
            endNode: true,
            horizontalLinks: OER.linkType.strong,
            mapCards: [
                {title: "100.0 Nuclear Radiation", image: "", route: "NuclearRadiation"},
                {title: "(NUCLEUS) 100.1 Nuclei Can Radiate", image: "", route: "NucleiRadiate"},
                {title: "(NUCLEUS) 100.2 Labeling Nuclides", image: "", route: "LabelingNuclides"},
                {title: "(STABILITY) 100.3 Stable Nuclides", image: "", route: "StableNuclides"},
                {title: "(NUCLIDE) 100.4 Unstable Nuclides", image: "", route: "UnstableNuclides"},
                {title: "(ALPHA) 100.5 Alpha Particle Radiation", image: "", route: "AlphaParticleRadiation"},
                {title: "(BETA) 100.6 Beta Particle Radiation", image: "", route: "BetaParticleRadiation"},
                {title: "(EXCITED) 100.7 Gamma Radiation", image: "", route: "GammaRadiation"},
                {title: "(WORLD) 100.8 Radiation in the World", image: "", route: "RadiationInWorld"},

            ],
        },
        //index 3, primary path
        {
            startNode: true,
            endNode: true,
            horizontalLinks: OER.linkType.strong,
            mapCards: [
                {title: "200.0 Structure & Decay", image: "", route: "StructureDecay"},
                {title: "(NUCLEUS) 200.1 The Sleeper at the Heart", image: "", route: "SleeperAtHeart"},
                {title: "(NUCLEUS) 200.2 Shell Model of Nuclear Structure", image: "", route: "NuclearStructure"},
                {title: "(STABILITY) 200.3 Binding Energy and Mass Defect", image: "", route: "BindingEnergy"},
                {title: "(NUCLIDE) 200.4 Activity and Exponential Decay", image: "", route: "Exponential"},
                {title: "(ALPHA) 200.5 Alpha Decay Process", image: "", route: "AlphaDecay"},
                {title: "(BETA) 200.6 Weak-force Mediated Nuclear Change", image: "", route: "NuclearChange"},
                {title: "(EXCITED) 200.7 Decay of Excited States", image: "", route: "ExcitedStateDecay"},
                {title: "(WORLD) 200.8 Nuclear Structure in the Real World", image: "", route: "NuclearStructureIRL"},
            ],
        },
        //index 4
        {
            mapCards: [
                {title: "250.0 BONUS LEVEL 1", image: "", route: "Bonus21"},
                {title:"", image:"", route:""},
                {title: "(NUCLEUS) 250.2 Liquid Drop Model", image: "", route: "LiquidDropModel"},
                {title: "(STABILITY) 250.3 Special Relativity", image: "", route: "SpecialRelativity"},
                {title:"", image:"", route:""},
                {title: "(ALPHA) 250.5 Decay Chain / Series", image: "", route: "DecayChain"},
                {title: "(BETA) 250.6 Positron Release or Electron Capture?", image: "", route: "ReleaseCapture"},
                {title: "(EXCITED) 250.7 Internal Conversion of Excitation", image:"", route:"ICE"},
                {title: "(WORLD) 250.8 Links to Other Resources", image: "", route: "OtherResourcesLinks"},
            ],
        },
        //index 5
        {
            mapCards: [
                {title: "260.0 BONUS LEVEL 2", image: "", route: "Bonus2"},
                {title:"", image:"", route:""},
                {title:"", image:"", route:""},
                {title:"", image:"", route:""},
                {title:"", image:"", route:""},
                {title:"", image:"", route:""},
                {title: "", image: "", route: "DecaySchemes"},
                {title: "(ELECTRONS) 260.7 Holes in an Inner Shell", image: "", route: "InnerShellHoles"},
                {title:"", image:"", route:""},
            ],
        },
        //index 6
        {
            mapCards: [
               {title: "270.0 BONUS LEVEL 3", image: "", route: "Bonus3"},
               {title:"", image:"", route:""},
               {title:"", image:"", route:""},
               {title:"", image:"", route:""},
               {title:"", image:"", route:""},
               {title:"", image:"", route:""},
               {title:"", image:"", route:""},
               {title: "(ELECTRONS) 270.7 Auger Electons", image: "", route: "Auger"},
               {title:"", image:"", route:""},
            ],
        },
    ];
    
    scope.lesson2 = s;

}(window.OER.data = window.OER.data || {}));
