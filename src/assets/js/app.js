$(document).foundation();

$(document).ready(function(){

  $('.wseries__carousel').owlCarousel({
    margin:20,
    dots:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
            margin:30,
        },
        768:{
            items:2,
        },
        1024:{
            items:3,
            margin: 40,
            nav:true,
            dots:true
        }
    }
  });
});