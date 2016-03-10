(function (scope) {
    var s = {};
    
    s.title = "Compton X-Ray Scattering";
    s.preview = "/content/lesson6/assets/icon_comptonxrayscattering.svg"; //svg image
    s.themeColor = "#E91E63";
    s.route = "Compton";
    s.info = "";
    s.jumpNav = true;    
    s.primaryPathIndex = 0;
    s.rowLeadNumber = 100;      // index for top row
    s.rowIncrement = 100; 
    
    s.contentMapData = [  
        // index 0,
        {
            mapCards: [
                {route:"10_0",      title:"LEVEL: Introduction to X-Rays"  },
                {route:"Particles", title:"X-Rays as Particles",   icons:["interaction"]},
                {route:"10_2",      title:"" },
                {route:"",          title:"" },
                {route:"",          title:"" },            
                {route:"10_5",      title:"Level Summary (X-rays)"  },             
                {route:"10_6",      title:"Level Quiz",   icons:["quiz"]},           
            ],
        },
        // index 1,
        {
            startNode: true,
            endNode: true,
            horizontalLinks: OER.linkType.strong,
            mapCards: [
                {route:"100_0",     title:"COMPTON SCATTERING - BASIC CONCEPTS" },
                {route:"Incident",  title:"Photon Scattering",      icons:["interaction"]},
                {route:"100_2",     title:"Scatterer Properties (& Rayleigh)"      },  
                {route:"100_3",     title:"Scattered X-Ray"             }, 
                {route:"100_4",     title:"Compton Recoil Electron" },
                {route:"100_5",     title:"Level Summary (Basic)"  },  
                {route:"100_6",     title:"Level Quiz (Basic)",   icons:["quiz"]},             
            ], 
        },
         // index 2,
         {
            mapCards: [
                {route:"200_0", title:"THE SCATTERING ANGLE" },
                {route:"200_1", title:"Incident Photon Impact Parameter"    },
                {route:"200_2", title:"Scattering Angle and Scatterer" },  
                {route:"200_3", title:"The Scattered Photon Angle"  }, 
                {route:"200_4", title:"Angle & Recoil Electron (GRAPH)" },
                {route:"200_5", title:"Level Summary (Angle)"          },  
                {route:"200_6", title:"Level Quiz (Angle)",   icons:["quiz"]},            
            ],
        },
         // index 3,
         {
            mapCards: [
                {route:"300_0", title:"INCIDENT PHOTON ENERGY"   },
                {route:"300_1", title:"Energy of Incident X-Ray"   },
                {route:"300_2", title:"Energy & Scatterer"         },  
                {route:"300_3", title:"Energy & Scattered Photon"   }, 
                {route:"300_4", title:"Energy & Recoil Electron"  },          
                {route:"300_5", title:"Level Summary (Energy)"   },  
                {route:"300_6", title:"Level Quiz (Energy)",  icons:["quiz"]},            
            ],        
        },  
    ];

    scope.lesson6 = s;

}(window.OER.data = window.OER.data || {}));
