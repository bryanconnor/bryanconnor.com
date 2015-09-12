<?php snippet('header') ?>
<div class="container">
<section class="content">

    <?php 
      // fetch the basic set of pages
      $articles = $page->children()->visible()->flip();

      // add the tag filter
      if($tag = param('tag')) {
        $articles = $articles->filterBy('tags', $tag, ',');
      }
      
    ?>

    <?php

      // fetch all tags
      $tags = $page->children()->visible()->pluck('tags', ',', true);

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

    <?php foreach($articles as $article): ?>
        <article class="<?php if($article->template() == 'visual'): echo "visual-item"; elseif ($article->template() == 'reading'): echo ('reading-item'); elseif ($article->template() == 'writing'): echo ('writing-item'); endif;?>">
          
          <h2><a href="<?php echo $article->url() ?>"><?php echo html($article->title()) ?></a></h2>

          <?php echo kirbytext($article->text()) ?>

          <span class="source"><?php echo kirbytext($article->source()) ?></span>

          <?php if($article->caption() != '' ):?><span class="caption"><?php echo kirbytext($article->caption()) ?></span><?php endif ?>

          <div class="articlefoot">
            <a href="<?php echo $article->url() ?>" class="permalink">Permalink <?php echo $article->date('M j Y') ?></a>
          </div>

        </article>
    
    <?php endforeach ?>

    <?php if($articles->pagination()->hasPages()): ?>
<div class="pagination">  

  <?php if($articles->pagination()->hasNextPage()): ?>
  <a class="old" href="<?php echo $articles->pagination()->nextPageURL() ?>">&lsaquo; older posts</a>
  <?php endif ?>

  <?php if($articles->pagination()->hasPrevPage()): ?>
  <a class="new" href="<?php echo $articles->pagination()->prevPageURL() ?>">newer posts &rsaquo;</a>
  <?php endif ?>

</div>
<?php endif ?>
</section>

</div>

<?php snippet('footer') ?>