<?php
/*
Plugin Name: BA Curriculum Plugin
Description: An application for monitoring and evaluating student progress.
Version: 0.1
Author: Bhaktivedanta Academy
Author URI: http://bhaktivedantaacademy.com/
Text Domain: ba-curriculum-plugin
*/

// Not yet functional

/*
 * BA Students post type
 *
 * Each student should have an individual page displaying their information,
 * including their academic level (Primary, Secondary, or Tertiary),
 * their ashram level (Praveshika, Upaveshika, etc.), and their exam results.
 * For secondary students the profile must also contain their credits,
 * completed projects, and current projects. For primary students
 *
 */

/*

Work Notes

Academic level and ashram level should be implemented as taxonomies,
since they group multiples students.

Student ID, exam results, completed and currect projects, and credits
should be saved as post meta.

The projects themselves probably need to be instances of another post type.

*/
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
        'taxonomies' => array( 'academic-level', 'ashram-level' );
        'menu_icon'  => 'dashicons-id-alt'
    );
    register_post_type( 'ba-students', $args );

}

add_action( 'init', 'ba_students' );

?>
