$('.carousel').carousel();

function openModal() {
  document.getElementById('myModalSunguard').style.display = "block";
}

function closeModal() {
  document.getElementById('myModalSunguard').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  // var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
  // captionText.innerHTML = dots[slideIndex-1].alt;
}


/* Teamlease MODAL*/
function openModalTeamlease() {
  document.getElementById('myModalTeamlease').style.display = "block";
}

function closeModalTeamlease() {
  document.getElementById('myModalTeamlease').style.display = "none";
}

var slideIndexTeamlease = 1;
showSlidesTeamlease(slideIndexTeamlease);

function plusSlidesTeamlease(n) {
showSlidesTeamlease(slideIndexTeamlease += n);
}

function currentSlideTeamlease(n) {
showSlidesTeamlease(slideIndexTeamlease = n);
}

function showSlidesTeamlease(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesTeamlease");
  // var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("captionTeammlease");
  if (n > slides.length) {slideIndexTeamlease = 1}
  if (n < 1) {slideIndexTeamlease = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndexTeamlease-1].style.display = "block";
  // dots[slideIndexMicrosun-1].className += " active";
  // captionText.innerHTML = dots[slideIndexKSRTC-1].alt;
}
/*Teamlease MODAL*/


/* Portolio MODAL*/
function openModalPortfolio() {
  document.getElementById('myModalPortfolio').style.display = "block";
}

function closeModalPortfolio() {
  document.getElementById('myModalPortfolio').style.display = "none";
}

var slideIndexPortfolio = 1;
showSlidesPortfolio(slideIndexPortfolio);

function plusSlidesPortfolio(n) {
showSlidesPortfolio(slideIndexPortfolio += n);
}

function currentSlidePortfolio(n) {
showSlidesPortfolio(slideIndexPortfolio = n);
}

function showSlidesPortfolio(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesPortfolio");
  // var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("captionPortfolio");
  if (n > slides.length) {slideIndexPortfolio = 1}
  if (n < 1) {slideIndexPortfolio = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndexPortfolio-1].style.display = "block";
  // dots[slideIndexMicrosun-1].className += " active";
  // captionText.innerHTML = dots[slideIndexKSRTC-1].alt;
}
/*Teamlease MODAL*/