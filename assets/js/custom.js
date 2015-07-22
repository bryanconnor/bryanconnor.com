jQuery(document).ready(function($) {

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
    numImagesToPreload: 6,
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
    numImagesToPreload: 6,
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
    numImagesToPreload: 6,
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
    numImagesToPreload: 6,
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
    numImagesToPreload: 6,
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

	

	$('#nomadic-platform .learn-more').click(function() {
		var slider = $('#nomadic-platform').data('royalSlider');
		slider.next();
    $('#nomadic-cms').data('royalSlider').st.keyboardNavEnabled = false;
    $('#common-curriculum').data('royalSlider').st.keyboardNavEnabled = false;
    $('#commit').data('royalSlider').st.keyboardNavEnabled = false;
		$('#nomadic-platform').data('royalSlider').st.keyboardNavEnabled = true;
		$('#nomadic-platform').addClass('show-dots');
		return false;
	});

	$('#nomadic-cms .learn-more').click(function() {
		var slider = $('#nomadic-cms').data('royalSlider');
		slider.next();
		$('#nomadic-platform').data('royalSlider').st.keyboardNavEnabled = false;
    $('#common-curriculum').data('royalSlider').st.keyboardNavEnabled = false;
    $('#commit').data('royalSlider').st.keyboardNavEnabled = false;
		$('#nomadic-cms').data('royalSlider').st.keyboardNavEnabled = true;
		$('#nomadic-cms').addClass('show-dots');
		return false;
	});

  $('#common-curriculum .learn-more').click(function() {
    var slider = $('#common-curriculum').data('royalSlider');
    slider.next();
    $('#nomadic-platform').data('royalSlider').st.keyboardNavEnabled = false;
    $('#nomadic-cms').data('royalSlider').st.keyboardNavEnabled = false;
    $('#commit').data('royalSlider').st.keyboardNavEnabled = false;
    $('#common-curriculum').data('royalSlider').st.keyboardNavEnabled = true;
    $('#common-curriculum').addClass('show-dots');
    return false;
  });

  $('#commit .learn-more').click(function() {
    var slider = $('#commit').data('royalSlider');
    slider.next();
    $('#nomadic-platform').data('royalSlider').st.keyboardNavEnabled = false;
    $('#nomadic-cms').data('royalSlider').st.keyboardNavEnabled = false;
    $('#common-curriculum').data('royalSlider').st.keyboardNavEnabled = false;
    $('#commit').data('royalSlider').st.keyboardNavEnabled = true;
    $('#commit').addClass('show-dots');
    return false;
  });
	
});
