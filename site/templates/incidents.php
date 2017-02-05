<?php snippet('header') ?>
 <script type="text/javascript">
 jQuery(document).ready(function($) {

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

$('#incidents').click(function() {
        // var slider = $('#super-vision').data('royalSlider');
        // slider.next();
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

 });


 </script>
 <div class="keyboard-hint">
  <img src="<?php echo url('assets/images/keyboard-hint.png') ?>" />
</div>


<?php snippet('incidents') ?>


<?php snippet('footer') ?>