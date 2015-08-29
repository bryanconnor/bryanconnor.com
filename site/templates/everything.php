<?php snippet('header') ?>
<div class="container">
<section class="content">

    <?php 
      if(param('tag')) {

        $articles = $pages->find('blog')
                          ->children()
                          ->visible()
                          ->filterBy('tags', param('tag'), ',')
                          ->flip()
                          ->paginate(10);

      } else {

        $articles = $pages->find('blog')
                          ->children()
                          ->visible()
                          ->flip()
                          ->paginate(10);

      }
    ?>

    
<!--     <?php $articlelist = $pages->find('blog')
                          ->children()
                          ->visible()
                          ->flip()
    ?>

    <ul class="articlelist">
      <?php foreach($articlelist as $articleitem): ?>
        <li><a href="<?php echo $articleitem->url() ?>"><?php echo $articleitem->title() ?></a></li>
      <?php endforeach ?>
    </ul>
 -->
    
    <?php $tags = tagcloud($pages->find('blog'), array('limit' => 20)) ?>
    
    <ul class="tagcloud">
      <?php foreach($tags as $tag): ?>
        <li><a href="<?php echo $tag->url() ?>"><?php echo $tag->name() ?></a></li>
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