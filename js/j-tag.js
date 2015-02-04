$(function(){
  var $elems = $('#j-main-wrap');


  function adjust(){
    var winWidth = $(window).width();
    var winHeight = $(window).height();
    var adWidth = winWidth / 750;
    var acH = adWidth * 1334;

    $('.pw-photo').css({
      'width' : adWidth * 595,
      'height' : adWidth * 595 * (385/595),
      'top' : 274/1334 * acH,
      'left' : adWidth *82
    });
    $('.pw-photo-txt').css({
      'width' : adWidth * 141,
      'height' : adWidth * 141 * (143/141),
      'top' : 490/1334 * acH,
      'right' : adWidth *104
    });
    $('.pw-clip').css({
      'width' : adWidth * 60,
      'height' : adWidth * 60 * (89/60),
      'top' : 226/1334 * acH,
      'left' : adWidth *336
    });
    $('.pw-to').css({
      'width' : adWidth * 600,
      'height' : adWidth * 600 * (52/600),
      'top' : 710/1334 * acH,
      'left' : adWidth *88
    });
    $('.pw-content').css({
      'width' : adWidth * 600,
      'height' : adWidth * 600 * (170/600),
      'top' : 784/1334 * acH,
      'left' : adWidth *88
    });
    $('.pw-from-txt').css({
      'width' : adWidth * 600,
      'height' : adWidth * 600 * (57/600),
      'top' : 977/1334 * acH,
      'left' : adWidth *88
    });
    $('.pw-product').css({
      'width' : adWidth * 408,
      'height' : adWidth * 408 * (301/508),
      'bottom' : '10px',
      'right' : '10px'
    });


  }
  adjust();

  $('.mask-ok').bind('click', function(){
    $('#pw-mask').hide();
    return false;
  });


  $(window).bind('resize', function(){
    adjust();
  })

});