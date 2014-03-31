<?php
 
class kirbytextExtended extends kirbytext {
function __construct($text, $markdown=true) {
parent::__construct($text, $markdown);
 
 
 
$this->addTags('figure');
 
$this->addAttributes('caption', 'credits');
 
}

 
 
function figure($params) {
 
global $site;
 
$page = ($this->obj) ? $this->obj : $site->pages()->active();
$image = $page->images()->find($params['figure']);
 
  $defaults = array(
    'caption' => '',
    'credits' => ''
  );
 
  // merge the given parameters with the default values
 
  $options = array_merge($defaults, $params);
  
  $imageurl = $image->url() ;
  $imagecaption = $options['caption'] ;
  $imagecredits = $options['credits'] ;
 
  return '<div class="figure"><img src=' . $imageurl . ' alt="Caption" //><div class="caption"><span>' . $imagecaption . '</span><span class="image-credits">' . $imagecredits . '</span></div></div>';    
}
 
}
 
?>