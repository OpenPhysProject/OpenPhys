
// this uses Chart.js Javascript Library   https://www.chartjs.org/
//
function add_flatTop(arr_in, start, length, strength){
	var i;
	var t2 = start+length;
	for (i = start; i < t2; i++) { arr_in[i] += strength; }
	return ;
	}

function add_sinc(arr_in, start, length, strength){
	var i;
	var width = 0.5; // control BW of sinc
	var t2 = start+length;
	var pulseCenter = start + length/2;
	for (i = start; i < t2; i++) {
		x = (i-pulseCenter);
		if (Math.abs(x) > 0.01) {arr_in[i] += strength * (Math.sin(width*x)/x) }
		else {
			arr_in[i] = arr_in[i-1]; // use previous value - close enough.
			};
		}
	return ;
	}

function add_Trap(arr_in, start, length, strength){
	// Trapezoid
	var i;
	var rampLength = 2;
	var topLength = length - 2*rampLength; //
	var t0 = start;
	var t1 = t0 + rampLength; // ramp up to here
	var t2 = t1 + topLength; //
	var t3 = t2 + rampLength;
	//console.log("S,L,: ",start,length," t0,t1,t2,t3: ",t0,t1,t2,t3)
	for (i = t0; i < t1; i++) { arr_in[i] += (i-t0)/rampLength * strength; }		// ramp up
	for (i = t1; i < t2; i++) { arr_in[i] += strength; }
	for (i = t2; i < t3; i++) { arr_in[i] += (t3-i)/rampLength * strength; }
	return;
	}

function seq_GE(RF,GX,GY,GY2,GZ, P){
	// Gradient Echo
	var ramp=5;
	var tPE= 60; // duration
	var lenREAD = 120;
	var start_90 = 20;
	// FLOATS:
	var ampPE = 0.8;
	var RFamp = 1.0;
	var middle_excitation = start_90 + P.tp90/2;

	// RF
	var amp90  = RFamp * (P.flip90_deg /90.0);
	add_sinc(RF, start_90, P.tp90,   amp90); // start, length, strength

	// SLICE
	add_Trap(GX, start_90-ramp,        (P.tp90+2*ramp),     +1.0); // start, length, strength
	add_Trap(GX, start_90+ramp+P.tp90, (P.tp90+2*ramp)/2.0, -1.0); // start, length, strength

	// PE
	var startPE = start_90+ramp + P.tp90;
	add_Trap(GY,  startPE, tPE,  ampPE); // start, length, strength
	add_Trap(GY2, startPE, tPE, -ampPE); // start, length, strength

	// READ
	var startREAD2 = parseInt(middle_excitation + P.TE - lenREAD/2.0);
	var startREAD1 = startREAD2 - lenREAD/2;
	if (startREAD1 < startPE )
	{
		console.log("READOUT starts too early!")
	}

	add_Trap(GZ, startREAD1, lenREAD/2, -1.0); // start, length, strength
	add_Trap(GZ, startREAD2,   lenREAD, +1.0); // start, length, strength
	return ;
}

function seq_SE(RF,GX,GY,GY2,GZ, P){
	// Add the pulses
	// spin-echo
	//P.tp90     = 15;	// pulse length
	var tp180    = P.tp90;
	var ramp=5;
	var tPE= 60; // duration
	var lenREAD = 120;
	var start_90 = 20;
	// FLOATS:
	var ampPE = 0.8;
	var RFamp = 1.0;
	var flip180_deg = 180.0;

	var middle_excitation = start_90 + P.tp90/2;
	var start_180         = middle_excitation + P.TE/2 - tp180/2;
	//console.log(P.tp90, tp180, middle_excitation, start_180);

	// RF
	var amp90  = RFamp * (P.flip90_deg /90.0);
	var amp180 = RFamp * (flip180_deg/90.0)*(P.tp90/tp180);
	add_sinc(RF, start_90, P.tp90,   amp90); // start, length, strength
	add_sinc(RF, start_180,tp180, amp180); // start, length, strength
	//console.log("amp90,180",amp90, amp180);

	// SLICE
	add_Trap(GX, start_90-ramp,        (P.tp90+2*ramp),     +1.0); // start, length, strength
	add_Trap(GX, start_90+ramp+P.tp90, (P.tp90+2*ramp)/2.0, -1.0); // start, length, strength
	add_Trap(GX, start_180-ramp, 		tp180+2*ramp,      +1.0); // start, length, strength

	// PE
	var startPE = start_90+ramp + P.tp90;
	add_Trap(GY,  startPE, tPE,  ampPE); // start, length, strength
	add_Trap(GY2, startPE, tPE, -ampPE); // start, length, strength

	// READ
	var startREAD1 = startPE;
	var startREAD2 = parseInt(middle_excitation + P.TE - lenREAD/2.0);
	//console.log("READ: ",middle_excitation, P.TE, startREAD2);
	//console.log(parseInt(TE), lenREAD/2, startREAD2 );
	add_Trap(GZ, startREAD1, lenREAD/2, +1.0); // start, length, strength
	add_Trap(GZ, startREAD2,   lenREAD, +1.0); // start, length, strength
	return ;
}

