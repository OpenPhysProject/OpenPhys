(function (scope) {
    var s = {};
    
    s.title = "E = mc2";
    s.preview = "/content/lesson3/assets/icon_Emc2.svg"; //svg image
    s.themeColor = "#4CAF50";
    s.route = "Emc2";
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
                {route:"Introduction", template:"Introduction.ejs", title:"introduction"  },
                {route:"Terms",        template:"Terms.ejs",        title:"terms explained"  },
                {route:"Conversion",   template:"Conversion.ejs",   title:"e=mc<sup>2</sup> as a conversion between units"  }, 
                {route:"Master",      template:"MasterEqn.ejs",      title:"only equation you will ever need"  }, 
                {route:"Rest",         template:"Rest.ejs",         title:"e=mc<sup>2</sup> for a particle at rest"  },           
                {route:"Motion",       template:"Motion.ejs",       title:"e=mc<sup>2</sup> for particles in motion" }, 
                {route:"Photon",       template:"Photon.ejs",       title:"e=mc<sup>2</sup> for a photon?"  },
                {route:"Binding",      template:"Binding.ejs",      title:"e=mc<sup>2</sup> and binding energy"  }, 
                {route:"Antimatter",   template:"Antimatter.ejs",   title:"e=mc<sup>2</sup> and antimatter" },  
                {route:"Summary",      template:"Summary.ejs",      title:"e=mc<sup>2</sup> summary" },    
                {route:"Quiz1",        template:"Quiz1.ejs",        title:"quiz: e=mc<sup>2</sup>", icons:["quiz"]},    
            ],        
        },

        // index 1,
        {
            mapCards: [
                {title:"" },
                {route:"SoL", template:"SoL.ejs", title:"speed of light" }, 
                {title:"" },  
                {title:"" },
                {route:"ElectronRest", template:"ElectronRest.ejs",   title:"e=mc<sup>2</sup> for an electron at rest", icons:["quiz"] },  
                {route:"Classical",    template:"Classical.ejs",      title:"e=mc<sup>2</sup> for classical motion"  }, 
                {title:"" },
                {route:"Nucleus",      template:"Nucleus.ejs",      title:"e=mc<sup>2</sup> for a nucleus"},         
            ],  
        },

         // index 2,
         {
            mapCards: [
                {title:"" },
                {title:"" }, 
                {title:"" },    
                {route:"300_3", title:"" }, 
                {route:"ProtonRest",   template:"ProtonRest.ejs",   title:"e=mc<sup>2</sup> for a proton at rest", icons:["quiz"] },
                {route:"Relativistic", template:"Relativistic.ejs", title:"e=mc<sup>2</sup> for relativistic motion", icons:["quiz"] },   
                {title:"" },
                {route:"BoundElectron", template:"BoundElectron.ejs", title:"e=mc<sup>2</sup> for bound electrons"},         
            ],     
        },
          // index 3,
         {
            mapCards: [
                {title:"" },
                {title:"" }, 
                {title:"" }, 
                {title:"" },
                {title:"" },
                {route:"Classical2", template:"Classical2.ejs", title:"e=mc<sup>2</sup> for classical motion revisited", icons:["quiz"]  },            
            ],     
        },
        
    ];

    scope.lesson3 = s;

}(window.OER.data = window.OER.data || {}));
