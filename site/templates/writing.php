<?php snippet('header') ?>
<?php snippet('menu') ?>
<div class="container">
<section class="content">

		<?php

      // fetch all tags
      $tags = $page->parent()->children()->visible()->pluck('tags', ',', true);

    ?>
    <ul class="tagcloud">
      <?php foreach($tags as $tag): ?>
      <li>
        <a href="<?php echo url('blog/tag:' . $tag)?>">
          <?php echo html($tag) ?>
        </a>
      </li>
      <?php endforeach ?>
      <li><a href="<?php echo $site->url() ?>/blog">everything</a></li>
    </ul>

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