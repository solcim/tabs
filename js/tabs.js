
$(function(){
	
	$('#tabs ul li').click(function() {	

		var id = $(this).children().attr('href');

		$('#tabs div active').removeClass('active').toggle();
		$('#tabs ul li.active').removeClass('active');

		$(id).addClass('active').toggle();
		$(this).addClass('active');
		
	});


});