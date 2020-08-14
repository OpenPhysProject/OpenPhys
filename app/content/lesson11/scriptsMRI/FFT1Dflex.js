// FFT1Dflex.js

// https://developer.mozilla.org/en-US/docs/Glossary/IIFE
// Immediately Invoked Function Expression. problem is: then Top_FFT_Flex is not found.
//(function () {
//      everything goes here ...
// })();

// PARAMETERS
"use strict";
var fx = {};   // prototype  fx = flex. One object for this whole script (except Top_FFT_Flex)
fx.NF = 6;
// - this stuff will be in calling code in .html
//var parsFFT1D = {cycles:10, T2:80, NP:512};
//parsFFT1D.ctxTime = document.getElementById('ChartTime_FFT1D_A').getContext('2d');
//parsFFT1D.ctxFreq = document.getElementById('ChartFreq_FFT1D_A').getContext('2d');

function Top_FFT_Flex( pars ){
	// this is called from outside
        var f;
	fx.draw_FFT1D( pars );
        for (f=0; f<fx.NF; f++) {
                fx.getCycles_FFT1D( pars, f );
                fx.getAmplitude_FFT1D( pars, f );
            }
}

fx.getCycles_FFT1D = function( p, i ){  
           //function getCycles_FFT1D( p, i ){  // this works also
	// Deal with sliders (frequency)
        var units = " Hz";
        var slider = document.getElementById( p.slider_id[i] );
        var output = document.getElementById( p.out_id[i]);
	output.innerHTML = slider.value + units;
	slider.oninput = function() {
			p.cycles[i] = parseFloat(this.value);
			output.innerHTML = p.cycles[i] + units;
			fx.draw_FFT1D( p );
		}
}

fx.getAmplitude_FFT1D = function( p, i ){
	// Deal with amplitude 
        var numeric = document.getElementById( p.amp_id[i] );
	numeric.onchange = function() {
			p.amp[i] = parseFloat(this.value);
			fx.draw_FFT1D( p );
		}
}

fx.draw_FFT1D = function( pars ){
	var i, t, rad, re=0, im=0, f, ft=[];
	var timeData= [], tlabel=[], flabel=[];
	var timeDispRe=[], timeDispIm=[];
	var freal=[], fimag=[], fabs=[];

	var NP = pars.NP;
	var NP2 = NP/2;
        var tpi = 2* Math.PI;
        //console.log(pars.cycles)
        
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

        // loop for each frequency
	for (t=0; t<NP; t++) {
		//rad_offset  = tpi * (pars.cycles/2);  // 
                re = 0;
                im = 0;
                for (f=0; f<fx.NF; f++) {
                    rad  = tpi * pars.cycles[f] * (t/NP - 1/2);  // cycles/2 to set phase zero at echo center.
                    re += pars.amp[f] * Math.cos(rad);
                    im += pars.amp[f] * Math.sin(rad);
                    }
                
		timeData[t] = new Complex(re, im) ;
		}

        // split the complex data into two real arrays for display
	for (t=0; t<NP; t++) {
		timeDispRe[t] = timeData[t].re;
		timeDispIm[t] = timeData[t].im;
		}

        // Do the FFT
	ft = cfft(timeData);
	//ft = icfft(f);

	// Do FFT shift also
	for (i=0; i<NP/2; i++){
		freal[i+NP2]= ft[i].re;
		fimag[i+NP2]= ft[i].im;
		fabs[i+NP2] = Math.sqrt(ft[i].im*ft[i].im + ft[i].re*ft[i].re);
	}

	for (i=NP/2; i<NP; i++){
		freal[i-NP2]= ft[i].re;
		fimag[i-NP2]= ft[i].im;
		fabs[i-NP2] = Math.sqrt(ft[i].im*ft[i].im + ft[i].re*ft[i].re);
	}

	var chart1 = new Chart(pars.ctxTime, { type: 'line',    
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
                                   yAxes: [{ display:true, scaleLabel: {display:true, labelString:'LEVEL'} }] },
                        events: []
                        }      // Configuration options       
	     }); // chart1

	var chart2 = new Chart(pars.ctxFreq, { type: 'line',
		data: { labels:flabel,  //labels: ['0', '1 ', '2 ', '3 ', '4 ', '5 ', '6 ', '7'],
			datasets: [
                                     { label: 'Absolute FFT (Frequency Spectrum)',
                                            backgroundColor: 'rgb(255, 0, 132, 0.1)',
                                            lineTension: 0,
                                            borderWidth: 2,
                                            radius:0, borderColor: 'rgb(255, 0, 255)', data: fabs }
                                    //  { label: 'Imaginary', backgroundColor: 'rgb(255, 0, 132, 0.1)', 
                                    //  radius:0, borderColor: 'rgb(128, 99, 132)', data: fimag },
                                    ]
		},
		options: {  animation: false,
                            scales: {
                               xAxes: [{ display:true, scaleLabel: {display:true, labelString:'FREQUENCY'} }],
                               yAxes: [{ display:true, scaleLabel: {display:true, labelString:'LEVEL'} }] },
                               events: ['click']
                         }      // Configuration options     
		}); // chart2

};

