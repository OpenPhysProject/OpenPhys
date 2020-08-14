// FFT1D_code2.js

// PARAMETERS
"use strict"
// - this stuff will be in calling code in FFT1D_A.html
//var parsFFT1D = {cycles:10, T2:80, NP:512};
//parsFFT1D.ctxTime = document.getElementById('ChartTime_FFT1D_A').getContext('2d');
//parsFFT1D.ctxFreq = document.getElementById('ChartFreq_FFT1D_A').getContext('2d');

function Top_FFT1D( parsFFT1D ){
	//console.log(temp200);
	draw_FFT1D( parsFFT1D );
	getCycles_FFT1D( parsFFT1D );
	getT2_FFT1D( parsFFT1D );
}

function getCycles_FFT1D( parsFFT1D ){
	// Deal with slider1 (frequency)
        var units1 = " Hz";
	var slider1 = document.getElementById( parsFFT1D.slider1_id );
        var output1 = document.getElementById( parsFFT1D.out1_id);
	output1.innerHTML = slider1.value + units1;
	slider1.oninput = function() {
			parsFFT1D.cycles = parseFloat(this.value);
			output1.innerHTML = parsFFT1D.cycles + units1;
			draw_FFT1D( parsFFT1D );
		}
}

function getT2_FFT1D( parsFFT1D ){
	// deal with slider3 (T2*)
        var units3 = " ms";
	var slider3 = document.getElementById( parsFFT1D.slider3_id );
	var output3 = document.getElementById( parsFFT1D.out3_id    );
	output3.innerHTML = slider3.value + units3;
	slider3.oninput = function() {
					parsFFT1D.T2      = parseFloat(this.value);
					output3.innerHTML = parsFFT1D.T2 + units3;
					draw_FFT1D( parsFFT1D );
				}
}

function draw_FFT1D( parsFFT1D ){
	var i, t, rad, rad_offset, t_for_relax, re, im, f=[];
	var timeData= [], tlabel=[], flabel=[];
	var timeDispRe=[], timeDispIm=[];
	var freal=[], fimag=[], fabs=[];

	var NP = parsFFT1D.NP;
	var NP2 = NP/2;
	// CREATE TIME DOMAIN DATA
	// // FID
	// for (t=0; t<NP; t++) {
	// 	rad = 2* Math.PI * (cycles*t/NP)  ;
	// 	timeData[t] = Math.exp(-t/T2) * Math.cos(rad);
	// 	tlabel[t] = t;
	// 	}

	// SE (Spin Echo)
	for (t=0; t<NP; t++) {
		timeData[t] = 0;        // empty data array
		tlabel[t] = t;          // labels for time graph
		flabel[t] = t-NP/2;     // labels for frequency graph
		}

        // populate the data array
	for (t=0; t<NP; t++) {
		rad_offset  = 2* Math.PI * (parsFFT1D.cycles/2);  // set phase zero at echo center.
		rad         = 2* Math.PI * (parsFFT1D.cycles*t/NP) - rad_offset;
		t_for_relax = Math.abs( t-(NP/2) );
		re = Math.exp(-t_for_relax/parsFFT1D.T2) * Math.cos(rad);
		im = Math.exp(-t_for_relax/parsFFT1D.T2) * Math.sin(rad);
		timeData[t] = new Complex(re, im);
		}

        // split the complex data into two real arrays for display
	for (t=0; t<NP; t++) {
		timeDispRe[t] = timeData[t].re;
		timeDispIm[t] = timeData[t].im;
		}

        // Do the FFT
	f = cfft(timeData);
	//f = icfft(f);

	// Do FFT shift also
	for (i=0; i<NP/2; i++){
		freal[i+NP2]= f[i].re;
		fimag[i+NP2]= f[i].im;
		fabs[i+NP2] = Math.sqrt(f[i].im*f[i].im + f[i].re*f[i].re);
	}

	for (i=NP/2; i<NP; i++){
		freal[i-NP2]= f[i].re;
		fimag[i-NP2]= f[i].im;
		fabs[i-NP2] = Math.sqrt(f[i].im*f[i].im + f[i].re*f[i].re);
	}

	var chart1 = new Chart(parsFFT1D.ctxTime, { type: 'line',    
            data: { labels:tlabel,   //labels: ['0', '1 ', '2 ', '3 ', '4 ', '5 ', '6 ', '7'],
                    datasets: [
                                { label: 'Time (Real)',
                                backgroundColor: 'rgb(64, 0, 132, 0.1)',
                                lineTension: 0,
                                borderWidth: 2,
                                radius:0,  borderColor: 'rgb(255, 0, 0)', 
                                data: timeDispRe },

                                { label: 'Time (Imaginary)',
                                backgroundColor: 'rgb(64, 0, 255, 0.1)',
                                lineTension: 0,
                                borderWidth: 2,
                                radius:0,  borderColor: 'rgb(0, 0, 255)', 
                                data: timeDispIm },
                              ]
                    },       
            options: {  animation: false,
                        scales: {  xAxes: [{ display:true, scaleLabel: {display:true, labelString:'TIME'} }],
                                   yAxes: [{ display:true, scaleLabel: {display:true, labelString:'LEVEL'} }] }
                        }      // Configuration options       
	     }); // chart1

	var chart2 = new Chart(parsFFT1D.ctxFreq, { type: 'line',
		data: { labels:flabel,  //labels: ['0', '1 ', '2 ', '3 ', '4 ', '5 ', '6 ', '7'],
			datasets: [
                                     { label: 'Absolute FFT (Frequency Spectrum)',
                                            backgroundColor: 'rgb(255, 0, 132, 0.1)',
                                            lineTension: 0,
                                            borderWidth: 2,
                                            radius:0, borderColor: 'rgb(255, 0, 255)', data: fabs }
                                    //  { label: 'Imaginary', backgroundColor: 'rgb(255, 0, 132, 0.1)', radius:0, borderColor: 'rgb(128, 99, 132)', data: fimag },
                                    ]
		},
		options: {  animation: false,
                            scales: {
                               xAxes: [{ display:true, scaleLabel: {display:true, labelString:'FREQUENCY'} }],
                               yAxes: [{ display:true, scaleLabel: {display:true, labelString:'LEVEL'} }] }
                         }      // Configuration options     
		}); // chart2

}
