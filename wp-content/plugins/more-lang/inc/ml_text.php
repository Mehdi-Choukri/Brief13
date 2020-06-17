<?php
namespace morelang;


/* Generate localized blog info options */
ml_add_option_filter( 'blogname' );
ml_add_option_filter( 'blogdescription' );
function ml_add_option_filter( $optname ) {
	$ml_option_filter = function ( $pre_option ) use ($optname) {
		$cur_locale = ml_get_locale();
		if ( $cur_locale === '' ) return false;
		$optname_loc = ML_UID . "{$optname}_$cur_locale";
		$opt_val = get_option( $optname_loc );
		if ( ml_valid_text($opt_val) ) return $opt_val;
		return false;
	};
	add_filter( "pre_option_$optname", $ml_option_filter, 1, 1 );
}


/* Generate localized widget_title for WP_Widget_Text */
add_filter('widget_title', 'morelang\morelang_widget_title', 1, 3);
function morelang_widget_title( $title, $instance = NULL, $id_base = NULL ) {
	$cur_locale = ml_get_locale();
	if ( $cur_locale ) {
		$title_loc = ml_postmeta_name('title', $cur_locale);
		if ( isset( $instance[$title_loc] ) && $instance[$title_loc] != '' ) {
			return $instance[$title_loc];
		}
	}
	return $title;
}


/* Generate localized widget_text for WP_Widget_Text */
add_filter('widget_text', 'morelang\morelang_widget_text', 1, 3);
function morelang_widget_text( $text, $instance = NULL, $obj = NULL ) {
	$cur_locale = ml_get_locale();
	if ( $cur_locale ) {
		$text_loc = ml_postmeta_name('text', $cur_locale);
		if ( isset( $instance[$text_loc] ) && $instance[$text_loc] != '' ) {
			return $instance[$text_loc];
		}
	}
	return $text;
}


/* Generate localized widget_custom_html_content for WP_Widget_Custom_HTML. */
add_filter('widget_custom_html_content', 'morelang\morelang_widget_custom_html_content', 1, 3);
function morelang_widget_custom_html_content( $content, $instance = NULL, $obj = NULL ) {
	$cur_locale = ml_get_locale();
	if ( $cur_locale ) {
		$content_loc = ml_postmeta_name('content', $cur_locale);
		if ( isset( $instance[$content_loc] ) && $instance[$content_loc] != '' ) {
			return $instance[$content_loc];
		}
	}
	return $content;
}


/* Generate localized taxonomy-term. */
add_filter('get_term', 'morelang\ml_get_term', 1, 2);
function ml_get_term($_term, $taxonomy) {
	$locale = ml_get_locale();
	if ( $locale ) {
		if ( empty($taxonomy) && isset($_term->taxonomy) ) $taxonomy = $_term->taxonomy;
		$taxonomy_names = json_decode( get_option( ML_UID . "taxonomy_${taxonomy}_$_term->term_id" ) );
		if ( $taxonomy_names && isset($taxonomy_names->$locale) && $taxonomy_names->$locale != '' ) {
			$_term->name = $taxonomy_names->$locale;
		}
		$taxonomy_descs = json_decode( get_option( ML_UID . "taxonomy_${taxonomy}_description_$_term->term_id" ) );
		if ( $taxonomy_descs && isset($taxonomy_descs->$locale) && $taxonomy_descs->$locale != '' ) {
			$_term->description = $taxonomy_descs->$locale;
		}
	}
	return $_term;
}

/* Generate localized taxonomy-terms. Before Wordpress 4.6.0 the '$term_query' isn't present. */
/// This & the 'get_the_terms' will make the 'get_term' filter called, so this block is unnecessary.
/*add_filter( 'get_terms', 'morelang\ml_get_terms', 1, 4 );
function ml_get_terms( $terms, $taxonomies, $args, $term_query = NULL ) {
	$locale = ml_get_locale();
	if ( $locale ) {
		foreach ( $terms as $term ) {
			if ( ! isset( $term->taxonomy, $term->term_id ) ) continue;
			$ml_taxo_opt = get_option( ML_UID . "taxonomy_{$term->taxonomy}_$term->term_id" );
			if ( ! $ml_taxo_opt ) continue;
			$taxonomy_names = json_decode( $ml_taxo_opt );
			if ( $taxonomy_names && isset($taxonomy_names->$locale) && $taxonomy_names->$locale != '' ) {
				$term->name = $taxonomy_names->$locale;
			}
		}
	}
	return $terms;
}*/


/* Generate localized taxonomy-term for 'wp_list_categories' */
add_filter('list_cats', 'morelang\ml_list_cat', 1, 2);
function ml_list_cat($name, $category) { // other 'list_cats' scenarios & other taxonomies?
	if ( ! isset($name) || ! isset($category) ) return $name;
	$locale = ml_get_locale();
	if ( $locale ) {
		$taxonomy_names = json_decode( get_option( ML_UID . "taxonomy_{$category->taxonomy}_{$category->term_id}" ) );
		if ( $taxonomy_names && isset($taxonomy_names->$locale) && $taxonomy_names->$locale != '' ) {
			return $taxonomy_names->$locale;
		}
	}
	return $name;
}


