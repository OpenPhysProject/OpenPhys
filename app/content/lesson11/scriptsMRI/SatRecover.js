// SatRecover.js
//
// this uses Chart.js Javascript Library   https://www.chartjs.org/
//
// also calls some functions from SeqDiag01.js
//
"use strict";
var sr1 = {}; 
sr1.MZa=[];
sr1.MZb=[];

function SatRecoverMain(){
	//console.log('SatRecoverMain started ...');
	var seqPars = {
            seq: "SR",	
            flip90_deg: 90.0,
            T1a: 300.0,
            T1b: 500.0,
            tp90: 60,
            start_90: 10,
            nt: 501,
            Tmeas: 50 
	};
        
        var cv = 'id_SR_canvas';
	drawT1Chart(cv, seqPars); 
        updateMz(seqPars);
        
	var slider0 = document.getElementById("Param0");
	var output0 = document.getElementById("outParam0");
	output0.innerHTML = slider0.value + " ms";
        slider0.oninput = function() {  seqPars.T1a = parseInt(this.value); 
                                        output0.innerHTML = (seqPars.T1a)  + " ms"; 
                                        drawT1Chart(cv, seqPars ); 
                                        updateMz(seqPars);
                                    }	

	var slider1 = document.getElementById("Param1");
	var output1 = document.getElementById("outParam1");
	output1.innerHTML = slider1.value + " ms";
	slider1.oninput = function() {  seqPars.T1b = parseInt(this.value); 
                                        output1.innerHTML = (seqPars.T1b)  + " ms"; 
                                        drawT1Chart(cv, seqPars ); 
                                        updateMz(seqPars);
                                     };	
                                     
     	var slider2 = document.getElementById("Param2");
	var output2 = document.getElementById("outParam2");
	output2.innerHTML = slider2.value + " ms";
	slider2.oninput = function() {  seqPars.Tmeas = parseInt(this.value); 
                                        output2.innerHTML = (seqPars.Tmeas)  + " ms"; 
                                        updateMz(seqPars);
                                        drawT1Chart(cv, seqPars ); 
                                     }  ;                              
                                     
    };
   
function InvRecoverMain(){
	//console.log('SatRecoverMain started ...');
	var seqPars = {
            seq: "IR",	
            flip90_deg: 180.0,
            T1a: 300.0,
            T1b: 500.0,
            tp90: 60,
            start_90: 10,
            nt: 501,
            Tmeas: 50 
	};
        
        var cv = 'id_SR_canvas';
	drawT1Chart(cv, seqPars); 
        updateMz(seqPars);
        
	var slider0 = document.getElementById("Param0");
	var output0 = document.getElementById("outParam0");
	output0.innerHTML = slider0.value + " ms";
        slider0.oninput = function() {  seqPars.T1a = parseInt(this.value); 
                                        output0.innerHTML = (seqPars.T1a)  + " ms"; 
                                        drawT1Chart(cv, seqPars ); 
                                        updateMz(seqPars);
                                    }	

	var slider1 = document.getElementById("Param1");
	var output1 = document.getElementById("outParam1");
	output1.innerHTML = slider1.value + " ms";
	slider1.oninput = function() {  seqPars.T1b = parseInt(this.value); 
                                        output1.innerHTML = (seqPars.T1b)  + " ms"; 
                                        drawT1Chart(cv, seqPars ); 
                                        updateMz(seqPars);
                                     };	
                                     
     	var slider2 = document.getElementById("Param2");
	var output2 = document.getElementById("outParam2");
	output2.innerHTML = slider2.value + " ms";
	slider2.oninput = function() {  seqPars.Tmeas = parseInt(this.value); 
                                        output2.innerHTML = (seqPars.Tmeas)  + " ms"; 
                                        updateMz(seqPars);
                                        drawT1Chart(cv, seqPars ); 
                                     }  ;                              
                                     
    };
   
function updateMz(p) {  
     // Mz values to HTML
     // also the contrast
      var measIndex = p.Tmeas + p.start_90 + p.tp90/2;
      document.getElementById("outMz1").innerHTML = sr1.MZa[measIndex].toFixed(3);
      document.getElementById("outMz2").innerHTML = sr1.MZb[measIndex].toFixed(3);
      document.getElementById("outMz3").innerHTML = (sr1.MZa[measIndex] - sr1.MZb[measIndex]).toFixed(3);
}
    
function add_SR_Recover(arr_in, start, nt, T1){
	var t, time;
	for (t = start; t < nt; t++) { 
            time = t-start;
            arr_in[t] += 1 - Math.exp(-time/T1);  // fake 
            }
	return ;
	}

function add_IR_Recover(arr_in, start, nt, T1){
	var t, time;
	for (t = start; t < nt; t++) { 
            time = t-start;
            arr_in[t] += 1 - 2*Math.exp(-time/T1);  // fake 
            }
	return ;
	}

