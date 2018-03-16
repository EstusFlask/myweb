var flagLogo = true;

var ajaxContent = function(doc){
	var jqXHR = $.ajax({
		url:'loads/'+doc,
		async:true,
		type:'get'
	});

	jqXHR.done(function(doc){
		$('#content').html('').append(doc);
	});

};

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
	$('#navbutton').click(function(){
        $('.animated-icon1').toggleClass('open');
        myLogoSize();
  	});
  	
	ajaxContent('home.html');

	$('#home').click(function(){
		ajaxContent('home.html');
	});

	$('#about').click(function(){
		ajaxContent('about.html');
	});
	
});

