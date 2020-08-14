(function (scope) {
    var s = {};
    
    s.title = "Sandbox";
    s.preview = "/content/Sandbox/assets/icon_sandbox.svg"; //svg image
    s.themeColor = "#795548";
    s.route = "Sandbox";
    s.info = "";
    s.jumpNav = false;  // false 
    s.primaryPathIndex = 0; 
    s.rowLeadNumber = 0; 
    s.rowIncrement = 1;     
    
    s.contentMapData = [
        // index 0
        {
         startNode: true,
         endNode: true,
         horizontalLinks: OER.linkType.strong,
            
            mapCards: [ 
                {route:"Three",        title:"spin dephasing (Just Rotations)",      template:"threeDemo1.ejs",  group:" "},
                {route:"Three2",        title:"spin dephasing2 (Just Rotations)",    template:"SpinEcho3D.ejs",  group:" "},  
                {route:"EchoArray",     title:"NMR spin echo simulation (full Bloch Equation simulation in JavaScript)", 
                    template:"SpinEchoArray.ejs",  group:" "}, 
                {route:"boxedContent", title:"Boxed Content style",template:"boxedContent.ejs",group:" "},
            ],
        },

        // index 2
//        {
//            mapCards: [
//                {title:"Japanese 205", image: "", route:"Japan"},
//                {title:"Japanese 1-1", image: "", route:"Japan1-1"},
//                {title:"Japanese 2-1", image: "", route:"Japan2-1"}, 
//                {title:"Japanese 3-1 My Day", image: "", route:"Japan3-1"},   
//                {title:"Japanese 4-1 Word", image: "", route:"Japan4-1"},            
//            ],
//        },
//         // index 3
//         {
//            mapCards: [
//                {title:"", image: "", route:""},
//                {title:"Japanese 1-2", image: "", route:"Japan1-2"},  
//                {title:"Japanese 2-2", image: "", route:"Japan2-2"},
//                {title:"Japanese 3-2 Weekend", image: "", route:"Japan3-2"},           
//            ], 
//        },
//         // index 4
//         {
//            mapCards: [
//                {title:"", image: "", route:""},
//                {title:"Japanese 1-3", image: "", route:"Japan1-3"}, 
//                {title:"Japanese 2-3 Vegetables", image: "", route:"Japan2-3"},
//                {title:"Japanese 3-3", image: "", route:"Japan3-3"},            
//            ],        
//        },
    ];

    scope.Sandbox = s;

}(window.OER.data = window.OER.data || {}));
