<!DOCTYPE html>
<html lang="en">
<head>
  
  <title><?php echo html($site->title()) ?> - <?php echo html($page->title()) ?></title>
  <meta charset="utf-8" />
  <meta name="description" content="<?php echo html($site->description()) ?>" />
  <meta name="keywords" content="<?php echo html($site->keywords()) ?>" />
  <meta name="robots" content="index, follow" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <?php echo css('assets/stylesheets/styles.css') ?>
  
  <script type="text/javascript" src="//use.typekit.net/kxw3cyx.js"></script>
  <script type="text/javascript">try{Typekit.load();}catch(e){}</script>

</head>

<body class="<?php echo($page->uid()) ?>">
