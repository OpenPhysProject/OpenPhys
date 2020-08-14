// FFT1Dflex.js

// https://developer.mozilla.org/en-US/docs/Glossary/IIFE
// Immediately Invoked Function Expression. problem is: then Top_FFT_Flex is not found.
//(function () {
//      everything goes here ...
// })();

// PARAMETERS
"use strict";
var fx2 = {};   // prototype  fx2 = flex2. One object for this whole script (except Top_FFT_Flex)
fx2.NF = 7;
fx2.zoomFactor = 1
// - this stuff will be in calling code in .html
//var parsFFT1D = {cycles:10, T2:80, NP:512};
//parsFFT1D.ctxTime = document.getElementById('ChartTime_FFT1D_A').getContext('2d');
//parsFFT1D.ctxFreq = document.getElementById('ChartFreq_FFT1D_A').getContext('2d');

function Top_FFT_Flex2( pars ){
	// this is called from outside
        var f;
        fx2.getFreqZoom_FFT1D(pars); // zoomFactor initialized here.??
	fx2.draw_FFT1D( pars );
        
        for (f=0; f<fx2.NF; f++) {
                fx2.getCycles_FFT1D( pars, f );
            }
            
        for (f=0; f<fx2.NF-1; f++) { // because offset has no amplitude
                fx2.getAmplitude_FFT1D( pars, f );
                fx2.getCheckBox_FFT1D(pars, f);
            }                    
}

fx2.getCycles_FFT1D = function( p, i ){  
           //function getCycles_FFT1D( p, i ){  // this works also
	// Deal with sliders (frequency)
        var units = " Hz";
        var slider = document.getElementById( p.slider_id[i] );
        var output = document.getElementById( p.out_id[i]);
	output.innerHTML = slider.value + units;
	slider.oninput = function() {
			p.cycles[i] = parseFloat(this.value);
			output.innerHTML = p.cycles[i] + units;
			fx2.draw_FFT1D( p );
		};
}

fx2.getAmplitude_FFT1D = function( p, i ){
	// Deal with amplitude 
        //console.log("Amp",p,i)
        var numeric = document.getElementById( p.amp_id[i] );
	numeric.onchange = function() {
			p.amp[i] = parseFloat(this.value);
			fx2.draw_FFT1D( p );
		};
};

fx2.getCheckBox_FFT1D = function( p, i ){
	// Deal with  
        //console.log("Amp",p,i)
        var numeric = document.getElementById( p.ck_id[i] );
	numeric.onchange = function() {
           if (this.checked){ p.checked[i] = 1.0; }
            else           {p.checked[i] = 0.0; }
			fx2.draw_FFT1D( p );
		};
}

fx2.getFreqZoom_FFT1D = function( p, i ){
	// Deal with  
        var slider = document.getElementById( "id2_zoom" );
        var output = document.getElementById( "id2_zoomout");
	output.innerHTML = slider.value;
	slider.oninput = function() {
			fx2.zoomFactor = this.value;
			output.innerHTML = fx2.zoomFactor;
			fx2.draw_FFT1D( p );
		};
}


fx2.draw_FFT1D = function( pars ){
	var i, t, rad, re=0, im=0, f, ft=[];
	var timeData= [], tlabel=[], flabel=[];
	var timeDispRe=[], timeDispIm=[], tabs=[];
	var freal=[], fimag=[], fabs=[];
        var enable0;
	var NP = pars.NP;
	var NP2 = NP/2;
        var tpi = 2* Math.PI;
        
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
                for (f=0; f<fx2.NF-1; f++) {  // index 6 is offset:
                    rad  = tpi * (pars.cycles[f] + pars.cycles[6]) * (t/NP - 1/2);  // cycles/2 to set phase zero at echo center.
                    re += pars.checked[f] * pars.amp[f] * Math.cos(rad);
                    im += pars.checked[f] * pars.amp[f] * Math.sin(rad);
                    }
                
		timeData[t] = new Complex(re, im) ;
		}

        // split the complex data into two real arrays for display
	for (t=0; t<NP; t++) {
		timeDispRe[t] = timeData[t].re;
		timeDispIm[t] = timeData[t].im;
                tabs[t]       = Math.sqrt(timeDispRe[t]*timeDispRe[t] + timeDispIm[t]*timeDispIm[t]);
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
        
        // zoom spectrum
        //var zoomFactor = document.getElementById( "id2_zoom" ).value;
        var f1 = NP2 -NP2/fx2.zoomFactor;
        var f2 = NP2 +NP2/fx2.zoomFactor;
        console.log("zoom factor",fx2.zoomFactor);

	var chart1 = new Chart(pars.ctxTime, { type: 'line',    
            data: { labels:tlabel,   //labels: ['0', '1 ', '2 ', '3 ', '4 ', '5 ', '6 ', '7'],
                    datasets: [
                                { label: 'Time (Real)',
                                backgroundColor: 'rgb(64, 0, 132, 0.0)',
                                borderColor:     'rgb(255, 0, 0)', 
                                lineTension: 0, borderWidth: 1,  radius:0, data: timeDispRe },
                                
                                { label: 'Time (Imaginary)',
                                 backgroundColor: 'rgb(0, 0, 255, 0.0)', 
                                 borderColor:     'rgb(0, 0, 255)', 
                                 lineTension: 0, borderWidth: 1, radius:0, data: timeDispIm },
                             
                              { label: 'Time (Abs)',
                                 backgroundColor: 'rgb(0, 0, 255, 0.1)', 
                                 borderColor:     'rgb(100, 100, 100)', 
                                 lineTension: 0, borderWidth: 2, radius:0, data: tabs }                             
                              ]
                    },       
            options: {  animation: false,
                        scales: {  xAxes: [{ display:true, scaleLabel: {display:true, labelString:'TIME'} }],
                                   yAxes: [{ display:true, scaleLabel: {display:true, labelString:'LEVEL'} }] },
                        events: []
                        }      // Configuration options       
	     }); // chart1

	var chart2 = new Chart(pars.ctxFreq, { type: 'line',
		data: { labels:flabel.slice(f1,f2),  //labels: ['0', '1 ', '2 ', '3 ', '4 ', '5 ', '6 ', '7'],
			datasets: [
                                     { label: 'Absolute FFT',
                                            backgroundColor: 'rgb(132, 132, 132, 0.1)',
                                            lineTension: 0,
                                            borderWidth: 2,
                                            radius:0, borderColor: 'rgb(100, 100, 100)', data: fabs.slice(f1,f2) },
                                        
                                        { label: 'RealFFT',
                                            backgroundColor:       'rgb(255, 0, 132, 0.1)',
                                            lineTension: 0,  borderWidth: 2,
                                            radius:0, borderColor: 'rgb(255, 0, 0, 0.9)', data: freal.slice(f1,f2) }, 
                                        
                                         { label: 'ImagFFT',
                                            backgroundColor:       'rgb(0, 0, 132, 0.1)',
                                            lineTension: 0, borderWidth: 2,
                                            radius:0, borderColor: 'rgb(0, 0, 255, 0.9)', data: fimag.slice(f1,f2) }
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

