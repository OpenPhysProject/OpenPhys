(function (scope) {
    var s = {};
    
    s.title = "Radioactivity";
    s.preview = ""; //svg image
    s.route = "Radioactivity";
    s.info = "";
    s.primaryPathIndex = 3;
    
    s.contentMapData = [
    // index 0
        [
            {title: "10.1 Almost Everything Is Made from Atoms", image: "", route: "AtomsMakeUpEverything"},
            {title:"", image:"", route:""},
            {title: "10.3 Different Types of Atom", image: "", route: "AtomTypes"},
            {title:"", image:"", route:""},
            {title:"", image:"", route:""},
            {title:"", image:"", route:""},
            {title:"", image:"", route:""},
            {title: "10.8 The Power of Atoms", image: "", route: "AtomPower"},
        ],
        // index 1
        [
            {title: "30.1 The Atomic Nucleus", image: "", route: "AtomicNucleus"},
            {title: "30.2 Inside the Nucleus", image: "", route: "InsideNucleus"},
            {title: "30.3 Periodic Table", image: "", route: "PeriodicTable"},
            {title: "30.4 Radioactive Nuclides", image: "", route: "RadioactiveNuclides"},
            {title:"", image:"", route:""},
            {title:"", image:"", route:""},
            {title:"", image:"", route:""},
            {title: "30.8 Radionuclides in Real Life", image: "", route: "RadionuclidesIRL"},
        ],
        //index 2
        [
            {title: "100.1 Nuclei Can Radiate ", image: "", route: "NucleiRadiate"},
            {title: "100.2 Labeling Nuclides", image: "", route: "LabelingNuclides"},
            {title: "100.3 Stable Nuclides", image: "", route: "StableNuclides"},
            {title: "100.4 Unstable Nuclides", image: "", route: "UnstableNuclides"},
            {title: "100.5 Alpha Particle Radiation", image: "", route: "AlphaParticleRadiation"},
            {title: "100.6 Beta Particle Radiation", image: "", route: "BetaParticleRadiation"},
            {title: "100.7 Gamma Radiation", image: "", route: "GammaRadiation"},
            {title: "100.8 Radiation in the World", image: "", route: "RadiationInWorld"},
            
        ],
        //index 3, primary path
        [
            {title: "200.1 The Sleeper at the Heart", image: "", route: "SleeperAtHeart"},
            {title: "200.2 Shell Model of Nuclear Structure", image: "", route: "NuclearStructure"},
            {title: "200.3 Binding Energy and Mass Defect", image: "", route: "BindingEnegery"},
            {title: "200.4 Activity and Exponential Decay", image: "", route: "ExponentialDecay"},
            {title: "200.5 Alpha Decay Process", image: "", route: "AlphaDecay"},
            {title: "200.6 Weak-force Medicated Nuclear Change", image: "", route: "NuclearChange"},
            {title: "200.7 Decay of Excited States", image: "", route: "ExcitedStateDecay"},
            {title: "200.8 Nuclear Structure in the Real World", image: "", route: "NuclearStructureIRL"},
        ],
        //index 4
        [
            {title:"", image:"", route:""},
            {title: "250.2 Liquid Drop Model", image: "", route: "LiquidDropModel"},
            {title: "250.3 Special Relativity", image: "", route: "SpecialRelativity"},
            {title:"", image:"", route:""},
            {title: "250.5 Decay Chain / Series", image: "", route: "DecayChain"},
            {title: "250.6 Positron Release or Electron Capture?", image: "", route: "ReleaseCapture"},
            {title: "250.7 Internal Conversion of Excitation", image:"", route:"ICE"},
            {title: "250.8 Links to Other Resources", image: "", route: "OtherResourcesLinks"},
        ],
        //index 5
        [
            {title:"", image:"", route:""},
            {title:"", image:"", route:""},
            {title:"", image:"", route:""},
            {title:"", image:"", route:""},
            {title:"", image:"", route:""},
            {title: "260.6 Decay Schemes", image: "", route: "DecaySchemes"},
            {title: "260.7 Holes in an Inner Shell", image: "", route: "InnerShellHoles"},
            {title:"", image:"", route:""},
        ],
        //index 6
        [
           {title:"", image:"", route:""},
           {title:"", image:"", route:""},
           {title:"", image:"", route:""},
           {title:"", image:"", route:""},
           {title:"", image:"", route:""},
           {title:"", image:"", route:""},
           {title: "270.7 AUGER", image: "", route: "Auger"},
           {title:"", image:"", route:""},
        ],
    ];
    
    scope.RLO2 = s;

}(window.OER.data = window.OER.data || {}));
