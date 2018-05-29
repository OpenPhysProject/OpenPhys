(function (scope) {
    var s = {};
  
     s.title = "Inside a Pixel";
     s.preview = "/content/lesson10/assets/NucleusStill.svg";  //svg image 
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
mapCards: [
      {title:""}, 
      {title:""}, 
      {route:"ComplexNumbers", template:"ComplexNumbers.ejs", title:"complex numbers"},
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
      {route:"IntroPixel", template:"IntroPixel.ejs", title:"INSIDE THE PIXEL"},
      {route:"NMRSpec", template:"NMRSpec.ejs", title:"NMR SPECTROSCOPY"},
      {route:"TimeFreq", template:"TimeFreq.ejs", title:"TIME and FREQUENCY"},
      {route:"Phase", template:"Phase.ejs", title:"PHASE"},
      {route:"OffResonance", template:"OffResonance.ejs", title:"OFF-RESONANCE"},
      {route:"RotatingFrame", template:"RotatingFrame.ejs", title:"THE ROTATING FRAME"},
      {route:"FlipAngle", template:"FlipAngle.ejs", title:"FLIP ANGLE"},
   ], 
 }, 
 // Row 2
{ 
mapCards: [
      {route:"M", template:"M.ejs", title:"M"},
      {route:"ChemShift", template:"ChemShift.ejs", title:"the chemical shift (ppm)"},
      {route:"Linearity", template:"Linearity.ejs", title:"linearity"},
      {route:"TransversePlane", template:"TransversePlane.ejs", title:"the transverse plane"},
      {route:"MagnetCentreFreq", template:"MagnetCentreFreq.ejs", title:"magnet centre frequency"},
      {route:"WorldSpinning", template:"WorldSpinning.ejs", title:"the world is spinning"},
      {route:"SmallFlipAngle", template:"SmallFlipAngle.ejs", title:"small flip angle"},
   ], 
 }, 
 // Row 3
{ 
mapCards: [
      {route:"B0", template:"B0.ejs", title:"B0"},
      {route:"SpectrumBody", template:"SpectrumBody.ejs", title:"spectrum of the body"},
      {route:"FT", template:"FT.ejs", title:"fourier transform"},
      {route:"InPhase", template:"InPhase.ejs", title:"in phase"},
      {route:"SpinFreq", template:"SpinFreq.ejs", title:"spin frequency"},
      {route:"PrecessionBeff", template:"PrecessionBeff.ejs", title:"precession about $B_{eff}$"},
      {route:"90FlipAngle", template:"90FlipAngle.ejs", title:"90 flip angle"},
   ], 
 }, 
 // Row 4
{ 
mapCards: [
      {route:"B1", template:"B1.ejs", title:"B1"},
      {title:""}, 
      {route:"FFT", template:"FFT.ejs", title:"fast fourier transform"},
      {route:"OutofPhase", template:"OutofPhase.ejs", title:"out of phase"},
      {route:"RFFreq", template:"RFFreq.ejs", title:"RF frequency"},
      {title:""}, 
      {title:""}, 
   ], 
 }, 
 // Row 5
{ 
mapCards: [
      {route:"ProtonDensity", template:"ProtonDensity.ejs", title:"proton density"},
      {title:""}, 
      {title:""}, 
      {route:"MDephased", template:"MDephased.ejs", title:"M dephased"},
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
      {route:"B1phase", template:"B1PulsePhase.ejs", title:"B1 (pulse) phase"},
      {title:""}, 
      {title:""}, 
      {title:""}, 
   ], 
 }, 
 // Row 7
{ 
mapCards: [
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {route:"MSignalPhase", template:"MSignalPhase.ejs", title:"M (signal) phase"},
      {title:""}, 
      {title:""}, 
      {title:""}, 
   ], 
 }, 
  // end...    
       ];   

  scope.lesson10 = s; 
  }(window.OER.data = window.OER.data || {}));    
