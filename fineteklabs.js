
AOS.init();

//whyUs item expansion onClick js
var coll = document.getElementsByClassName("itemExpansion-panel-header");
var i;

 for (i = 0; i < coll.length; i++) {
 coll[i].addEventListener("click", function() {
     this.classList.toggle("active");
     var content = this.nextElementSibling;
     console.log(coll[i])
     if (content.style.display === "block") {
     content.style.display = "none";
     } else {
      content.style.display = "block";
      
     }
 });
 } 

 
//slide-show
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
     var slides = document.getElementsByClassName("slide");
     var dot = document.getElementsByClassName("dots");
     if (n > slides.length) {slideIndex = 1}
     if (n < 1) {slideIndex = slides.length}
     for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
        }
        // alert()
     for (i = 0; i < dot.length; i++) {
         dot[i].className = dot[i].className.replace(" active", "");
     }
     slides[slideIndex-1].style.display = "flex";
     
     dot[slideIndex-1].className += " active";
 }

 //Autimatic slide-show
var slideIndex = 0;
 showSlides();

 function showSlides() {
     var i;
     var slides = document.getElementsByClassName("slide");
     for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none"
     }
     slideIndex++;
     if (slideIndex > slides.length) {slideIndex = 1}
     slides[slideIndex-1].style.display = "flex";
     setTimeout(showSlides, 6000);
 }
 
 //modal-popup
 var addButton = document.querySelectorAll('.addButton');
 var dialogContent = document.querySelector('.v-dialog_content');
 var modalClose = document.querySelector('.mr-3');
 var i;

 for (i = 0; i < addButton.length; i++ ) {
    addButton[i].addEventListener('click',function() {
        dialogContent.classList.add('modalActive');
     });
 }

 modalClose.addEventListener('click',function(){
    dialogContent.classList.remove('modalActive');
 });