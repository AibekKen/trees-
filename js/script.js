const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const menuLink = document.querySelectorAll('.menu__link');
const block = document.createElement('div');
const logo = document.querySelector('.header__logo');
document.body.append(block);

burger.addEventListener('click', () => {
   burger.classList.toggle('active');
   menu.classList.toggle('active');
   document.body.classList.toggle('lock');
   block.classList.toggle('block');
   logo.classList.toggle('inactive')
})

menuLink.forEach((link, index) => link.addEventListener('click', () => {
   burger.classList.remove('active');
   menu.classList.remove('active');
   document.body.classList.remove('lock');
   block.classList.remove('block');
   logo.classList.remove('inactive');

}))


function ibg() {

   let ibg = document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img')) {
         ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
   }
}

ibg();
const headerRow = document.querySelector('.header__row');
const whatsapp = document.querySelector('.whatsapp');
const feedback = document.querySelector('.feedback');
const steps = document.querySelector('.steps');
const contacts = document.querySelector('.contacts-container')

const screenWidth = window.screen.width;
if (screenWidth <= 640) {
   if (!whatsapp.classList.contains("done")) {
      whatsapp.classList.add('done')
      menu.appendChild(whatsapp)
   }
}
if (screenWidth > 640) {
   if (whatsapp.classList.contains("done")) {
      whatsapp.classList.remove('done')
      headerRow.insertBefore(whatsapp, burger)
   }
}


window.addEventListener('resize', () => {
   const screenWidth = window.screen.width;
   if (screenWidth <= 640) {
      if (!whatsapp.classList.contains("done")) {
         whatsapp.classList.add('done')
         menu.appendChild(whatsapp)
      }
   }
   if (screenWidth > 640) {
      if (whatsapp.classList.contains("done")) {
         whatsapp.classList.remove('done')
         headerRow.insertBefore(whatsapp, burger)
      }
   }

});
//====================

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
   // var dots = document.getElementsByClassName("dots"); - точки не нужны

   if (n > slides.length) {
      slideIndex = 1;
   }

   if (n < 1) {
      slideIndex = slides.length;
   }

   for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
   }

   /*для точек
   for(i=0; i < dots.length; i++){
      dots[i].className = dots[i].className.replace("active", "");
   }
   dots[slideIndex-1].className+= " active";
 */
   slides[slideIndex - 1].style.display = "block";
}

setInterval(plusSlides, 15000, +1)




