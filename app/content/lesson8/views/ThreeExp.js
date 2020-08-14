// ThreeExp.js

// NEEDS THIS CSS:
// <style>
// .chart-container {
// 	width: 600px;
// 	height:300px
// }
// </style>

// NEEDS THIS HTML:
// <div class="chart-container">  <canvas id="myChartB"></canvas> </div>
// <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>

// GRAPH
var labels1 = ['0', '1', '2', '3', '4', '5', '6']
var bg = 'rgb(128, 128, 128, 0.2)'
var ds2 = {label: '', backgroundColor:bg, borderColor:'rgb(255, 99, 132)', data:[]}
var ds3 = {label: '', backgroundColor:bg, borderColor:'rgb(132, 99, 255)', data:[]}
var ds4 = {label: '', backgroundColor:bg, borderColor:'rgb(132, 255, 99)', data:[]}
// Create data
var i;
var mu_per_cm = [0.25, 0.5, 1.0]
var n = 7 // ds1.data.length
for (i = 0; i < n; i++) {
	d_cm = i
	ds2.data[i] = Math.exp(-d_cm * mu_per_cm[0]).toPrecision(3) // limited precision is good for tooltips
	ds3.data[i] = Math.exp(-d_cm * mu_per_cm[1]).toPrecision(3)
	ds4.data[i] = Math.exp(-d_cm * mu_per_cm[2]).toPrecision(3)
}
ds2.label = 'mu=' + mu_per_cm[0].toString()
ds3.label = 'mu=' + mu_per_cm[1].toString()
ds4.label = 'mu=' + mu_per_cm[2].toString()
//console.log(datasets[1].data)
var scale2 = { xAxes: [{display: true, scaleLabel: {display: true, labelString: 'Depth (cm)'} }],
			   yAxes: [{display: true, scaleLabel: {display: true, labelString: 'Beam Intensity'} }] }
var ctxB      =  document.getElementById('myChartB').getContext('2d');
var content2 =  { type: 'line',  data: {labels: labels1, datasets: [ds2,ds3,ds4]}, options: {scales: scale2} }
var chart = new Chart(ctxB, content2);
