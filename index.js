// ===========2nd_nav=========


// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
//     document.getElementById("second-nav").style.top = "0";
//   } else {
//     document.getElementById("second-nav").style.top = "-80px";
//   }
// }


// ===========1nd_nav=========

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
//     document.getElementById("top-nav").style.top = "-80px";
//   } else {
//     document.getElementById("top-nav").style.top = "0";
//   }
// }

// function scrollFunction() {
//     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//       document.getElementById("navbar").style.padding = "30px 10px";
//       document.getElementById("logo").style.width = "25px";
//     } else {
//       document.getElementById("navbar").style.padding = "80px 10px";
//       document.getElementById("logo").style.width = "35px";
//     }
//   }



  // $(document).ready(function() {
  //   $(window).scroll(function() {
  //     if ($(document).scrollTop() > 80) {
  //       $("#navbar").removeClass("bg-transparent");
  //       $("#navbar").addClass("navbar-dark");
  //     } else {
  //       $("#navbar").addClass("bg-transparent");
  //       $("#navbar").removeClass("navbar-dark");
  //     }
  //   });
  // });

  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

  $('#myModal').modal({
    keyboard: false
  })

  $('#myModal').modal('toggle')

  $('#myModal').modal('show')

  $('#myModal').modal('hide')

  $('#myModal').modal('handleUpdate')

  $('#recipeCarousel').carousel({
    interval: 10000
  })
  
  $('.carousel .carousel-item').each(function(){
      var minPerSlide = 3;
      var next = $(this).next();
      if (!next.length) {
      next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
      
      for (var i=0;i<minPerSlide;i++) {
          next=next.next();
          if (!next.length) {
            next = $(this).siblings(':first');
          }
          
          next.children(':first-child').clone().appendTo($(this));
        }
  });
  