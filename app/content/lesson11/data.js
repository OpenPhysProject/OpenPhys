(function (scope) {
    var s = {};
  
     s.title = "MRI Course";
     s.preview = "/content/lesson11/assets/SpinIcon.png";  //svg image 
     s.themeColor = "#4CAF50"; 
     s.route = "ImaSeq"; 
     s.info = ""; 
     s.jumpNav = false;  // false 
     s.primaryPathIndex = 1; 
     s.rowLeadNumber = 1; 
     s.rowIncrement = 1; 

     s.contentMapData = [ 

 // Row 0
{ 
    startNode: true,
    endNode: true,
    horizontalLinks: OER.linkType.strong,

mapCards: [
      {route:"GradientMod", template:"GradientModule.ejs", title:"gradient module"},
      {route:"Motifs", template:"Motifs.ejs", title:"sequence motifs"},
      {route:"Patterns", template:"SeqPatterns.ejs", title:"sequence patterns"},
      {route:"Clinical", template:"Clinical.ejs", title:"clinical sequences (major module)"},
      {route:"Contrast", template:"Contrast.ejs", title:"contrast"},
      {route:"Artifacts", template:"Artifacts.ejs", title:"artifacts"},
      {route:"KSpace", template:"KSpaceTech.ejs", title:"k space methods"},
      {route:"Trade", template:"Trade.ejs", title:"trade-offs"},
      {route:"Detect", template:"Detect.ejs", title:"detection"},
      {route:"ShimMod", template:"ShimModule.ejs", title:"shim module"},
      {title:""}, 
      {title:""}, 
   ], 
 }, 
 // Row 1
{ 
mapCards: [
      {route:"GradientIntro", template:"GradientIntro.ejs", title:"gradient intro"},
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {title:""}, 
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
mapCards: [
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {title:""}, 
   ], 
 }, 
  // end...    
       ];   

  scope.lesson11 = s; 
  }(window.OER.data = window.OER.data || {}));    