function drawChart(canvasName, seqPars){
	//console.log(canvasName, seqPars);
	//---- Parameters ----//
	seqPars.nt    = 500; 				// time points in the sequence
	var nDatasets = 5;
	var labelText = ['RF', 'GX (SLICE)', 'GY (PHASE)', 'GY', 'GZ (READ)']
	//--------------------//
	var ds = []; // array of datasets
	var RF=[], GX=[], GY=[], GY2=[], GZ=[]; // arrays for waveform data
	var xLabels=[];
	var d,t;

	//var bg = 'rgb(255, 255, 255, 0)';
	var col = ['rgb(255, 99, 132)', 'rgb(132, 99, 255)', 'rgb(132, 255, 99)', 'rgb(132, 0, 99)']
	ds[0] = { backgroundColor:col[0], borderColor:col[0] };
	ds[1] = { backgroundColor:col[1], borderColor:col[1] };
	ds[2] = { backgroundColor:col[2], borderColor:col[2] };
	ds[3] = { backgroundColor:col[2], borderColor:col[2] };
	ds[4] = { backgroundColor:col[3], borderColor:col[3] };

	// set some properties for all datasets
	for (d=0; d<nDatasets; d++) {
		ds[d].data   = [];
		ds[d].label  = labelText[d]; // for legend
		ds[d].radius = 0;			// don't mark individual points
		ds[d].fill   = false;		// don't fill curve down to x-axis
		ds[d].lineTension = 0; 		// connect dots with straight lines, i.e. no Bezier.
	}

	// offets for plotting
	for (t = 0; t < seqPars.nt; t++) {
		RF[t] =  4.0;
		GX[t] =  2.0;
		GY[t] =  0.0;
		GZ[t] = -2.0;
		GY2[t] = 0.0;
		xLabels[t] = (t -50)/10.0; // x-axis
	}

	// Define the pulse sequence
	if      (seqPars.seq == "SE") { seq_SE(RF,GX,GY,GY2,GZ, seqPars) }
	else if (seqPars.seq == "GE") { seq_GE(RF,GX,GY,GY2,GZ, seqPars) }
	else {console.log("Which Sequence?")}

	// copy pulse seq waveforms to plotting datasets:
	for (t = 0; t < seqPars.nt; t++) {
		ds[0].data[t] = RF[t];
		ds[1].data[t] = GX[t];
		ds[2].data[t] = GY[t];
		ds[3].data[t] = GY2[t];
		ds[4].data[t] = GZ[t];
		}

	//console.log(datasets[1].data)
	var scalesAxes = { 	xAxes: [{display: true, scaleLabel: {display: true, labelString: 'TIME'} }],
						yAxes: [{display: true, scaleLabel: {display: true, labelString: 'WAVEFORM AMPLITUDE'} }] };

	var chart_ctx     =  document.getElementById(canvasName).getContext('2d'); // from HTML document.
	var chart_content =  { 	type:    'line',
				data:    {labels: xLabels, datasets: ds},
				options: {scales: scalesAxes, animation: false, events: ['click']} 
                               };
	var chart = new Chart(chart_ctx, chart_content);
}

//----------------------------------------//
