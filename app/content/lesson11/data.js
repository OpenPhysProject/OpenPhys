(function (scope) {
    var s = {};
  
     s.title = "Contrast";
     s.preview = "/content/lesson11/assets/SpinIcon.png";  //svg image 
     s.themeColor = "#4CAF50"; 
     s.route = "Contrast"; 
     s.info = ""; 
     s.jumpNav = false;  // false 
     s.primaryPathIndex = 1; 
     s.rowLeadNumber = 1; 
     s.rowIncrement = 1; 

     s.contentMapData = [ 

 // Row 0
{ 
mapCards: [
      {route:"Domains", template:"1-Four-Domains.ejs", title:"four domains of MRI"},
      {title:""}, 
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
    startNode: true,
    endNode: true,
    horizontalLinks: OER.linkType.strong,

mapCards: [
      {route:"ContrastModule", template:"2-Contrast-Intro.ejs", title:"CONTRAST and SEQUENCES"},
      {route:"Contrast", template:"2-Contrast.ejs", title:"contrast"},
      {route:"Sequences", template:"2-Pulse-Sequences.ejs", title:"pulse sequences"},
      {title:""}, 
      {route:"SeqDiagSE", template:"2-SeqDiagSE.ejs", title:"* INTERACTIVE * pulse sequence diagram SE"},
      {route:"spinsmotion", template:"2-MovingSpins.ejs", title:"spins in motion"},
      {route:"Artifacts", template:"2-Artifacts.ejs", title:"artifacts"},
      {title:""}, 
   ], 
 }, 
 // Row 2
{ 
mapCards: [
      {title:""}, 
      {route:"contrasts", template:"3-Contrast.ejs", title:"contrasts"},
      {route:"optimum", template:"Parameters.ejs", title:"pulse sequence parameters"},
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {title:""}, 
   ], 
 }, 
 // Row 3
{ 
mapCards: [
      {title:""}, 
      {title:""}, 
      {route:"catalogue", template:"4-Catalog.ejs", title:"sequence catalogue"},
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {title:""}, 
   ], 
 }, 
 // Row 4
{ 
mapCards: [
      {title:""}, 
      {title:""}, 
      {route:"Patterns", template:"5-SeqPatterns.ejs", title:"sequence patterns"},
      {title:""}, 
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
