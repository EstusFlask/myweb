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
		$("#content").animate({marginTop: "+=100px"});
				flagLogo=false;	
				}
	 else {
		$('#mylogo').animate({width: '50px'},'slow');
		 $("#content").animate({marginTop: "-=100px"});
				flagLogo=true;
		}
	}
	

$(function(){
	//Animación icono menú.
	$('.animated-icon1').click(function(){
        $(this).toggleClass('open');
        myLogoSize();
  	});
  	
	ajaxContent('home.html');

	$('#home').click(function(){
		ajaxContent('home.html');
	})
	
});

