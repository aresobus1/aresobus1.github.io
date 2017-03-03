//slideshow function for future.html.page  Set for onload//
var imagecount = 1;
var total = 5;
window.setInterval(function slideB() {
  var image = document.getElementById('img1');
  imagecount = imagecount + 1;
 	if (imagecount > total) { imagecount = 1; } 
 	if (imagecount < 1) { imagecount = total; }
 image.src = "img" + imagecount + ".jpg";
  }, 4500 );

//progress bar function for future.html. Called onclick//

function move() {
  var firstelem = document.getElementById("myBar");
  var totalwidth = 10;
  var id = setInterval(frame, 200);
  function frame() {
    if (totalwidth >= 100) {
      clearInterval(id);
    } else {
      totalwidth++;
      firstelem.style.width = totalwidth + '%';
      document.getElementById("label").innerHTML = 'in ' + (totalwidth + 50)  + ' years';
    }
  }
}