 //var nav = document.querySelector('nav');
         // window.addEventListener('scroll', function () {
          //  if (window.pageYOffset > 100) {
         //     nav.classList.add('bg-dark', 'shadow');
         //   } else {
         //     nav.classList.remove('bg-dark', 'shadow');
         //   }
        //  });
          
        var btn = $('#button');
        $(window).scroll(function() {
         if ($(window).scrollTop() > 300) {
           btn.addClass('show');
         } else {
           btn.removeClass('show');
         }
       });

       btn.on('click', function(e) {
         e.preventDefault();
         $('html, body').animate({scrollTop:0}, '300');
       });

         $('.navbar-collapse a').click(function(){
           $('.navbar-collapse').toggleClass('is-active');
         $('.navbar-collapse').collapse('hide');
         });