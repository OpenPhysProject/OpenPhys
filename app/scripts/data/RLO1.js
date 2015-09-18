(function (scope) {
    var s = {};
    
    s.title = "The Electronic Structure of the Atom";
    s.preview = ""; //svg image
    s.route = "ElectronicStructureOfTheAtom";
    s.info = "";
    s.primaryPathIndex = 1;
    
    s.contentMapData = [
    // index 0
        [
            {title:"100.1 Classical Physics", image: "", route:"ClassicalPhysics"},
            {title:"100.2 Introduction to Classical Electromagnetism", image:"", route:"ClassicalElectormagnetism"},
        ],
        
    // index 1, primary path
        [
            {title:"200.1 What is the structure of the atom?", image:"", route:"StructureOfTheAtom"},
            {title:"200.2 Why do stable atoms exist?", image:"", route:"WhyStableAtoms"},
            {title:"200.3 Bohr introduces quantization", image:"", route:"BohrQuantization"},
            {title:"200.4 Standing Waves (1920s)", image:"", route:"StandingWaves"},
            {title:"200.5 Classical Nuclear Potential", image:"", route:"NuclearPotential"},
            {title:"200.6 Orbitals are trapped electron waves", image:"", route:"Orbitals"},
            {title:"200.7 Modern Shell Model", image:"", route:"ShellModel"},
            {title:"200.8 Successes of Schrodinger Atom", image:"", route:"SchrodingerAtom"},
            {title:"200.9 Beyond the Schrodinger Atom", image:"", route:"BeyondSchrodinger"},
        ],
        
    //index 2
        [
            {title:"", image:"", route:""},
            {title:"300.2 Failure of Classical Electron Orbits", image:"", route:"ClassicalElectronOrbits"},
            {title:"300.3 Bohr Model with Equations", image:"", route:"BohrModel"},
            {title:"300.4 Math of Standing Waves", image:"", route:"StandingWavesMath"},
        ],
    ];

    scope.RLO1 = s;

}(window.OER.data = window.OER.data || {}));
