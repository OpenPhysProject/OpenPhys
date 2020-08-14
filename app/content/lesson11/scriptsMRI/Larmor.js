//
//
	//"use strict"
	var sliderField = 1.0;
	var theTimeNow = 0.0;

	function myLarmorMain(){
		// TOP LEVEL
		var camera, geometry, material, mesh;
		init();
		animate();
		}

	function getFreq(){
		var slider1 = document.getElementById("Param1Larmor");
		var output1 = document.getElementById("outParam1Larmor");
		output1.innerHTML = slider1.value + " Tesla";
		slider1.oninput = function() { sliderField = parseFloat(this.value);
										output1.innerHTML = sliderField + " Tesla";
										}
		//									drawChart(cv, seqPars ); }
		}

	function init() {
		// CAMERA
		Larmorscene  = new THREE.Scene();
		var FOV_deg = 80;
		var displayHeight = window.innerHeight/2;
		var displayWidth = displayHeight; //window.innerWidth / 2;

		var aspect = displayWidth / displayHeight;
		camera = new THREE.PerspectiveCamera( FOV_deg, aspect, 1, 10000 );
		camera.position.x = 0;
		camera.position.z = 1000;
		// MESH
		//geometry = new THREE.BoxGeometry( 800, 200, 200 );
		var cylinderRadius = 15;
		var cylinderHeight = 800; //500
		Larmorspeed = -0.01  * Math.PI / 2;
		var nSpins = 1;
		var geometry = new THREE.CylinderGeometry( cylinderRadius/2, cylinderRadius, cylinderHeight, 10 );
		var material = new THREE.MeshBasicMaterial( { color: 0xf0f000, wireframe: false } );

		meshs = [];
	//for (i=0; i<nSpins; i++){
		meshTmp = new THREE.Mesh( geometry, material );
		meshTmp.position.y = cylinderHeight/2;
		Larmorscene.add( meshTmp );
		meshs.push(meshTmp);
	//}
	// RENDER
		LarmorRenderer = new THREE.WebGLRenderer( { canvas: LarmorCanvas } );
		LarmorRenderer.setSize( displayWidth, displayHeight );
	}

	function animate() {
		//var clock1 = document.getElementById("Clock");
		getFreq();
		requestAnimationFrame( animate );
		render();
		theTimeNow += 1/60.0;
		//clock1.innerHTML = parseInt(theTimeNow) + " seconds";
	}

	function render() {
		// https://stackoverflow.com/questions/44287255/whats-the-right-way-to-rotate-an-object-around-a-point-in-three-js
		var matrix = new THREE.Matrix4();  //Create a matrix
		i = 0;
		var radians = Larmorspeed * sliderField;
		//for (i=0; i<nSpins; i++){
			matrix.makeRotationZ(radians);
			meshs[i].position.applyMatrix4(matrix);		// sets the center of rotation (essentially)
			meshs[i].rotation.z += radians; 			// increment the rotation angle of the object.
		//}
		//console.log(mesh1.rotation.z)
		//if ( Math.abs(meshs[0].rotation.z) > Math.PI *0.9 ) {speed = -speed;} // 180deg pulse, sort of.

		camera.position.z +=0;
		LarmorRenderer.render( Larmorscene, camera );
	}
