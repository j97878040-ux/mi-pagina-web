// JavaScript Document
//para iniciar la programacion en js es necesario iniciar con el $ 
$(document).ready(function () {
  // === MENÚ DESPLEGABLE ===
  $('#btnmenu').click(function () {
    if ($(this).hasClass('fa-bars')) {
      $(this).removeClass('fa-bars').addClass('fa-times-circle');
      $('.navegacion .menu').css({ left: '0px' });
      $('.navegacion').css({ width: '100%', background: 'rgba(0,0,0,0.3)' });
    } else {
      $(this).removeClass('fa-times-circle').addClass('fa-bars');
      $('.navegacion .menu').css({ left: '-320px' });
      $('.navegacion').css({ width: '0%', background: 'rgba(0,0,0,0)' });
      $('.submenu').css({ left: '-320px' });
    }
  });

  $('.itemsubmenu > a').click(function () {
      var pos = $(this).parent().attr('vmenu');
    $('.submenu').css({ left: '-320px' });
    $('.itemsubmenu[vmenu="' + pos + '"] .submenu').css({ left: '0px' });
  });

  $('.submenu .regresa').click(function () {
    $(this).parent().css({ left: '-320px' });
  });

  // === CARRUSEL  ===
  var numimg = $('.slider li').length;
  var imgpos = 1;

  for (i = 1; i <= numimg; i++) {
    $('.paginacion').append('<li><span class="fa fa-circle"></span></li>');
  }

  $('.slider li').hide();
  $('.slider li:first').fadeIn();
  $('.paginacion li:first').css({ color: '#9933CC' });

  $('.paginacion li').click(function () {
    var paginacionpos = $(this).index() + 1;
    imgpos = paginacionpos;

    $('.slider li').hide();
    $('.slider li:nth-child(' + imgpos + ')').fadeIn();
    $('.paginacion li').css({ color: '#00CCFF' });
    $(this).css({ color: '#9933CC' });
  });

  $('.derecha span').click(function () {
    imgpos = imgpos >= numimg ? 1 : imgpos + 1;
    cambiarImagen(imgpos);
  });

  $('.izquierda span').click(function () {
    imgpos = imgpos <= 1 ? numimg : imgpos - 1;
    cambiarImagen(imgpos);
  });

  function cambiarImagen(pos) {
    $('.slider li').hide();
    $('.slider li:nth-child(' + pos + ')').fadeIn();
    $('.paginacion li').css({ color: '#00CCFF' });
    $('.paginacion li:nth-child(' + pos + ')').css({ color: '#9933CC' });
  }
});