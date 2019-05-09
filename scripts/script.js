$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    // autoplay: true,
    items: 1,
    animateOut: 'slideOutLeft',
    animateIn: 'fadeInRight',
    smartSpeed: 1500,
  });
  $('.advantages-item').on('click', (e)=>{

    $('.advantages-item').removeClass('active');


    if(e.target.classList.contains('advantages-item')) {
      e.target.classList.add('active');
    } else {
      e.target.parentNode.classList.add('active');
    }


    $('.advantage-description-title').css({opacity: 0, top: '50%'}).animate({
      top: "0%",
      opacity: 1,
    }, {duration: 700, queue: false});
    $('.advantage-description-content').css({opacity: 0, top: '50%'});
    setTimeout(()=>{
      $('.advantage-description-content').animate({
        top: "0%",
        opacity: 1,
      }, {duration: 700, queue: false});
    }, 150);


  });
  console.log(123)
});