(function (scope) {
    var s = {};
    
    s.title = "Electromagnetic Spectrum";
    //s.preview = "/content/lesson4/assets/icon_photoelectriceffect.svg"; //svg image
    s.themeColor = "#E91E63"; // straight outta' Compton
    s.route = "EM";
    s.info = "";
    s.jumpNav = false;    
    s.primaryPathIndex = 0;
    s.rowLeadNumber = 1;
    s.rowIncrement = 1;
    
    s.contentMapData = [  
        // index 0,
        {
            startNode: true,
            endNode: true, 
            horizontalLinks: OER.linkType.strong,
            mapCards: [
                {route:"100_0", title:"EM Introduction"  },
                {route:"100_1", title:"EM History"       },
//                {route:"100_2", title:"Scenarios"        }, 
//                {route:"100_3", title:"Optical PE Effect"},           
//                {route:"100_4", title:"X-ray, Low Z"     },            
            ],    
        },
         // index 1,
         {
            mapCards: [ 
                {route:"200_0", title:"" }, 
                {route:"200_1", title:"" },
                {route:"200_2", title:"" },  
              //  {route:"200_3", title:"Quantum Light"},           
            ],                  
        },
    ];

    scope.lesson4 = s;

}(window.OER.data = window.OER.data || {}));
