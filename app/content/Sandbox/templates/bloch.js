// rot_frame.js - from rot_frame.f (multibloch)

//================== REFERENCE FRAMES =====================*
//	F0(a)	Lab Frame, complex  --> RELAXATION is performed in this frame
//	F0(b)	B1 Frame, instantaneous B1 along X axis. Rotating at a freq. w.r.t. F0(a) of d(Bphi)/dt.
//          Need this freq. for calc. of Beff, (but NOT for calc. of evolution of M.)
//
//	F1	Beff is along the Z axis (CARTESIAN)
//	F2	Beff is along the Z axis (POLAR). --> PRECESSION is performed in this frame.

function rot_frame(M_in, B_in, Vec){
	//
	var g = 1;
        var dwell=1 ;
        var Evaluate_RT=false, T1=1e6, T2=T1*0.1 ;
        
	var i ;
	//var MXArray = [], MYArray= [], MZArray=[];
	var BX,BY,BZ,BXY, Beff, Bphi, beta ;
	var BX_F1, BY_F1, BZ_F1 ;
	var BR_F2, BZ_F2, thetaB_F2 ;
	var MX_F0b, MY_F0b, MZ_F0b ;
	var MX_F1, MX_F1, MX_F1 ;
	var MR_F2, MZ_F2, thetaM_F2 ;
        
        MX = M_in[0];
        MY = M_in[1];
        MZ = M_in[2];

  	for (i=1; i<Vec+1; i++){   // loops for the whole RF pulse
	  //---- B IN F0(a) & F0(b) ---
	  BX   = B_in[0] / Vec;		// B1(1,i) * PUL.flipf
	  BY   = B_in[1] / Vec; 	// B1(2,i) * PUL.flipf
	  BZ   = B_in[2] / Vec; 	// (2.0*pi/g)*Df +  Dx*(gradX+INHX) / 1e+6
	  
          BXY  = Math.sqrt(BX*BX + BY*BY) ;
	  Beff = Math.sqrt(BZ*BZ + BY*BY + BX*BX) ;
	  //----- angle between F0(a) & F0(b) ::
	  if (BXY === 0) { Bphi = 0 }       			// 'BXY = 0.0 cannot evaluate'
	  else           { Bphi = Math.atan2(BY,BX); }	// PHASE of B1 excitation. // 'Bphi evaluated in ROT_FRAME =',Bphi
	  //----- angle between F0(b) & F1 ::
	  if (Beff === 0) {beta = 0;}				// 'Beff = 0.0 cannot evaluate Beta in ROT_FRAME'
	  else            {beta = Math.atan2(BXY,BZ);}
	  //---- B in F1 from B in F0. [Cartesian frame with Beff aligned along Z1 axis]
	  BX_F1 = 0.0 ;		//	! because the rotation F0(b) -> F1 aligns Beff
	  BY_F1 = 0.0 ;		// ! with Z1.
	  BZ_F1 = Beff ;		//	! Beff lies along +VE Z-AXIS.
	  //---- B in F2 from B in F1 -- Cylindrical Polar frame, Beff aligned along Z2 axis
	  BR_F2 = 0.0 ; 		//! = BX_F1/COS(thetaB_F2)	  F1 -> F2
	  BZ_F2 = BZ_F1;		//  ! = Beff in F2, by definition of F2.
	  thetaB_F2 = 0.0;	  	//! = ATAN2(BY_F1,BX_F1)

		//*** RELAXATION of M EVALUATED IN F0(a) (PRE-PRECESSION) *******
		if (Evaluate_RT) {
	   		MX =       MX - MX/(T2/1000.0) * dwell;	//!	these are right !?
	   		MY =       MY - MY/(T2/1000.0) * dwell;
	   		MZ = MZ + (1.0 - MZ)/(T1/1000.0) * dwell;
		}
		//---- M IN F0(b) (Cartesian Beff) FROM M IN F0(a) ------------*
		MX_F0b = + MY*Math.sin(Bphi) + MX*Math.cos(Bphi) ;
		MY_F0b = + MY*Math.cos(Bphi) - MX*Math.sin(Bphi) ;
		MZ_F0b = MZ ;		//! rotation is Bphi about F0  Z axis.
		//----- M IN F1 (Cartesian Beff) FROM M IN F(b) --------------*
		MX_F1 = - MZ_F0b * Math.sin(beta) +  MX_F0b * Math.cos(beta) ;
		MZ_F1 = + MZ_F0b * Math.cos(beta) +  MX_F0b * Math.sin(beta) ;
		MY_F1 =  MY_F0b	;	// Rotate about the axis 90deg to B1.

		//----- M IN F2 (polar Beff) FROM M in F1 & B in F2 --------------*
		MR_F2 = Math.sqrt(MX_F1*MX_F1 + MY_F1*MY_F1) ;
		MZ_F2 = MZ_F1 ;
		if (MR_F2 === 0) {thetaM_F2 = 0; }  	// immaterial.' No M trans to Beff in F2. No PRECESSION'
		else             {thetaM_F2 = Math.atan2(MY_F1, MX_F1); }
		//---- Precession M about Beff in F2
		thetaM_F2 = thetaM_F2 - g*BZ_F2 * dwell; // 50  angle in degs. thro which MR_F2 precesses in time DWELL.
		//--- M IN F1 (Cartesian Beff) FROM M IN F2 --------------*
		MX_F1 = MR_F2 * Math.cos(thetaM_F2) ;
		MY_F1 = MR_F2 * Math.sin(thetaM_F2) ;
		MZ_F1 = MZ_F2 ;

	//------- M IN F0(b) FROM M IN F1 ------------------*
	MX_F0b = MZ_F1 * Math.sin(beta)  +  MX_F1 * Math.cos(beta) ;
	MZ_F0b = MZ_F1 * Math.cos(beta)  -  MX_F1 * Math.sin(beta) ;
	MY_F0b = MY_F1 ;

	//---- M IN F0(a) FROM M IN F0(b)  (inverse rotation from above. Corrected 17-JUL-88) --*
	MX =  - MY_F0b * Math.sin(Bphi)  +  MX_F0b * Math.cos(Bphi) ;
	MY =  + MY_F0b * Math.cos(Bphi)  +  MX_F0b * Math.sin(Bphi) ;
	MZ =    MZ_F0b ;

	//MXArray(i) = MX ;
	//MYArray(i) = MY ;
	//MZArray(i) = MZ ;
	}
 return([MX, MY, MZ]) ; // returns final magnetization.
}
//********************************************
