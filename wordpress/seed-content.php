<?php
/**
 * Seed content for EPI Colorspace Headless WordPress.
 * Can be run via: wp eval-file /wordpress/seed-content.php
 */

if (!defined('ABSPATH')) {
    require_once('/var/www/html/wp-load.php');
}

echo "Seeding EPI Colorspace content into WordPress...\n";

// Load mock data from JSON or define arrays directly
$seed_data = [
    'services' => [
        [
            'title' => 'Tradeshows',
            'slug'  => 'tradeshows',
            'meta'  => [
                'service_number' => '01',
                'kicker'         => 'From Concept to Execution we help our Clients create a Show-Stopping Presence.',
                'summary'        => 'From initial concept development to post-event storage, our expert team delivers seamless, turnkey creative solutions that help you stand out on the show floor. We design the booth, build it, crate it, ship it, set it, strike it and store it until the next show.',
                'turnkey_scope'  => 'Design, fabrication, freight, on-site labor, post-event storage and refresh between shows.',
                'capabilities'   => [
                    'Custom booth design & 3D rendering',
                    'Modular extrusion & tension fabric systems',
                    'Backlit SEG fabric wall structures',
                    'Drayage & show services management',
                    'Union labor supervision & floor installation',
                    'Post-event crating, logistics & secure storage',
                ],
                'deliverables'   => [
                    'Custom island & inline trade booths',
                    'Hanging banners and overhead signage',
                    'Branded demo counters & literature stands',
                ],
                'materials_used' => [
                    'Extruded aluminum framing systems',
                    'Dye-sublimation backlit tension fabric',
                    'Direct-print composite PVC and acrylic',
                ],
                'lead_image'     => '/trade-show-printer-mu13gi32-4z7q.jpg',
            ],
        ],
        [
            'title' => 'Exhibits & Displays',
            'slug'  => 'exhibits-and-displays',
            'meta'  => [
                'service_number' => '02',
                'kicker'         => 'Museum-grade craftsmanship for institutions that cannot afford a mistake.',
                'summary'        => 'Specializing in bringing curators’ visions to life with craftsmanship and precision. Our dedication to excellence has made us a trusted partner for renowned institutions, including museum-grade casework, specialty lighting and interactive elements installed under gallery conditions.',
                'turnkey_scope'  => 'Conservation consultation, archival casework, gallery wall construction, and precision artifact mounting.',
                'lead_image'     => '/hall-exhibit-display-mu12il5t-6a71.jpg',
            ],
        ],
        [
            'title' => 'Signage Solutions',
            'slug'  => 'signage-solutions',
            'meta'  => [
                'service_number' => '03',
                'kicker'         => 'Exterior and interior wayfinding engineered for high-traffic environments.',
                'summary'        => 'Custom exterior and interior signage that communicates clearly, withstands weathering, and directs movement across parking garages, commercial campuses, educational facilities, and retail centers.',
                'turnkey_scope'  => 'Code review, permit acquisition, structural engineering, fabrication, and bucket truck / crane installation.',
                'lead_image'     => '/parking-notice-sign-mu13jclv-qgtf.jpg',
            ],
        ],
        [
            'title' => 'Large Format Printing',
            'slug'  => 'large-format-printing',
            'meta'  => [
                'service_number' => '04',
                'kicker'         => 'Vibrant, high-resolution wide-format graphics printed in our Gaithersburg production facility.',
                'summary'        => 'Wall murals, floor graphics, construction barricades, and massive building banners printed on state-of-the-art flatbed and roll-to-roll equipment calibrated for consistent, Pantone-accurate color reproduction.',
                'turnkey_scope'  => 'Pre-flight file verification, color matching, roll-to-roll and flatbed production, contour cutting, and field installation.',
                'lead_image'     => '/commanders-building-banner-mu13c8xa-kpu3.jpg',
            ],
        ],
        [
            'title' => 'Corporate Branding',
            'slug'  => 'corporate-branding',
            'meta'  => [
                'service_number' => '05',
                'kicker'         => 'Transform workplace walls into immersive statements of company purpose.',
                'summary'        => 'Lobby identity marks, dimensional logos, floor-by-floor office graphics, timeline walls, and executive boardroom installations that establish a cohesive brand presence across all corporate facilities.',
                'turnkey_scope'  => 'Site survey, design coordination, substrate fabrication, weekend installation shifts, and multi-site rollouts.',
                'lead_image'     => '/spiral-lobby-graphics-mu13h9gi-cfz7.jpg',
            ],
        ],
        [
            'title' => 'Environmental Graphics',
            'slug'  => 'environmental-graphics',
            'meta'  => [
                'service_number' => '06',
                'kicker'         => 'Connecting people to spaces through thoughtful architectural graphics.',
                'summary'        => 'Bridging architecture and interior design through graphic interventions: full-scale murals, architectural film finishes, glass textures, and experiential wayfinding that give personality and clarity to complex structures.',
                'turnkey_scope'  => 'Surface testing, material specification, custom fabrication, and expert architectural installation.',
                'lead_image'     => '/blue-lobby-displays-mu13q4jd-onxx.jpg',
            ],
        ],
    ],
    'projects' => [
        [
            'title' => 'JBG SMITH Crystal City Garage',
            'slug'  => 'jbg-smith-crystal-city-garage',
            'meta'  => [
                'service_category'   => 'Signage Solutions',
                'byline'             => 'EPI-Colorspace / July 3, 2026',
                'summary'            => "EPI-Colorspace completed a full parking garage graphics refresh for JBG SMITH at Crystal City, focused on improving wayfinding visibility and creating a more organized visual system throughout the structure.",
                'client'             => 'JBG SMITH',
                'location'           => 'Arlington, Virginia',
                'scope'              => 'Full parking garage graphics refresh',
                'service_line'       => 'Signage Solutions',
                'market'             => 'Commercial Real Estate',
                'materials'          => 'Duratex blockout PET/PVC',
                'completed'          => 'July 2026',
                'lead_image'         => '/parking-notice-sign-mu13jclv-qgtf.jpg',
                'section_1_heading'  => 'What the building needed',
                'section_1_body'     => 'A high-traffic Arlington parking structure had accumulated years of mismatched signage, faded reserved markings and inconsistent unit identifiers.',
                'section_2_heading'  => 'What we produced and installed',
                'section_2_body'     => 'The project involved the production and installation of Duratex blockout PET/PVC column wraps applied across multiple garage columns using high-tack adhesive systems.',
                'section_3_heading'  => 'Field conditions we worked around',
                'section_3_body'     => 'Because of field variances in column dimensions, our installers adjusted panel positioning and trim alignment on site to maintain visual continuity.',
                'section_4_heading'  => 'The result',
                'section_4_body'     => 'The completed installation delivered a cleaner, more navigable garage environment with a more cohesive visual identity.',
                'highlights_heading' => 'Project highlights',
                'highlights'         => [
                    'Duratex blockout PET/PVC column wraps',
                    'High-tack adhesive vinyl installation',
                    'Parking garage wayfinding graphics',
                    'Reserved parking identification systems',
                ],
                'outcome_heading'    => 'Measured on the deck, not on the proof.',
                'outcome_stats'      => [
                    ['value' => '28', 'label' => 'Columns wrapped across the structure'],
                    ['value' => '4', 'label' => 'Levels brought onto one visual system'],
                    ['value' => '0', 'label' => 'Days the garage was closed to residents'],
                    ['value' => '100%', 'label' => 'Reserved spaces identified and legible from a moving vehicle'],
                ],
                'testimonial_quote'  => 'The garage finally reads the way the rest of the property does. Residents stopped asking us where their space is.',
                'testimonial_source' => 'Property management team, Crystal City',
                'filter_services'    => 'signage',
                'filter_market'      => 'cre',
            ],
        ],
        [
            'title' => 'Rotating gallery build, Washington DC',
            'slug'  => 'rotating-gallery-build-washington-dc',
            'meta'  => [
                'service_category' => 'Exhibits & Displays',
                'summary'          => 'Casework, a title wall and a full label set fabricated, printed and installed overnight between two shows.',
                'client'           => 'National Cultural Institution',
                'location'         => 'Washington DC',
                'lead_image'       => '/anacostia-exhibit-wall-mu13p5yi-dm4c.jpg',
                'filter_services'  => 'exhibits largeformat',
                'filter_market'    => 'museums',
            ],
        ],
        [
            'title' => 'Campus wayfinding system, Northern Virginia',
            'slug'  => 'campus-wayfinding-system-northern-virginia',
            'meta'  => [
                'service_category' => 'Signage Solutions',
                'summary'          => 'Nomenclature, message schedule and 84 sign types produced and installed between commencement and move-in.',
                'client'           => 'Major University',
                'location'         => 'Northern Virginia',
                'lead_image'       => '/building-facade-graphics-mu13937x-72if.jpg',
                'filter_services'  => 'signage',
                'filter_market'    => 'universities',
            ],
        ],
        [
            'title' => 'Retail leasing graphics rollout, Rockville MD',
            'slug'  => 'retail-leasing-graphics-rollout-rockville-md',
            'meta'  => [
                'service_category' => 'Large Format Printing',
                'summary'          => 'Window wraps, barricade graphics and leasing banners across twelve vacant storefronts in a premier lifestyle center.',
                'client'           => 'Federal Realty',
                'location'         => 'Rockville, Maryland',
                'lead_image'       => '/retail-window-wrap-mu13ikr7-460d.jpg',
                'filter_services'  => 'largeformat signage',
                'filter_market'    => 'cre retail',
            ],
        ],
    ],
    'markets' => [
        [
            'title' => 'Museums & Cultural',
            'slug'  => 'museums-and-cultural',
            'meta'  => [
                'market_kicker'  => 'Gallery-grade fabrication scheduled around public visitation hours.',
                'market_summary' => 'Trusted by the Smithsonian, Library of Congress, and the Kennedy Center. We understand artifact safety, conservation standards, low-VOC materials, and the strict necessity of meeting opening preview nights.',
                'access_window'  => 'After-hours / overnight gallery shifts',
                'challenges'     => 'Strict conservation protocols, zero dust during public hours, late label revisions.',
                'solutions'      => 'In-house Gaithersburg shop allows same-day reprints, conservation-grade materials, and seasoned installer crews accustomed to white-glove conditions.',
                'lead_image'     => '/museum-entrance-banner-mu12w0v6-v6y0.jpg',
            ],
        ],
        [
            'title' => 'Universities',
            'slug'  => 'universities',
            'meta'  => [
                'market_kicker'  => 'Campus wayfinding, donor recognition and event graphics delivered around the academic calendar.',
                'market_summary' => 'Campus wayfinding, donor recognition, athletics graphics and event signage delivered around the academic calendar, which means the work happens between commencement and move-in rather than during finals.',
                'access_window'  => 'Between commencement and move-in / semester breaks',
                'challenges'     => 'Expansive multi-building campuses, diverse pedestrian and vehicular flows, tight transition windows between semesters.',
                'solutions'      => 'Standardized nomenclature systems, durable exterior coatings, and volume manufacturing delivered before move-in week.',
                'lead_image'     => '/building-facade-graphics-mu13937x-72if.jpg',
            ],
        ],
        [
            'title' => 'Commercial Real Estate',
            'slug'  => 'commercial-real-estate',
            'meta'  => [
                'market_kicker'  => 'Leasing graphics, lobby identity and parking garage systems that elevate property value.',
                'market_summary' => 'We partner with leading property managers and REITs like JBG SMITH and Federal Realty to turn empty spaces into leasing opportunities and confusing parking decks into clear, branded journeys.',
                'access_window'  => 'Weekend or staged daytime shifts',
                'challenges'     => 'Active tenant access, concrete and asphalt surface moisture, aggressive deadlines before investor tours.',
                'solutions'      => 'High-tack blockout films that conceal substrate irregularities, weather-resistant exterior banners, and fast turnarounds.',
                'lead_image'     => '/real-estate-banner-mu12q7mf-0tjm.jpg',
            ],
        ],
        [
            'title' => 'Corporate',
            'slug'  => 'corporate',
            'meta'  => [
                'market_kicker'  => 'Workplace environmental graphics, murals and custom framing that carry brand standards floor by floor.',
                'market_summary' => 'Workplace environmental graphics, murals and custom framing that carry brand standards through a headquarters floor by floor, turning corridors and lobbies into something people photograph.',
                'access_window'  => 'Weekend shifts without workplace disruption',
                'challenges'     => 'Fast tenant move-in dates, coordination with general contractors, precise brand color gamut reproduction.',
                'solutions'      => 'Quiet, clean weekend installation teams working directly from architectural plans with zero VOC emissions.',
                'lead_image'     => '/spiral-lobby-graphics-mu13h9gi-cfz7.jpg',
            ],
        ],
        [
            'title' => 'Retail',
            'slug'  => 'retail',
            'meta'  => [
                'market_kicker'  => 'Window systems, dimensional letters and seasonal graphics rolled out across locations.',
                'market_summary' => 'Window systems, dimensional letters and seasonal graphics rolled out across locations. Work is kitted, labeled and shipped store by store, with install crews scheduled overnight so doors open on time.',
                'access_window'  => 'Overnight shifts so doors open on schedule',
                'challenges'     => 'Frequent campaign updates, varied storefront geometries, high visibility from foot and car traffic.',
                'solutions'      => 'Clean-removal vinyls that leave zero adhesive residue, vibrant color saturation, and rapid multi-store rollouts.',
                'lead_image'     => '/retail-window-wrap-mu13ikr7-460d.jpg',
            ],
        ],
        [
            'title' => 'Construction',
            'slug'  => 'construction',
            'meta'  => [
                'market_kicker'  => 'Fence wraps, perimeter branding, safety and site signage engineered for wind and weather.',
                'market_summary' => 'Fence wraps, perimeter branding, safety and site signage engineered for wind load, weather and years of sun. Leasing displays go up while the building is still a frame.',
                'access_window'  => 'Coordinated with job-site superintendents and safety managers',
                'challenges'     => 'Extreme weather, high winds, mud, and heavy equipment movement.',
                'solutions'      => 'Reinforced webbing hems, air-permeable mesh fabrics, and heavy-duty mechanical attachments tested for high wind loads.',
                'lead_image'     => '/community-event-sign-mu13ngzx-8om1.jpg',
            ],
        ],
    ],
    'testimonials' => [
        [
            'title' => 'JBG SMITH Testimonial',
            'meta'  => [
                'quote'        => 'The garage finally reads the way the rest of the property does. Residents stopped asking us where their space is.',
                'client_name'  => 'Property Management Team',
                'client_role'  => 'Operations Director',
                'organization' => 'JBG SMITH Crystal City',
            ],
        ],
    ],
];

