
var flipflap = function(){
	$('#hablaconmigo').css('position','relative');
	$('#hablaconmigo')
	.animate({
		opacity: '0.5'
	},'slow')
	.animate({
		opacity:'1'
	}, 'slow');
		setTimeout(flipflap());
	}

$(function(){
	//Animación icono menú.
	$('.animated-icon1').click(function(){
        $(this).toggleClass('open');
  	});
  	//Animación botón flotando.
	flipflap();
});

