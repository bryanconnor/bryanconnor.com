<?php snippet('header') ?>

<div id="nomadic-platform" class="royalSlider rsMinW">
  <div class="rsContent slide1 cover left-text">
    <div class="text">
      <h1>Building a new platform for Nomadic.fm learners</h1>
      <a href="#nomadic-2" class="learn-more">Learn More</a>
    </div>
    <div class="image"><img src="<?php echo url('assets/images/commit-snippet.png') ?>" /></div>
  </div>
  <div class="rsContent slide2 centered-block">
    <div class=" text rsABlock" data-move-effect="right">
      <p><a href="http://nomadic.fm" target="_blank">Nomadic.fm</a> is a digital learning company focused on preparing people to build, manage and lead businesses. They consult with academic and enterprise clients to build customized Field Manuals for students and deliver them through their platform.</p>
      <p>I worked with the Nomadic team to improve the learning experience on the platform by giving students more tools and focusing the social elements of learning in a group.</p>
      <ul class="team">
        <li><img src="<?php echo url('content/work/nomadic/team-tim.png'); ?>"/>Tim</li>
        <li><img src="<?php echo url('content/work/nomadic/team-matt.png'); ?>"/>Matt</li>
        <li><img src="<?php echo url('content/work/nomadic/team-junho.png'); ?>"/>Jun Ho</li>
        <li><img src="<?php echo url('content/work/nomadic/team-bryan.png'); ?>"/>Bryan</li>
        <li><div class="arr"></div><strong>My Role: </strong>Information Architecture &bull; UX Design &bull; UI Design &bull; Prototyping &bull; Front-end Development</li>
      </ul>
    </div>
  </div>
  <div class="rsContent slide3 left-text">
    <div class="text">
      <p>A huge component of the Nomadic mission is allowing learning to take place anywhere. As a result, the entire platform and all of its learning materials (Field Manuals) are completely web-based and designed to respond to any device. </p>
    </div>
    <div class="image"><img src="<?php echo url('assets/images/commit-snippet.png') ?>" / ></div>
  </div>
</div>


<script type="text/javascript">
jQuery(document).ready(function($) {
  jQuery.rsCSS3Easing.easeOutBack = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)';
  $('#nomadic-platform').royalSlider({
    arrowsNav: true,
    arrowsNavAutoHide: true,
    fadeinLoadedSlide: false,
    controlNavigationSpacing: 0,
    controlNavigation: 'bullets',
    imageScaleMode: 'none',
    imageAlignCenter:true,
    blockLoop: false,
    loop: false,
    numImagesToPreload: 6,
    transitionType: 'slide',
    transitionSpeed: 250,
    keyboardNavEnabled: true,
    block: {
      delay: 200
    },
    deeplinking: {
      enabled: true,
      change: true,
      prefix: 'nomadic-'
    }
  });
});
</script>


<?php snippet('footer') ?>