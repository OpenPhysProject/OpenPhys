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
                {route:"1_0",      title:"--- Level 1 --- \n introduction to x-rays"  },
                {route:"Particles", title:"x-rays as particles",   icons:["interaction"]},
                {route:"1_2",      title:"" },
                {route:"",          title:"" },
                {route:"",          title:"" },            
                {route:"1_5",      title:"level 1 summary (x-rays)"  },             
                {route:"1_6",      title:"level 1 quiz (x-rays)",   icons:["quiz"]},           
            ],
        },
        // index 1,
        {
            startNode: true,
            endNode: true,
            horizontalLinks: OER.linkType.strong,
            mapCards: [
                {route:"2_0",     title:"--- Level 2 ---\n Compton scattering, the basic concepts" },
                {route:"Incident",  title:"photon scattering",      icons:["interaction"]},
                {route:"2_2",     title:"scatterer properties (& Rayleigh)"      },  
                {route:"2_3",     title:"scattered x-ray photon"             }, 
                {route:"2_4",     title:"compton recoil electron" },
                {route:"2_5",     title:"level 2 summary (basic)"  },  
                {route:"2_6",     title:"level 2 quiz (basic)",   icons:["quiz"]},             
            ], 
        },
         // index 2,
         {
            mapCards: [
                {route:"3_0", title:"--- Level 3 --- \n The scattering angle", group:"angle"  },
                {route:"3_1", title:"incident photon impact parameter", group:"angle"  },
                {route:"3_2", title:"scattering angle and scatterer",   group:"angle"  },  
                {route:"3_3", title:"the scattered photon angle",       group:"angle"  }, 
                {route:"3_4", title:"angle & recoil electron (graph)",  group:"angle"  },
                {route:"3_5", title:"level 3 summary (angle)",          group:"angle"  },  
                {route:"3_6", title:"level 3 quiz (angle)",   icons:["quiz"], group:"angle" },            
            ],
        },
         // index 3,
         {
            mapCards: [
                {route:"4_0", title:"--- Level 4 --- \n Incident photon energy", group:"energy"    },
                {route:"4_1", title:"energy of incident x-ray", group:"energy"   },
                {route:"4_2", title:"energy & scatterer", group:"energy"         },  
                {route:"4_3", title:"energy & sattered photon", group:"energy"   }, 
                {route:"4_4", title:"energy & recoil electron", group:"energy"  },          
                {route:"4_5", title:"level 4 summary (energy)", group:"energy"   },  
                {route:"4_6", title:"level 4 quiz (energy)",  icons:["quiz"], group:"energy"    },            
            ],        
        },  
    ];

    scope.lesson6 = s;

}(window.OER.data = window.OER.data || {}));
