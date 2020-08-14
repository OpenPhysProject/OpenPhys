(function (scope) {
    var s = {};
  
     s.title = "Spectrum";
     s.preview = "/content/lesson15/assets/SpinIcon.png";  //svg image 
     s.themeColor = "#4CAF80"; 
     s.route = "Spec"; 
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
      {title:""}, 
      {route:"ComplexNumbers", template:"ComplexNumbers.ejs", title:"COMPLEX NUMBERS"},
      {title:""}, 
   ], 
 }, 
 // Row 1
{ 
    startNode: true,
    endNode: true,
    horizontalLinks: OER.linkType.strong,

mapCards: [
      {route:"NMRSpec", template:"NMRSpec.ejs", title:"NMR SPECTROSCOPY"},
      {route:"TimeFreq", template:"TimeFreq.ejs", title:"time and frequency"},
      {route:"SineCosine", template:"SineCosine.ejs", title:"sine and cosine"},
      {route:"FT", template:"FT.ejs", title:"fourier transform"},
      {route:"FFT", template:"FFT.ejs", title:"fast fourier transform"},
      {route:"Spikes", template:"Spikes.ejs", title:"spikes"},
      {route:"Linearity", template:"Linearity.ejs", title:"linearity"},
      {route:"ComplexFT", template:"ComplexFT.ejs", title:"complex FT"},
      {route:"Summary", template:"Summary.ejs", title:"summary"},
   ], 
 }, 
 // Row 2
{ 
mapCards: [
      {route:"ChemShift", template:"ChemShift.ejs", title:"the chemical shift (ppm)"},
      {title:""}, 
      {route:"MakingWaves", template:"MakingWaves.ejs", title:"making waves"},
      {title:""}, 
      {route:"Ex1NarrowTopHat", template:"Ex1NarrowTopHat.ejs", title:"ex 1: narrow top hat"},
      {route:"Ex4NarrowerSpikes", template:"Ex4NarrowerSpikes.ejs", title:"ex 4: narrower spikes"},
      {title:""}, 
      {route:"1DFFTflex", template:"1DFFT-Flex.ejs", title:"* INTERACTIVE * 1D-FFT Flex"},
      {title:""}, 
   ], 
 }, 
 // Row 3
{ 
mapCards: [
      {route:"SpectrumBody", template:"SpectrumBody.ejs", title:"spectrum of the body"},
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {route:"Ex2MediumTopHat", template:"Ex2MediumTopHat.ejs", title:"ex 2: medium top hat"},
      {route:"Ex5WiderSpikes", template:"Ex5WiderSpikes.ejs", title:"ex 5: wider spikes"},
      {title:""}, 
      {route:"1DFFTflex2", template:"1DFFT-Flex2.ejs", title:"* INTERACTIVE * 1D-FFT Flex 2"},
      {title:""}, 
   ], 
 }, 
 // Row 4
{ 
mapCards: [
      {route:"ProtonDensity", template:"ProtonDensity.ejs", title:"proton density"},
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {route:"Ex3WideTopHat", template:"Ex3WideTopHat.ejs", title:"ex 3: wide top hat"},
      {route:"Ex6Cosine", template:"Ex6Cosine.ejs", title:"ex 6: cosine"},
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
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {title:""}, 
   ], 
 }, 
  // end...    
       ];   

  scope.lesson15 = s; 
  }(window.OER.data = window.OER.data || {}));    
