(function (scope) {
    var s = {};
    
    s.title = "Photoelectric Effect";
    s.preview = "/content/lesson5/assets/PE.svg"; //svg image
    s.route = "PE";
    s.info = "";
    s.jumpNav = false;    
    s.primaryPathIndex = 0;
    
    s.contentMapData = [  
        // index 0,
        {
            startNode: true,
            endNode: true, 
            horizontalLinks: OER.linkType.strong,
            mapCards: [
                {title:"100 PE Introduction",     image:"", route:"100_0"},
                {title:"100.1 PE History",        image:"", route:"100_1"},
                {title:"100.2 Scenarios",         image:"", route:"100_2"}, 
                {title:"100.3 Optical PE Effect", image:"", route:"100_3"},           
                {title:"100.4 X-ray, Low Z",      image:"", route:"100_4"},            
            ],    
        },
         // index 1,
         {
            mapCards: [ 
                {title:"", image:"", route:"200_0"}, 
                {title:"", image:"", route:"200_1"},
                {title:"", image:"", route:"200_2"},  
                {title:"200.3 Quantum Light", image:"", route:"200_3"},           
            ],                  
        },
    ];

    scope.lesson5 = s;

}(window.OER.data = window.OER.data || {}));
