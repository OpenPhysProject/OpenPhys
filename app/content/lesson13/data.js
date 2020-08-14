(function (scope) {
    var s = {};
  
     s.title = "Gradient";
     s.preview = "/content/lesson13/assets/SpinIcon.png";  //svg image 
     s.themeColor = "#4CAF50"; 
     s.route = "Form"; 
     s.info = ""; 
     s.jumpNav = false;  // false 
     s.primaryPathIndex = 0; 
     s.rowLeadNumber = 1; 
     s.rowIncrement = 1; 

     s.contentMapData = [ 

 // Row 0
{ 
mapCards: [
      {route:"topics", template:"Topics.ejs", title:"topics"},
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
 // Row 1
{ 
    startNode: true,
    endNode: true,
    horizontalLinks: OER.linkType.strong,

mapCards: [
      {route:"beamGradient", template:"2-GradientIntro.ejs", title:"beam vs gradient"},
      {route:"ImagingGradients", template:"2-ImagingGradients.ejs", title:"imaging with gradients"},
      {route:"Readout", template:"2-Readout.ejs", title:"readout"},
      {route:"SliceSelection", template:"2-SliceSelection.ejs", title:"slice selection"},
      {route:"PhaseEncoding", template:"2-PhaseEncoding.ejs", title:"phase encoding"},
      {route:"2DFT", template:"2DFTSequence.ejs", title:"2DFT"},
      {route:"1DFFT", template:"1-1DFFT-Interactive.ejs", title:"* INTERACTIVE * 1D-FFT"},
      {route:"KIntro", template:"2-KSpace-Intro.ejs", title:"k space introduction"},
      {route:"Motifs", template:"4-Motifs.ejs", title:"sequence motifs"},
   ], 
 }, 
 // Row 2
{ 
mapCards: [
      {route:"Formation", template:"2-Formation.ejs", title:"MRI image formation"},
      {route:"Hardware", template:"Grad-Hardware.ejs", title:"gradient hardware"},
      {route:"MultiSpin", template:"2-MultiSpin.ejs", title:"* INTERACTIVE * gradient and spins"},
      {route:"SliceThick", template:"2-SliceThick.ejs", title:"slice thickness"},
      {title:""}, 
      {route:"SeqDiagGE", template:"2-SeqDiagGE.ejs", title:"* INTERACTIVE * gradient echo (GE) pulse sequence diagram"},
      {title:""}, 
      {route:"KBasics", template:"2-KSpace-Basics.ejs", title:"k space basics"},
      {title:""}, 
   ], 
 }, 
 // Row 3
{ 
mapCards: [
      {title:""}, 
      {title:""}, 
      {route:"MultiSpinB", template:"3-MultiSpinB.ejs", title:"* INTERACTIVE * two objects"},
      {route:"multislice", template:"Multislice.ejs", title:"multislice"},
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {route:"KMethods", template:"2-KSpace-Advanced.ejs", title:"k space advanced"},
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
      {title:""}, 
      {route:"2DFFT", template:"1-2DFFT-Interactive.ejs", title:"* INTERACTIVE * 2D-FFT"},
      {title:""}, 
   ], 
 }, 
  // end...    
       ];   

  scope.lesson13 = s; 
  }(window.OER.data = window.OER.data || {}));    
