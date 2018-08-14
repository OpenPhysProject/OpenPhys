(function (scope) {
    var s = {};
  
     s.title = "Inside an MRI Pixel";
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
    startNode: true,
    endNode: true,
    horizontalLinks: OER.linkType.strong,

mapCards: [
      {route:"IntroPixel", template:"IntroPixel.ejs", title:"INSIDE THE PIXEL"},
      {route:"NMRSpec", template:"NMRSpec.ejs", title:"NMR SPECTROSCOPY"},
      {route:"TimeFreq", template:"TimeFreq.ejs", title:"TIME and FREQUENCY"},
      {route:"ComplexNumbers", template:"ComplexNumbers.ejs", title:"COMPLEX NUMBERS"},
      {route:"Phase", template:"Phase.ejs", title:"PHASE"},
      {route:"OffResonance", template:"OffResonance.ejs", title:"OFF-RESONANCE"},
      {route:"RotatingFrame", template:"RotatingFrame.ejs", title:"THE ROTATING FRAME"},
      {route:"FlipAngle", template:"FlipAngle.ejs", title:"FLIP ANGLE"},
      {route:"180InversionPulse", template:"180InversionPulse.ejs", title:"180 DEG INVERSION PULSE"},
      {route:"B0Inhomogeneity", template:"B0Inhomogeneity.ejs", title:"B0 inhomogeneity"},
      {route:"SpinEcho", template:"SpinEcho.ejs", title:"THE SPIN ECHO"},
      {route:"ImagingGradients", template:"ImagingGradients.ejs", title:"IMAGING GRADIENTS"},
   ], 
 }, 
 // Row 1
{ 
mapCards: [
      {route:"M", template:"M.ejs", title:"M in a pixel"},
      {route:"ChemShift", template:"ChemShift.ejs", title:"the chemical shift (ppm)"},
      {route:"SineCosine", template:"SineCosine.ejs", title:"sine and cosine"},
      {route:"ComplexFT", template:"ComplexFT.ejs", title:"complex FT"},
      {route:"TransversePlane", template:"TransversePlane.ejs", title:"the transverse plane"},
      {route:"MagnetCentreFreq", template:"MagnetCentreFreq.ejs", title:"magnet centre frequency"},
      {route:"PrecessionBeff", template:"PrecessionBeff.ejs", title:"precession about $B_{eff}$"},
      {route:"90FlipAngle", template:"90FlipAngle.ejs", title:"90 deg flip angle"},
      {route:"InversionRecovery", template:"InversionRecovery.ejs", title:"inversion recovery"},
      {route:"TissueT2*", template:"TissueT2star.ejs", title:"tissue: T2*"},
      {route:"180RefocusingPulse", template:"180RefocusingPulse.ejs", title:"180 deg refocusing pulse"},
      {route:"Readout", template:"Readout.ejs", title:"readout"},
   ], 
 }, 
 // Row 2
{ 
mapCards: [
      {route:"B0", template:"B0.ejs", title:"$B_0$ in a pixel"},
      {route:"SpectrumBody", template:"SpectrumBody.ejs", title:"spectrum of the body"},
      {route:"MakingWaves", template:"MakingWaves.ejs", title:"making waves"},
      {title:""}, 
      {route:"InPhase", template:"InPhase.ejs", title:"in phase"},
      {route:"SpinFreq", template:"SpinFreq.ejs", title:"spin frequency"},
      {title:""}, 
      {route:"SmallFlipAngle", template:"SmallFlipAngle.ejs", title:"small flip angle"},
      {route:"FLAIR", template:"FLAIR.ejs", title:"FLAIR"},
      {route:"MetalInBody", template:"MetalInBody.ejs", title:"metal in the body"},
      {title:""}, 
      {route:"SliceSelection", template:"SliceSelection.ejs", title:"slice selection"},
   ], 
 }, 
 // Row 3
{ 
mapCards: [
      {route:"B1", template:"B1.ejs", title:"$B_1$ in a pixel"},
      {route:"ProtonDensity", template:"ProtonDensity.ejs", title:"proton density"},
      {route:"FT", template:"FT.ejs", title:"fourier transform"},
      {title:""}, 
      {route:"OutofPhase", template:"OutofPhase.ejs", title:"out of phase"},
      {route:"RFFreq", template:"RFFreq.ejs", title:"RF frequency"},
      {title:""}, 
      {route:"180FlipAngle", template:"180FlipAngle.ejs", title:"180 deg flip angle"},
      {title:""}, 
      {route:"CorrectionByShimming", template:"Shimming.ejs", title:"correction by shimming"},
      {title:""}, 
      {route:"PhaseEncoding", template:"PhaseEncoding.ejs", title:"phase encoding"},
   ], 
 }, 
 // Row 4
{ 
mapCards: [
      {title:""}, 
      {title:""}, 
      {route:"FFT", template:"FFT.ejs", title:"fast fourier transform"},
      {title:""}, 
      {route:"MDephased", template:"MDephased.ejs", title:"M dephased"},
      {title:""}, 
      {title:""}, 
      {route:"SquarePulses", template:"SquarePulses.ejs", title:"square pulses"},
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
      {route:"Ex1NarrowTopHat", template:"Ex1NarrowTopHat.ejs", title:"ex 1: narrow top hat"},
      {title:""}, 
      {route:"B1phase", template:"B1PulsePhase.ejs", title:"$B_1$ (pulse) phase"},
      {title:""}, 
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
      {route:"Ex2MediumTopHat", template:"Ex2MediumTopHat.ejs", title:"ex 2: medium top hat"},
      {title:""}, 
      {route:"MSignalPhase", template:"MSignalPhase.ejs", title:"M (signal) phase"},
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {title:""}, 
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
      {route:"Ex3WideTopHat", template:"Ex3WideTopHat.ejs", title:"ex 3: wide tophat"},
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
 // Row 8
{ 
mapCards: [
      {title:""}, 
      {title:""}, 
      {route:"Ex4NarrowerSpikes", template:"Ex4NarrowerSpikes.ejs", title:"ex 4: narrower spikes"},
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
 // Row 9
{ 
mapCards: [
      {title:""}, 
      {title:""}, 
      {route:"Ex5WiderSpikes", template:"Ex5WiderSpikes.ejs", title:"ex 5: wider spikes"},
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
 // Row 10
{ 
mapCards: [
      {title:""}, 
      {title:""}, 
      {route:"Ex6Cosine", template:"Ex6Cosine.ejs", title:"ex 6: cosine"},
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
 // Row 11
{ 
mapCards: [
      {title:""}, 
      {title:""}, 
      {route:"Linearity", template:"Linearity.ejs", title:"linearity"},
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

  scope.lesson10 = s; 
  }(window.OER.data = window.OER.data || {}));    
