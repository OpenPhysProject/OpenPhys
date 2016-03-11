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
                {route:"100_0", title:"Introduction"  },
                {route:"100_1", title:"Terms Explained"  },
                {route:"100_2", title:"E=mc2 as a Conversion between Units"  }, 
                {route:"100_3", title:"E=mc2 for a Particle at Rest"  },           
                {route:"100_4", title:"E=mc2 for Particles in Motion" }, 
                {route:"100_5", title:"E=mc2 and Binding Energy"  }, 
                {route:"100_6", title:"E=mc2 for a Photon?"  },
                {route:"100_7", title:"E=mc2 and Antimatter" },  
                {route:"100_8", title:"E=mc2 Summary" },           
            ],        
        },

        // index 1,
        {
            mapCards: [
                {route:"200_0", title:"" },
                {route:"200_1", title:"" }, 
                {route:"200_2", title:"" },           
                {route:"200_3", title:"E=mc2 for an Electron at Rest" },  
                {route:"200_4", title:"E=mc2 for Classical Motion"  }, 
                {route:"200_5", title:"E=mc2 for Bound Electrons" },            
            ],  
        },

         // index 2,
         {
            mapCards: [
                {route:"300_0", title:"" },
                {route:"300_1", title:"" }, 
                {route:"300_2", title:"" },           
                {route:"300_3", title:"E=mc2 for a Proton at Rest"  },
                {route:"300_4", title:"E=mc2 for Relativistic Motion" },            
                {route:"300_5", title:"E=mc2 for a Nucleus"  },           
            ],     
        },
        
    ];

    scope.lesson3 = s;

}(window.OER.data = window.OER.data || {}));
