<?php snippet('header') ?>
<?php snippet('menu') ?>
<div class="container">
<section class="content">

	<article class="reading-item">
      
      <h2><?php echo html($page->title()) ?></h2>

      <?php echo kirbytext($page->text()) ?>

      <span class="source"><?php echo kirbytext($page->source()) ?></span>

      <?php if($page->caption() != '' ):?><span class="caption"><?php echo kirbytext($page->caption()) ?></span><?php endif ?>

      <div class="articlefoot">
      </div>

    </article>


</section>

</div>

<?php snippet('footer') ?>