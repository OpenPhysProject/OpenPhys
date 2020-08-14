(function (scope) {
    var s = {};
  
     s.title = "Inside an MRI Pixel";
     s.preview = "/content/lesson10/assets/SpinIcon.png";  //svg image 
     s.themeColor = "#4CAF50"; 
     s.route = "Pixel"; 
     s.info = ""; 
     s.jumpNav = false;  // false 
     s.primaryPathIndex = 0; 
     s.rowLeadNumber = 1; 
     s.rowIncrement = 1; 

     s.contentMapData = [ 

 // Row 0
{ 
    startNode: true,
    endNode: true,
    horizontalLinks: OER.linkType.strong,

mapCards: [
      {route:"IntroPixel", template:"IntroPixel.ejs", title:"INSIDE THE PIXEL"},
      {route:"M", template:"M.ejs", title:"M in a pixel"},
      {route:"B0", template:"B0.ejs", title:"B0 in a pixel"},
      {route:"B1", template:"B1.ejs", title:"B1 in a pixel"},
      {route:"Phase", template:"Phase.ejs", title:"PHASE"},
      {route:"OffResonance", template:"OffResonance.ejs", title:"OFF-RESONANCE"},
      {route:"RotatingFrame", template:"RotatingFrame.ejs", title:"THE ROTATING FRAME"},
      {route:"FlipAngle", template:"FlipAngle.ejs", title:"FLIP ANGLE"},
      {route:"180InversionPulse", template:"180InversionPulse.ejs", title:"180 DEG INVERSION PULSE"},
      {route:"B0Inhomogeneity", template:"B0Inhomogeneity.ejs", title:"B0 inhomogeneity"},
      {route:"SpinEcho", template:"SpinEcho.ejs", title:"THE SPIN ECHO"},
   ], 
 }, 
 // Row 1
{ 
mapCards: [
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {route:"TransversePlane", template:"TransversePlane.ejs", title:"the transverse plane"},
      {route:"MagnetCentreFreq", template:"MagnetCentreFreq.ejs", title:"magnet centre frequency"},
      {route:"PrecessionBeff", template:"PrecessionBeff.ejs", title:"precession about Beff"},
      {route:"90FlipAngle", template:"90FlipAngle.ejs", title:"90 deg flip angle"},
      {route:"InversionRecovery", template:"InversionRecovery.ejs", title:"inversion recovery"},
      {route:"TissueT2*", template:"TissueT2star.ejs", title:"tissue: T2*"},
      {route:"180RefocusingPulse", template:"180RefocusingPulse.ejs", title:"180 deg refocusing pulse"},
   ], 
 }, 
 // Row 2
{ 
mapCards: [
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {route:"InPhase", template:"InPhase.ejs", title:"in phase"},
      {route:"SpinFreq", template:"SpinFreq.ejs", title:"spin frequency"},
      {title:""}, 
      {route:"SmallFlipAngle", template:"SmallFlipAngle.ejs", title:"small flip angle"},
      {route:"FLAIR", template:"FLAIR.ejs", title:"FLAIR"},
      {route:"MetalInBody", template:"MetalInBody.ejs", title:"metal in the body"},
      {route:"SpinEchoInteract", template:"2-Spin-Echo-Interact.ejs", title:"* INTERACTIVE * Full Bloch Equation Simulation"},
   ], 
 }, 
 // Row 3
{ 
mapCards: [
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {route:"OutofPhase", template:"OutofPhase.ejs", title:"out of phase"},
      {route:"RFFreq", template:"RFFreq.ejs", title:"RF frequency"},
      {title:""}, 
      {route:"180FlipAngle", template:"180FlipAngle.ejs", title:"180 deg flip angle"},
      {route:"InvRecover", template:"1-InvRecover.ejs", title:"* INTERACTIVE * Inversion Recovery"},
      {route:"CorrectionByShimming", template:"Shimming.ejs", title:"correction by shimming"},
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
      {route:"MDephased", template:"MDephased.ejs", title:"M dephased"},
      {title:""}, 
      {title:""}, 
      {route:"SquarePulses", template:"SquarePulses.ejs", title:"square pulses"},
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
      {route:"B1phase", template:"B1PulsePhase.ejs", title:"B1 (pulse) phase"},
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {title:""}, 
   ], 
 }, 
 // Row 6
{ 
mapCards: [
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {route:"MSignalPhase", template:"MSignalPhase.ejs", title:"M (signal) phase"},
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

  scope.lesson10 = s; 
  }(window.OER.data = window.OER.data || {}));    
