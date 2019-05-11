var mustaches = ["stache1", "stache2", "stache3"];

$(document).ready(function(){
/* ========= FULL QUEUE =========
$(".interactive").hover(function(){
		$('#scanBars').animate({
			top: '+=16px',
		})
	}, function(){
		$('#scanBars').animate({
			top: '-=16px',
		})
		//Animation complete
});
$(".about").hover(function(){
		$('#scanBars').animate({
			top: '+=8px',
		})
	}, function(){
		$('#scanBars').animate({
			top: '-=8px',
		})
		//Animation complete
});
$(".print").hover(function(){
		$('#scanBars').animate({
			top: '+=4px',
		})
	}, function(){
		$('#scanBars').animate({
			top: '-=4px',
		})
		//Animation complete
});
$(".motion").hover(function(){
		$('#scanBars').animate({
			top: '+=12px',
		})
	}, function(){
		$('#scanBars').animate({
			top: '-=12px',
		})
		//Animation complete
});
*/

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
$(".about").hover(function(){
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


/* ======= DEQUEUE ======
$(".interactive").hover(function(){
		if (!$('#scanBars').hasClass('animated')){
			$('#scanBars').dequeue().stop().animate({
				top: '188px',
			});
		}
	}, function(){
		$('#scanBars').addClass('animated').animate({
			top: '172px',
		}, function() {
			$('#scanBars').removeClass('animated').dequeue();
		});
		//Animation complete
});
$(".about").hover(function(){
		if (!$('#scanBars').hasClass('animated')){
			$('#scanBars').dequeue().stop().animate({
				top: '180px',
			});
		}
	}, function(){
		$('#scanBars').addClass('animated').animate({
			top: '172px',
		}, function() {
			$('#scanBars').removeClass('animated').dequeue();
		});
		//Animation complete
});
$(".print").hover(function(){
		if (!$('#scanBars').hasClass('animated')){
			$('#scanBars').dequeue().stop().animate({
				top: '176px',
			});
		}
	}, function(){
		$('#scanBars').addClass('animated').animate({
			top: '172px',
		}, function() {
			$('#scanBars').removeClass('animated').dequeue();
		});
		//Animation complete
});
$(".motion").hover(function(){
		if (!$('#scanBars').hasClass('animated')){
			$('#scanBars').dequeue().stop().animate({
				top: '184px',
			});
		}
	}, function(){
		$('#scanBars').addClass('animated').animate({
			top: '172px',
		}, function() {
			$('#scanBars').removeClass('animated').dequeue();
		});
		//Animation complete
}); 
*/
// Random Facial Hair
        $(".facialhairbutton").click(function(){
        	//alert("clicked");
        	var randomstache = mustaches[Math.floor(Math.random()*mustaches.length)];
          $(".facialhair").removeAttr('id');
          $(".facialhair").attr("id", randomstache);
     });
});