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
                'name'  => __('Card Tags', 'epi-headless'),
                'id'    => 'card_tags',
                'type'  => 'text',
                'clone' => true,
                'desc'  => __('Tags shown on the Projects grid card, e.g. "Signage", "Real estate", "7 levels"', 'epi-headless'),
            ],
            [
                'name' => __('Grid Sort Order', 'epi-headless'),
                'id'   => 'sort_order',
                'type' => 'number',
            ],
            [
                'name' => __('Related Projects Intro', 'epi-headless'),
                'id'   => 'related_intro',
                'type' => 'text',
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
                'name' => __('Home Card Summary', 'epi-headless'),
                'id'   => 'home_summary',
                'type' => 'textarea',
                'rows' => 3,
            ],
            [
                'name' => __('Home Card Detail Label', 'epi-headless'),
                'id'   => 'home_detail_label',
                'type' => 'text',
            ],
            [
                'name' => __('Home Card Detail', 'epi-headless'),
                'id'   => 'home_detail',
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
            [
                'name' => __('Attribution', 'epi-headless'),
                'id'   => 'source',
                'type' => 'text',
                'desc' => __('Shown under the quote, e.g. "Marketing director, corporate headquarters relocation"', 'epi-headless'),
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
 * 3. REST API Compatibility Bridge: Meta Box & SEOPress Complete Synchronization
 */
add_action('rest_api_init', 'epi_register_rest_fields', 20);

function epi_register_rest_fields() {
    $post_types = ['project', 'service', 'market', 'testimonial', 'page'];

    foreach ($post_types as $pt) {
        // Register normalized 'seo' field
        register_rest_field($pt, 'seo', [
            'get_callback' => function ($post_arr) {
                return epi_get_post_seo_data($post_arr['id']);
            },
            'schema' => [
                'description' => __('SEOPress and dynamic SEO metadata', 'epi-headless'),
                'type'        => 'object',
            ],
        ]);

        // Register normalized 'meta_box' field
        register_rest_field($pt, 'meta_box', [
            'get_callback' => function ($post_arr) use ($pt) {
                return epi_get_post_meta_box_data($post_arr['id'], $pt);
            },
            'schema' => [
                'description' => __('Meta Box custom fields', 'epi-headless'),
                'type'        => 'object',
            ],
        ]);

        // Guarantee final REST response contains both fields
        add_filter("rest_prepare_{$pt}", function ($response, $post) use ($pt) {
            $data = $response->get_data();
            $data['seo'] = epi_get_post_seo_data($post->ID);
            $data['meta_box'] = epi_get_post_meta_box_data($post->ID, $pt);
            $response->set_data($data);
            return $response;
        }, 20, 2);
    }
}

/**
 * Resolve an image value (ID, array, or string URL/path) into a normalized object and URL.
 */
function epi_resolve_image_value($raw) {
    if (empty($raw)) {
        return '';
    }

    if (is_numeric($raw)) {
        $id = (int)$raw;
        $url = wp_get_attachment_image_url($id, 'full');
        if ($url) {
            return $url;
        }
    }

    if (is_array($raw)) {
        if (!empty($raw['url'])) return $raw['url'];
        if (!empty($raw['full_url'])) return $raw['full_url'];
        if (!empty($raw['ID'])) {
            $url = wp_get_attachment_image_url((int)$raw['ID'], 'full');
            if ($url) return $url;
        }
    }

    if (is_string($raw)) {
        return $raw;
    }

    return '';
}

/**
 * Extract and normalize Meta Box fields for a given post.
 */
function epi_get_post_meta_box_data($post_id, $post_type) {
    $meta_data = [];

    // Fetch all raw post meta
    $raw_meta = get_post_meta($post_id);
    foreach ($raw_meta as $key => $values) {
        if (strpos($key, '_') === 0) {
            continue; // Skip WordPress internal meta
        }
        $val = maybe_unserialize($values[0]);
        $meta_data[$key] = $val;
    }

    // Resolve lead_image (never allow false or empty if raw meta exists)
    $raw_lead = $raw_meta['lead_image'][0] ?? null;
    if ($raw_lead) {
        $resolved_lead = epi_resolve_image_value(maybe_unserialize($raw_lead));
        if ($resolved_lead) {
            $meta_data['lead_image'] = $resolved_lead;
        }
    }

    // Resolve gallery_images
    if (function_exists('rwmb_get_field')) {
        $gallery = rwmb_get_field('gallery_images', ['size' => 'full'], $post_id);
        if (!empty($gallery) && is_array($gallery)) {
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

    // Ensure cloneable arrays are well-formed arrays
    $cloneable_keys = ['highlights', 'card_tags', 'outcome_stats', 'deliverables', 'capabilities', 'materials_used', 'requirements', 'typical_projects'];
    foreach ($cloneable_keys as $ck) {
        if (isset($meta_data[$ck]) && !is_array($meta_data[$ck])) {
            $unserialized = maybe_unserialize($meta_data[$ck]);
            $meta_data[$ck] = is_array($unserialized) ? $unserialized : [$meta_data[$ck]];
        }
    }

    return $meta_data;
}

/**
 * Extract and normalize SEOPress & dynamic SEO metadata for a given post.
 */
function epi_get_post_seo_data($post_id) {
    $post = get_post($post_id);
    if (!$post) {
        return null;
    }

    $frontend_url = rtrim(get_option('epi_frontend_url') ?: getenv('FRONTEND_URL') ?: 'http://localhost:4321', '/');
    $site_name = get_bloginfo('name') ?: 'EPI-Colorspace';
    $site_desc = get_bloginfo('description') ?: 'Single-shop partner for high-impact environmental graphics: design, print, fabrication, and installation across the DMV.';

    // 1. Meta Title (SEOPress override or dynamic fallback)
    $seo_title = get_post_meta($post_id, '_seopress_titles_title', true);
    if (empty($seo_title)) {
        if ($post->post_name === 'home' || $post->ID == get_option('page_on_front')) {
            $seo_title = "We Bring Visions to Life | {$site_name}";
        } else {
            $seo_title = "{$post->post_title} | {$site_name}";
        }
    }

    // 2. Meta Description (SEOPress override or intelligent fallback)
    $seo_desc = get_post_meta($post_id, '_seopress_titles_desc', true);
    if (empty($seo_desc)) {
        $meta_summary = get_post_meta($post_id, 'summary', true);
        $meta_subhead = get_post_meta($post_id, 'hero_subhead', true);
        if (!empty($meta_summary)) {
            $seo_desc = wp_strip_all_tags($meta_summary);
        } elseif (!empty($meta_subhead)) {
            $seo_desc = wp_strip_all_tags($meta_subhead);
        } elseif (!empty($post->post_excerpt)) {
            $seo_desc = wp_strip_all_tags($post->post_excerpt);
        } else {
            $seo_desc = $site_desc;
        }
    }

    // 3. Canonical URL (SEOPress canonical or Astro frontend URL)
    $canonical = get_post_meta($post_id, '_seopress_robots_canonical', true);
    if (empty($canonical)) {
        if (function_exists('epi_frontend_permalink')) {
            $canonical = epi_frontend_permalink('', $post);
        } else {
            $canonical = "{$frontend_url}/{$post->post_name}";
        }
    }

    // 4. Robots Directives (SEOPress noindex / nofollow)
    $robots_index_meta = get_post_meta($post_id, '_seopress_robots_index', true);
    $robots_follow_meta = get_post_meta($post_id, '_seopress_robots_follow', true);
    $robots = [
        'index'  => ($robots_index_meta === 'yes') ? 'noindex' : 'index',
        'follow' => ($robots_follow_meta === 'yes') ? 'nofollow' : 'follow',
    ];

    // 5. OpenGraph & Twitter Share Image
    $og_img_raw = get_post_meta($post_id, '_seopress_social_fb_img', true);
    if (!empty($og_img_raw)) {
        $og_img = epi_resolve_image_value($og_img_raw);
    } else {
        $lead_img_raw = get_post_meta($post_id, 'lead_image', true);
        if (!empty($lead_img_raw)) {
            $og_img = epi_resolve_image_value($lead_img_raw);
        } else {
            $thumb = get_the_post_thumbnail_url($post_id, 'full');
            $og_img = $thumb ?: '/assets/epi-colorspace-logo.png';
        }
    }

    // Format absolute URL for social images if relative
    $og_image_url = (str_starts_with($og_img, 'http://') || str_starts_with($og_img, 'https://'))
        ? $og_img
        : "{$frontend_url}" . (str_starts_with($og_img, '/') ? $og_img : "/{$og_img}");

    // 6. Open Graph
    $og_title = get_post_meta($post_id, '_seopress_social_fb_title', true) ?: $seo_title;
    $og_desc  = get_post_meta($post_id, '_seopress_social_fb_desc', true) ?: $seo_desc;
    $og_type  = ($post->post_type === 'project') ? 'article' : 'website';

    // 7. Twitter Card
    $tw_title = get_post_meta($post_id, '_seopress_social_twitter_title', true) ?: $og_title;
    $tw_desc  = get_post_meta($post_id, '_seopress_social_twitter_desc', true) ?: $og_desc;
    $tw_img_raw = get_post_meta($post_id, '_seopress_social_twitter_img', true);
    $tw_img   = !empty($tw_img_raw) ? epi_resolve_image_value($tw_img_raw) : $og_img;
    $tw_image_url = (str_starts_with($tw_img, 'http://') || str_starts_with($tw_img, 'https://'))
        ? $tw_img
        : "{$frontend_url}" . (str_starts_with($tw_img, '/') ? $tw_img : "/{$tw_img}");

    // 8. JSON-LD Structured Data Schema
    $schemas = [];

    // LocalBusiness Schema
    $schemas[] = [
        '@context'        => 'https://schema.org',
        '@type'           => 'LocalBusiness',
        'name'            => 'EPI-Colorspace',
        'url'             => $frontend_url,
        'logo'            => "{$frontend_url}/assets/epi-colorspace-logo.png",
        'image'           => $og_image_url,
        'telephone'       => '301.990.2666',
        'address'         => [
            '@type'           => 'PostalAddress',
            'streetAddress'   => '8435 Helgerman Ct',
            'addressLocality' => 'Gaithersburg',
            'addressRegion'   => 'MD',
            'postalCode'      => '20877',
            'addressCountry'  => 'US',
        ],
        'description'     => $site_desc,
        'priceRange'      => '$$$',
    ];

    // Project / Article Schema
    if ($post->post_type === 'project') {
        $schemas[] = [
            '@context'      => 'https://schema.org',
            '@type'         => 'Article',
            'headline'      => $seo_title,
            'description'   => $seo_desc,
            'image'         => $og_image_url,
            'datePublished' => get_the_date('c', $post),
            'dateModified'  => get_the_modified_date('c', $post),
            'author'        => [
                '@type' => 'Organization',
                'name'  => 'EPI-Colorspace',
                'url'   => $frontend_url,
            ],
            'publisher'     => [
                '@type' => 'Organization',
                'name'  => 'EPI-Colorspace',
                'logo'  => [
                    '@type' => 'ImageObject',
                    'url'   => "{$frontend_url}/assets/epi-colorspace-logo.png",
                ],
            ],
        ];
    }

    // Merge SEOPress PRO manual schemas if present
    $pro_schemas = get_post_meta($post_id, '_seopress_pro_schemas_manual', true);
    if (!empty($pro_schemas) && is_array($pro_schemas)) {
        foreach ($pro_schemas as $s) {
            if (!empty($s)) {
                $schemas[] = $s;
            }
        }
    }

    return [
        'title'       => $seo_title,
        'description' => $seo_desc,
        'canonical'   => $canonical,
        'robots'      => $robots,
        'open_graph'  => [
            'title'       => $og_title,
            'description' => $og_desc,
            'image'       => $og_image_url,
            'type'        => $og_type,
            'site_name'   => $site_name,
        ],
        'twitter'     => [
            'card'        => 'summary_large_image',
            'title'       => $tw_title,
            'description' => $tw_desc,
            'image'       => $tw_image_url,
        ],
        'schema'      => count($schemas) === 1 ? $schemas[0] : ['@context' => 'https://schema.org', '@graph' => $schemas],
    ];
}

