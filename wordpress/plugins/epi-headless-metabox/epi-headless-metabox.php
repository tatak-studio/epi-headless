<?php
/**
 * Plugin Name: EPI Colorspace Headless & Meta Box Integration
 * Plugin URI: https://epicolorspace.com
 * Description: Registers Custom Post Types (Projects, Services, Markets, Testimonials) and Meta Box field definitions with full REST API compatibility for the headless Astro frontend.
 * Version: 1.0.0
 * Author: EPI-Colorspace
 * Text Domain: epi-headless
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * 1. Register Custom Post Types & Taxonomies
 */
add_action('init', 'epi_register_content_types');
function epi_register_content_types() {
    // 1. Projects / Case Studies
    register_post_type('project', [
        'labels' => [
            'name'               => __('Projects', 'epi-headless'),
            'singular_name'      => __('Project', 'epi-headless'),
            'add_new'            => __('Add New Project', 'epi-headless'),
            'add_new_item'       => __('Add New Project', 'epi-headless'),
            'edit_item'          => __('Edit Project', 'epi-headless'),
            'new_item'           => __('New Project', 'epi-headless'),
            'view_item'          => __('View Project', 'epi-headless'),
            'search_items'       => __('Search Projects', 'epi-headless'),
            'not_found'          => __('No projects found', 'epi-headless'),
            'not_found_in_trash' => __('No projects found in Trash', 'epi-headless'),
            'menu_name'          => __('Projects', 'epi-headless'),
        ],
        'public'       => true,
        'has_archive'  => true,
        'rewrite'      => ['slug' => 'projects'],
        'show_in_rest' => true,
        'rest_base'    => 'projects',
        'menu_icon'    => 'dashicons-portfolio',
        'supports'     => ['title', 'editor', 'thumbnail', 'excerpt', 'revisions', 'custom-fields'],
    ]);

    // Taxonomies for Projects: Service Line
    register_taxonomy('service_line', ['project'], [
        'labels' => [
            'name'          => __('Service Lines', 'epi-headless'),
            'singular_name' => __('Service Line', 'epi-headless'),
            'menu_name'     => __('Service Lines', 'epi-headless'),
        ],
        'public'            => true,
        'hierarchical'      => true,
        'show_in_rest'      => true,
        'rest_base'         => 'service-lines',
        'rewrite'           => ['slug' => 'service-line'],
    ]);

    // Taxonomies for Projects: Market Sector
    register_taxonomy('market_sector', ['project'], [
        'labels' => [
            'name'          => __('Market Sectors', 'epi-headless'),
            'singular_name' => __('Market Sector', 'epi-headless'),
            'menu_name'     => __('Market Sectors', 'epi-headless'),
        ],
        'public'            => true,
        'hierarchical'      => true,
        'show_in_rest'      => true,
        'rest_base'         => 'market-sectors',
        'rewrite'           => ['slug' => 'market-sector'],
    ]);

    // 2. Services
    register_post_type('service', [
        'labels' => [
            'name'               => __('Services', 'epi-headless'),
            'singular_name'      => __('Service', 'epi-headless'),
            'add_new'            => __('Add New Service', 'epi-headless'),
            'add_new_item'       => __('Add New Service', 'epi-headless'),
            'edit_item'          => __('Edit Service', 'epi-headless'),
            'menu_name'          => __('Services', 'epi-headless'),
        ],
        'public'       => true,
        'has_archive'  => true,
        'rewrite'      => ['slug' => 'services'],
        'show_in_rest' => true,
        'rest_base'    => 'services',
        'menu_icon'    => 'dashicons-hammer',
        'supports'     => ['title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'],
    ]);

    // 3. Markets
    register_post_type('market', [
        'labels' => [
            'name'               => __('Markets', 'epi-headless'),
            'singular_name'      => __('Market', 'epi-headless'),
            'add_new'            => __('Add New Market', 'epi-headless'),
            'add_new_item'       => __('Add New Market', 'epi-headless'),
            'edit_item'          => __('Edit Market', 'epi-headless'),
            'menu_name'          => __('Markets', 'epi-headless'),
        ],
        'public'       => true,
        'has_archive'  => true,
        'rewrite'      => ['slug' => 'markets'],
        'show_in_rest' => true,
        'rest_base'    => 'markets',
        'menu_icon'    => 'dashicons-building',
        'supports'     => ['title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'],
    ]);

    // 4. Testimonials
    register_post_type('testimonial', [
        'labels' => [
            'name'               => __('Testimonials', 'epi-headless'),
            'singular_name'      => __('Testimonial', 'epi-headless'),
            'add_new'            => __('Add New Testimonial', 'epi-headless'),
            'menu_name'          => __('Testimonials', 'epi-headless'),
        ],
        'public'       => true,
        'has_archive'  => false,
        'show_in_rest' => true,
        'rest_base'    => 'testimonials',
        'menu_icon'    => 'dashicons-format-quote',
        'supports'     => ['title', 'editor', 'custom-fields'],
    ]);
}

