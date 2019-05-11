function slidereveal(neo) {
     $('.navbars').each(function(index) {
          if ($(this).attr("id") == neo) {
               $(this).slideDown(400, function() {
               	fleXenv.fleXcrollMain(this);
               	(this).fleXcroll.scrollContent(10, 10);
 		 });
          }
          else {
               $(this).slideUp(300);
          }
     });
}