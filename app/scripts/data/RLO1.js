(function (scope) {
    var s = {};
    
    s.title = "The Electronic Structure of the Atom";
    s.preview = "/images/RLO1/AtomPlay.svg"; //svg image
    s.route = "ElectronicStructureOfTheAtom";
    s.info = "";
    s.primaryPathIndex = 3;
    
    s.contentMapData = [
    // index 0
        [
            {title:"", image: "", route:"100_0"},
            {title:"", image:"", route:""},
            {title:"", image:"", route:""},
            {title:"", image:"", route:""},
            {title:"", image:"", route:""},
        ],
        
    // index 1, primary path
        [
            {title:"", image:"", route:"200_0"},
            {title:"", image:"", route:"200_1"},
            {title:"", image:"", route:""},           
            {title:"200.3 Classical Physics", image:"", route:"200_3"},
            {title:"", image:"", route:""},
            {title:"200.5 Classical Waves and Standing Waves", image:"", route:"200_5"},
            {title:"", image:"", route:""},
            {title:"", image:"", route:""},
            {title:"", image:"", route:""},
        ],
        
    //index 2
        [
            {title:"", image:"", route:""},
            {title:"", image:"", route:""},
            {title:"", image:"", route:""},          
            {title:"300.3 Classical Electromagnetism", image:"", route:"300_3"},
            {title:"300.4 Angular Momentum", image:"", route:"300_4"},
            {title:"300.5 Math of Classical Standing Waves", image:"", route:"StandingWavesMath"},
            {title:"", image:"", route:""}, 
            {title:"300.7 Quantum Mechanics", image:"", route:"300_7"},           
        ],
        
    // Row 3 index 3 
        [
           {title:"400.0 Atomic Models",        image:"", route:"400_0"},
           {title:"400.1 Dalton's Atoms (1805)",  image:"", route:"400_1"},
           {title:"400.2 Plum Pudding Atom (1904)", image:"", route:"400_2"},  
           {title:"400.3 Solar System Atom (1910's)", image:"", route:"400_3"}, 
           {title:"400.4 Bohr Quantized Atom (1913)", image:"", route:"400_4"}, 
           {title:"400.5 QM Atom 1: Matter Waves", image:"", route:"400_5"},
           {title:"400.6 QM Atom 2: Nuclear Potential", image:"", route:"NuclearPotential"}, 
           {title:"400.7 QM Atom 3: Trapped Waves", image:"", route:"400_7"},
           {title:"400.8 Beyond the Quantum Atom", image:"", route:"400_8"},          
        ],
       
    // index 4 
        [
           {title:"",        image:"", route:"500_0"},
           {title:"",       image:"", route:"500_1"},
           {title:"",       image:"", route:"500_2"},
           {title:"500.3 Cracks", image:"", route:"500_3"},
           {title:"", image:"", route:"500_4"}, 
           {title:"",       image:"", route:""},
           {title:"",       image:"", route:"500_6"},
           {title:"500.7 Modern Electron Shell Model", image:"", route:"500_7"},          
        ],      
    // index 5  
        [
           {title:"", image:"", route:""},
           {title:"", image:"", route:""},
           {title:"", image:"", route:""},
           {title:"600.3 Atomic Spectra & Rydberg Formula ", image:"", route:"600_3"}, 
           {title:"", image:"", route:""},
           {title:"", image:"", route:""},
           {title:"", image:"", route:""}, 
           {title:"600.7 Successes of Quantum Atom", image:"", route:"600_7"},          
        ],
        
      // index 6  
        [
           {title:"", image:"", route:""},
           {title:"", image:"", route:""},
           {title:"", image:"", route:""},
           {title:"", image:"", route:"700_3"}      
        ],
        
    ];

    scope.RLO1 = s;

}(window.OER.data = window.OER.data || {}));
