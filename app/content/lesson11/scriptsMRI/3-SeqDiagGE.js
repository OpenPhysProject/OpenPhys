
// 3-SeqDiagGE.js

function myMainGE(){
	console.log('My MainGE started ...');
	var seqPars = {
	seq: "GE",
	flip90_deg: 70.0,
	TE: 250.0,
	tp90: 60
};
var cv = 'SeqDiagGEcanvas';

drawChart(cv, seqPars);

var slider1 = document.getElementById("Param1GE");
var output1 = document.getElementById("outParam1GE");
output1.innerHTML = slider1.value + " deg";
slider1.oninput = function() { seqPars.flip90_deg = parseInt(this.value); output1.innerHTML = seqPars.flip90_deg + " deg"; drawChart(cv, seqPars); }

var slider2 = document.getElementById("Param2GE");
var output2 = document.getElementById("outParam2GE");
output2.innerHTML = slider2.value/10 + " ms";
slider2.oninput = function() { seqPars.TE = parseInt(this.value);
											output2.innerHTML = (seqPars.TE/10)  + " ms";
											drawChart(cv, seqPars ); }

var slider3 = document.getElementById("Param3GE");
var output3 = document.getElementById("outParam3GE");
output3.innerHTML = slider3.value/10 + " ms";
slider3.oninput = function() { seqPars.tp90 = parseInt(this.value);
											output3.innerHTML = (seqPars.tp90/10)  + " ms";
											drawChart(cv, seqPars ); }
}
