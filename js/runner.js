
var flipflap = function(){
	$('#hablaconmigo').css('position','relative');
	$('#hablaconmigo')
	.animate({
		opacity: '0.5',
		top: '10px'
	},'slow')
	.animate({
		opacity:'1',
		top: '-10px'
	}, 'slow');
		setTimeout(flipflap());
	}


$(function(){
	flipflap();
});


