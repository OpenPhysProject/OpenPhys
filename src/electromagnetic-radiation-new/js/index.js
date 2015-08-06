$(function() {
  $('ul.tabs li:first').addClass('active');
  $('.block article').hide();
  $('.block article:first').show();
  $('ul.tabs li').on('click', function() {
    $('ul.tabs li').removeClass('active');
    $(this).addClass('active');
    $('.block article').hide();
    var activeTab = $(this).find('a').attr('href');
    $(activeTab).show();
if ($(activeTab).index() == 1) {
  if ($('#dragarea').width() <= 860) {
    $('#bar1').click();
  } else {
    $('#content1').css("width", "33%");
    $('#content2').css("left", "33%");
    $('#content2').css("width", "33%");
    $('#content3').css("left", "66%");
    $('#content3').css("width", "34%");
  }
}
    return false;
  });
})

var lectext = ["Radio waves are a type of electromagnetic radiation with wavelengths in the electromagnetic spectrum longer than infrared light. Radio waves have frequencies from 300 GHz to as low as 3 kHz, and corresponding wavelengths ranging from 1 millimeter (0.039 in) to 100 kilometers (62 mi). ", "Microwaves are a form of electromagnetic radiation with wavelengths ranging from as long as one meter to as short as one millimeter; with frequencies between 300 MHz (100 cm) and 300 GHz (0.1 cm).", "Infrared (IR) is invisible radiant energy, electromagnetic radiation with longer wavelengths than those of visible light, extending from the nominal red edge of the visible spectrum at 700 nanometers (frequency 430 THz) to 1 mm (300 GHz)", "The visible spectrum is the portion of the electromagnetic spectrum that is visible to the human eye. Electromagnetic radiation in this range of wavelengths is called visible light or simply light. A typical human eye will respond to wavelengths from about 390 to 700 nm.", "X-radiation (composed of X-rays) is a form of electromagnetic radiation. Most X-rays have a wavelength ranging from 0.01 to 10 nanometers, corresponding to frequencies in the range 30 petahertz to 30 exahertz (3×1016 Hz to 3×1019 Hz) and energies in the range 100 eV to 100 keV. X-ray wavelengths are shorter than those of UV rays and typically longer than those of gamma rays."];

$("#scroll").change(function(e) {
  if ($(this).val() >= 0 && $(this).val() < 10) {
    $("#lectext").text(lectext[0]);
  } else if ($(this).val() >= 10 && $(this).val() < 20) {
    $("#lectext").text(lectext[1]);
  } else if ($(this).val() >= 20 && $(this).val() < 30) {
    $("#lectext").text(lectext[2]);
  } else if ($(this).val() >= 30 && $(this).val() < 40) {
    $("#lectext").text(lectext[3]);
  } else {
    $("#lectext").text(lectext[4]);
  }
});

//boolean variable to check if the mousedown movement for bar2 is a drag or is a click
var mouseMoved1 = false;
var mouseDown1 = false;
//boolean variable to check if the mousedown movement for bar3 is a drag or is a click
var mouseMoved2 = false;
var mouseDown2 = false;
//no need to check for bar1, since bar1 can only be clicked.

//use percentage for width,left,right in order to fit the screen after window resized.
//if mousedown on bar2
$('#bar2').mousedown(function(e) {
  mouseDown1 = true;
  e.preventDefault();
  e.stopPropagation();
  //if drag bar2:
  $(document).mousemove(function(e) {
    mouseMoved1 = true;
    var dragareaW = $('#dragarea').width();
    var barW = $('.bar').width();
    var content1L = $('#content1').offset().left;
    var content3W = $('#content3').width();
    var corX = e.pageX - content1L;
    //constrain to prevent bar over lap each other
    if (corX >= barW % dragareaW && corX <= (dragareaW - content3W - barW) % dragareaW) {
      //make change to each content view while drag
      $('#content1').css("width", corX % dragareaW);
      $('#content2').css("left", corX % dragareaW);
      $('#content2').css("width", (dragareaW - corX - content3W) % dragareaW);
    }
  })
});

//if mousedown on bar3
$('#bar3').mousedown(function(e) {
  mouseDown2 = true;
  e.preventDefault();
  e.stopPropagation();

  //if drag bar2:
  $(document).mousemove(function(e) {
    mouseMoved2 = true;
    var dragareaW = $('#dragarea').width();
    var barW = $('.bar').width();
    var content1L = $('#content1').offset().left;
    var content1W = $('#content1').width();
    var corX = e.pageX - content1L;
    //constrain to prevent bar over lap each other
    if (corX % dragareaW >= (content1W + barW) % dragareaW && corX <= (dragareaW - barW) % dragareaW) {
      //make change to each content view while drag
      $('#content2').css("width", (corX - content1W) % dragareaW);
      $('#content3').css("left", corX % dragareaW);
      $('#content3').css("width", (dragareaW - corX) % dragareaW);
    }
  })

});

