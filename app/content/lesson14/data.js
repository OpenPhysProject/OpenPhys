(function (scope) {
    var s = {};
  
     s.title = "MR in RT";
     s.preview = "/content/lesson14/assets/SpinIcon.png";  //svg image 
     s.themeColor = "#4CAF50"; 
     s.route = "RT"; 
     s.info = ""; 
     s.jumpNav = false;  // false 
     s.primaryPathIndex = 1; 
     s.rowLeadNumber = 1; 
     s.rowIncrement = 1; 

     s.contentMapData = [ 

 // Row 0
{ 
mapCards: [
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {title:""}, 
   ], 
 }, 
 // Row 1
{ 
mapCards: [
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {title:""}, 
   ], 
 }, 
 // Row 2
{ 
    startNode: true,
    endNode: true,
    horizontalLinks: OER.linkType.strong,

mapCards: [
      {route:"MRIRT", template:"1-MR-in-RT.ejs", title:"MRI in RT"},
      {route:"RTPlan", template:"2-Plan.ejs", title:"for planning"},
      {route:"RTTreat", template:"3-Treat.ejs", title:"during treatment"},
      {route:"MRgRT", template:"4-MRgRT.ejs", title:"MR guidance"},
      {route:"MRonly", template:"5-MROnly.ejs", title:"MR only workflow"},
      {title:""}, 
   ], 
 }, 
 // Row 3
{ 
mapCards: [
      {title:""}, 
      {route:"Simulators", template:"Simulators.ejs", title:" simulators . . . . . V V V V V V V V V"},
      {title:""}, 
      {route:"LinacMR", template:"Linac-MR.ejs", title:"Linac MR"},
      {title:""}, 
      {title:""}, 
   ], 
 }, 
 // Row 4
{ 
mapCards: [
      {title:""}, 
      {route:"RTDensity", template:"Density.ejs", title:"electron density"},
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {title:""}, 
   ], 
 }, 
 // Row 5
{ 
mapCards: [
      {title:""}, 
      {route:"Geo", template:"MRI-Geometry.ejs", title:"MRI Geometric Accuracy in RT"},
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {title:""}, 
   ], 
 }, 
  // end...    
       ];   

  scope.lesson14 = s; 
  }(window.OER.data = window.OER.data || {}));    
