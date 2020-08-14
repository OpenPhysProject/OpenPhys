/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";

function MultiSpinBTop() {
    // CODE STARTS HERE ...
    var ObjLen;  // = 0.15;  // 0.20

    initANY(nxb);
    resetGradandFreq();
    initMultiSpinB();       
    animateMultiSpinB();	// keeps on going, until some event occurs.
}

function getGxB(){
        // get the gradient from a slider
        var output2 = document.getElementById("MSB_out2");
        output2.innerHTML = "Gy: " + MSB_slider2.value + " mT/m";
        MSB_slider2.oninput = function() { GxB = parseFloat(this.value); output2.innerHTML = "Gy: " + GxB + " mT/m"; }
        }

function getGyB(){
        // get the gradient from a slider
        var output3 = document.getElementById("MSB_out3");
        output3.innerHTML = "Gx: " + MSB_slider3.value + " mT/m";
        MSB_slider3.oninput = function() { GyB = parseFloat(this.value); output3.innerHTML = "Gx: " + GyB + " mT/m"; }
        }

function getNXB(){
        // get the NXB from a slider
        var output4 = document.getElementById("MSB_out4");
        output4.innerHTML = "# spins: " + MSB_slider4.value + " ";
        MSB_slider4.oninput = function() { nxb = parseFloat(this.value); output4.innerHTML = " # spins: " + nxb + " "; }
        }


function getSpinArrowLengthB(){
        // get ObjLen from a slider
        var output5 = document.getElementById("MSB_out5");
        output5.innerHTML = "Spin Size: " + MSB_slider5.value + " ";
        MSB_slider5.oninput = function() {var ObjLen = parseFloat(this.value); output5.innerHTML = "Spin Size: " + 100*ObjLen + " "; }
        return;
        }

function initANY(nxANY){
        var i,x,y;
        ny     = nxANY;
        nOBJ   = nxANY * ny;  // the objects are the spins

        i = 0;  // counter for spins
        for (x=0; x<nxANY; x++){
                for (y=0; y<ny; y++){
                        material[i] = new THREE.MeshBasicMaterial( {color: 0xff0000, wireframe: false} );
                        vecUP[i]    = new THREE.Vector3(0, 0, 0); // to allow world shift of rotated arrows
                        vecSIDE[i]  = new THREE.Vector3(0, 0, 0);  // for Y direction
                        i += 1; 	// object counter
                }
        }
}

function getoffFreq(){
    // get the offset frequency from a slider
    var output6 = document.getElementById("MSB_out6");
    output6.innerHTML = "Freq: " + MSB_slider6.value;
    MSB_slider6.oninput = function() { offFreq = parseFloat(this.value); output6.innerHTML = "Freq: " + offFreq; }
}

function resetGradandFreq(){
    //
    GxB = 0;  MSB_slider2.value = GxB;
    GyB = 0;  MSB_slider3.value = GyB;
    // new for MultiSpinB
    offFreq = 0; MSB_slider6.value = offFreq;
}

function updateMXY_Display(MX,MY){
    var MX, MY, MXY, Mphase_deg;
    var displayM = document.getElementById("displayM");
    var txt_as_a_Row, txt2, txt_as_a_Col;
    
    //console.log("MX, MY", MX/nOBJ ,MY/nOBJ);
    
    // to slow down display
    updateCountMXY += 1;
    if (updateCountMXY < 20 ) { 
        return;
    }
    updateCountMXY = 0;
    
    MX = 100.0 * MX/phantom_spins;
    MY = 100.0 * MY/phantom_spins;
    MXY = Math.sqrt(MX*MX + MY*MY);
    Mphase_deg = -90.0 + Math.atan2(MY, MX) * 180 / Math.PI;
    
    txt2 = " &nbsp % &nbsp </td>";
    
    txt_as_a_Row = '<table style="width:100%">' 
    + '<col width="10%"> <col width="20%">'  
    + '<col width="10%"> <col width="20%">'
    + '<col width="10%"> <col width="20%">'
    + "<tr>" 
           + '<td> MX: </td>'  
           + '<td style="text-align:right">' + MX.toFixed(1)  + txt2  
           + '<td> MY: </td>' 
           + '<td style="text-align:right">' + MY.toFixed(1)  + txt2 
           + '<td> MXY: </td>' 
           + '<td style="text-align:right">' + MXY.toFixed(1) + txt2 
        + "</tr>"
    + "</table>";
    
    
    txt_as_a_Col = '<table style="width:50%">' 
    + '<col width="10%"> <col width="30%">'  
    + '<col width="10%"> <col width="30%">'
    + '<col width="10%"> <col width="30%">'
        + "<tr>" 
        + '<td> MX: </td>' + '<td style="text-align:right">' + MX.toFixed(1)  + txt2 
        + "</tr>"
   
        + "<tr>"
        + '<td> MY: </td>' + '<td style="text-align:right">' + MY.toFixed(1)  + txt2 
        + "</tr>"
   
        + "<tr>"
        + '<td> MXY: </td>' + '<td style="text-align:right">' + MXY.toFixed(1) + txt2 
        + "</tr>"

        + "<tr>"
        + '<td> Phase: </td>' + '<td style="text-align:right">' + Mphase_deg.toFixed(0) + " &nbsp deg &nbsp </td>" 
        + "</tr>"

    + "</table>";
    
    displayM.innerHTML = txt_as_a_Col;
    
   // displayM.innerHTML = "MX: &nbsp&nbsp&nbsp"              + MX.toFixed(1) + 
   //                      "&nbsp % <br> MY:&nbsp&nbsp&nbsp " + MY.toFixed(1) + 
   //                      "&nbsp % <br> MXY: &nbsp"         + MXY.toFixed(1) +
   //                      "&nbsp %" +
   //                      txt;   
    return;             
}

