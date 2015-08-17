$(function() {
  $('ul.tabs li:first').addClass('active');
  $('.block article').hide();
  $('.block article:first').show();
  $('ul.tabs li').on('click', function() {
    $('ul.tabs li').removeClass('active');
    $(this).addClass('active')
    $('.block article').hide();
    var activeTab = $(this).find('a').attr('href');
    $(activeTab).show();
    return false;
  });
})


var lectext=["Xray","Visible","Electromagnetic waves are formed when an electric field (shown in red arrows) couples with a magnetic field (shown in blue arrows). Magnetic and electric fields of an electromagnetic wave are perpendicular to each other and to the direction of the wave.","The electromagnetic spectrum is generally divided into seven regions, in order of decreasing wavelength and increasing energy and frequency: radio waves, microwaves, infrared, visible light, ultraviolet, X-rays and gamma rays.","A prism can break white light up into the visible light spectrum."];

function myFunction(inDex)
{
  if (inDex == 1){
    document.getElementById("demo").innerHTML=lectext[0];
  }
  else if (inDex == 2)
  {
    document.getElementById("demo").innerHTML=lectext[1];
  }
  else if (inDex == 3)
  {
    document.getElementById("demo").innerHTML=lectext[2];
  }
  else if (inDex == 4)
  {
    document.getElementById("demo").innerHTML=lectext[3];
  }
  else if (inDex == 5)
  {
    document.getElementById("demo").innerHTML=lectext[4];
  }
}

function myFunction2(inDex)
{
  if (inDex == 1){
    document.getElementById("demo").innerHTML=lectext[0];
  }
  else if (inDex == 2)
  {
    document.getElementById("demo").innerHTML=lectext[1];
  }
  else if (inDex == 3)
  {
    document.getElementById("demo").innerHTML=lectext[2];
  }
  else if (inDex == 4)
  {
    document.getElementById("demo").innerHTML=lectext[3];
  }
  else if (inDex == 5)
  {
    document.getElementById("demo").innerHTML=lectext[4];
  }
}