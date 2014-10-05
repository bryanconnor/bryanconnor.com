<?php snippet('header') ?>

<div class="bluehead">
    <?php snippet('menu') ?>
    <div class="container"><h1><?php echo html($page->title()) ?></h1>

    <?php if($page->meta() != '' ):?>
        <div class="meta">
        	<div class="team">
        	<?php echo kirbytext($page->meta()) ?>
            <ul class="team-bryan">
                <li><img src="<?php echo ($site->url())?>/content/<?php echo($page->uri())?>/team-bryan.png"/>Bryan</li>
                <div class="role">
                    My Role: <?php echo kirbytext($page->role()) ?>
                    <div class="left-arrow"></div>
                </div>
            </ul>
            	
        	</div>
        </div>
    <?php endif ?>
    </div>

</div>

<div class="container">
    <section class="content">
      <article class="work-item">
        <?php echo kirbytext($page->text()) ?>
      </article>
    </section>
</div>

<?php snippet('worklist') ?>



<?php snippet('footer') ?>