function initMultiSpinB() {
        // Intiialize Objects etc.
        var XgridShift = PhantomSize/nxb; // this is how close the spins are plotted.
        var YgridShift = XgridShift;
        //	var YgridShift = 40/ny * ObjLen;
        var XsizeOfRandomPositioning = XgridShift; // ObjLen/2; // but can change it 0.05; //0.1;
        var YsizeOfRandomPositioning = XsizeOfRandomPositioning; // 0.05; //0.1;
        var x,y, x2,y2, radius1, radius2;
        var i, xCoord, yCoord, colString;
        var hue = 0;   // this hue will be overwritten

        // TWO CIRCLES, SYMMETRIC ALONG X AXIS
        var phantom1_shift_x     =    0; // 
        var phantom1_shift_y     = ny/4;
        var phantom1_radius = 0.50*nxb/3;  // 0.95
        var phantom2_shift_x     =     0; // 
        var phantom2_shift_y     = -ny/4;
        var phantom2_radius = 0.50*nxb/3;  // 0.95

        // TWO CIRCLES, ONE CENTERED
        var phantom1_shift_x   =    0; // 
        var phantom1_shift_y   =    0;
        var phantom1_radius    = 0.50*nxb/4;  // 0.95
        var phantom2_shift_x   =     0; // 
        var phantom2_shift_y   = 0.30*ny;
        var phantom2_radius    = phantom1_radius;  // 0.95

        // so on reset, all sliders are also reset.
        sat=100;     slider1MultiSpin.value = sat;
        var ObjLen = MSB_slider5.value/100.0;
        //
        ny     = nxb;
        nOBJ   = nxb * ny;  // the objects are the spins
        camera.position.z = CameraZ;

        // clear previous spin objects
        while(scene.children.length > 0){
                scene.remove(scene.children[0]);
        }

        // MAKE OBJECTS
        var geometry = new THREE.BoxGeometry( ObjWidth, ObjLen, 0.01 ); // first param is object small dimension

        // single loop for all objects (spins)
        i = 0;  // index for spins
        phantom_spins = 0; // counter for number of spins actually used
        for (x=0; x<nxb; x++){
                for (y=0; y<ny; y++){
                    
                        xCoord = x - nxb/2;
                        yCoord = y - ny/2;
                        
                        // DEFINE PHANTOM OBJECT #2
                        // define a circular object
                        x2 = xCoord - phantom1_shift_x;
                        y2 = yCoord - phantom1_shift_y;
                        radius1 = Math.sqrt(x2*x2 + y2*y2); // used for making a circular phantom.
                        
                        x2 = xCoord - phantom2_shift_x;
                        y2 = yCoord - phantom2_shift_y;
                        radius2 = Math.sqrt(x2*x2 + y2*y2); // used for making a circular phantom.

                        
                        if (radius1 < phantom1_radius) {
                            phantom_spins += 1;
                            light[i] = 50;       // HSL color uses L=50 for normal colors (middle of black and white)
                        }  
                        else if (radius2 < phantom2_radius) {
                            phantom_spins += 1;
                            light[i] = 50; 
                        }
                        else {
                            light[i] = 0;        // 0 = black in the HSL color system
                        } ;
                       
                        colString = "hsl(" + hue.toString() + "," + sat.toString() + "%," + light[i].toString() + "%)" ;
                        material[i].setValues({color:colString});
                        Obj[i]      = new THREE.Mesh( geometry, material[i] );
                        angles[i]   = 0.0;	
                        // all spins start with the same phase
                        // spin position is on a grid, but with some randomness to stop spurious rephasing.
                        xLocation[i] = XgridShift*xCoord + XsizeOfRandomPositioning * (Math.random()-0.5);
                        yLocation[i] = YgridShift*yCoord + YsizeOfRandomPositioning * (Math.random()-0.5);
                        freq[i]      = xLocation[i] * GxB + yLocation[i] * GyB;  // each spin has a frequency, depending on location.
                        //console.log(x, GxB, x * GxB);
                        scene.add( Obj[i] );
                        i += 1; 	// object counter
                }
        }
        return;
}

var animateMultiSpinB = function () {
        var i, hue, colString;
        var MX, MY;

        getSaturation();
        getGxB();
        getGyB();  // B version, in this file.
        getNXB();
        getoffFreq();
        var ObjLen = getSpinArrowLengthB();
        //console.log("deltaT ", deltaT);

        requestAnimationFrame( animateMultiSpinB ); // so this routine animateMultiSpin() gets called repeatedly

        MX = 0; MY = 0;// seems ok?
        for (i=0; i<nOBJ; i++){
                // update frequencies - because gradient may have changed.
                freq[i]   = offFreq + xLocation[i]*GxB + yLocation[i]*GyB;  // each spin has a frequency, depending on location.
                //if (i==0) {console.log(i,freq[0])};
                angles[i] += freq[i]* deltaT; 			// phi = omega t

                MX += (light[i]/50.0) * Math.sin(angles[i]); // hmm for display of NMR signal
                MY += (light[i]/50.0) * Math.cos(angles[i]);                       

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

        updateMXY_Display(MX,MY);

        // ACTUALLY RENDER
        renderer.render(scene, camera);
        // THEN REVERSE TRANSLATIONS
        for (i=0; i<nOBJ; i++){
                Obj[i].translateOnAxis(vecSIDE[i], -yLocation[i] );  // move whole object in X direction.
                Obj[i].translateOnAxis(vecUP[i],   -xLocation[i] );  // move whole object X
                //Obj[i].translateOnAxis(vec1,     -ObjLen/2.0); // translate it back, ready for next loop
        }
};
        
        
        