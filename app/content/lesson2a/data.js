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
                {route: "Atom",             template:"Atoms.ejs",             title: "ATOMS ",   group:"atoms"},
                {route: "Nucleus",          template:"Nucleus.ejs",           title: "NUCLEI",   group:"nuclei"},
                {route: "Nuclides",         template:"Nuclides.ejs",          title: "NUCLIDES", group:"nuclides"},
                {route: "NuclearRadiation", template:"NuclearRadiation.ejs",  title: "NUCLEAR RADIATION", group:"radiation"},
                {route: "Structure",        template:"Structure.ejs",         title: "NUCLEAR STRUCTURE", group:"structure"},                
            ],
        },
        // index 1
        {
            mapCards: [
                {route: "AtomTypes",     template:"AtomsTypes.ejs",    title: "different types of atom", group:"atoms" },
                {route: "PeriodicTable", template:"PeriodicTable.ejs", title: "periodic table",          group:"nuclei"},                
                {route: "LabelingNuclides", template:"LabelingNuclides.ejs", title: "labeling nuclides",       group:"nuclides"}, 
                {title:""},
                {route: "Shell",         template:"Shell.ejs",         title: "shell model of nuclear structure", group:"structure"},               
              //  {route: "RadionuclidesIRL", template:"RadionuclidesIRL.ejs",    title: "radionuclides in real life", group:"world" }
            ],
        },
        //index 2
        { 
            mapCards: [
                {route: "AtomPower",  template:"AtomsPower.ejs",       title: "the power of atoms", group:"atoms" },
                {route: "InsideNucleus", template:"InsideNucleus.ejs", title: "inside the nucleus",  group:"nuclei"},
                {title:""},
                {title:""},
               {route: "LiquidDropModel",template:"LiquidDropModel.ejs",  title: "liquid drop model", group:"structure"},
            //    {route: "RadiationInWorld",  template:"RadiationInWorld.ejs", title: "radiation in the world", group:"world " }
            ],
        },
        //index 3
//        {
//            mapCards: [
//                {route: "AtomPower",  template:"AtomsPower.ejs",       title: "the power of atoms", group:"atoms" },            
//                {route: "InsideNucleus", template:"InsideNucleus.ejs", title: "inside the nucleus",  group:"nuclei"},
//                {title:""},
//                {title:""},
//                {route: "LiquidDropModel",template:"LiquidDropModel.ejs",  title: "liquid drop model", group:"structure"}
             //   {route: "StructureIRL",   template:"StructureIRL.ejs",     title: "nuclear structure in the real world",group:"world"},               
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
