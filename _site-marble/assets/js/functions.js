//parallax for header
$(window).scroll(function() {

  var wScroll = $(this).scrollTop();

  $('#marble-title').css({
    'transform' : 'translate(0px, '+ wScroll / 3 +'%)'
  });

  $('.kicker').css({
    'transform' : 'translate(0px, '+ wScroll / 3 +'%)'
  });

});

$(document).ready(function() {

  //smooth scroll
  var headerHeight = $('#header-nav').outerHeight();

  $('.slide-section').click(function(e) {

    var linkHref = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(linkHref).offset().top
    }, 1000);

    e.preventDefault();
  });

  // fittext
  (function( $ ){

    $.fn.fitText = function( kompressor, options ) {

      // Setup options
      var compressor = kompressor || 1,
          settings = $.extend({
            'minFontSize' : Number.NEGATIVE_INFINITY,
            'maxFontSize' : Number.POSITIVE_INFINITY
          }, options);

      return this.each(function(){

        // Store the object
        var $this = $(this);

        // Resizer() resizes items based on the object width divided by the compressor * 10
        var resizer = function () {
          $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
        };

        // Call once to set.
        resizer();

        // Call on resize. Opera debounces their resize by default.
        $(window).on('resize.fittext orientationchange.fittext', resizer);

      });

    };

  })( jQuery );


  //fittext
  $("header h1").fitText(1, { minFontSize: '20px', maxFontSize: '72px' });
  // $(".big-link").fitText(1, { minFontSize: '20px', maxFontSize: '72px' });
});
