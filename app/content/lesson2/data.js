(function (scope) {
    var s = {};
    
    s.title = "Radioactivity";
    s.preview = "/content/lesson2/assets/icon_radioactivity.svg"; //svg image
    s.themeColor = "#00BCD4";
    s.route = "Radioactivity";
    s.info = "";
    s.jumpNav = true;
    s.primaryPathIndex = 3;
    
    s.contentMapData = [
        // index 0
        {
            mapCards: [
                {number:"10.0", title: "Atoms", image: "", route: "Atom"},
                {number:"10.1", title: "Almost Everything Is Made from Atoms", image: "", route: "AtomsMakeUpEverything"},
                {number:"10.", title:"", image:"", route:""},
                {number:"10.3", group:"Stability", title: "Different Types of Atom", image: "", route: "AtomTypes"},
                {number:"10.", title:"", image:"", route:""},
                {number:"10.", title:"", image:"", route:""},
                {number:"10.", title:"", image:"", route:""},
                {number:"10.", title:"", image:"", route:""},
                {number:"10.8", group:"World", title: "The Power of Atoms", image: "", route: "AtomPower"},
            ],
        },
        // index 1
        {
            mapCards: [
                {number:"30.0", title: "The Active Nucleus", image: "", route: "ActiveNucleus"},
                {number:"30.1", title: "(NUCLEUS) The Atomic Nucleus", image: "", route: "AtomicNucleus"},
                {number:"30.2", title: "(NUCLEUS) Inside the Nucleus", image: "", route: "InsideNucleus"},
                {number:"30.3", title: "(STABILITY) Periodic Table", image: "", route: "PeriodicTable"},
                {number:"30.4", title: "(NUCLIDE) Radioactive Nuclides", image: "", route: "RadioactiveNuclides"},
                {number:"30.5", title:"", image:"", route:""},
                {number:"30.6", title:"", image:"", route:""},
                {number:"30.7", title:"", image:"", route:""},
                {number:"30.8", group:"World", title: "Radionuclides in Real Life", image: "", route: "RadionuclidesIRL"},
            ],
        },
        //index 2
        { 
            //startNode: true,
            //endNode: true,
            //horizontalLinks: OER.linkType.strong,
            mapCards: [
                {number:"100.0",                  title: "Nuclear Radiation", image: "", route: "NuclearRadiation"},
                {number:"100.1", group:"Nucleus", title: "Nuclei Can Radiate", image: "", route: "NucleiRadiate"},
                {number:"100.2", group:"Nucleus ", title: "Labeling Nuclides", image: "", route: "LabelingNuclides"},
                {number:"100.3", group:"Stability", title: "Stable Nuclides", image: "", route: "StableNuclides"},
                {number:"100.4", group:"Nuclide ",  title: " Unstable Nuclides", image: "", route: "UnstableNuclides"},
                {number:"100.5", group:"Alpha",  title: "Alpha Particle Radiation", image: "", route: "AlphaParticleRadiation"},
                {number:"100.6", group:"Beta ",  title: "Beta Particle Radiation", image: "", route: "BetaParticleRadiation"},
                {number:"100.7", group:"Excited", title: "Gamma Radiation", image: "", route: "GammaRadiation"},
                {number:"100.8", group:"World ",  title: "Radiation in the World", image: "", route: "RadiationInWorld"},

            ],
        },
        //index 3, primary path
        {
            startNode: true,
            endNode: true,
            horizontalLinks: OER.linkType.strong,
            mapCards: [
                {number:"200.0", group:" ",      title: "RADIOACTIVITY \nStructure & Decay",  route: "StructureDecay"},
                {number:"200.1", group:"Nucleus", title: "The Sleeper at the Heart",         image: "", route: "SleeperAtHeart"},
                {number:"200.2", group:"Nucleus", title: "Shell Model of Nuclear Structure", image: "", route: "NuclearStructure"},
                {number:"200.3", group:"Stability",title: "Binding Energy and Mass Defect", image: "", route: "BindingEnergy"},
                {number:"200.4", group:"Nuclide",  title: "Activity and Exponential Decay", image: "", route: "Exponential"},
                {number:"200.5", group:"Alpha",    title: "Alpha Decay Process", image: "", route: "AlphaDecay"},
                {number:"200.6", group:"Beta",     title: "Weak-force Mediated Nuclear Change", image: "", route: "NuclearChange"},
                {number:"200.7", group:"Excited", title: "Decay of Excited States", image: "", route: "ExcitedStateDecay"},
                {number:"200.8", group:"World",    title: "Nuclear Structure in the Real World", image: "", route: "NuclearStructureIRL"},
            ],
        },
        //index 4
        {
            mapCards: [
                {number:"250.0",                  title: "BONUS LEVEL 1", image: "", route: "Bonus21"},
                {number:"250.1",                  title:"", image:"", route:""},
                {number:"250.2", group:"Nucleus", title: "Liquid Drop Model", image: "", route: "LiquidDropModel"},
                {number:"250.3", group:"Stability", title: "Special Relativity", image: "", route: "SpecialRelativity"},
                {number:"250.4", group:"",        title:"", image:"", route:""},
                {number:"250.5", group:"Alpha",   title: "Decay Chain / Series", image: "", route: "DecayChain"},
                {number:"250.6", group:"Beta",    title: "Positron Release or Electron Capture?", image: "", route: "ReleaseCapture"},
                {number:"250.7", group:"Excited", title: "Internal Conversion of Excitation", image:"", route:"ICE"},
                {number:"250.8", group:"World",   title: "Links to Other Resources", image: "", route: "OtherResourcesLinks"},
            ],
        },
        //index 5
        {
            mapCards: [
                {number:"260.0", title: "BONUS LEVEL 2", image: "", route: "Bonus2"},
                {title:"", image:"", route:""},
                {title:"", image:"", route:""},
                {title:"", image:"", route:""},
                {title:"", image:"", route:""},
                {title:"", image:"", route:""},
                {title: "", image: "", route: "DecaySchemes"},
                {number:"260.7", group:"Electrons", title: "Holes in an Inner Shell", image: "", route: "InnerShellHoles"},
                {title:"", image:"", route:""},
            ],
        },
        //index 6
        {
            mapCards: [
               {number:"270.0", title: "BONUS LEVEL 3", image: "", route: "Bonus3"},
               {title:"", image:"", route:""},
               {title:"", image:"", route:""},
               {title:"", image:"", route:""},
               {title:"", image:"", route:""},
               {title:"", image:"", route:""},
               {title:"", image:"", route:""},
               {number:"270.7", group:"Electrons", title: "Auger Electons", image: "", route: "Auger"},
               {title:"", image:"", route:""},
            ],
        },
    ];
    
    scope.lesson2 = s;

}(window.OER.data = window.OER.data || {}));
