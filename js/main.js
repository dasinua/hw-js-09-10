// Menu
// $(document).ready(function() {
//   $('a').on('click', function(e) {
//     e.preventDefault();
//   });
//   $('.dropdown').hover(function() {
//     $('.sub-menu').slideDown(400);
//   },
//    function(){
//                 $(this).children('.sub-menu').slideUp(200);
//             }

//   );

// });

 $(document).ready(function() {
        $( '.dropdown' ).hover(
             function(){
                  $(this).children('.sub-menu ').fadeIn(500);

             },
             function(){
                  $(this).children('.sub-menu ').fadeOut(500);
            }

        );

    }); // end read

// Slider
$(function() {

  // Инициализация слайдера

  $('.jcarousel').jcarousel({
      // Базовые настройки скрипта пишутся здесь
      // зацикливать или нет
      wrap: 'both'

  });

  // Кнопка PREV

  $('.jcarousel-prev')
  // Триггер класса inactive

  .on('jcarouselcontrol:active', function() {
      $(this).removeClass('inactive');
  })
  .on('jcarouselcontrol:inactive', function() {
      $(this).addClass('inactive');
  })
  // Инициализация кнопки PREV

  .jcarouselControl({
      target: '-=1'
  });

  // Кнопка NEXT

  $('.jcarousel-next')
  // Триггер класса inactive

  .on('jcarouselcontrol:active', function() {
      $(this).removeClass('inactive');
  })
  .on('jcarouselcontrol:inactive', function() {
      $(this).addClass('inactive');
  })
  // Инициализация кнопки NEXT

  .jcarouselControl({
      target: '+=1'
  });

  // Пагинация слайдера

  $('.jcarousel-pagination')
  // Триггер класса active

  .on('jcarouselpagination:active', 'a', function() {
      $(this).addClass('active');
  })
  .on('jcarouselpagination:inactive', 'a', function() {
      $(this).removeClass('active');
  })
  // Инициализация пагинации

  .jcarouselPagination({
      item: function(page) {
          return '<a href="#' + page + '">' + page + '</a>';
      }
  });

  // Автопрокрутка слайдера

  $('.jcarousel').jcarouselAutoscroll({
      interval: 3000,
      target: '+=1',
      autostart: true
  });

});

// Плагин jQuery Form Styler
(function($) {
$(function() {

  $('select').styler();

});
})(jQuery);


