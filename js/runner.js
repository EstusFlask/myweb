var flagLogo = true;
var myLogoSize = function(){
	if (flagLogo==true) {
		$('#mylogo').animate({ width: '35px'},'slow');
				flagLogo=false;	
				}
	 else {
		$('#mylogo').animate({width: '50px'},'slow');
				flagLogo=true;
		}
	}
	

$(function(){
	//Animación icono menú.
	$('.animated-icon1').click(function(){
        $(this).toggleClass('open');
        myLogoSize();
  	});
  	

	
});