// Insert Services
foreach ($seed_data['services'] as $item) {
    $existing = get_page_by_path($item['slug'], OBJECT, 'service');
    $post_id = $existing ? $existing->ID : wp_insert_post([
        'post_title'   => $item['title'],
        'post_name'    => $item['slug'],
        'post_type'    => 'service',
        'post_status'  => 'publish',
    ]);
    if ($post_id && !is_wp_error($post_id)) {
        foreach ($item['meta'] as $k => $v) {
            update_post_meta($post_id, $k, $v);
        }
        echo "  [Service] Seeded '{$item['title']}' (ID {$post_id})\n";
    }
}

// Insert Projects
foreach ($seed_data['projects'] as $item) {
    $existing = get_page_by_path($item['slug'], OBJECT, 'project');
    $post_id = $existing ? $existing->ID : wp_insert_post([
        'post_title'   => $item['title'],
        'post_name'    => $item['slug'],
        'post_type'    => 'project',
        'post_status'  => 'publish',
    ]);
    if ($post_id && !is_wp_error($post_id)) {
        foreach ($item['meta'] as $k => $v) {
            update_post_meta($post_id, $k, $v);
        }
        echo "  [Project] Seeded '{$item['title']}' (ID {$post_id})\n";
    }
}

// Insert Markets
foreach ($seed_data['markets'] as $item) {
    $existing = get_page_by_path($item['slug'], OBJECT, 'market');
    $post_id = $existing ? $existing->ID : wp_insert_post([
        'post_title'   => $item['title'],
        'post_name'    => $item['slug'],
        'post_type'    => 'market',
        'post_status'  => 'publish',
    ]);
    if ($post_id && !is_wp_error($post_id)) {
        foreach ($item['meta'] as $k => $v) {
            update_post_meta($post_id, $k, $v);
        }
        update_post_meta($post_id, '_seopress_titles_title', $item['title'] . ' - EPI-Colorspace');
        update_post_meta($post_id, '_seopress_titles_desc', substr($item['meta']['market_summary'], 0, 155));
        echo "  [Market] Seeded '{$item['title']}' (ID {$post_id})\n";
    }
}

