jQuery(document).ready(function($) {

    $(function() {
        $("img").unveil(300);
    });

    $('#super-vision').royalSlider({
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
      prefix: 'super-vision-'
    }
  });


	$('#nomadic-platform').royalSlider({
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
      prefix: 'nomadic-platform-'
    }
  });

  $('#common-curriculum').royalSlider({
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
      prefix: 'common-curriculum-'
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

  $('#readi').royalSlider({
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
      prefix: 'readi-'
    }
  });

  $('#nasa').royalSlider({
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
      prefix: 'nasa-'
    }
  });

  $('#super-vision').click(function() {
        // var slider = $('#super-vision').data('royalSlider');
        // slider.next();
    $('#nomadic-platform').data('royalSlider').st.keyboardNavEnabled = false;
    $('#common-curriculum').data('royalSlider').st.keyboardNavEnabled = false;
    $('#step').data('royalSlider').st.keyboardNavEnabled = false;
    $('#readi').data('royalSlider').st.keyboardNavEnabled = false;
    $('#nasa').data('royalSlider').st.keyboardNavEnabled = false;
    $('#super-vision').data('royalSlider').st.keyboardNavEnabled = true;
    $('#super-vision').addClass('show-dots');
    $('.keyboard-hint').addClass('shown');
    setTimeout(function () { 
        $('.keyboard-hint').removeClass('shown');
    }, 4000);
  });
    $('.more-toggle').click(function() {
      $('.initial-team').toggleClass('hidden-team');
      $('.supplemental-team').toggleClass('hidden-team');
    });



   

	$('#nomadic-platform').click(function() {
    $('#common-curriculum').data('royalSlider').st.keyboardNavEnabled = false;
    $('#step').data('royalSlider').st.keyboardNavEnabled = false;
    $('#readi').data('royalSlider').st.keyboardNavEnabled = false;
    $('#nasa').data('royalSlider').st.keyboardNavEnabled = false;
    $('#super-vision').data('royalSlider').st.keyboardNavEnabled = false;
	$('#nomadic-platform').data('royalSlider').st.keyboardNavEnabled = true;
	$('#nomadic-platform').addClass('show-dots');
    $('.keyboard-hint').addClass('shown');
    setTimeout(function () { 
        $('.keyboard-hint').removeClass('shown');
    }, 4000);
	});



  $('#common-curriculum').click(function() {
    $('#nomadic-platform').data('royalSlider').st.keyboardNavEnabled = false;
    $('#step').data('royalSlider').st.keyboardNavEnabled = false;
    $('#readi').data('royalSlider').st.keyboardNavEnabled = false;
    $('#nasa').data('royalSlider').st.keyboardNavEnabled = false;
    $('#super-vision').data('royalSlider').st.keyboardNavEnabled = false;
    $('#common-curriculum').data('royalSlider').st.keyboardNavEnabled = true;
    $('#common-curriculum').addClass('show-dots');
    $('.keyboard-hint').addClass('shown');
    setTimeout(function () { 
        $('.keyboard-hint').removeClass('shown');
    }, 4000);
  });

 

  $('#step').click(function() {
    $('#nomadic-platform').data('royalSlider').st.keyboardNavEnabled = false;
    $('#common-curriculum').data('royalSlider').st.keyboardNavEnabled = false;
    $('#readi').data('royalSlider').st.keyboardNavEnabled = false;
    $('#nasa').data('royalSlider').st.keyboardNavEnabled = false;
    $('#super-vision').data('royalSlider').st.keyboardNavEnabled = false;
    $('#step').data('royalSlider').st.keyboardNavEnabled = true;
    $('#step').addClass('show-dots');
    $('.keyboard-hint').addClass('shown');
    setTimeout(function () { 
        $('.keyboard-hint').removeClass('shown');
    }, 4000);
  });

  $('#readi').click(function() {

    $('#nomadic-platform').data('royalSlider').st.keyboardNavEnabled = false;
    $('#common-curriculum').data('royalSlider').st.keyboardNavEnabled = false;
    $('#step').data('royalSlider').st.keyboardNavEnabled = false;
    $('#nasa').data('royalSlider').st.keyboardNavEnabled = false;
    $('#super-vision').data('royalSlider').st.keyboardNavEnabled = false;
    $('#readi').data('royalSlider').st.keyboardNavEnabled = true;
    $('#readi').addClass('show-dots');
    $('.keyboard-hint').addClass('shown');
    setTimeout(function () { 
        $('.keyboard-hint').removeClass('shown');
    }, 4000);
  });

    $('#nasa').click(function() {
    $('#nomadic-platform').data('royalSlider').st.keyboardNavEnabled = false;
    $('#common-curriculum').data('royalSlider').st.keyboardNavEnabled = false;
    $('#step').data('royalSlider').st.keyboardNavEnabled = false;
    $('#readi').data('royalSlider').st.keyboardNavEnabled = false;
    $('#super-vision').data('royalSlider').st.keyboardNavEnabled = false;
    $('#nasa').data('royalSlider').st.keyboardNavEnabled = true;
    $('.keyboard-hint').addClass('shown');
    setTimeout(function () { 
        $('.keyboard-hint').removeClass('shown');
    }, 4000);
  });

	
});
