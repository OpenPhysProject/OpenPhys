(function (scope) {
    var s = {};
    
    s.title = "Pair Production";
    s.preview = "/content/lesson7/assets/icon_pairproduction.svg"; //svg image
    s.themeColor = "#F44336";
    s.route = "Pair";
    s.info = "";
    s.jumpNav = false;
    s.primaryPathIndex = 1;
    s.rowLeadNumber = 1;
    s.rowIncrement = 1;
    
    s.contentMapData = [
        // index 0
        {  startNode: false,
            endNode: false,
            mapCards: [
                {route: "1", title: ""},            
                {route: "Matter", template: "Anti.ejs", title: "matter & antimatter" },
                {route: "Cross", template:"Cross.ejs", title: "collision cross section" },                
                {route: "3", title: ""},
                {route: "4", title: ""},
            ],
        },
        // index 1                        
        { startNode: true,
            endNode: true, // for some reason this has a bug. It requires the extra blank page.
            horizontalLinks: OER.linkType.strong,
            mapCards: [
               {route: "Intro",    template:"Intro.ejs",   title: "introduction" },
               {route: "Overview", template:"Overview.ejs",title: "pair production overview" },  
               {route: "Prod",     template:"Prod.ejs",    title: "electron & positron production event" },       
               {route: "Dose",     template:"Dose.ejs",    title: "absorption of dose" },       
               {route: "Ann",      template:"Ann.ejs",     title: "annihilation event" },   
               {route: "Summary",  template:"Summary.ejs", title: "summary" },         
               {route: "Quiz1",    template:"Quiz1.ejs",   title: "quiz1", icons:["quiz"]},
              // {route: "10",       title: "" }, //
            ],
        },
        // index 2
        {
            mapCards: [
                {route: "20",       title: "" }, 
             //   {route: "Anim",    template:"Anim.ejs",      title: "pair production animation" },             
                {route: "21",                                title: "" },
                {route: "Balance", template:"EnBalance.ejs", title: "energy balance"},           
                {route: "22",                                title: ""},            
                {route: "PET",     template:"PET.ejs",       title: "positron emission tomography (PET)"},
            ], 
        },
        // index 3
        {
            mapCards: [
                {route: "40",                                    title: "" },
                {route: "41",                                    title: "" },
                {route: "EnergyProd", template:"EnergyProd.ejs", title: "energy dependence" }, 
            ],
        },
         // index 4
         {startNode: false,
            horizontalLinks: OER.linkType.weak,
            mapCards: [
                {route: "50",                          title: "" },
                {route: "51",                          title: "" },
                {route: "ZProd",    template:"ZProd.ejs", title: "Z dependence" },
                {route: "IntGraph", template:"IntGraph.ejs", title:"interactive graph"},
            ], 
        },
        // index 5
        {   
            mapCards: [
                {route: "70",    title: ""},
                {route: "71",    title: "" },
                {route: "Quiz2", template:"QuizProd.ejs", title: "quiz: production event", icons:["quiz"]}, 
            ],
        },

    ];
    
    scope.lesson7 = s;

}(window.OER.data = window.OER.data || {}));
