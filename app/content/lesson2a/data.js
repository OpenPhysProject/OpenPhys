(function (scope) {
    var s = {};
    
    s.title = "Nucleus";
    s.preview = "/content/lesson2a/assets/icon_radioactivity.svg"; //svg image
    s.themeColor = "#00BCD4";
    s.route = "Nucleus";
    s.info = "";
    s.jumpNav = true;
    s.rowLeadNumber = 1;      // index for top row
    s.rowIncrement = 1;
    s.primaryPathIndex = 2;
    
    s.contentMapData = [
        // index 0
        {
            startNode: true,
            //endNode: true,
            horizontalLinks: OER.linkType.strong,
            mapCards: [
                {route: "Atom",                  title: "\n\nAtoms \n - - - - - - - - - - - >>> " },
                {route: "AtomsMakeUpEverything", title: "almost everything is made from atoms" },
                {route: "AtomTypes",             group:"stability", title: "different types of atom" },
                {route: "AtomPower",            group:"World", title: "the power of atoms" }
            ],
        },
        // index 1
        {
            startNode: true,
            //endNode: true,
            horizontalLinks: OER.linkType.strong,
            mapCards: [
                {route: "ActiveNucleus", title: "\nNuclei and Nuclides \n - - - - - - - - - - - >>>" },
                {route: "AtomicNucleus", title: "the atomic nucleus",   group:"nucleus"},
                {route: "InsideNucleus", title: "inside the nucleus",   group:"nucleus"},
                {route: "PeriodicTable", title: "periodic table",       group:"stability"},
                {route: "RadionuclidesIRL",     title: "radionuclides in real life", group:"world" }
            ],
        },
        //index 2
        { 
            startNode: true,
            endNode: true,
            horizontalLinks: OER.linkType.strong,
            mapCards: [
                {                  title: "Properties of Nuclear Radiation \n - - - - - - - - - - - >>>",  route: "NuclearRadiation"},
                { group:"nucleus", title: "nuclei can radiate",  route: "NucleiRadiate"},
                { group:"nucleus ", title: "labeling nuclides",  route: "LabelingNuclides"},
                { group:"world ",  title: "radiation in the world",  route: "RadiationInWorld"}

            ],
        },
        //index 3, primary path
        {
            startNode: true,
            endNode: true,
            horizontalLinks: OER.linkType.strong,
            mapCards: [
                {  title: "Nuclear Structure and Radioactive Decay\n - - - - - - - - - - - >>> ",       route: "StructureDecay"},
                { group:"nucleus", title: "the sleeper at the heart",               route: "SleeperAtHeart"},
                { group:"nucleus", title: "shell model of nuclear structure",       route: "NuclearStructure"},
                { group:"world",    title: "nuclear structure in the real world",   route: "NuclearStructureIRL"},
                 {  title: "liquid drop model",  route: "LiquidDropModel"},
            ]
        },
        //index 4
//        {
//            mapCards: [
//               {  title: "liquid drop model",  route: "LiquidDropModel"},
//               {  title: "links to other resources",  route: "OtherResourcesLinks"},
//               {  title: "links",  route: "Links"}
//            ]
//        }
    ];
    
    scope.lesson2a = s;

}(window.OER.data = window.OER.data || {}));