$(document).mouseup(function(e) {
  $(document).unbind('mousemove');
  $(document).unbind('click');
  //after mouseup, check if the mouse movement is a click or drag, if it is a click then also check which bar has been clicked.
  
  //if bar2 is clicked.
  if (!mouseMoved1 && mouseDown1) {
    $('#content1').css("width", $('.bar').width() % $('#dragarea').width());
    $('#content2').css("width", ($('#dragarea').width() - $('.bar').width() * 2) % $('#dragarea').width());
    $('#content2').css("left", $('.bar').width() % $('#dragarea').width());
    $('#content3').css("width", $('.bar').width() % $('#dragarea').width());
    $('#content3').css("left", ($('#dragarea').width() - $('.bar').width()) % $('#dragarea').width());

  }  

  //if bar3 is clicked.
  else if (!mouseMoved2 && mouseDown2) {
    $('#content3').css("width", ($('#dragarea').width() - $('.bar').width() * 2) % $('#dragarea').width());
    $('#content3').css("left", $('.bar').width() * 2 % $('#dragarea').width());
    $('#content2').css("left", $('.bar').width() % $('#dragarea').width());
    $('#content2').css("width", $('.bar').width() % $('#dragarea').width());
    $('#content1').css("width", $('.bar').width() % $('#dragarea').width());
  }
  //set the boolean var to default.
  mouseDown1 = false;
  mouseDown2 = false;
  mouseMoved1 = false;
  mouseMoved2 = false;
});

$('#bar1').click(function(e) {
  //when the first bar is clicked
  //expand the content.
  e.preventDefault();
  e.stopPropagation();

  $('#content1').css("width", ($('#dragarea').width() - $('.bar').width() * 2) % $('#dragarea').width());
  $('#content2').css("left", ($('#dragarea').width() - $('.bar').width() * 2) % $('#dragarea').width());
  $('#content2').css("width", $('.bar').width() % $('#dragarea').width());
  $('#content3').css("left", ($('#dragarea').width() - $('.bar').width()) % $('#dragarea').width());
  $('#content3').css("width", $('.bar').width() % $('#dragarea').width());
});

window.addEventListener('resize', function(event) {
  // do stuff here
  if ($('#dragarea').width() <= 860) {
    $('#bar1').click();
  } else {
    // if window's width is larger than 860
    //then the three content will be equally
    //showed on the screen.
    $('#content1').css("width", "33%");
    $('#content2').css("left", "33%");
    $('#content2').css("width", "33%");
    $('#content3').css("left", "66%");
    $('#content3').css("width", "34%");
  }
});

if ($('#dragarea').width() <= 860) {
  $('#bar1').click();
} else {
  // if window's width is larger than 860
  //then the three content will be equally
  //showed on the screen.
  $('#content1').css("width", "33%");
  $('#content2').css("left", "33%");
  $('#content2').css("width", "33%");
  $('#content3').css("left", "66%");
  $('#content3').css("width", "34%");
}


var flag1 = 0;
var flag2 = 0;
var flag3 = 0;

$("#waveLength").on('click',function() {
      if (flag1 == 0)
      {
        $("#triangle1").css("opacity","0.8");
        $("#triangle3").css("opacity","0.8");
        $("#triangle2").css("opacity","0.5");
        flag1 = 1;
        flag2 = 0;
        flag3 = 0;
      }
});

$("#particleEnergy").on('click',function() {
      if (flag2 == 0)
      {
        $("#triangle2").css("opacity","0.8");
        $("#triangle3").css("opacity","0.8");
        $("#triangle1").css("opacity","0.5");
        flag2 = 1;
        flag1 = 0;
        flag3 = 0;
      } 
});

$("#freQuency").on('click',function() {
      if (flag3 == 0)
      {
        $("#triangle1").css("opacity","0.8");
        $("#triangle2").css("opacity","0.8");
        $("#triangle3").css("opacity","0.8");
        flag3 = 1;
        flag2 = 0;
        flag1 = 0;
      } 
});

$("#reSet").on('click',function() {
        $("#triangle1").css("opacity","0.5");
        $("#triangle2").css("opacity","0.5");
        $("#triangle3").css("opacity","0.5");
        flag3 = 0;
        flag2 = 0;
        flag1 = 0;
});


function fun2(x) {return Math.cos(x*x);}

function draw() {
 var canvas = document.getElementById("canvas");
 if (null==canvas || !canvas.getContext) return;

 var axes={}, ctx=canvas.getContext("2d");
 axes.x0 = .5 + .5*canvas.width;  // x0 pixels from left to x=0
 axes.y0 = .5 + .5*canvas.height; // y0 pixels from top to y=0
 axes.scale = 40;                 // 40 pixels from x=0 to x=1
 axes.doNegativeX = true;

 showAxes(ctx,axes);

 funGraph(ctx,axes,fun2,"rgb(66,44,255)",5);
}

function funGraph (ctx,axes,func,color,thick) {
 var xx, yy, dx=4, x0=axes.x0, y0=axes.y0, scale=axes.scale;
 var iMax = Math.round((ctx.canvas.width-x0)/dx);
 var iMin =0;
 ctx.beginPath();
 ctx.lineWidth = thick;
 ctx.strokeStyle = color;

 for (var i=iMin;i<=iMax;i+=0.01) {
  xx = dx*i; yy = scale*func(xx/scale);
  if (i==iMin) ctx.moveTo(x0+xx,y0-yy);
  else         ctx.lineTo(x0+xx,y0-yy);
 }
 ctx.stroke();
}

function showAxes(ctx,axes) {
 ctx.beginPath();
 ctx.strokeStyle = "rgb(128,128,128)"; 
 ctx.stroke();
}