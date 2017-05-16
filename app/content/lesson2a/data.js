(function (scope) {
    var s = {};
    
    s.title = "Nucleus";
    s.preview = "/content/lesson2a/assets/icon_nucleus.svg"; //svg image
    s.themeColor = "#7D2985";
    s.route = "Nucleus";
    s.info = "";
    s.jumpNav = false;
    s.rowLeadNumber = 1;      // index for top row
    s.rowIncrement = 1;
    s.primaryPathIndex = 3;
    
    s.contentMapData = [
        // row 0
        {
            mapCards: [
                {route: "Atom",  template:"Atoms.ejs",  title: "atom", group:"atoms"},   
            ],
        },        
        
        // row 1
        {
            mapCards: [
                {route: "AtomTypes", template:"AtomsTypes.ejs", title: "different types of atom", group:"atoms" }   
            ]
        },

        // row 2
        {
            mapCards: [
                {route: "AtomPower", template:"AtomsPower.ejs", title: "the power of an idea", group:"atoms" },  
            ]
        },        
        
        // row index 3
        {
            startNode: true,
            endNode: true,  // adding extra rows seems to not allow this to be true. Saw this elsewhere also.
            horizontalLinks: OER.linkType.strong,    
            mapCards: [
                {route: "Intro",            template:"Intro.ejs",             title: "lesson introduction",   group:"atoms"},               
                {route: "Nucleus",          template:"Nucleus.ejs",           title: "nucleus",               group:"nuclei"},
                {route: "Nuclides",         template:"Nuclides.ejs",          title: "nuclides",            group:"nuclides"},
                {route: "NuclearRadiation", template:"NuclearRadiation.ejs",  title: "nuclear radiation",   group:"radiation"},
                {route: "Structure",        template:"NucStructure.ejs",      title: "models of nuclear structure",   group:"structure", linkleft:null}      
            ],
        },
        
        // row index 4
        {
            mapCards: [
                {route: "", title:""},
                {route: "PeriodicTable",    template:"PeriodicTable.ejs", title: "periodic table",          group:"nuclei"},                
                {route: "LabelingNuclides", template:"LabelingNuclides.ejs", title: "labeling nuclides",       group:"nuclides"}, 
                {route: "Decay",            template:"Decay.ejs",         title: "decay", group:"radiation", icons:["video"]},
                {route: "Shell",            template:"Shell.ejs",         title: "shell model of nuclear structure", group:"structure"},               
  //  {route: "RadionuclidesIRL", template:"RadionuclidesIRL.ejs",    title: "radionuclides in real life", group:"world" }
            ],
        },
        //index 5
        { 
            mapCards: [
                {route:"", title:""},
                {route: "InsideNucleus", template:"InsideNucleus.ejs", title: "inside the nucleus",  group:"nuclei"},
                {route: "Quiz_Nuclides",  template:"Quiz_Nuclides.ejs",title: "quiz: nuclides", group:"nuclides",   icons:["quiz"]},
                {route:"", title:""},
                {route: "LiquidDropModel",template:"LiquidDropModel.ejs",  title: "liquid drop model", group:"structure"},
            //    {route: "RadiationInWorld",  template:"RadiationInWorld.ejs", title: "radiation in the world", group:"world " }
            ],
        },
        //index 6
        { 
            mapCards: [
                {route:"", title:""},
                {route:"", title:""},
                {route: "Quiz_Nucleus",  template:"Quiz_Nucleus.ejs", title: "quiz: nuclei", group:"nucleus", icons:["quiz"]},
            ],
        },

    ];
    
    scope.lesson2a = s;

}(window.OER.data = window.OER.data || {}));
