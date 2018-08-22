jQuery(document).ready(function($) {

    $(function() {
        $("img").unveil(300);
    });




    $('#incidents').royalSlider({
        arrowsNav: false,
        arrowsNavAutoHide: false,
        fadeinLoadedSlide: true,
        controlNavigation: 'bullets',
        imageScaleMode: 'none',
        imageAlignCenter:false,
        sliderDrag: false,
        navigateByClick: true,
        sliderTouch: true,
        numImagesToPreload: 1,
        transitionType: 'move',
        transitionSpeed: 400,
        keyboardNavEnabled: true,
        addActiveClass: true,
        slidesSpacing: 0,
        block: {
          delay: 0
        },
        deeplinking: {
          enabled: true,
          change: true,
          prefix: 'incidents-'
        }
    });

  $('#commit').royalSlider({
    arrowsNav: false,
    arrowsNavAutoHide: false,
    fadeinLoadedSlide: true,
    controlNavigation: 'bullets',
    imageScaleMode: 'none',
    imageAlignCenter:false,
    sliderDrag: false,
    navigateByClick: true,
    sliderTouch: true,
    numImagesToPreload: 1,
    transitionType: 'move',
    transitionSpeed: 400,
    keyboardNavEnabled: true,
    addActiveClass: true,
    slidesSpacing: 0,
    block: {
      delay: 0
    },
    deeplinking: {
      enabled: true,
      change: true,
      prefix: 'commit-'
    }
  });

  $('#step').royalSlider({
    arrowsNav: false,
    arrowsNavAutoHide: false,
    fadeinLoadedSlide: true,
    controlNavigation: 'bullets',
    imageScaleMode: 'none',
    imageAlignCenter:false,
    sliderDrag: false,
    navigateByClick: true,
    sliderTouch: true,
    numImagesToPreload: 1,
    transitionType: 'move',
    transitionSpeed: 400,
    keyboardNavEnabled: true,
    addActiveClass: true,
    slidesSpacing: 0,
    block: {
      delay: 0
    },
    deeplinking: {
      enabled: true,
      change: true,
      prefix: 'step-'
    }
  });



$('#toandthrough').royalSlider({
    arrowsNav: false,
    arrowsNavAutoHide: false,
    fadeinLoadedSlide: true,
    controlNavigation: 'bullets',
    imageScaleMode: 'none',
    imageAlignCenter:false,
    sliderDrag: false,
    navigateByClick: false,
    sliderTouch: true,
    numImagesToPreload: 1,
    transitionType: 'move',
    transitionSpeed: 400,
    keyboardNavEnabled: true,
    addActiveClass: true,
    slidesSpacing: 0,
    block: {
      delay: 0
    },
    deeplinking: {
      enabled: true,
      change: true,
      prefix: 'toandthrough-'
    }
  });


  $('#commit').click(function() {
    //var slider = $('#commit').data('royalSlider');
    //slider.next();
    $('#toandthrough').data('royalSlider').st.keyboardNavEnabled = false;
    $('#incidents').data('royalSlider').st.keyboardNavEnabled = false;
    $('#step').data('royalSlider').st.keyboardNavEnabled = false;
    $('#commit').data('royalSlider').st.keyboardNavEnabled = true;
    $('#commit').addClass('show-dots');
    $('.keyboard-hint').addClass('shown');
    setTimeout(function () { 
        $('.keyboard-hint').removeClass('shown');
    }, 4000);
  });

  $('#step').click(function() {
    //var slider = $('#step').data('royalSlider');
    //slider.next();
    $('#commit').data('royalSlider').st.keyboardNavEnabled = false;
    $('#toandthrough').data('royalSlider').st.keyboardNavEnabled = false;
    $('#incidents').data('royalSlider').st.keyboardNavEnabled = false;
    $('#step').data('royalSlider').st.keyboardNavEnabled = true;
    $('#step').addClass('show-dots');
    $('.keyboard-hint').addClass('shown');
    setTimeout(function () { 
        $('.keyboard-hint').removeClass('shown');
    }, 4000);
  });





  $('#toandthrough').click(function() {
    //var slider = $('#toandthrough').data('royalSlider');
    //slider.next();
    $('#commit').data('royalSlider').st.keyboardNavEnabled = false;
    $('#step').data('royalSlider').st.keyboardNavEnabled = false;
    $('#incidents').data('royalSlider').st.keyboardNavEnabled = false;
    $('#toandthrough').data('royalSlider').st.keyboardNavEnabled = true;
    $('#toandthrough').addClass('show-dots');
    $('.keyboard-hint').addClass('shown');
    setTimeout(function () { 
        $('.keyboard-hint').removeClass('shown');
    }, 4000);
  });

  $('#incidents').click(function() {
        // var slider = $('#super-vision').data('royalSlider');
        // slider.next();
    $('#step').data('royalSlider').st.keyboardNavEnabled = false;
    $('#commit').data('royalSlider').st.keyboardNavEnabled = false;
    $('#toandthrough').data('royalSlider').st.keyboardNavEnabled = false;
    $('#incidents').data('royalSlider').st.keyboardNavEnabled = true;
    $('#incidents').addClass('show-dots');
    $('.keyboard-hint').addClass('shown');
    setTimeout(function () { 
        $('.keyboard-hint').removeClass('shown');
    }, 4000);
  });
    $('.more-toggle').click(function() {
      $('.initial-team').toggleClass('hidden-team');
      $('.supplemental-team').toggleClass('hidden-team');
    });
  
	
});
