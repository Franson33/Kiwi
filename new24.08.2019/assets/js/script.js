
// Открытие/закрытие меню навигации

$(document).ready(function() {

 $('.navigation-menu__menu-toggle').on('click', function(){
  $('.navigation-menu__menu-items').toggleClass('active');
 });
 $('.close-button').on('click', function(){
  $('.navigation-menu__menu-items').removeClass('active');
 });

   //Открытие/закрытие окна менеджера

   $('.manager-button__button').on('click', function(){
     $('.manager-button__manager-modal-window').show();
    });
   $('.modal-window-close__button').on('click', function(){
     $('.manager-button__manager-modal-window').hide();
    });

  //Переключатель категории экскурсий

    $('.category-list__link').each(function(i) {
      $(this).attr('href', '#category' + i);
    });
    $('.tour-category__category-item').each(function(i) {
      $(this).attr('id', 'category' + i);
    });

    var choosen = $(this).find('.category-list__link').attr('href');
    $('.tour-category__category-item').removeClass('hidden');
    $('.tour-category__category-item').not(choosen).addClass('hidden');

    $('.category-widget li').click(function() {
      $('.category-widget .active').removeClass('active');
      $(this).addClass('active');
      var choosen = $(this).find('.category-list__link').attr('href');
      $('.tour-category__category-item').removeClass('hidden');
      $('.tour-category__category-item').not(choosen).addClass('hidden');
    });

   //Скрипт открывает/закрывает модальное окно экскурсий

  $('.tour-item__click-open-modal').each(function(i) {
    $(this).attr('href', '#item' + i);
   });

  $('.category-item__tour-item').each(function(i) {
    $(this).attr('id', 'item' + i);
   });

  $('.tour-item__click-open-modal').click(function(){
    $('.category-item__tour-item').addClass('modal-opened');
    var choosenitem = $(this).attr('href');
    $('.category-item__tour-item').not(choosenitem).removeClass('modal-opened');
   });

  $('.modal-window__click-close-modal').click(function(){
    $('.category-item__tour-item').removeClass('modal-opened');
   });

  //При использовании тачскрина, клик ведет себя как ховер

  $('body').on('touchstart', function() {});

  //Кнопка вверх появляется и исчезает, при нажатии прокручивает страницу вверх

    $('.main__upwards-button');

    $(window).scroll (function () {
     if ($ (this).scrollTop () > 1000) {
      $ ('.main__upwards-button').fadeIn();
     } else {
      $ ('.main__upwards-button').fadeOut();
     }
    });

    $('.main__upwards-button').click(function(){
      $('html').animate({
        scrollTop: 0
        }, 100);
      $('body').animate({
          scrollTop: 0
        }, 100);
      return false;
      });
});