function seq_SR(RF, MZa, MZb, P){
	// Saturation Recovery. (Single Shot)
	// FLOATS:
	var RFamp = 0.25;
	var middle_excitation = P.start_90 + P.tp90/2;

	// RF
	var amp90  = RFamp * (P.flip90_deg /90.0);
	add_sinc(RF, P.start_90, P.tp90,   amp90); // start, length, strength
        var measIndex = P.Tmeas + P.start_90 + P.tp90/2;
        add_flatTop(RF, measIndex, 1, -1); // start, length, strength
        //
	// MZ a
        add_flatTop(MZa, 0, middle_excitation, 1.0)      // (start, length, strength) --> MZ= 1.0 at equilibrium
        add_SR_Recover(MZa, middle_excitation, P.nt, P.T1a)

        add_flatTop(MZb, 0, middle_excitation, 1.0)      // (start, length, strength) --> MZ= 1.0 at equilibrium
        add_SR_Recover(MZb, middle_excitation, P.nt, P.T1b)
	return ;
}

function seq_IR(RF, MZa, MZb, P){
	// Saturation Recovery. (Single Shot)
	// FLOATS:
	var RFamp = 0.25;
	var middle_excitation = P.start_90 + P.tp90/2;

	// RF
	var amp90  = RFamp * (P.flip90_deg /90.0);
	add_sinc(RF, P.start_90, P.tp90,   amp90); // start, length, strength
        var measIndex = P.Tmeas + P.start_90 + P.tp90/2;
        add_flatTop(RF, measIndex, 1, -2); // start, length, strength

	// MZ a
        add_flatTop(MZa, 0, middle_excitation, 1.0)      // (start, length, strength) --> MZ= 1.0 at equilibrium
        add_IR_Recover(MZa, middle_excitation, P.nt, P.T1a)

        add_flatTop(MZb, 0, middle_excitation, 1.0)      // (start, length, strength) --> MZ= 1.0 at equilibrium
        add_IR_Recover(MZb, middle_excitation, P.nt, P.T1b)
	return ;
}

function drawT1Chart(canvasName, seqPars){
	//console.log(canvasName, seqPars);
	//---- Parameters ----//
 				// time points in the sequence
	var nDatasets = 5;
	var labelText = ['RF', '1st Mz', '2nd Mz', '|Mz|', '|Mz|']
	//--------------------//
	var ds = []; // array of datasets
	var RF=[]; //,  // arrays for waveform data
	var xLabels=[];
	var d,t;

	//var bg = 'rgb(255, 255, 255, 0)';
	var col = ['rgb(132, 100, 99)', 'rgb(132, 99, 255)', 'rgb(255, 99, 132)', 'rgb(200, 200, 200)']
	ds[0] = { backgroundColor:col[0], borderColor:col[0] };
	ds[1] = { backgroundColor:col[1], borderColor:col[1] };
	ds[2] = { backgroundColor:col[2], borderColor:col[2] };
        ds[3] = { backgroundColor:col[3], borderColor:col[3] };
        ds[4] = { backgroundColor:col[3], borderColor:col[3] }; 
       
	// set some properties for all datasets
	for (d=0; d<nDatasets; d++) {
		ds[d].data   = [];
		ds[d].label  = labelText[d]; // for legend
		ds[d].radius = 0;			// don't mark individual points
		ds[d].fill   = false;		// don't fill curve down to x-axis
		ds[d].lineTension = 0; 		// connect dots with straight lines, i.e. no Bezier.
                ds[d].borderWidth = 1;
	}

	// offets for plotting
	for (t = 0; t < seqPars.nt; t++) {
		RF[t] =  1.1;
		sr1.MZa[t] = 0.0;
		sr1.MZb[t] = 0.0;
		//xLabels[t] = (t -50)/10.0; // x-axis
         	xLabels[t] = t - (seqPars.start_90 + seqPars.tp90/2); // x-axis
	}

	// Define the pulse sequence
	 if      (seqPars.seq == "SR") { seq_SR(RF, sr1.MZa, sr1.MZb, seqPars) }
         else if (seqPars.seq == "IR") { seq_IR(RF, sr1.MZa, sr1.MZb, seqPars) }

	else {console.log("Which Sequence?");  console.log(seqPars.seq); }

	// copy pulse seq waveforms to plotting datasets:
	for (t = 0; t < seqPars.nt; t++) {
		ds[0].data[t] = RF[t];
		ds[1].data[t] = sr1.MZa[t];
		ds[2].data[t] = sr1.MZb[t];
                ds[3].data[t] = Math.abs( sr1.MZa[t] )
                ds[4].data[t] = Math.abs( sr1.MZb[t] )
		}

	//console.log(datasets[1].data)
	var scalesAxes = { 	xAxes: [{display: true, scaleLabel: {display: true, labelString: 'TIME (ms)'} }],
						yAxes: [{display: true, scaleLabel: {display: true, labelString: 'MZ AMPLITUDE'} }] };

	var chart_ctx     =  document.getElementById(canvasName).getContext('2d'); // from HTML document.
	var chart_content =  { 	type:    'line',
				data:    {labels: xLabels, datasets: ds},
				options: {scales: scalesAxes, animation: false, events: [], hoverMode: 'index'} };
	var chart = new Chart(chart_ctx, chart_content);
}

//----------------------------------------//