// Insert Testimonials
foreach ($seed_data['testimonials'] as $item) {
    $existing = get_posts([
        'post_type'   => 'testimonial',
        'title'       => $item['title'],
        'post_status' => 'any',
        'numberposts' => 1,
    ]);
    $post_id = !empty($existing) ? $existing[0]->ID : wp_insert_post([
        'post_title'   => $item['title'],
        'post_type'    => 'testimonial',
        'post_status'  => 'publish',
    ]);
    if ($post_id && !is_wp_error($post_id)) {
        foreach ($item['meta'] as $k => $v) {
            update_post_meta($post_id, $k, $v);
        }
        echo "  [Testimonial] Seeded '{$item['title']}' (ID {$post_id})\n";
    }
}

// Seed WordPress Pages (post_type = page)
$pages = [
    [
        'title'   => 'Home',
        'slug'    => 'home',
        'content' => 'Impactful brand experiences through expert printing, fabrication and installation, delivered across DC, Maryland and Virginia by one in-house team.',
        'meta'    => [
            'hero_headline' => 'We bring visions to life',
            'hero_subhead'  => 'Impactful brand experiences through expert printing, fabrication and installation, delivered across DC, Maryland and Virginia by one in-house team.',
            'lead_image'    => '/commanders-building-banner-mu13c8xa-kpu3.jpg',
            'trust_kicker'  => 'A Trusted Partner for Over 20 Years.',
            'trust_heading' => 'See how our in-house team delivers on time and on budget.',
            'trust_body'    => '<p>EPI-Colorspace designs, prints, fabricates, ships and installs high-impact environmental graphics from a single shop in Gaithersburg, Maryland. Because nothing leaves the building for a subcontractor, a color correction on Tuesday still ships on Thursday, and the crew that built your piece is the crew that hangs it.</p>',
        ],
    ],
    [
        'title'   => 'Services',
        'slug'    => 'services',
        'content' => 'Five service lines, one production floor. Each is turnkey: we develop the concept, produce the work, handle logistics and install it on site.',
        'meta'    => [
            'hero_headline' => 'Single-shop partner for high-impact environmental graphics.',
            'hero_subhead'  => 'Design, large format print, fabrication, logistics and on-site installation across DC, Maryland and Virginia. Everything produced in Gaithersburg, Maryland.',
            'lead_image'    => '/exhibit-booth-display-mu12smxg-u4qk.jpg',
        ],
    ],
    [
        'title'   => 'Projects',
        'slug'    => 'projects',
        'content' => 'Installed work by EPI-Colorspace across the DMV: exhibits, tradeshow booths, signage, large format printing and environmental graphics.',
        'meta'    => [
            'hero_headline' => 'See how our in-house team delivers on time and on budget, one installed project at a time.',
            'hero_subhead'  => 'Galleries, show floors, storefronts, garages and job sites across DC, Maryland and Virginia.',
            'lead_image'    => '/fbi-wanted-display-mu1372so-z1pt.jpg',
        ],
    ],
    [
        'title'   => 'Markets',
        'slug'    => 'markets',
        'content' => 'Museums and universities, commercial real estate and corporate environments, retail and construction.',
        'meta'    => [
            'hero_headline' => 'We specialize in transforming a wide variety of spaces into dynamic, immersive brand experiences.',
            'hero_subhead'  => 'Museums and universities, commercial real estate and corporate environments, retail and construction.',
            'lead_image'    => '/hall-exhibit-display-mu12il5t-6a71.jpg',
        ],
    ],
    [
        'title'   => 'Contact Us',
        'slug'    => 'contact',
        'content' => 'Contact EPI-Colorspace in Gaithersburg, Maryland: 301.990.2666. Tell us the building, the scope, and the date.',
        'meta'    => [
            'hero_headline' => 'Tell us the building, the scope, and the date.',
            'hero_subhead'  => 'Our production shop and showroom are located in Gaithersburg, Maryland. We service projects across Washington DC, Maryland, and Virginia daily.',
            'phone'         => '301.990.2666',
            'address'       => "8435 Helgerman Ct\nGaithersburg, MD 20877",
            'hightail_url'  => 'https://www.hightail.com/u/epicolorspace',
            'lead_image'    => '/gw-reception-area-mu12cgn5-nh72.jpg',
        ],
    ],
];

foreach ($pages as $p) {
    $existing = get_page_by_path($p['slug'], OBJECT, 'page');
    $page_id = $existing ? $existing->ID : wp_insert_post([
        'post_title'   => $p['title'],
        'post_name'    => $p['slug'],
        'post_content' => $p['content'],
        'post_type'    => 'page',
        'post_status'  => 'publish',
    ]);
    if ($page_id && !is_wp_error($page_id)) {
        foreach ($p['meta'] as $k => $v) {
            update_post_meta($page_id, $k, $v);
        }
        if ($p['slug'] === 'home') {
            update_option('show_on_front', 'page');
            update_option('page_on_front', $page_id);
        }
        echo "  [Page] Seeded '{$p['title']}' (ID {$page_id})\n";
    }
}

echo "Seeding complete!\n";
