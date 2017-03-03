// function for parallax for each page with main image, jquery script are in the page body//

$(window).scroll(function() {
	var scrollTop = $(this).scrollTop();
	$('.header-bg').css('top', -(scrollTop * 2) + 'px');
});


//function for element reveal for each page, script are in the page body//

    $(document).ready(function() {
        window.sr = ScrollReveal({reset: true, delay: 200});
        sr.reveal('#main *');
    });


//function for slideshow on main page //

var imagecount = 1;
var total = 5;
 window.setInterval(function slideA() {
  var image = document.getElementById('img');
  imagecount = imagecount + 1;
 	if (imagecount > total) { imagecount = 1; } 
 	if (imagecount < 1) { imagecount = total; }
 image.src = "img" + imagecount + ".jpeg";
  }, 3000 );



 