(function (scope) {
    var s = {};
    
    s.title = "NMR";
    s.preview = "/content/lesson9/assets/icon_Emc2.svg"; //svg image
    s.themeColor = "#4CAF50";
    s.route = "NMR";
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
                {route:"Rest",         template:"Rest.ejs",         title:"e=mc<sup>2</sup> for a particle at rest"  },           
                {route:"Motion",       template:"Motion.ejs",       title:"e=mc<sup>2</sup> for particles in motion" }, 
                {route:"Binding",      template:"Binding.ejs",      title:"e=mc<sup>2</sup> and binding energy"  }, 
                {route:"Photon",       template:"Photon.ejs",       title:"e=mc<sup>2</sup> for a photon?"  },
                {route:"Antimatter",   template:"Antimatter.ejs",   title:"e=mc<sup>2</sup> and antimatter" },  
                {route:"Summary",      template:"Summary.ejs",      title:"e=mc<sup>2</sup> summary" },    
                {route:"Quiz1",        template:"Quiz1.ejs",        title:"quiz: e=mc<sup>2</sup>", icons:["quiz"]},    
            ],        
        },

        // index 1,
     //   {
     //       mapCards: [
     //           {route:"200_0", title:"" },
     //           {route:"SoL", template:"SoL.ejs", title:"speed of light" }, 
     //           {route:"200_2", title:"" },           
     //           {route:"ElectronRest", template:"ElectronRest.ejs",   title:"e=mc<sup>2</sup> for an electron at rest", icons:["quiz"] },  
     //           {route:"Classical",    template:"Classical.ejs",      title:"e=mc<sup>2</sup> for classical motion"  }, 
     //           {route:"Nucleus",      template:"Nucleus.ejs",      title:"e=mc<sup>2</sup> for a nucleus"},         
     //       ],  
     //   },

         // index 2,
     //    {
     //       mapCards: [
     //           {route:"300_0", title:"" },
     //           {route:"300_1", title:"" }, 
     //           {route:"300_2", title:"" },           
     //           {route:"ProtonRest",   template:"ProtonRest.ejs",   title:"e=mc<sup>2</sup> for a proton at rest", icons:["quiz"] },
     //           {route:"Relativistic", template:"Relativistic.ejs", title:"e=mc<sup>2</sup> for relativistic motion", icons:["quiz"] },            
     //           {route:"BoundElectron", template:"BoundElectron.ejs", title:"e=mc<sup>2</sup> for bound electrons"},         
     //       ],     
     //   },
          // index 3,
      //   {
      //      mapCards: [
      //          {title:"" },
      //          {title:"" }, 
      //          {title:"" }, 
      //          {title:"" },
      //          {route:"Classical2", template:"Classical2.ejs", title:"e=mc<sup>2</sup> for classical motion revisited", icons:["quiz"]  },            
      //      ],     
      //  },
        
    ];

    scope.lesson9 = s;

}(window.OER.data = window.OER.data || {}));
