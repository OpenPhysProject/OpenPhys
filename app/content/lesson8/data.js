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
            { group:"attenuation", route:"Attenuation",     template:"Attenuation.ejs",     title:"PHOTON BEAM ATTENUATION"},
            { group:"fluence", route:"Fluence",         template:"Fluence.ejs",         title:"FLUENCE"},
            { group:"distance", route:"Distance",           template:"Distance.ejs",      title:"DISTANCE"},
            { group:"absorption", route:"PhotonAbsorption",     template:"Absorption.ejs",     title:"PHOTON ABSORPTION"},
            { group:"scattering", route:"BeamScattering",         template:"Scattering.ejs",         title:"BEAM SCATTERING"},
            { group:"measurements", route:"Measurements",           template:"Measurements.ejs",      title:"EXPERIMENTAL MEASUREMENTS"},
            { group:"mu", route:"ExpDef",           template:"Exp_Def.ejs",      title:"exponential definition"},
        ],
    },  
    //index 1
    {
        mapCards: [
            {route:"",                              title:""},
            {route:"",                              title:""},
            { group:"distance", route:"InverseSquareLaw",           template:"Inverse_Sq_Law.ejs",      title:"inverse square law"},
            { group:"absorption", route:"PE",     template:"PE.ejs",     title:"photoelectric effect"},
            { group:"scattering", route:"Coherent",         template:"Coherent.ejs",         title:"coherent scattering"},
            { group:"measurements",     route:"PDD",           template:"PDD.ejs",      title:"percentage depth dose"},
            { group:"mu",   route:"ExpConditions",           template:"Exp_Conditions.ejs",      title:"exponential conditions"},         
        ]
    }, 
    // index 2 
    {
        mapCards: [
            {route:"",                              title:""},
            {route:"",                              title:""},
            {route:"",                              title:""},
            { group:"absorption", route:"PP",           template:"PP.ejs",      title:"pair production"},
            { group:"scattering", route:"Compton",         template:"Compton.ejs",         title:"compton scattering"},
            { group:"measurements", route:"HVL",           template:"HVL.ejs",      title:"half value layer"},
            { group:"mu", route:"Mu",           template:"Mu.ejs",      title:"attenuation constant"},            
        ],
    },
    // index 3 
    {
        mapCards: [
            {route:"",                              title:""},
            {route:"",                              title:""},
            {route:"",                              title:""},
            { group:"absorption", route:"PD",           template:"Photodisintegration.ejs",      title:"photo- disintegration"},
            { group:"scattering", route:"Quiz 1",           template:"Quiz_Scatter.ejs",      title:"quiz: scattering",   icons:["quiz"]},
            { group:"measurements", route:"",                              title:""},
            { group:"mu", route:"Mu 2",           template:"Mu2.ejs",      title:"worked examples: attenuation constant",   icons:["quiz"]},    
        ], 
    },
    //index 4
        {
        mapCards: [
            {route:"",                              title:""},
            {route:"",                              title:""},
            {route:"",                              title:""},
            { group:"absorption", route:"Quiz 1",           template:"Quiz_Abs.ejs",      title:"quiz: absorption",   icons:["quiz"]},
            {route:"",                              title:""},
            {route:"",                              title:""},
            {route:"",                              title:""},
        ], 
    },
    ];

    scope.lesson8 = s;

}(window.OER.data = window.OER.data || {}));
