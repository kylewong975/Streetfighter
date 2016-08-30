$(document).ready(function(){
	$(document).keydown(function(e)
	{
		if(e.which==88)
		{
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide();
			$('.ryu-cool').show();
		}
	})
	.keyup(function(e){
		$('.ryu-cool').hide();
		$('.ryu-still').show();
	});

	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
    	$('.ryu-ready').hide();
		$('.ryu-still').show();
  	})
  	.mousedown(function() {
		  playHadouken();
		  $('.ryu-still').hide();
		  $('.ryu-ready').hide();
		  $('.ryu-cool').hide();
		  $('.ryu-throwing').show();
		  $('.hadouken').finish().show()
		  .animate(
		    {'left': '1020px'},
		    500,
		    function() {
		      $('.hadouken').hide();
		      $('.hadouken').css('left', '520px');
		    }
		  );
	}) 
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-cool').hide();
  		$('.ryu-ready').show();
	});
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}