/**
 * 2. Register Meta Box Custom Fields
 * Compatible with Meta Box plugin & Meta Box Builder
 */
add_filter('rwmb_meta_boxes', 'epi_register_meta_boxes');
function epi_register_meta_boxes($meta_boxes) {
    // -------------------------------------------------------------
    // PROJECT CASE STUDY FIELD GROUP
    // -------------------------------------------------------------
    $meta_boxes[] = [
        'id'         => 'project_case_study_details',
        'title'      => __('Case Study & Project Details', 'epi-headless'),
        'post_types' => ['project'],
        'context'    => 'normal',
        'priority'   => 'high',
        'fields'     => [
            [
                'name' => __('Service Category Badge', 'epi-headless'),
                'id'   => 'service_category',
                'type' => 'text',
                'desc' => __('E.g. Signage Solutions, Tradeshows, Exhibits & Displays', 'epi-headless'),
            ],
            [
                'name' => __('Byline', 'epi-headless'),
                'id'   => 'byline',
                'type' => 'text',
                'desc' => __('E.g. EPI-Colorspace / July 3, 2026', 'epi-headless'),
            ],
            [
                'name' => __('Summary / Hero Lede', 'epi-headless'),
                'id'   => 'summary',
                'type' => 'textarea',
                'rows' => 3,
            ],
            // Facts sidebar
            [
                'name' => __('Client Name', 'epi-headless'),
                'id'   => 'client',
                'type' => 'text',
            ],
            [
                'name' => __('Location', 'epi-headless'),
                'id'   => 'location',
                'type' => 'text',
                'desc' => __('E.g. Arlington, Virginia', 'epi-headless'),
            ],
            [
                'name' => __('Scope', 'epi-headless'),
                'id'   => 'scope',
                'type' => 'text',
                'desc' => __('E.g. Full parking garage graphics refresh', 'epi-headless'),
            ],
            [
                'name' => __('Service Line (Display Name)', 'epi-headless'),
                'id'   => 'service_line',
                'type' => 'text',
            ],
            [
                'name' => __('Market Sector (Display Name)', 'epi-headless'),
                'id'   => 'market',
                'type' => 'text',
            ],
            [
                'name' => __('Materials Specification', 'epi-headless'),
                'id'   => 'materials',
                'type' => 'text',
                'desc' => __('E.g. Duratex blockout PET/PVC', 'epi-headless'),
            ],
            [
                'name' => __('Completion Date', 'epi-headless'),
                'id'   => 'completed',
                'type' => 'text',
                'desc' => __('E.g. July 2026', 'epi-headless'),
            ],
            [
                'name' => __('Lead Image URL / Upload', 'epi-headless'),
                'id'   => 'lead_image',
                'type' => 'single_image',
            ],

            // Narrative Story Sections
            [
                'name' => __('Section 1 Heading', 'epi-headless'),
                'id'   => 'section_1_heading',
                'type' => 'text',
                'std'  => 'What the building needed',
            ],
            [
                'name' => __('Section 1 Body', 'epi-headless'),
                'id'   => 'section_1_body',
                'type' => 'wysiwyg',
            ],
            [
                'name' => __('Section 2 Heading', 'epi-headless'),
                'id'   => 'section_2_heading',
                'type' => 'text',
                'std'  => 'What we produced and installed',
            ],
            [
                'name' => __('Section 2 Body', 'epi-headless'),
                'id'   => 'section_2_body',
                'type' => 'wysiwyg',
            ],
            [
                'name' => __('Section 3 Heading', 'epi-headless'),
                'id'   => 'section_3_heading',
                'type' => 'text',
                'std'  => 'Field conditions we worked around',
            ],
            [
                'name' => __('Section 3 Body', 'epi-headless'),
                'id'   => 'section_3_body',
                'type' => 'wysiwyg',
            ],
            [
                'name' => __('Section 4 Heading', 'epi-headless'),
                'id'   => 'section_4_heading',
                'type' => 'text',
                'std'  => 'The result',
            ],
            [
                'name' => __('Section 4 Body', 'epi-headless'),
                'id'   => 'section_4_body',
                'type' => 'wysiwyg',
            ],

            // Highlights list
            [
                'name' => __('Highlights Section Heading', 'epi-headless'),
                'id'   => 'highlights_heading',
                'type' => 'text',
                'std'  => 'Project highlights',
            ],
            [
                'name'  => __('Project Highlights Bullets', 'epi-headless'),
                'id'    => 'highlights',
                'type'  => 'text',
                'clone' => true,
                'desc'  => __('Add bullet items e.g. "Duratex blockout PET/PVC column wraps"', 'epi-headless'),
            ],

            // Outcome Metrics & Stats
            [
                'name' => __('Outcome Heading', 'epi-headless'),
                'id'   => 'outcome_heading',
                'type' => 'text',
                'std'  => 'Measured on the deck, not on the proof.',
            ],
            [
                'name'   => __('Outcome Stats', 'epi-headless'),
                'id'     => 'outcome_stats',
                'type'   => 'group',
                'clone'  => true,
                'fields' => [
                    [
                        'name' => __('Value', 'epi-headless'),
                        'id'   => 'value',
                        'type' => 'text',
                        'desc' => __('E.g. 28, 4, 100%', 'epi-headless'),
                    ],
                    [
                        'name' => __('Label', 'epi-headless'),
                        'id'   => 'label',
                        'type' => 'text',
                        'desc' => __('E.g. Columns wrapped across the structure', 'epi-headless'),
                    ],
                ],
            ],

            // Gallery
            [
                'name' => __('Gallery Heading', 'epi-headless'),
                'id'   => 'gallery_heading',
                'type' => 'text',
                'std'  => 'Installed work',
            ],
            [
                'name' => __('Gallery Images', 'epi-headless'),
                'id'   => 'gallery_images',
                'type' => 'image_advanced',
            ],
            [
                'name'  => __('Gallery Captions', 'epi-headless'),
                'id'    => 'gallery_captions',
                'type'  => 'text',
                'clone' => true,
            ],

            // Testimonial quote
            [
                'name' => __('Client Testimonial Quote', 'epi-headless'),
                'id'   => 'testimonial_quote',
                'type' => 'textarea',
                'rows' => 3,
            ],
            [
                'name' => __('Testimonial Source Attribution', 'epi-headless'),
                'id'   => 'testimonial_source',
                'type' => 'text',
                'desc' => __('E.g. Property management team, Crystal City', 'epi-headless'),
            ],

            // Filter classification helper keys
            [
                'name' => __('Filter Service Keys', 'epi-headless'),
                'id'   => 'filter_services',
                'type' => 'text',
                'desc' => __('Space-separated tokens e.g. "signage exhibits largeformat"', 'epi-headless'),
            ],
            [
                'name' => __('Filter Market Key', 'epi-headless'),
                'id'   => 'filter_market',
                'type' => 'text',
                'desc' => __('Single token e.g. "cre", "museums", "universities", "corporate", "retail", "construction"', 'epi-headless'),
            ],
            [
                'name'        => __('Related Projects', 'epi-headless'),
                'id'          => 'related_projects',
                'type'        => 'post',
                'post_type'   => 'project',
                'field_type'  => 'select_advanced',
                'multiple'    => true,
            ],
        ],
    ];

    // -------------------------------------------------------------
    // SERVICES FIELD GROUP
    // -------------------------------------------------------------
    $meta_boxes[] = [
        'id'         => 'service_details',
        'title'      => __('Service Details & Deliverables', 'epi-headless'),
        'post_types' => ['service'],
        'context'    => 'normal',
        'priority'   => 'high',
        'fields'     => [
            [
                'name' => __('Service Number', 'epi-headless'),
                'id'   => 'service_number',
                'type' => 'text',
                'std'  => '01',
            ],
            [
                'name' => __('Kicker / Tagline', 'epi-headless'),
                'id'   => 'kicker',
                'type' => 'text',
                'desc' => __('E.g. From Concept to Execution we help our Clients create a Show-Stopping Presence.', 'epi-headless'),
            ],
            [
                'name' => __('Summary', 'epi-headless'),
                'id'   => 'summary',
                'type' => 'textarea',
                'rows' => 3,
            ],
            [
                'name' => __('Turnkey Scope', 'epi-headless'),
                'id'   => 'turnkey_scope',
                'type' => 'textarea',
                'rows' => 2,
            ],
            [
                'name'  => __('Capabilities', 'epi-headless'),
                'id'    => 'capabilities',
                'type'  => 'text',
                'clone' => true,
            ],
            [
                'name'  => __('Deliverables', 'epi-headless'),
                'id'    => 'deliverables',
                'type'  => 'text',
                'clone' => true,
            ],
            [
                'name'  => __('Materials Used', 'epi-headless'),
                'id'    => 'materials_used',
                'type'  => 'text',
                'clone' => true,
            ],
            [
                'name' => __('Lead / Hero Image', 'epi-headless'),
                'id'   => 'lead_image',
                'type' => 'single_image',
            ],
            [
                'name' => __('Gallery Images', 'epi-headless'),
                'id'   => 'gallery_images',
                'type' => 'image_advanced',
            ],
        ],
    ];

    // -------------------------------------------------------------
    // MARKETS FIELD GROUP
    // -------------------------------------------------------------
    $meta_boxes[] = [
        'id'         => 'market_details',
        'title'      => __('Market Details', 'epi-headless'),
        'post_types' => ['market'],
        'context'    => 'normal',
        'priority'   => 'high',
        'fields'     => [
            [
                'name' => __('Kicker', 'epi-headless'),
                'id'   => 'market_kicker',
                'type' => 'text',
            ],
            [
                'name' => __('Summary', 'epi-headless'),
                'id'   => 'market_summary',
                'type' => 'textarea',
                'rows' => 3,
            ],
            [
                'name' => __('Access & Scheduling Window', 'epi-headless'),
                'id'   => 'access_window',
                'type' => 'text',
            ],
            [
                'name' => __('Market Challenges', 'epi-headless'),
                'id'   => 'challenges',
                'type' => 'textarea',
                'rows' => 3,
            ],
            [
                'name' => __('EPI Solutions & Delivery', 'epi-headless'),
                'id'   => 'solutions',
                'type' => 'textarea',
                'rows' => 3,
            ],
            [
                'name' => __('Lead Image', 'epi-headless'),
                'id'   => 'lead_image',
                'type' => 'single_image',
            ],
        ],
    ];

    // -------------------------------------------------------------
    // TESTIMONIAL FIELD GROUP
    // -------------------------------------------------------------
    $meta_boxes[] = [
        'id'         => 'testimonial_details',
        'title'      => __('Testimonial Details', 'epi-headless'),
        'post_types' => ['testimonial'],
        'context'    => 'normal',
        'priority'   => 'high',
        'fields'     => [
            [
                'name' => __('Quote Text', 'epi-headless'),
                'id'   => 'quote',
                'type' => 'textarea',
                'rows' => 3,
            ],
            [
                'name' => __('Client Name', 'epi-headless'),
                'id'   => 'client_name',
                'type' => 'text',
            ],
            [
                'name' => __('Client Role / Title', 'epi-headless'),
                'id'   => 'client_role',
                'type' => 'text',
            ],
            [
                'name' => __('Organization', 'epi-headless'),
                'id'   => 'organization',
                'type' => 'text',
            ],
        ],
    ];

    // -------------------------------------------------------------
    // PAGE DETAILS FIELD GROUP
    // -------------------------------------------------------------
    $meta_boxes[] = [
        'id'         => 'page_details',
        'title'      => __('Page Settings & Content', 'epi-headless'),
        'post_types' => ['page'],
        'context'    => 'normal',
        'priority'   => 'high',
        'fields'     => [
            [
                'name' => __('Hero Headline', 'epi-headless'),
                'id'   => 'hero_headline',
                'type' => 'text',
            ],
            [
                'name' => __('Hero Subhead / Lede', 'epi-headless'),
                'id'   => 'hero_subhead',
                'type' => 'textarea',
                'rows' => 3,
            ],
            [
                'name' => __('Lead / Hero Image', 'epi-headless'),
                'id'   => 'lead_image',
                'type' => 'single_image',
            ],
            [
                'name' => __('Trust Section Kicker', 'epi-headless'),
                'id'   => 'trust_kicker',
                'type' => 'text',
                'desc' => __('Used on Homepage', 'epi-headless'),
            ],
            [
                'name' => __('Trust Section Heading', 'epi-headless'),
                'id'   => 'trust_heading',
                'type' => 'text',
                'desc' => __('Used on Homepage', 'epi-headless'),
            ],
            [
                'name' => __('Trust Section Body Copy', 'epi-headless'),
                'id'   => 'trust_body',
                'type' => 'wysiwyg',
                'desc' => __('Used on Homepage', 'epi-headless'),
            ],
            [
                'name' => __('Contact Phone', 'epi-headless'),
                'id'   => 'phone',
                'type' => 'text',
                'desc' => __('Used on Contact page', 'epi-headless'),
            ],
            [
                'name' => __('Facility Address', 'epi-headless'),
                'id'   => 'address',
                'type' => 'textarea',
                'rows' => 2,
                'desc' => __('Used on Contact page', 'epi-headless'),
            ],
            [
                'name' => __('File Upload (Hightail) URL', 'epi-headless'),
                'id'   => 'hightail_url',
                'type' => 'url',
            ],
        ],
    ];

    return $meta_boxes;
}

