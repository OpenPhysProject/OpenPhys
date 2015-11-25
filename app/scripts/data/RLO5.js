(function (scope) {
    var s = {};
    
    s.title = "Photoelectric Effect";
    s.preview = "/images/RLO5/PE.svg"; //svg image
    s.route = "PE";
    s.info = "";
    s.jumpNav = false;    
    s.primaryPathIndex = 0;
    
    s.contentMapData = [  

    // index 0,
        [
            {title:"100 PE Introduction",       image:"", route:"100_0"},
            {title:"100.1 PE History",  image:"", route:"100_1"},
            {title:"100.2 Optical PE Effect", image:"", route:"100_2"}, 
            {title:"", image:"", route:"100_3"},           
            {title:"", image:"", route:"100_4"}, 
            {title:"", image:"", route:"100_5"}, 
            {title:"", image:"", route:"100_6"},
            {title:"", image:"", route:"100_7"},  
            {title:"", image:"", route:"100_8"},           
        ],        
                 
        
    ];

    scope.RLO5 = s;

}(window.OER.data = window.OER.data || {}));
