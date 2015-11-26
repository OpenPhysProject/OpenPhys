(function (scope) {
    var s = {};
    
    s.title = "Sandbox";
    s.preview = "/images/Sandbox/DemoSign.svg"; //svg image
    s.route = "Sandbox";
    s.info = "";
    s.primaryPathIndex = 2;
    
    s.contentMapData = [
    // index 0
        [
            {title:"20.1 Circle",   image: "", route:"Circle"},
            {title:"20.2 Scale",    image: "", route:"Scale"},
            {title:"20.3 Interact", image: "", route:"Interact"},           
            {title:"20.4 CreateJS", image: "", route:"CreateJS"},             
        ],
  
      // index 1
        [
            {title:"", image: "", route:""},
          
        ],
    // index 2
        [
            {title:"Japanese 205", image: "", route:"Japan"},
            {title:"Japanese 1-1", image: "", route:"Japan1-1"},
            {title:"Japanese 2-1", image: "", route:"Japan2-1"}, 
            {title:"Japanese 3-1 My Day", image: "", route:"Japan3-1"},   
            {title:"Japanese 4-1 Word", image: "", route:"Japan4-1"},            
        ],
     // index 3
        [
            {title:"", image: "", route:""},
            {title:"Japanese 1-2", image: "", route:"Japan1-2"},  
            {title:"Japanese 2-2", image: "", route:"Japan2-2"},
            {title:"Japanese 3-2 Weekend", image: "", route:"Japan3-2"},           
        ], 
     // index 4
        [
            {title:"", image: "", route:""},
            {title:"Japanese 1-3", image: "", route:"Japan1-3"}, 
            {title:"Japanese 2-3 Vegetables", image: "", route:"Japan2-3"},
            {title:"Japanese 3-3", image: "", route:"Japan3-3"},            
        ],        
        
    ];

    scope.Sandbox = s;

}(window.OER.data = window.OER.data || {}));
