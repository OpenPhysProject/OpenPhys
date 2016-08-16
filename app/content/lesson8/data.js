(function (scope) {
  var s = {};

  s.title   = "Photon Beam Attenuation";
  s.preview = "/content/lesson8/assets/icon_attenuation.svg"; //svg image for tile
  s.themeColor = "#851535";
  s.route   = "Beam";
  s.info = "";
  s.primaryPathIndex = 2;  // 3
  s.rowLeadNumber = 1;      // index for top row
  s.rowIncrement  = 1;

  s.contentMapData = [   
    // index 0
    {
        startNode: true,
        endNode: true,
        horizontalLinks: OER.linkType.strong,
        mapCards: [
            {route:"Attenuation",     template:"Attenuation.ejs",     title:"Photon Beam Attenuation"},
            {route:"Fluence",         template:"Fluence.ejs",         title:"Fluence"},
            {route:"Distance",           template:"Distance.ejs",      title:"Distance"},
            {route:"PhotonAbsorption",     template:"Absorption.ejs",     title:"Photon Absorption"},
            {route:"BeamScattering",         template:"Scattering.ejs",         title:"Beam Scattering"},
            {route:"Measurements",           template:"Measurements.ejs",      title:"Experimental Measurements"},
            {route:"ExpDef",           template:"Exp_Def.ejs",      title:"Exponential Definition"},
        ],
    },  
    //index 1
    {
        mapCards: [
            {route:"",                              title:""},
            {route:"",                              title:""},
            {route:"InverseSquareLaw",           template:"Inverse_Sq_Law.ejs",      title:"Inverse Square Law"},
            {route:"PE",     template:"PE.ejs",     title:"Photoelectric Effect"},
            {route:"Coherent",         template:"Coherent.ejs",         title:"Coherent Scattering"},
            {route:"PDD",           template:"PDD.ejs",      title:"Percentage Depth Dose"},
            {route:"ExpConditions",           template:"Exp_Conditions.ejs",      title:"Exponential Conditions"},         
        ]
    }, 
    // index 2 
    {
        mapCards: [
            {route:"",                              title:""},
            {route:"",                              title:""},
            {route:"",                              title:""},
            {route:"PP",           template:"PP.ejs",      title:"Pair Production"},
            {route:"Compton",         template:"Compton.ejs",         title:"Compton Scattering"},
            {route:"HVL",           template:"HVL.ejs",      title:"Half Value Layer"},
            {route:"Mu",           template:"Mu.ejs",      title:"Attenuation Constant"},            
        ],
    },
    // index 3 
    {
        mapCards: [
            {route:"",                              title:""},
            {route:"",                              title:""},
            {route:"",                              title:""},
            {route:"PP",           template:"Photodisintegration.ejs",      title:"Photodisintegration"},
            {route:"",                              title:""},
            {route:"",                              title:""},
            {route:"Mu 2",           template:"Mu2.ejs",      title:"Attenuation Constant 2",   icons:["quiz"]},    
        ], 
    },
    ];

    scope.lesson8 = s;

}(window.OER.data = window.OER.data || {}));
