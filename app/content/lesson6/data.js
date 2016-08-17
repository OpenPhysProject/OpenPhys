(function (scope) {
    var s = {};
    
    s.title = "Compton X-Ray Scattering";
    s.preview = "/content/lesson6/assets/icon_comptonxrayscattering.svg"; //svg image
    s.themeColor = "#E91E63";
    s.route = "Compton";
    s.info = "";
    s.jumpNav = true;    
    s.primaryPathIndex = 0;
    s.rowLeadNumber = 1;      // index for top row
    s.rowIncrement = 1; 
    
    s.contentMapData = [  
        // index 0,
        {
            mapCards: [
                {route:"10_0",      title:"LEVEL: introduction to x-rays"  },
                {route:"Particles", title:"x-rays as particles",   icons:["interaction"]},
                {route:"10_2",      title:"" },
                {route:"",          title:"" },
                {route:"",          title:"" },            
                {route:"10_5",      title:"level summary (x-rays)"  },             
                {route:"10_6",      title:"level quiz",   icons:["quiz"]},           
            ],
        },
        // index 1,
        {
            startNode: true,
            endNode: true,
            horizontalLinks: OER.linkType.strong,
            mapCards: [
                {route:"100_0",     title:"COMPTON SCATTERING - BASIC CONCEPTS" },
                {route:"Incident",  title:"photon scattering",      icons:["interaction"]},
                {route:"100_2",     title:"scatterer properties (& Rayleigh)"      },  
                {route:"100_3",     title:"scattered x-Ray"             }, 
                {route:"100_4",     title:"compton recoil electron" },
                {route:"100_5",     title:"level summary (basic)"  },  
                {route:"100_6",     title:"level quiz (basic)",   icons:["quiz"]},             
            ], 
        },
         // index 2,
         {
            mapCards: [
                {route:"200_0", title:"THE SCATTERING ANGLE" },
                {route:"200_1", title:"incident photon impact parameter"    },
                {route:"200_2", title:"scattering angle and scatterer" },  
                {route:"200_3", title:"the scattered photon angle"  }, 
                {route:"200_4", title:"angle & recoil electron (graph)" },
                {route:"200_5", title:"level summary (angle)"          },  
                {route:"200_6", title:"level quiz (angle)",   icons:["quiz"]},            
            ],
        },
         // index 3,
         {
            mapCards: [
                {route:"300_0", title:"INCIDENT PHOTON ENERGY"   },
                {route:"300_1", title:"energy of incident x-ray"   },
                {route:"300_2", title:"energy & scatterer"         },  
                {route:"300_3", title:"energy & sattered photon"   }, 
                {route:"300_4", title:"energy & recoil electron"  },          
                {route:"300_5", title:"level summary (energy)"   },  
                {route:"300_6", title:"level quiz (energy)",  icons:["quiz"]},            
            ],        
        },  
    ];

    scope.lesson6 = s;

}(window.OER.data = window.OER.data || {}));
