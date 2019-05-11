var mustaches = ["stache1", "stache2", "stache3"];

$(document).ready(function(){

$(".interactive").hover(function(){
		$('#scanBars').animate({
			top: '188px',
		}, {queue: false});
	}, function(){
		$('#scanBars').animate({
			top: '172px',
		}, {queue: false});
		//Animation complete
});
$(".photo").hover(function(){
		$('#scanBars').animate({
			top: '180px',
		})
	}, function(){
		$('#scanBars').animate({
			top: '172px',
		}, {queue: false});
		//Animation complete
});
$(".print").hover(function(){
		$('#scanBars').animate({
			top: '176px',
		}, {queue: false});
	}, function(){
		$('#scanBars').animate({
			top: '172px',
		}, {queue: false});
		//Animation complete
});
$(".motion").hover(function(){
		$('#scanBars').animate({
			top: '184px',
		}, {queue: false});
	}, function(){
		$('#scanBars').animate({
			top: '172px',
		}, {queue: false});
		//Animation complete
});

// Random Facial Hair
        $(".facialhairbutton").click(function(){
        	//alert("clicked");
        	var randomstache = mustaches[Math.floor(Math.random()*mustaches.length)];
          $(".facialhair").removeAttr('id');
          $(".facialhair").attr("id", randomstache);
     });
});