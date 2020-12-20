
var slideIndex = 1;/*슬라이드 번호 초기화*/
showSlides(slideIndex);

/*좌우 화살표를 누르면 호출되는 함수*/
function plusSlides(n) {
  showSlides(slideIndex += n);/*index에 1이 더해지거나 빼지고 showSlide호출*/
}
/*점을 누르면 호출되는 함수*/
function currentSlide(n) {
  showSlides(slideIndex = n);/*그 점의 index가 들어간다.*/
}

function showSlides(n) {
  var i;
  
  /*document.getElementsByClassName(“Slides”)은 Slides에 있는 모든 element들을 얻는 함수/ 배열형식으로 들어가게 된다.*/
  var slides = new Array(); 
  slides=document.getElementsByClassName("Slides1");
  var dots = new Array();
  dots= document.getElementsByClassName("dot1");

  /*. n이 slides의 길이보다 크면 slideIndex에는 1이 삽입되어 첫 사진으로 돌아가게 되고, n이 1보다 작으면 슬라이드의 마지막 페이지로 돌아가게 된다.*/
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  /*for문으로 사진과 점 초기화*/
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  /*보여줘야되는 사진과 점을 보여줌*/
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}