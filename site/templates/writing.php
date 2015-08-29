<?php snippet('header') ?>
<?php snippet('menu') ?>
<div class="container">
<section class="content">


    <article class="writing-item">
      
      <h2><?php echo html($page->title()) ?></h2>

      <?php echo kirbytext($page->text()) ?>

      <span class="source"><?php echo kirbytext($page->source()) ?></span>

      <?php if($page->caption() != '' ):?><span class="caption"><?php echo kirbytext($page->caption()) ?></span><?php endif ?>

      <div class="articlefoot">
      	<a href="<?php echo ($site->url())?>/blog" class="all-posts">See All Posts</a>
      </div>

    </article>

</section>

</div>

<?php snippet('footer') ?>