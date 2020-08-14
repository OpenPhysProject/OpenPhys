(function (scope) {
    var s = {};
  
     s.title = "X-ray Tube";
     s.preview = "/content/lesson12/assets/XrayIcon.png";  //svg image 
     s.themeColor = "#4CAF50"; 
     s.route = "XRAY"; 
     s.info = ""; 
     s.jumpNav = false;  // false 
     s.primaryPathIndex = 0; 
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
      {route:"XObjectives", template:"XObjectives.ejs", title:"xray objectives"},
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
      {route:"IntroXRAY", template:"IntroX.ejs", title:"introduction to X-rays"},
      {route:"Summary", template:"SummaryX.ejs", title:"summary"},
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {title:""}, 
   ], 
 }, 
 // Row 3
{ 
mapCards: [
      {route:"History", template:"HistoryX.ejs", title:"history of X-rays"},
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
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {title:""}, 
   ], 
 }, 
  // end...    
       ];   

  scope.lesson12 = s; 
  }(window.OER.data = window.OER.data || {}));    
