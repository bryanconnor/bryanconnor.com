<!DOCTYPE html>
<html lang="en">
<head>
  
  <title><?php echo html($site->title()) ?> - <?php echo html($page->title()) ?></title>
  <meta charset="utf-8" />
  <meta name="description" content="<?php echo html($site->description()) ?>" />
  <meta name="keywords" content="<?php echo html($site->keywords()) ?>" />
  <meta name="robots" content="index, follow" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js"></script>
  <script type="text/javascript" src="<?php echo url('assets/js/jquery.royalslider.custom.min.js')?>"></script>
  <script type="text/javascript" src="<?php echo url('assets/js/custom.js')?>"></script>

  
  <?php echo css('assets/stylesheets/slider.css') ?>
  <?php echo css('assets/stylesheets/rs-minimal-white.css') ?>
  <?php echo css('assets/stylesheets/styles.css') ?>
  
  <script src="//use.typekit.net/trm4ssz.js"></script>
  <script>try{Typekit.load({ async: true });}catch(e){}</script>

  <script type="text/javascript">
  
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-4938058-3']);
    _gaq.push(['_trackPageview']);
  
    (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();

  </script>

</head>

<body class="<?php echo($page->uid()) ?>">

  <nav>
    <a href="http://bryanconnor.com">
      <img src="<?php echo url('assets/images/bc-bio-pic.jpg') ?>" alt="Bryan Connor" class="header-pic"/>
      Bryan Connor
    </a>
    <ul>
      <li><a href="<?php echo html($site->url()) ?>/">Work</a></li>
      <li><a href="<?php echo html($site->url()) ?>/info">Info</a></li>
      <li><a href="<?php echo html($site->url()) ?>/blog">Blog</a></li>
      <li><a href="mailto:workwith@bryanconnor.com">
        <svg version="1.1" class="mail-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   viewBox="27 27 18 18" enable-background="new 27 27 18 18;" xml:space="preserve">
<path d="M27.9,30.1v11.6h15.9V30.1H27.9z M41.9,32L41.9,32l-6,4.3l-6-4.3l0,0C29.8,32,41.9,32,41.9,32z M29.8,39.8v-5.6l6,4.3l6-4.3
  v5.6L29.8,39.8L29.8,39.8z"/>
</svg>

      </a></li>
    </ul>
  </nav>
