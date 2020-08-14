// FFT2D_code2.js
"use strict"

	function fft2d(arr2D){
		var cols= arr2D[0].length;
		var rows= cols;
		var arrIma = make2Darray(rows, cols);
		var arrRow = new Array(cols);
		var outRow = new Array(cols);
		arrIma  = zero2DarrayCX(rows, cols, arrIma);

		// 2DFT - first direction
		for (var c=0; c<cols; c++){
			arrIma[c] = cfft( arr2D[c] );
		}
		// 2DFT - second direction

		for (var r=0; r<rows; r++){
			arrRow = getRow(arrIma, r);
			outRow = cfft( arrRow ); // or does this work in place?
			arrIma = putRow(arrIma, outRow, r);
			}
		return arrIma;
	}
	function getRow(arr2D, rowIndex){
		// extract row from from 2D array
		var rowArr=[];
		var cols = arr2D[0].length;
		for (var c=0; c<cols; c++){
			rowArr[c] = arr2D[c][rowIndex];
		}
		return rowArr;
	}
	function putRow(arr2D, row1D, rowIndex){
		// put row into 2D array
		var cols = arr2D[0].length;
		for (var c=0; c<cols; c++){
			arr2D[c][rowIndex] = row1D[c];
		}
		return arr2D;
	}
	function max2DArray(arr2D){
		var arrMax = -Infinity;
		var cols = arr2D[0].length
		for (var c=0; c<cols; c++){
			arrMax = Math.max(arrMax, max1DArray(arr2D[c]) );
		}
		return arrMax;
	}
	function min2DArray(arr2D){
		var arrMin = +Infinity;
		var cols = arr2D[0].length
		for (var c=0; c<cols; c++){
			arrMin = Math.min(arrMin, min1DArray(arr2D[c]) );
		}
		return arrMin;
	}
	function max1DArray(arr1D){
		// arr1D - array of numbers
		var arrMax = -Infinity;
		arrMax = arr1D.reduce(
				function(a,b){ return Math.max(a,b); }
				)
		return arrMax;
	}
	function min1DArray(arr1D){
		// arr1D - array of numbers
		var arrMin = +Infinity; // needed?
		arrMin = arr1D.reduce(
				function(a,b){ return Math.min(a,b); }
				)
		return arrMin;
	}
	function make2Darray(rows, cols){
		var arr = new Array(cols);
		for (var i=0; i < arr.length; i++) {
			arr[i] = new Array(rows);
		}
		return arr;
	}
	function zero2Darray(rows, cols, arr){
		for (var c=0; c<cols; c++){
			for (var r=0; r<rows; r++){
			arr[c][r] = 0;
			}
		}
		return arr;
	}
	function zero2DarrayCX(rows, cols, arr){
		for (var c=0; c<cols; c++){
			for (var r=0; r<rows; r++){
			arr[c][r] = new Complex(0,0);
			}
		}
		return arr;
	}
	function dispArray(rows, cols, ps, arr, location) {
		// display as greyscale image
		var pix, x, y, colorString;
		var ctx = parsFFT2D.ctx;
		var horizontalShift = 0;
		var verticalShift   = 0; // bottom right
		if (location == 0) { var horizontalShift = 0;       var verticalShift = 0;       }  // top right
		if (location == 1) { var horizontalShift = ps*cols; var verticalShift = 0;       }  // top left
		if (location == 2) { var horizontalShift = 0;       var verticalShift = ps*rows; }  // bot left
		if (location == 3) { var horizontalShift = ps*cols; var verticalShift = ps*rows; }  // bot left

		/* map
			max2DArray(arr) --> 255
			min2DArray(arr) -->   0
			so p = 255 * (arrValue - arrMin) / LUTwindowWidth
		*/
		var arrMin = min2DArray(arr);
		var arrMax = max2DArray(arr);

		var LUTwindowWidth = (arrMax - arrMin);
		var LUTwindowCenter= (arrMax + arrMin)/2 ;
		var LUTwindowMin   = LUTwindowCenter - LUTwindowWidth/2 ; // always correct.

		for (var c=0; c<cols; c++){
			for (var r=0; r<rows; r++){
				pix = 255 * (arr[c][r] - LUTwindowMin) / LUTwindowWidth;
				pix = Math.min(255, pix);
				pix = Math.max(0, pix);
				// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle

				colorString = "rgb(" + pix.toString() + "," + pix.toString() + "," + pix.toString() + ")" ;
				//console.log(colorString);
				ctx.fillStyle = colorString;
				//ctx.fillStyle = `rgb(${pix}, ${pix}, ${pix})`;  //"#FF0000"; // template literal / HAD PROBS w grunt build

				x = horizontalShift + c*ps ;
				y = verticalShift   + r*ps;
				ctx.fillRect(x, y, ps, ps); //ps-1 to leave border around pixel
			}
		}
	}


	function calcDisplayFFT2D(){
		// 2D display of k-space and image data

		var px = parsFFT2D.posX;
		var py = parsFFT2D.posY;

		var cols = parsFFT2D.np;
		var rows = parsFFT2D.np;
		var A     = make2Darray(rows, cols);  A      = zero2Darray(rows, cols, A);
		var kRE   = make2Darray(rows, cols);  kRE    = zero2Darray(rows, cols, kRE);
		var kIM   = make2Darray(rows, cols);  kIM    = zero2Darray(rows, cols, kIM);
		var arrABS= make2Darray(rows, cols);  arrABS = zero2Darray(rows, cols, arrABS);
		var arrRE = make2Darray(rows, cols);  arrRE  = zero2Darray(rows, cols, arrRE);
		var arrIM = make2Darray(rows, cols);  arrIM  = zero2Darray(rows, cols, arrIM);

		// for (var c=0; c<cols; c++){
		// 	for (var r=0; r<rows; r++){
		// 	A[c][r] = Math.max(0, 255 - 15*Math.abs(c-cols/2) - 15*Math.abs(r-rows/2)) ;
		// 	//A[c][r] = 255*Math.random();
		// 	A[c][r] = 0.0;
		// 	}
		// }
		//---- DEFINE DATA HERE ----
		var v=1e5;
		//A[0][0] = v;
		A[px][py] = v;
		dispArray(rows, cols, parsFFT2D.ps,   A, 0);
		dispArray(rows, cols, parsFFT2D.ps, kIM, 1);

		kRE[px][py] = v;

		//---- DEFINE IMAGE HERE ----
		var arrIma = fft2d(A);
		//console.log("A[0][1]      is: ", A[0][1] );
		//console.log("arrIma[0][0] is: ", arrIma[0][0] );

		//---- DISPLAY ----
		for (var c=0; c<cols; c++){
			for (var r=0; r<rows; r++){
				arrABS[c][r]= parsFFT2D.displayScale * arrIma[c][r].abs();
				arrRE[c][r] = parsFFT2D.displayScale * arrIma[c][r].re;
				arrIM[c][r] = parsFFT2D.displayScale * arrIma[c][r].im;
			}
		}
		//console.log( arrABS[cols/2] );
	//	dispArray(rows, cols, parsFFT2D.ps, arrABS, 1);
		dispArray(rows, cols, parsFFT2D.ps, arrRE, 2);
		dispArray(rows, cols, parsFFT2D.ps, arrIM, 3);
		return
	}
