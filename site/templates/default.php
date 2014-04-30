<?php snippet('header') ?>
<?php snippet('menu') ?>
<div class="container">
<section class="content">

  

    <article>
    <h1><?php echo html($page->title()) ?></h1>
   
    <?php echo kirbytext($page->text()) ?>

    <?php if($page->meta() != '' ):?>
    <div class="meta"><?php echo kirbytext($page->meta()) ?></div>
	<?php endif ?>

  </article>

</section>

</div>

<?php snippet('footer') ?>