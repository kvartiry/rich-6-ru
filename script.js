let about_btn = document.getElementById('about')
about_btn.addEventListener('click', function() {
    swal({
        html: '<html>   <h2 style=" font-family: Verdana, Geneva, Tahoma, sans-serif; margin-top: -10px;">О нас</h2><br> <p style="margin-top: -10px; text-align: justify; font-family: Verdana, Geneva, Tahoma, sans-serif; padding: 15px; margin-top: -20px;">Наша команда по аренде недвижимости <strong>Gorod</strong>. Работает на рынке посуточной аренды квартир в городе Караганде.<br> Главная наша задача это довольные клиенты, которые становятся нашими постоянными гостями на долгие годы. Мы следим за качеством услуг. Генеральная уборка со сменой свежайшего белья проводится обязательно после каждого гостя, и качество контролируются лично менеджером по клинингу. Мы дорожим нашей репутацией, качеством наших квартир и покоем соседей, поэтому часто отказываем в аренде определенным группам граждан. Таким как несовершеннолетним лицам, любым желающим отпраздновать день рождения и прочие корпоративы.</p></html>'
      })
})

let about_btn2 = document.getElementById('aboutses')
about_btn2.addEventListener('click', function() {
    swal({
        html: '<html>   <h2 style=" font-family: Verdana, Geneva, Tahoma, sans-serif; margin-top: -10px;">О нас</h2><br> <p style="margin-top: -10px; text-align: justify; font-family: Verdana, Geneva, Tahoma, sans-serif; padding: 15px; margin-top: -20px;">Наша команда по аренде недвижимости <strong>Rich House</strong>. Работает на рынке посуточной аренды квартир в городе Караганде.<br> Главная наша задача это довольные клиенты, которые становятся нашими постоянными гостями на долгие годы. Мы следим за качеством услуг. Генеральная уборка со сменой свежайшего белья проводится обязательно после каждого гостя, и качество контролируются лично менеджером по клинингу. Мы дорожим нашей репутацией, качеством наших квартир и покоем соседей, поэтому часто отказываем в аренде определенным группам граждан. Таким как несовершеннолетним лицам, любым желающим отпраздновать день рождения и прочие корпоративы.</p></html>'
      })
})

let wifi_btn = document.getElementById('wifibtn')
wifi_btn.addEventListener('click',function() {
  swal({
    width: 300,
    html: '<h3>Имя : GOROD.krg</h3><h3 style="margin-top:-12px;">Пароль : gorod7788</h3>',
  })
})

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
  var dots = document.getElementsByClassName("dot");
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
