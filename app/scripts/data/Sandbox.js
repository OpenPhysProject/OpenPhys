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
            {title:"30.1 Japanese", image: "", route:"Japan"},
          
        ],
   
    ];

    scope.Sandbox = s;

}(window.OER.data = window.OER.data || {}));
