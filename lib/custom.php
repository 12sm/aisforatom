<?php 

define( 'UPLOADS', ''.'assets' );

// Get URL of first image in a post
function catch_that_image($atts) {
 extract( shortcode_atts( array(
    'id' => '',
    ), $atts ) );
global $post, $posts;
$post = get_post($id);
$first_img = '';
ob_start();
ob_end_clean();
$output = preg_match_all('/<img.+src=[\'"]([^\'"]+)[\'"].*>/i', $post->post_content, $matches);
$first_img = $matches [1] [0];

return $first_img;
}

add_shortcode('post-image','catch_that_image');


// Get URL of first image in a post
function print_that_image($atts) {
 extract( shortcode_atts( array(
    'id' => '',
    ), $atts ) );
global $post, $posts;
$post = get_post($id);
$first_img = '';
ob_start();
ob_end_clean();
$output = preg_match_all('/<img.+src=[\'"]([^\'"]+)[\'"].*>/i', $post->post_content, $matches);
$first_img = "<img src='".$matches [1] [0]."' />";

return $first_img;
}

add_shortcode('print-image','print_that_image');

?>