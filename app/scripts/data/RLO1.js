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
            {title:"100.1 Classical EM", image: "", route:"ClassicalEM"},
            {title:"", image:"", route:""},
            {title:"100.3 Atomic Spectra & Rydberg Formula", image:"", route:"AtomicSpectra"},
            {title:"100.4 Angular Momentum", image:"", route:"AngularMomentum"},
            {title:"100.5 Waves and Standing Waves", image:"", route:"WavesStanding"},
        ],
        
    // index 1, primary path
        [
            {title:"200.1 Classical Physics", image:"", route:"ClassicalPhysics"},
            {title:"200.2 Mysterious Stability of Atoms", image:"", route:"StabilityOfAtoms"},
            {title:"200.3 Cracks", image:"", route:"Cracks"},
            {title:"200.4 Bohr Atom & Quantization", image:"", route:"BohrQuantization"},
            {title:"200.5 Standing Waves of Matter", image:"", route:"StandingWaves"},
            {title:"200.6 Classical Nuclear Potential", image:"", route:"NuclearPotential"},
            {title:"200.7 Orbitals as trapped electron waves", image:"", route:"Orbitals"},
            {title:"200.8 Modern Electron Shell Model", image:"", route:"ElectronShellModel"},
            {title:"200.9 Successes of Schrodinger Eqn. Atom", image:"", route:"SchrodingerAtomSuccess"},
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
