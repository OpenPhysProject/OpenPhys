(function (scope) {
    var s = {};
    
    s.title = "E = mc2";
    s.preview = "/content/lesson3/assets/icon_Emc2.svg"; //svg image
    s.themeColor = "#4CAF50";
    s.route = "Emc2";
    s.info = "";
    s.jumpNav = false;    
    s.primaryPathIndex = 0;
    s.rowLeadNumber = 100;
    s.rowIncrement = 100;
    
    s.contentMapData = [  

        // index 0,
    {            
        startNode: true,
            endNode: true,
            horizontalLinks: OER.linkType.strong,
            mapCards: [
                {route:"100_0", title:"introduction"  },
                {route:"100_1", title:"terms explained"  },
                {route:"100_2", title:"e=mc<sup>2</sup> as a conversion between units"  }, 
                {route:"100_3", title:"e=mc<sup>2</sup> for a particle at rest"  },           
                {route:"100_4", title:"e=mc<sup>2</sup> for particles in motion" }, 
                {route:"100_5", title:"e=mc<sup>2</sup> and binding energy"  }, 
                {route:"100_6", title:"e=mc<sup>2</sup> for a photon?"  },
                {route:"100_7", title:"e=mc<sup>2</sup> and antimatter" },  
                {route:"100_8", title:"e=mc<sup>2</sup> summary" },           
            ],        
        },

        // index 1,
        {
            mapCards: [
                {route:"200_0", title:"" },
                {route:"200_1", title:"" }, 
                {route:"200_2", title:"" },           
                {route:"200_3", title:"e=mc<sup>2</sup> for an electron at rest" },  
                {route:"200_4", title:"e=mc<sup>2</sup> for classical motion"  }, 
                {route:"200_5", title:"e=mc<sup>2</sup> for bound electrons" },            
            ],  
        },

         // index 2,
         {
            mapCards: [
                {route:"300_0", title:"" },
                {route:"300_1", title:"" }, 
                {route:"300_2", title:"" },           
                {route:"300_3", title:"e=mc<sup>2</sup> for a proton at rest"  },
                {route:"300_4", title:"e=mc<sup>2</sup> for relativistic motion" },            
                {route:"300_5", title:"e=mc<sup>2</sup> for a nucleus"  },           
            ],     
        },
        
    ];

    scope.lesson3 = s;

}(window.OER.data = window.OER.data || {}));