/* Generate localized menu item title attribute. */
// add_filter( 'nav_menu_attr_title', 'morelang\ml_nav_menu_attr_title', 10, 1 ); // seems good, but only 1 parameter
add_filter( 'nav_menu_link_attributes', 'morelang\ml_nav_menu_link_attributes', 1, 3 );
function ml_nav_menu_link_attributes( $atts, $item, $args ) { // no '$depth' for the older WPs
	$locale = ml_get_locale();
	if ( $locale && isset($item->ID) ) {
		$attr_title = get_post_meta($item->ID, ml_postmeta_name('post_excerpt', $locale), TRUE );
		// By default, it is '$menu_item->post_excerpt', see "/wp-includes/nav-menu.php".
		if ( ml_valid_text($attr_title) ) $atts['title'] = $attr_title;
	}
	return $atts;
}


/* Generate localized post_title. */
/* For a 'nav_menu_item' Post, if its 'type' is 'post_type', then there are 2 steps of filter:
   1. the post title of the Post(used as the context) referenced by 'object_id' is filtered & returned;
   2. the result of step 1 is filtered & returned in the context of the 'nav_menu_item' Post */
add_filter( 'the_title', 'morelang\ml_the_title', 1, 2 );
function ml_the_title( $title, $id ) {
	$locale = ml_get_locale();
	if ( $locale ) {
		$title_meta = get_post_meta($id, ml_postmeta_name('post_title', $locale), TRUE );
		if ( ml_valid_text($title_meta) ) {
			if ( strpos($title, 'class="ml-switcher-flag"') > 1 ) { // See "ml_switcher.php#ml_switcher_menu_items(...)
				$title = preg_replace( '/(<span>).*(<\/span>)/', '$1' . esc_html($title_meta) . '$2', $title );
				return $title;
			}
			return $title_meta;
		}
	}
	return $title;
}

/* Generate localized post_title. */
/* '_wp_render_title_tag()' & 'wp_title(...)' will apply 'single_post_title' instead of 'the_title' */
add_filter( 'single_post_title', 'morelang\ml_single_post_title', 1, 2 );
function ml_single_post_title( $post_title, $_post ) {
	if ( isset($_post->ID) ) {
		return ml_the_title( $post_title, $_post->ID );
	}
	return $post_title;
}


/* Generate localized post_excerpt. */
add_filter( 'get_the_excerpt', 'morelang\ml_get_the_excerpt', 1, 2 );
function ml_get_the_excerpt( $excerpt, $post = null ) {
	/*before WP 4.5.0 '$post' isn't present(also true for some latest plugins not following the change, e.g. Jetpack)*/
	if ( ! $post ) {
		$post = get_post();
		if ( ! isset( $post->ID ) || ! isset( $post->post_excerpt ) || $post->post_excerpt !== $excerpt ) {
			return $excerpt;
		}
	}
	$locale = ml_get_locale();
	if ( $locale && $post ) {
		$excerpt_meta = get_post_meta($post->ID, ml_postmeta_name('post_excerpt', $locale), TRUE );
		if ( ml_valid_text($excerpt_meta) ) return $excerpt_meta;
	}
	return $excerpt;
}


/* Generate localized post_content. */
if ( version_compare(get_bloginfo('version'), '4.4.0', '<') ) {
	add_action( 'the_post', 'morelang\ml_the_post', 1, 1 );
	/* See "/wp-includes/query.php#setup_postdata" */
	function ml_the_post($post) {
		global $pages, $multipage, $numpages;
		$ml_pages = ml_content_pagination( null, $post );
		if ( ! is_null($ml_pages) ) {
			$pages = $ml_pages;
			$numpages = count($pages);
			if ( $numpages > 1 )
				$multipage = 1;
		}
	}
}
else {
	add_filter( 'content_pagination', 'morelang\ml_content_pagination', 1, 2 );
}

/* See "/wp-includes/class-wp-query.php#setup_postdata" */
function ml_content_pagination($pages, $post) {
	global $ml_registered_langs;
	$locale = ml_get_locale();
	if ( $locale === '' ) return $pages;
	$ml_content = get_post_meta($post->ID, ml_postmeta_name('post_content', $locale), TRUE );
	if ( ! is_string($ml_content) || $ml_content === '' ) {
		foreach ( $ml_registered_langs as $lang_obj ) {
			if ( $lang_obj->locale === $locale ) {
				if ( isset( $lang_obj->moreOpt->missing_content ) && $lang_obj->moreOpt->missing_content != '' ) {
					return array( $lang_obj->moreOpt->missing_content );
				}
				break;
			}
		}
		return $pages;
	}
	$ml_pages = array();
	if ( false !== strpos( $ml_content, '<!--nextpage-->' ) ) {
		$ml_content = str_replace( "\n<!--nextpage-->\n", '<!--nextpage-->', $ml_content );
		$ml_content = str_replace( "\n<!--nextpage-->", '<!--nextpage-->', $ml_content );
		$ml_content = str_replace( "<!--nextpage-->\n", '<!--nextpage-->', $ml_content );

		// Ignore nextpage at the beginning of the content.
		if ( 0 === strpos( $ml_content, '<!--nextpage-->' ) )
			$ml_content = substr( $ml_content, 15 );

		$ml_pages = explode('<!--nextpage-->', $ml_content);
	} else {
		$ml_pages = array( $ml_content );
	}
	return $ml_pages;
}
