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
            {title: "10 Atoms", image: "", route: ""},
            {title: "10.1 Almost Everything Is Made from Atoms", image: "", route: "Atom"},
            {title:"", image:"", route:""},
            {title: "10.3 Different Types of Atom", image: "", route: "Stable Nuclides"},
            {title:"", image:"", route:""},
            {title:"", image:"", route:""},
            {title:"", image:"", route:""},
            {title:"", image:"", route:""},
            {title: "10.8 The Power of Atoms", image: "", route: "Applications"},       ],
        // index 1
        [
            {title: "30 The Active Nucleus", image: "", route: ""},
            {title: "30.1 The Atomic Nucleus", image: "", route: "Atom"},
            {title: "30.2 Inside the Nucleus", image: "", route: "NucleusNuclides"},
            {title: "30.3 Periodic Table", image: "", route: "StableNuclides"},
            {title: "30.4 Radioactive Nuclides", image: "", route: "RadioactivityUnstable"},
            {title:"", image:"", route:""},
            {title:"", image:"", route:""},
            {title:"", image:"", route:""},
            {title: "30.8 Radionuclides in Real Life", image: "", route: "Applications"},
        ],
        //index 2
        [
            {title: "100 Nuclear Radiation", image: "", route: ""},
            {title: "100.1 Nuclei Can Radiate ", image: "", route: "Atom"},
            {title: "100.2 Labeling Nuclides", image: "", route: "NucleusNuclides"},
            {title: "100.3 Stable Nuclides", image: "", route: "StableNuclides"},
            {title: "100.4 Unstable Nuclides", image: "", route: "RadioactivityUnstable"},
            {title: "100.5 Alpha Particle Radiation", image: "", route: "Alpha"},
            {title: "100.6 Beta Radiation", image: "", route: "Beta"},
            {title: "100.7 Gamma Radiation", image: "", route: "Gamma"},
            {title: "100.8 Real World Radioactivity Radiation", image: "", route: "Applications"},
            
        ],
        //index 3, primary path
        [
            {title: "200 Structure and Decay", image: "", route: ""},
            {title: "200.1 The Sleeper at the Heart", image: "", route: "Atom"},
            {title: "200.2 Simple Models of Nuclear Structure", image: "", route: "NucleusNuclides"},
            {title: "200.3 Binding Energy and Mass Defect", image: "", route: "StableNuclides"},
            {title: "200.4 Activity and Exponential Decay", image: "", route: "RadioactivityUnstable"},
            {title: "200.5 Alpha Decay", image: "", route: "Alpha"},
            {title: "200.6 Weak-force Medicated Nuclear Change", image: "", route: "Beta"},
            {title: "200.7 Decay of Excited States", image: "", route: "Gamma"},
            {title: "200.8 Nuclear Structure in the Real World", image: "", route: "Applications"},
        ],
        //index 4, primary path
        [
            {title: "250 Bonus", image: "", route: ""},
            {title:"", image:"", route:""},
            {title: "250.2 Link to External Resources", image: "", route: "NucleusNuclides"},
            {title: "250.3 Special Relativity", image: "", route: "StableNuclides"},
            {title:"", image:"", route:""},
            {title: "250.5 Decay Series", image: "", route: "Alpha"},
            {title: "250.6 Beta- Plus/Min example", image: "", route: "Beta"},
            {title:"", image:"", route:""},
            {title: "250.8 Links to Other Resources", image: "", route: "Applications"},
        ],
    ];

    scope.RLO1 = s;

}(window.OER.data = window.OER.data || {}));
