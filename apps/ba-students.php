<?php

// Not yet functional

function ba_students() {
    $labels = array(
        'name'               => 'Students',
        'singular_name'      => 'Student',
        'add_new'            => 'Add New Student',
        'add_new_item'       => 'Add New Student',
        'edit_item'          => 'Edit Student',
        'new_item'           => 'New Student',
        'all_items'          => 'All Students',
        'view_item'          => 'View Student',
        'search_items'       => 'Search Students',
        'not_found'          => 'No Students found',
        'not_found_in_trash' => 'No Students found in Trash',
        'menu_name'          => 'Students'
    );
    $args = array(
        'labels'     => $labels,
        'public'     => true,
        'supports'   => array( 'title', 'comments', 'custom-fields' );
        'taxonomies' => array( );
        'menu_icon'  => 'dashicons-id-alt',
    );
    register_post_type( 'ba-students', $args );

    );
}

add_action( 'init', 'my_cpt_init' );

?>
