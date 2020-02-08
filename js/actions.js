//Accordion handler start
document.addEventListener("DOMContentLoaded", function(event) {
  var acc = document.getElementsByClassName("accordion");
  var panel = document.getElementsByClassName("panel");
  var imageshow =document.getElementById("imageone");
  for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      var setClasses = !this.classList.contains("active");
      setClass(acc, "active", "remove");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
        imageshow.style.display = "none"
      } else {
        panel.style.display = "block";
        imageshow.style.display = "block";
      }

      setClass(panel, "show", "remove");

      if (setClasses) {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
      }
    };
  }

  function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
      els[i].classList[fnName](className);
    }
  }
});
// Accordion handler end
//Carousel handler start
var slideIndex = 1;
showSlidesdot(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlidesdot((slideIndex += n));
}

// Thumbnail image controls
function currentSlidedot(n) {
  showSlidesdot((slideIndex = n));
}

function showSlidesdot(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  var imageshow =document.getElementById("imageone");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  
 // imageshow.style.display = "none";
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
//Carousel handler end
//Image modal handler start
function showModal() {
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById("myImg");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  };
}
//Image modal handler end
//Lightbox handler start
// Open the Modal
function openModal() {
  document.getElementById("myModalbox").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModalbox").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesbox");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
//Lightbox handler end