/**
 * 3. REST API Compatibility Bridge
 * Ensures that all post types return a clean `meta_box` object in WP REST API
 * responses, regardless of whether the MB REST API extension is enabled.
 */
add_action('rest_api_init', 'epi_register_rest_meta_boxes');
function epi_register_rest_meta_boxes() {
    $post_types = ['project', 'service', 'market', 'testimonial', 'page'];

    foreach ($post_types as $pt) {
        register_rest_field($pt, 'meta_box', [
            'get_callback' => function ($post_arr) use ($pt) {
                $post_id = $post_arr['id'];
                $meta_data = [];

                // Fetch all post meta
                $raw_meta = get_post_meta($post_id);
                foreach ($raw_meta as $key => $values) {
                    if (strpos($key, '_') === 0) {
                        continue; // Skip WordPress internal meta
                    }
                    // Handle single vs serialized arrays
                    $val = maybe_unserialize($values[0]);
                    $meta_data[$key] = $val;
                }

                // If Meta Box helper `rwmb_get_field` exists, resolve media URLs
                if (function_exists('rwmb_get_field')) {
                    if ($pt === 'project') {
                        $gallery = rwmb_get_field('gallery_images', ['size' => 'full'], $post_id);
                        if (!empty($gallery)) {
                            $meta_data['gallery_images'] = array_map(function ($img) {
                                return [
                                    'id'      => $img['ID'] ?? null,
                                    'url'     => $img['url'] ?? $img['full_url'] ?? '',
                                    'title'   => $img['title'] ?? '',
                                    'caption' => $img['caption'] ?? '',
                                ];
                            }, $gallery);
                        }
                    }
                }

                return $meta_data;
            },
            'schema' => [
                'description' => __('Meta Box custom fields', 'epi-headless'),
                'type'        => 'object',
            ],
        ]);
    }
}
