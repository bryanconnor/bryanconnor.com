<?php snippet('header') ?>
 <script type="text/javascript">
 jQuery(document).ready(function($) {

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

$('#super-vision').click(function() {
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
<div id="super-vision" class="royalSlider rsMinW">
  <div class="rsContent slide1 cover left-text">
    <div class="text">
      <h1>Giving parents the power of Super Vision with PBS KIDS</h1>
      <span class="learn-more">Learn More</span>
    </div>
    <div class="image sv-ios-front"><a class="rsImg" href="<?php echo url('content/work/super-vision/sv-phone.gif') ?>"></a></div>
  </div>
  <div class="rsContent slide2 centered-block">
    <div class=" text" data-move-effect="none">
      <p>The <a href="https://itunes.apple.com/us/app/pbs-kids-super-vision/id857797513" target="_blank" class="rsNoDrag">PBS KIDS Super Vision app</a> is part of  wave of shows, games and apps all funded by a <a href="http://www2.ed.gov/programs/rtltv/index.html" target="_blank" class="rsNoDrag">Department of Education grant.</a></p>

      <p>I worked with the PBS KIDS Digital team to overhaul the existing Super Vision app to better communicate the real learning power of games to parents<!-- . to parents the research-based approach that PBS KIDS takes to educational games. --></p>
      <ul class="team">
        <li class="initial-team"><img src="<?php echo url('content/work/super-vision/team-miguel.gif'); ?>"/>Miguel</li>
        <li class="initial-team"><img src="<?php echo url('content/work/super-vision/team-chris.gif'); ?>"/>Chris</li>
        <li class="initial-team"><img src="<?php echo url('content/work/super-vision/team-sam.gif'); ?>"/>Sam</li>
        <li class="supplemental-team hidden-team"><img src="<?php echo url('content/work/super-vision/team-ellen.gif'); ?>"/>Miguel</li>
        <li class="supplemental-team hidden-team"><img src="<?php echo url('content/work/super-vision/team-chip.gif'); ?>"/>Chris</li>
        <li class="supplemental-team hidden-team"><img src="<?php echo url('content/work/super-vision/team-jer.gif'); ?>"/>Sam</li>
        <li class="more-toggle rsNoDrag"><img src="<?php echo url('content/work/super-vision/team-more.gif'); ?>" class="rsNoDrag" />more</li>
        <li><img src="<?php echo url('content/work/super-vision/team-bryan.gif'); ?>"/>Bryan</li>
        <li><div class="arr"></div><strong>My Role: </strong>UX Strategy &bull; UX Design &bull; Prototyping &bull; User Testing &bull; Visual Design &bull; Integration &bull; QA</li>
      </ul>
    </div>
  </div>
  <div class="rsContent sv-slide-realtime left-text">
    <div class="text"  style="left: 140px;">
      <h3>REAl-TIME LEARNING</h3>
      <p>Super Vision gives parents a real-time feed of what their kids are playing and learning across several PBS KIDS experiences.</p>

      <p>Connections to <a href="http://pbskids.org">PBSKIDS.org and the <a href="http://pbskids.org/apps/pbs-kids-measure-up.html">Measure Up!</a> app are currently supported with several more in the works, including the <a href="http://pbskids.org/apps/pbs-kids-video.html">PBS KIDS Video</a> app. </p>
    </div>
    <div class="image "><img src="<?php echo url('content/work/super-vision/sv-realtime.gif') ?>" style="width: 35%;" /></div>
  </div>
  <div class="rsContent sv-slide-reports left-text">
    <div class="text" style="left: 140px;">
      <h3>DETAILED REPORTS</h3>
      <p>Some games and apps support a deeper level of integration with Super Vision, allowing parents to view details of their kid’s play history and ability level for different games, each of which practice different skills.</p>

    </div>
    <div class="image "><img src="<?php echo url('content/work/super-vision/sv-report.gif') ?>" style="width: 35%;" /></div>
  </div>
  <div class="rsContent sv-slide-testing left-text">
    <div class="text ">
       <h3>PARENT TESTED</h3>
      <p>The app was tested with parents on paper (for language, tone, and data comprehension) an in interactive form (for broader navigational concepts and user preferences). These tests were crucial to the app’s direction and our perceptions of who our users really were.</p>
    </div>
    <div class="image "><img src="<?php echo url('content/work/super-vision/sv-testing.jpg') ?>" style="width: 80%;" /></div>
  </div>
  <div class="rsContent sv-slide-closing centered-block ">
    <div class="text">
      <!-- <img src="<?php echo url('content/work/super-vision/sv-icon.png') ?>" style="width: 120px; margin-bottom: 30px;" /> -->
      <p>As a critical parent communication tool, Super Vision is still under development by PBS KIDS (and myself) and in future will include connections to more PBS KIDS apps and new parent tools.</p>

      <p>If you’ve got a PBS KID, download the app now!</p>

      <a href="https://itunes.apple.com/us/app/pbs-kids-super-vision/id857797513" target="_blank"><img src="<?php echo url('content/work/super-vision/app-store.png') ?>" style="width: 170px; margin-right: 12px" /></a>
      <a href="https://play.google.com/store/apps/details?id=org.pbskids.supervision" target="_blank"><img src="<?php echo url('content/work/super-vision/google-play.png') ?>" style="width: 170px" /></a>
      <!-- <ul>
        <li>
          <img src="<?php echo url('content/work/nomadic/icon-welcome.png') ?>" /> 
          Welcome page for students and administrators
        </li>
        <li>
          <img src="<?php echo url('content/work/nomadic/icon-analytics.png') ?>" />
          Analytics on learning and engagement for teachers and administrators
        </li>
        <li>
          <img src="<?php echo url('content/work/nomadic/icon-notes.png') ?>" />
          Teaching notes for content and quizzes used in classroom review
        </li>
        <li>
          <img src="<?php echo url('content/work/nomadic/icon-upload.png') ?>" />
          Dedicated resource management feature for uploaded documents
        </li>
      </ul> -->
    </div>
  </div>
  
</div>

<?php snippet('footer') ?>