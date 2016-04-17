jQuery(document).ready(function($) {

    $(function() {
        $("img").unveil(300);
    });

	$('#nomadic-platform').royalSlider({
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
      prefix: 'nomadic-platform-'
    }
  });

  $('#nomadic-cms').royalSlider({
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
      prefix: 'nomadic-cms-'
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
      prefix: 'common-curriculum-'
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
      prefix: 'readi-'
    }
  });



	$('#nomadic-platform').click(function() {
		var slider = $('#nomadic-platform').data('royalSlider');
		slider.next();
    $('#nomadic-cms').data('royalSlider').st.keyboardNavEnabled = false;
    $('#common-curriculum').data('royalSlider').st.keyboardNavEnabled = false;
    $('#commit').data('royalSlider').st.keyboardNavEnabled = false;
    $('#step').data('royalSlider').st.keyboardNavEnabled = false;
    $('#readi').data('royalSlider').st.keyboardNavEnabled = false;
	$('#nomadic-platform').data('royalSlider').st.keyboardNavEnabled = true;
	$('#nomadic-platform').addClass('show-dots');
    $('.keyboard-hint').addClass('shown');
    setTimeout(function () { 
        $('.keyboard-hint').removeClass('shown');
    }, 4000);
	});



	$('#nomadic-cms').click(function() {
		var slider = $('#nomadic-cms').data('royalSlider');
		slider.next();
		$('#nomadic-platform').data('royalSlider').st.keyboardNavEnabled = false;
    $('#common-curriculum').data('royalSlider').st.keyboardNavEnabled = false;
    $('#commit').data('royalSlider').st.keyboardNavEnabled = false;
    $('#step').data('royalSlider').st.keyboardNavEnabled = false;
    $('#readi').data('royalSlider').st.keyboardNavEnabled = false;
		$('#nomadic-cms').data('royalSlider').st.keyboardNavEnabled = true;
		$('#nomadic-cms').addClass('show-dots');
    $('.keyboard-hint').addClass('shown');
    setTimeout(function () { 
        $('.keyboard-hint').removeClass('shown');
    }, 4000);
	});

  $('#common-curriculum').click(function() {
    var slider = $('#common-curriculum').data('royalSlider');
    slider.next();
    $('#nomadic-platform').data('royalSlider').st.keyboardNavEnabled = false;
    $('#nomadic-cms').data('royalSlider').st.keyboardNavEnabled = false;
    $('#commit').data('royalSlider').st.keyboardNavEnabled = false;
    $('#step').data('royalSlider').st.keyboardNavEnabled = false;
    $('#readi').data('royalSlider').st.keyboardNavEnabled = false;
    $('#common-curriculum').data('royalSlider').st.keyboardNavEnabled = true;
    $('#common-curriculum').addClass('show-dots');
    $('.keyboard-hint').addClass('shown');
    setTimeout(function () { 
        $('.keyboard-hint').removeClass('shown');
    }, 4000);
  });

  $('#commit').click(function() {
    var slider = $('#commit').data('royalSlider');
    slider.next();
    $('#nomadic-platform').data('royalSlider').st.keyboardNavEnabled = false;
    $('#nomadic-cms').data('royalSlider').st.keyboardNavEnabled = false;
    $('#common-curriculum').data('royalSlider').st.keyboardNavEnabled = false;
    $('#step').data('royalSlider').st.keyboardNavEnabled = false;
    $('#readi').data('royalSlider').st.keyboardNavEnabled = false;
    $('#commit').data('royalSlider').st.keyboardNavEnabled = true;
    $('#commit').addClass('show-dots');
    $('.keyboard-hint').addClass('shown');
    setTimeout(function () { 
        $('.keyboard-hint').removeClass('shown');
    }, 4000);
  });

  $('#step').click(function() {
    var slider = $('#step').data('royalSlider');
    slider.next();
    $('#nomadic-platform').data('royalSlider').st.keyboardNavEnabled = false;
    $('#nomadic-cms').data('royalSlider').st.keyboardNavEnabled = false;
    $('#common-curriculum').data('royalSlider').st.keyboardNavEnabled = false;
    $('#commit').data('royalSlider').st.keyboardNavEnabled = false;
    $('#readi').data('royalSlider').st.keyboardNavEnabled = false;
    $('#step').data('royalSlider').st.keyboardNavEnabled = true;
    $('#step').addClass('show-dots');
    $('.keyboard-hint').addClass('shown');
    setTimeout(function () { 
        $('.keyboard-hint').removeClass('shown');
    }, 4000);
  });

  $('#readi').click(function() {
    var slider = $('#readi').data('royalSlider');
    slider.next();
    $('#nomadic-platform').data('royalSlider').st.keyboardNavEnabled = false;
    $('#nomadic-cms').data('royalSlider').st.keyboardNavEnabled = false;
    $('#common-curriculum').data('royalSlider').st.keyboardNavEnabled = false;
    $('#commit').data('royalSlider').st.keyboardNavEnabled = false;
    $('#step').data('royalSlider').st.keyboardNavEnabled = false;
    $('#readi').data('royalSlider').st.keyboardNavEnabled = true;
    $('#readi').addClass('show-dots');
    $('.keyboard-hint').addClass('shown');
    setTimeout(function () { 
        $('.keyboard-hint').removeClass('shown');
    }, 4000);
  });
	
});
