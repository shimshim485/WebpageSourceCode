var slideIndex = 1;
showSlides5(slideIndex);

function plusSlides5(n) {
  showSlides5(slideIndex += n);
}

function currentSlide5(n) {
  showSlides5(slideIndex = n);
}

function showSlides5(n) {
  var i;
  var slides = document.getElementsByClassName("Slides5");
  var dots = document.getElementsByClassName("dot5");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}