$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    // autoplay: true,
    items: 1,
    animateOut: 'slideOutLeft',
    animateIn: 'fadeInRight',
    smartSpeed: 500,
  });
  $('.quotes-slider .owl-carousel').on('changed.owl.carousel', function(event) {
    $('.quotes .photo-dirk').hide();
    $('.quotes .photo-dirk').eq(event.page.index).fadeIn(600);

  });
  $('.advantages-item').on('click', (e)=>{

    $('.advantages-item').removeClass('active');

    const advantageId = e.target.getAttribute('data-advantage-id');

    const newAdvantage = advantagesList[advantageId];

    if(e.target.classList.contains('advantages-item')) {
      e.target.classList.add('active');
    } else {
      e.target.parentElement.parentElement.classList.add('active');
      e.target.parentElement.classList.add('active');
    }


    $('.advantage-description-title').css({opacity: 0, top: '50%'}).html(newAdvantage.title).animate({
      top: "0%",
      opacity: 1,
    }, {duration: 700, queue: false});

    $('.advantage-description-content').css({opacity: 0, top: '50%'}).html(newAdvantage.description).animate({
      top: "0%",
      opacity: 1,
    }, {duration: 850, queue: false});


  });

  $('button.country').on('click', (e) => {
    const countryId = e.target.getAttribute('data-country-id');
    const selectedCountryData = tabsContent.filter(country => country.id === +countryId)[0];
    const newCountryData = selectedCountryData.items.map(item => (
      `<div class="item"><div class="item-photo"><img src="assets/images/tabs/${item.photo}" alt=""></div>
      <div class="item-description">
      <div class="item-title">
      ${item.itemTitle}
      </div>
      <div class="secondary-description">
    ${item.secondaryDescription}
    </div>
    <div class="main-description">
      ${item.mainDescription}
    </div>
    <div class="buttons">
      <button class="read-manual">
      Handbuch lesen
    </button>
    <button class="video">
      <img src="assets/images/icon_play.svg" alt="">
      <span>Videos anschauen</span>
    </button>
    </div>
    </div>
    </div>`
    ));
    const list = $('.country-tabs .container .list');
    list.html(newCountryData);
    $('button.country').removeClass('active');
    e.target.classList.add('active');
  })

  $('button.open-close').on('click', (e)=>{
    e.target.classList.toggle('open');
    e.target.parentElement.parentElement.nextElementSibling.classList.toggle('open');
  })



  $(document).on('scroll', (e)=>{
    const scrollTop = document.documentElement.scrollTop;
    if(scrollTop) {
      $('.header-top').addClass('scrolled');
    } else {
      $('.header-top').removeClass('scrolled');
    }
  })
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });
});