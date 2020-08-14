/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

	function render() {
            var inc, k;
            t += 1;
            var excitation_flip = 90;
            var captions = [   "Start: Equilibrium", 
                               "90 Degree Flip", 
                               "Free Precession (dephasing)",
                               "180 degree refocusing pulse",
                               "Free Precession (rephasing)",
                               "Spin Echo (simulation paused)"
                             ];                 
            //        ts0  ts1   ts2     ts3  ts4  ts5     ts6
            //       pause  90  dephase eyes eyes rephase pause   
            var ts = [100,  30,  130,    50,   50, 130,  300];                 
            // PULSE SEQUENCE
            if      (t < ts[0])      { t0 = t;  document.getElementById("Caption").innerHTML = captions[0]; }  // pause
            else if (t < t0 + ts[1]) { t1 = t;  document.getElementById("Caption").innerHTML = captions[1];  // 90deg flip axis=depends on spin phase
                                                inc = excitation_flip/(ts[1]-1);
                                                for (k=0; k<nSpins; k++){ M[k].flip_deg += inc; };  }  
            else if (t < t1+ts[2])   { t2 = t;  document.getElementById("Caption").innerHTML = captions[2];
                                                for (k=0; k<nSpins; k++){ M[k].phase_deg += M[k].phaseInc_deg }; }  // precession
            // PANCAKE FLIP HERE
            else if (t < t2+ts[3])   { t3 = t;  document.getElementById("Caption").innerHTML = captions[3]; }   // just delay for eyes 
            else if (t == t3+1)      { t4 = t;  for (k=0; k<nSpins; k++){ M[k].phase_deg *= -1;}  }  // 180 about defined axis
            else if (t < t4+ts[4])   { t50= t;  }   // just delay for eyes

            else if (t < t50+ts[5])  { t60 = t; document.getElementById("Caption").innerHTML = captions[4];
                                                for (k=0; k<nSpins; k++){ M[k].phase_deg += M[k].phaseInc_deg; }; }  // precession

            else if (t < t60+ts[6])  {          document.getElementById("Caption").innerHTML = captions[5];}  	// pause
            else                     { t=0;     for (k=0; k<nSpins; k++){ M[k].flip_deg=0;  M[k].phase_deg=0; }} 	 // reset.

        for (plot=0; plot<nPlots; plot++) {
            xshift = xshifts[plot];   
            for (k=0; k<nSpins; k++){ arrowM[k] = setArrow(arrowM[k], M[k]) }
        }
	renderer.render( scene, camera );
	}

    function doAxes_NotUsed(AxisLength){
            var AxisRadius = 4;
            var red    = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: false } );
            var AxisGeometry = new THREE.CylinderGeometry( AxisRadius, AxisRadius, AxisLength, 10 );
            var xAxis = new THREE.Mesh( AxisGeometry, red );   scene.add( xAxis );
            var yAxis = new THREE.Mesh( AxisGeometry, red );  scene.add( yAxis );
            var zAxis = new THREE.Mesh( AxisGeometry, red ); scene.add( zAxis );
            var xAxisData = {flip_deg:90, phase_deg:0, len:AxisLength};
            var yAxisData = {flip_deg:90, phase_deg:90, len:AxisLength};
            xAxis = setArrow(xAxis, xAxisData);
            yAxis = setArrow(yAxis, yAxisData);
            // zAxis does not need any rotation
            return;
    }
    
    
    function doSquare(){
            // https://threejs.org/docs/index.html#manual/en/introduction/Drawing-lines
            //create a blue LineBasicMaterial
            var material = new THREE.LineBasicMaterial( { color: 0xff0000 } );
            var geo = new THREE.Geometry();
            var L = 400;
            var y = -200;
            geo.vertices.push(new THREE.Vector3( -L, y, -L) );
            geo.vertices.push(new THREE.Vector3( +L, y, -L) );
            geo.vertices.push(new THREE.Vector3( +L, y, +L) );
            geo.vertices.push(new THREE.Vector3( -L, y, +L) );
            geo.vertices.push(new THREE.Vector3( -L, y, -L) );
            var line = new THREE.Line( geo, material );
            scene.add( line );
            return;
    }    


