//
// MultiSpin.js
//
// Display whole set of 2D spins, precessing under Gx and Gy

	//<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/103/three.min.js"> </script>

	"use strict"
		// REFERENCES:
		// https://threejs.org/docs/index.html#api/en/core/Geometry.translate
		// https://threejs.org/docs/#api/en/math/Vector3
		// NOTES:
		//var colString = 'rgb(255, 99, 71)';
		//var colString = "hsl(0, 100%, 100%)"
		//var material1 = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: false} );
		//var vecDOWN = new THREE.Vector3( -Math.sin(angle), -Math.cos(angle), 0 ); //
		//var vecUP = new THREE.Vector3( +Math.sin(angle), +Math.cos(angle), 0 ); //
		//
		// Controls
		var nx     = 30; //45;
		var Seq = {};	// not used yet.
		var Gx; 	// also slider
		var Gy;		// also slider
		var sat;     	// also slider

		// Fixed Parameters (probably)
		var deltaT = 0.01; //-0.05 //-0.5 // time step: small value is slower
		var ObjWidth    = 0.02; //ObjLen/10;  //usually much less than ObjLen to give a line
		var PhantomSize = 7.0, CameraZ = 5.0; // these 2 togeher make phantom fill screen.
		var ny; //     = nx;
		var nOBJ; //   = nx * ny;  // the objects are the spins
		// Other Declarations
		var Obj=[], angles=[], freq=[], vecUP=[], vecSIDE=[], material=[], xLocation=[], yLocation=[];
		var light=[];

		var scene    = new THREE.Scene();
		var camera   = new THREE.PerspectiveCamera( 70, window.innerWidth/window.innerHeight, 0.1, 1000 );
		var renderer = new THREE.WebGLRenderer();

		// INIT RENDERER
		renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild( renderer.domElement );

		var slider1 = document.getElementById("Param1");
		var slider2 = document.getElementById("Param2");
		var slider3 = document.getElementById("Param3");
		var slider4 = document.getElementById("Param4");
		var slider5 = document.getElementById("Param5");


	function MultiSpinTop() {
		// CODE STARTS HERE ...
		var ObjLen;  // = 0.15;  // 0.20

		initA();
		initMultiSpin();
		animate();	// keeps on going, until some event occurs.
	}

	function getSaturation(){
		// get the color saturation from a slider
		var output1 = document.getElementById("outParam1");
		output1.innerHTML = "Colour: " + slider1.value + " %";
		slider1.oninput = function() { sat = parseFloat(this.value);  output1.innerHTML ="Colour: " + sat + " %"; }
		}

	function getGx(){
		// get the gradient from a slider
		var output2 = document.getElementById("outParam2");
		output2.innerHTML = "Gy: " + slider2.value + " mT/m";
		slider2.oninput = function() { Gx = parseFloat(this.value); output2.innerHTML = "Gy: " + Gx + " mT/m"; }
		}

	function getGy(){
		// get the gradient from a slider
		var output3 = document.getElementById("outParam3");
		output3.innerHTML = "Gx: " + slider3.value + " mT/m";
		slider3.oninput = function() { Gy = parseFloat(this.value); output3.innerHTML = "Gx: " + Gy + " mT/m"; }
		}

	function getNX(){
		// get the NX from a slider
		var output4 = document.getElementById("outParam4");
		output4.innerHTML = "Spins (X): " + slider4.value + " ";
		slider4.oninput = function() { nx = parseFloat(this.value); output4.innerHTML = "Spins (X): " + nx + " "; }
		}

	function getSpinArrowLength(){
		// get ObjLen from a slider
		var output5 = document.getElementById("outParam5");
		output5.innerHTML = "Spin Size: " + slider5.value + " ";
		slider5.oninput = function() {var ObjLen = parseFloat(this.value); output5.innerHTML = "Spin Size: " + 100*ObjLen + " "; }
		return;
		}

	function initA(){
		var i,x,y;
		ny     = nx;
		nOBJ   = nx * ny;  // the objects are the spins

		i = 0;  // counter for spins
		for (x=0; x<nx; x++){
			for (y=0; y<ny; y++){
				material[i] = new THREE.MeshBasicMaterial( {color: 0xff0000, wireframe: false} );
				vecUP[i]    = new THREE.Vector3(0, 0, 0); // to allow world shift of rotated arrows
				vecSIDE[i]	= new THREE.Vector3(0, 0, 0);  // for Y direction
				i += 1; 	// object counter
			}
		}
	}

	function initMultiSpin() {
		// Intiialize Objects etc.
		var XgridShift = PhantomSize/nx; // this is how close the spins are plotted.
		var YgridShift = XgridShift;
		//	var YgridShift = 40/ny * ObjLen;
		var XsizeOfRandomPositioning = XgridShift; // ObjLen/2; // but can change it 0.05; //0.1;
		var YsizeOfRandomPositioning = XsizeOfRandomPositioning; // 0.05; //0.1;
		var x,y, radius;
		var i, xCoord, yCoord, colString;
		var hue = 0;   // this hue will be overwritten

		// so on reset, all sliders are also reset.
		sat=100; slider1.value = sat;
		Gx = 0;  slider2.value = Gx;
		Gy = 0;  slider3.value = Gy;
		var ObjLen = slider5.value/100.0;
		ny     = nx;
		nOBJ   = nx * ny;  // the objects are the spins
		camera.position.z = CameraZ;

		// clear previous spin objects
		while(scene.children.length > 0){
			scene.remove(scene.children[0]);
		}

		// MAKE OBJECTS
		var geometry = new THREE.BoxGeometry( ObjWidth, ObjLen, 0.01 ); // first param is object small dimension

		// single loop for all objects
		i = 0;  // counter for spins
		for (x=0; x<nx; x++){
			for (y=0; y<ny; y++){
				xCoord = x - nx/2;
				yCoord = y - ny/2;
				radius = Math.sqrt( xCoord*xCoord + yCoord*yCoord); // used for making a circular phantom.
				if (radius < 0.95*nx/2) {light[i] = 50}  // define a circular object
				else                    {light[i] =  0} ;
				colString = "hsl(" + hue.toString() + "," + sat.toString() + "%," + light[i].toString() + "%)" ;
				material[i].setValues({color:colString});
				Obj[i]      = new THREE.Mesh( geometry, material[i] );
				angles[i]   = 0.0;							// all spins start with the same phase
				// spin position is on a grid, but with some randomness to stop spurious rephasing.
				xLocation[i] = XgridShift*xCoord + XsizeOfRandomPositioning * (Math.random()-0.5);
				yLocation[i] = YgridShift*yCoord + YsizeOfRandomPositioning * (Math.random()-0.5);
				freq[i]      = xLocation[i] * Gx + yLocation[i] * Gy;  // each spin has a frequency, depending on location.
				//console.log(x, Gx, x * Gx);
				scene.add( Obj[i] );
				i += 1; 	// object counter
			}
		}
		return;
	}

		var animate = function () {
			var i, hue, colString;
			getSaturation();
			getGx();
			getGy();
			getNX();
			var ObjLen = getSpinArrowLength();
			//console.log("deltaT ", deltaT);

			requestAnimationFrame( animate ); // so this routine animate() gets called repeatedly

			for (i=0; i<nOBJ; i++){
				// update frequencies - because gradient may have changed.
				freq[i]   = xLocation[i]*Gx + yLocation[i]*Gy;  // each spin has a frequency, depending on location.

				angles[i] += freq[i]* deltaT; 			// phi = omega t
				vecUP[i].setX( +Math.sin(angles[i]) );   // https://threejs.org/docs/index.html#api/en/math/Vector3
				vecUP[i].setY( +Math.cos(angles[i]) );

				vecSIDE[i].setX( +Math.cos(angles[i]) );   // this is for sideways shift
				vecSIDE[i].setY( -Math.sin(angles[i]) );

				Obj[i].rotation.z = angles[i];
				Obj[i].translateOnAxis(vecUP[i], xLocation[i] );  // move whole object in X direction.
				Obj[i].translateOnAxis(vecSIDE[i], yLocation[i] );  // move whole object in Y direction.

				// Correlate spin hue (colour) to spin phase
				hue = ( (180/Math.PI)*angles[i] ) % 360.0  ; // seems ok
				if (hue < 0) {hue += 360.0};
				colString = "hsl(" + hue.toString() + "," + sat.toString() + "%," + light[i].toString() + "%)" ;
				material[i].setValues({color:colString});
			}

			// ACTUALLY RENDER
			renderer.render(scene, camera);
			// THEN REVERSE TRANSLATIONS
			for (i=0; i<nOBJ; i++){
				Obj[i].translateOnAxis(vecSIDE[i], -yLocation[i] );  // move whole object in X direction.
				Obj[i].translateOnAxis(vecUP[i],   -xLocation[i] );  // move whole object X
				//Obj[i].translateOnAxis(vec1,     -ObjLen/2.0); // translate it back, ready for next loop
			}
		};

		//MultiSpinTop();
