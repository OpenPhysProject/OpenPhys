(function (scope) {
    var s = {};
  
     s.title = "NMR";
     s.preview = "/content/lesson9/assets/SpinIcon.png";  //svg image 
     s.themeColor = "#4CAF50"; 
     s.route = "NMR"; 
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
      {route:"Frequency", template:"Frequency.ejs", title:"frequency"},
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
      {route:"AngularFreq", template:"AngularFreq.ejs", title:"angular frequency"},
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
      {route:"NMRObjectives", template:"NMRObjectives.ejs", title:"nmr objectives"},
      {title:""}, 
      {route:"Magnetism", template:"Magnetism_BField.ejs", title:"magnetism and magnetic field"},
      {title:""}, 
      {route:"Boltz", template:"Energy_ThermalEquilBoltz.ejs", title:"energy and thermal equilibrium (Boltzmann)"},
      {route:"Resonance", template:"Resonance.ejs", title:"resonance"},
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {title:""}, 
      {title:""}, 
   ], 
 }, 
 // Row 3
{ 
    startNode: true,
    endNode: true,
    horizontalLinks: OER.linkType.strong,

mapCards: [
      {route:"IntroNMR", template:"IntroNMR.ejs", title:"introduction to nmr"},
      {route:"EnergyLevels", template:"EnergyLevels.ejs", title:"energy levels"},
      {route:"MagneticNuclei", template:"MagneticNuclei.ejs", title:"magnetic nuclei (spins)"},
      {route:"HydrogenSpin", template:"HydrogenSpin.ejs", title:"the spin of hydrogen"},
      {route:"SpinField", template:"SpinInField.ejs", title:"spins at equilibrium in a magnetic field (B0) (Zeeman)"},
      {route:"Larmor", template:"Larmor.ejs", title:"precession (Larmor)"},
      {route:"B1RFField", template:"B1RFField.ejs", title:"radio-frequency magnetic field (B1)"},
      {route:"RFPulses", template:"RFPulses.ejs", title:"rf pulses"},
      {route:"RF90Pulse", template:"RF90Pulse.ejs", title:"90 deg rf pulse"},
      {route:"FID", template:"NMR_FID.ejs", title:"nmr experiment and fid"},
      {route:"TRT1", template:"TR-T1.ejs", title:"TR and T1"},
   ], 
 }, 
 // Row 4
{ 
mapCards: [
      {route:"History", template:"HistoryNMR.ejs", title:"history of nmr"},
      {title:""}, 
      {title:""}, 
      {route:"OtherNuclei", template:"OtherNuclei.ejs", title:"the spins of other nuclei"},
      {title:""}, 
      {route:"LarmorInter", template:"2-LarmorInteract.ejs", title:"* INTERACTIVE * Larmor"},
      {title:""}, 
      {route:"RFCoils", template:"RFcoils.ejs", title:"rf coils"},
      {route:"SingleSpin", template:"PrecessionSingleSpin.ejs", title:"precession for a single spin"},
      {title:""}, 
      {route:"SatRecover", template:"SatRecover.ejs", title:"* INTERACTIVE * Saturation Recovery"},
   ], 
 }, 
  // end...    
       ];   

  scope.lesson9 = s; 
  }(window.OER.data = window.OER.data || {}));    
