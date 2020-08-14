
// this uses Chart.js Javascript Library   https://www.chartjs.org/
//

function add_flatTop(arr_in, start, length, strength){
	var i;
	var t2 = start+length;
	for (i = start; i < t2; i++) {
		arr_in[i] += strength;
	}
	return ;
	}


var canvasName = 'SeqDiag01canvas';
//var bg = 'rgb(255, 255, 255, 0)';
var col = ['rgb(255, 99, 132)', 'rgb(132, 99, 255)', 'rgb(132, 255, 99)', 'rgb(132, 0, 99)']
var ds2 = {label: '', radius:0, fill: false, backgroundColor:col[0], borderColor:col[0], data:[]};
var ds3 = {label: '', radius:0, fill: false, backgroundColor:col[1], borderColor:col[1], data:[]};
var ds4 = {label: '', radius:0, fill: false, backgroundColor:col[2], borderColor:col[2], data:[]};
var ds5 = {label: '', radius:0, fill: false, backgroundColor:col[3], borderColor:col[3], data:[]};

var ds6 = {label: '', radius:0, fill: false, backgroundColor:col[2], borderColor:col[2], data:[]};

// Create data
var t;
var nt = 250 ;
var RF=[], GX=[], GY=[], GY2=[], GZ=[];
var xLabels=[];

for (t = 0; t < nt; t++) {
	RF[t] = 4.0;
	GX[t] = 2.0;
	GY[t] = 0.0;
	GZ[t] = -2.0;
	GY2[t] = 0.0;
	xLabels[t] = t;
}

add_flatTop(RF,  10, 20, +0.5); // start, length, strength
add_flatTop(RF, 100, 20, +1.0); // start, length, strength

add_flatTop(GX, 10, 20, +1.0); // start, length, strength
add_flatTop(GX, 30, 10, -1.0); // start, length, strength
add_flatTop(GX, 100, 20, +1.0); // start, length, strength

add_flatTop(GY, 50, 40, 0.8); // start, length, strength
add_flatTop(GY2, 50, 40, -0.8); // start, length, strength

add_flatTop(GZ, 50,  40, +1.0); // start, length, strength
add_flatTop(GZ, 130, 80, +1.0); // start, length, strength


for (t = 0; t < nt; t++) {
	ds2.data[t] = RF[t]; // limited precision is good for tooltips
	ds3.data[t] = GX[t];
	ds4.data[t] = GY[t];
	ds5.data[t] = GZ[t];
	ds6.data[t] = GY2[t];
	}

ds2.label = 'RF'; ds3.label = 'GX (SLICE)'; ds4.label = 'GY (PHASE)'; ds5.label = 'GZ (READ)';

//console.log(datasets[1].data)
var scale2 = { xAxes: [{display: true, scaleLabel: {display: true, labelString: 'TIME'} }],
yAxes: [{display: true, scaleLabel: {display: true, labelString: 'WAVEFORM AMPLITUDE'} }] };

var ctxB      =  document.getElementById(canvasName).getContext('2d');
var content2 =  { type: 'line',  data: {labels: xLabels, datasets: [ds2,ds3,ds4,ds6, ds5]}, options: {scales: scale2} };
var chart = new Chart(ctxB, content2);
