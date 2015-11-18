(function (scope) {
    var s = {};
    
    s.title = "Sandbox";
    s.preview = "/images/Sandbox/DemoSign.svg"; //svg image
    s.route = "Sandbox";
    s.info = "";
    s.primaryPathIndex = 0;
    
    s.contentMapData = [
    // index 0
        [
            {title:"20.1 Circle", image: "", route:"Circle"},
            {title:"20.2 Scale", image: "", route:"Scale"},
            {title:"20.3 Interact", image: "", route:"Interact"},           
        ],
  
      // index 1
        [
            {title:"", image: "", route:""},
          
        ],
    // index 2
        [
            {title:"", image: "", route:""},
            {title:"Japanese 1-1", image: "", route:"Japan1-1"},       
        ],
     // index 3
        [
            {title:"", image: "", route:""},
            {title:"Japanese 1-2", image: "", route:"Japan1-2"},        
        ], 
     // index 4
        [
            {title:"", image: "", route:""},
            {title:"Japanese 1-3", image: "", route:"Japan1-3"},        
        ],        
        
    ];

    scope.Sandbox = s;

}(window.OER.data = window.OER.data || {}));
