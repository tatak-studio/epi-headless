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
                'service_number'    => '01',
                'kicker'            => 'From Concept to Execution we help our Clients create a Show-Stopping Presence.',
                'summary'           => 'From initial concept development to post-event storage, our expert team delivers seamless, turnkey creative solutions that help you stand out on the show floor. We design the booth, build it, crate it, ship it, set it, strike it and store it until the next show.',
                'turnkey_scope'     => 'Design, fabrication, freight, on-site labor, post-event storage and refresh between shows.',
                'home_summary'      => 'From initial concept development to post-event storage, our expert team delivers seamless, turnkey creative solutions that help you stand out on the show floor. We design the booth, build it, crate it, ship it, set it, strike it and store it until the next show, so your marketing team manages a message rather than a warehouse.',
                'home_detail_label' => 'Turnkey scope',
                'home_detail'       => 'Design, fabrication, freight, on-site labor, post-event storage and refresh between shows.',
                'capabilities'      => [
                    'Custom booth design & 3D rendering',
                    'Modular extrusion & tension fabric systems',
                    'Backlit SEG fabric wall structures',
                    'Drayage & show services management',
                    'Union labor supervision & floor installation',
                    'Post-event crating, logistics & secure storage',
                ],
                'deliverables'      => [
                    'Custom island & inline trade booths',
                    'Hanging banners and overhead signage',
                    'Branded demo counters & literature stands',
                ],
                'materials_used'    => [
                    'Extruded aluminum framing systems',
                    'Dye-sublimation backlit tension fabric',
                    'Direct-print composite PVC and acrylic',
                ],
                'lead_image'        => '/trade-show-printer-mu13gi32-4z7q.jpg',
            ],
        ],
        [
            'title' => 'Exhibits & Displays',
            'slug'  => 'exhibits-and-displays',
            'meta'  => [
                'service_number'    => '02',
                'kicker'            => 'Museum-grade craftsmanship for institutions that cannot afford a mistake.',
                'summary'           => 'Specializing in bringing curators’ visions to life with craftsmanship and precision. Our dedication to excellence has made us a trusted partner for renowned institutions, including museum-grade casework, specialty lighting and interactive elements installed under gallery conditions.',
                'turnkey_scope'     => 'Conservation consultation, archival casework, gallery wall construction, and precision artifact mounting.',
                'home_summary'      => 'Specializing in bringing curators\' visions to life with craftsmanship and precision. Our dedication to excellence has made us a trusted partner for renowned institutions, including museum-grade casework, specialty lighting and interactive elements installed under gallery conditions.',
                'home_detail_label' => 'Built for institutions',
                'home_detail'       => 'Conservation-conscious materials, precise tolerances and installs scheduled around public hours.',
                'lead_image'        => '/hall-exhibit-display-mu12il5t-6a71.jpg',
            ],
        ],
        [
            'title' => 'Signage Solutions',
            'slug'  => 'signage-solutions',
            'meta'  => [
                'service_number'    => '03',
                'kicker'            => 'Exterior and interior wayfinding engineered for high-traffic environments.',
                'summary'           => 'Custom exterior and interior signage that communicates clearly, withstands weathering, and directs movement across parking garages, commercial campuses, educational facilities, and retail centers.',
                'turnkey_scope'     => 'Code review, permit acquisition, structural engineering, fabrication, and bucket truck / crane installation.',
                'home_summary'      => 'From construction signage to retail graphics, we help businesses stand out and communicate their brand effectively. The same program covers permanent garage signage and full wayfinding systems, surveyed, permitted and installed by our own crews.',
                'home_detail_label' => 'Exterior Signage',
                'home_detail'       => 'Durable, weather-resistant banners and wraps for construction branding and retail leasing.',
                'lead_image'        => '/parking-notice-sign-mu13jclv-qgtf.jpg',
            ],
        ],
        [
            'title' => 'Large Format Printing',
            'slug'  => 'large-format-printing',
            'meta'  => [
                'service_number'    => '04',
                'kicker'            => 'Vibrant, high-resolution wide-format graphics printed in our Gaithersburg production facility.',
                'summary'           => 'Wall murals, floor graphics, construction barricades, and massive building banners printed on state-of-the-art flatbed and roll-to-roll equipment calibrated for consistent, Pantone-accurate color reproduction.',
                'turnkey_scope'     => 'Pre-flight file verification, color matching, roll-to-roll and flatbed production, contour cutting, and field installation.',
                'home_summary'      => 'We print with state-of-the-art technology for superior clarity and durability, ensuring your visuals captivate audiences and stand out at trade shows and events. Wall murals, floor graphics, banners and outdoor displays are color-managed and proofed on the actual substrate before the run.',
                'home_detail_label' => 'Specs that matter',
                'home_detail'       => '<span class="epi-mono">13 oz</span> scrim vinyl, <span class="epi-mono">0.125 in</span> bleed and UV-stable laminates matched to the exposure.',
                'lead_image'        => '/commanders-building-banner-mu13c8xa-kpu3.jpg',
            ],
        ],
        [
            'title' => 'Corporate Branding',
            'slug'  => 'corporate-branding',
            'meta'  => [
                'service_number'    => '05',
                'kicker'            => 'Transform workplace walls into immersive statements of company purpose.',
                'summary'           => 'Lobby identity marks, dimensional logos, floor-by-floor office graphics, timeline walls, and executive boardroom installations that establish a cohesive brand presence across all corporate facilities.',
                'turnkey_scope'     => 'Site survey, design coordination, substrate fabrication, weekend installation shifts, and multi-site rollouts.',
                'home_summary'      => 'Lobby identity, dimensional letters, recognition walls and custom framing that make a workplace look like the company inside it, from reception through the executive floor.',
                'home_detail_label' => 'Workplace rollouts',
                'home_detail'       => 'Brand standards applied floor by floor, with installs phased around occupied space.',
                'lead_image'        => '/spiral-lobby-graphics-mu13h9gi-cfz7.jpg',
            ],
        ],
        [
            'title' => 'Environmental Graphics',
            'slug'  => 'environmental-graphics',
            'meta'  => [
                'service_number'    => '06',
                'kicker'            => 'Connecting people to spaces through thoughtful architectural graphics.',
                'summary'           => 'Bridging architecture and interior design through graphic interventions: full-scale murals, architectural film finishes, glass textures, and experiential wayfinding that give personality and clarity to complex structures.',
                'turnkey_scope'     => 'Surface testing, material specification, custom fabrication, and expert architectural installation.',
                'home_summary'      => 'Murals, glass films, floor graphics and interior wayfinding that turn walls, glass and corridors into an immersive experience people photograph and remember.',
                'home_detail_label' => 'Occupied buildings',
                'home_detail'       => 'Surveyed, seam-mapped and installed off hours so no floor closes.',
                'lead_image'        => '/blue-lobby-displays-mu13q4jd-onxx.jpg',
            ],
        ],
    ],
    'projects' => [
        [
            'title' => 'Rotating gallery build, Washington DC',
            'slug'  => 'rotating-gallery-build-washington-dc',
            'meta'  => [
                'sort_order'       => 1,
                'service_category' => 'Exhibits & Displays',
                'summary'          => 'Casework, a title wall and a full label set fabricated, printed and installed overnight between two shows.',
                'client'           => 'National Cultural Institution',
                'location'         => 'Washington DC',
                'scope'            => 'Exhibition casework and wall graphics',
                'service_line'     => 'Exhibits & Displays',
                'market'           => 'Museums & Cultural',
                'lead_image'       => '/anacostia-exhibit-wall-mu13p5yi-dm4c.jpg',
                'filter_services'  => 'exhibits largeformat',
                'filter_market'    => 'museums',
                'card_tags'        => ['Exhibits', 'Museums', '3 week build'],
            ],
        ],
        [
            'title' => 'Campus wayfinding system, Northern Virginia',
            'slug'  => 'campus-wayfinding-system-northern-virginia',
            'meta'  => [
                'sort_order'       => 2,
                'service_category' => 'Signage Solutions',
                'summary'          => 'Nomenclature, message schedule and 84 sign types produced and installed between commencement and move-in.',
                'client'           => 'Major University',
                'location'         => 'Northern Virginia',
                'scope'            => '84 sign types, ADA compliant',
                'service_line'     => 'Signage Solutions',
                'market'           => 'Universities',
                'lead_image'       => '/building-facade-graphics-mu13937x-72if.jpg',
                'filter_services'  => 'signage',
                'filter_market'    => 'universities',
                'card_tags'        => ['Signage', 'Universities', '84 sign types'],
            ],
        ],
        [
            'title' => 'Parking structure level identification, DC',
            'slug'  => 'parking-structure-level-identification-dc',
            'meta'  => [
                'sort_order'       => 3,
                'service_category' => 'Signage Solutions',
                'summary'          => 'Level ID, clearance bars and safety notices for seven decks, hung from a lift over three nights.',
                'location'         => 'Washington DC',
                'scope'            => '7 levels, reflective panel system',
                'service_line'     => 'Signage Solutions',
                'market'           => 'Commercial Real Estate',
                'lead_image'       => '/parking-notice-sign-mu13jclv-qgtf.jpg',
                'filter_services'  => 'signage',
                'filter_market'    => 'cre',
                'card_tags'        => ['Signage', 'Real estate', '7 levels'],
            ],
        ],
        [
            'title' => 'Tradeshow booth program, national circuit',
            'slug'  => 'tradeshow-booth-program-national-circuit',
            'meta'  => [
                'sort_order'       => 4,
                'service_category' => 'Tradeshows',
                'summary'          => 'Booth design, fabrication, freight, set and strike, plus storage and refresh between shows.',
                'location'         => 'National circuit',
                'scope'            => 'Design, freight, install, storage',
                'service_line'     => 'Tradeshows',
                'market'           => 'Corporate',
                'lead_image'       => '/exhibit-booth-display-mu13gv5v-afm0.jpg',
                'filter_services'  => 'tradeshows largeformat',
                'filter_market'    => 'corporate',
                'card_tags'        => ['Tradeshows', 'Corporate', 'Turnkey'],
            ],
        ],
        [
            'title' => 'Storefront window program, Silver Spring',
            'slug'  => 'storefront-window-program-silver-spring',
            'meta'  => [
                'sort_order'       => 5,
                'service_category' => 'Signage Solutions',
                'summary'          => 'Frosted and first-surface vinyl kitted by store and installed overnight so doors opened on schedule.',
                'location'         => 'Silver Spring, Maryland',
                'scope'            => 'Frosted and first-surface vinyl',
                'service_line'     => 'Signage Solutions',
                'market'           => 'Retail',
                'lead_image'       => '/retail-window-wrap-mu13ikr7-460d.jpg',
                'filter_services'  => 'signage largeformat',
                'filter_market'    => 'retail',
                'card_tags'        => ['Signage', 'Retail', 'Multi-site'],
            ],
        ],
        [
            'title' => 'Lobby environmental graphics, Tysons',
            'slug'  => 'lobby-environmental-graphics-tysons',
            'meta'  => [
                'sort_order'       => 6,
                'service_category' => 'Corporate Branding',
                'summary'          => 'A wall mural and dimensional letters that carry brand standards from the curb through the elevator bank.',
                'location'         => 'Tysons, Virginia',
                'scope'            => 'Wall mural, dimensional letters',
                'service_line'     => 'Corporate Branding',
                'market'           => 'Corporate',
                'lead_image'       => '/spiral-lobby-graphics-mu13h9gi-cfz7.jpg',
                'filter_services'  => 'branding largeformat',
                'filter_market'    => 'corporate',
                'card_tags'        => ['Branding', 'Corporate', 'Mural'],
            ],
        ],
        [
            'title' => 'Construction perimeter branding, Bethesda',
            'slug'  => 'construction-perimeter-branding-bethesda',
            'meta'  => [
                'sort_order'       => 7,
                'service_category' => 'Signage Solutions',
                'summary'          => 'Mesh fence wrap across 640 linear feet, engineered for wind load and printed for full-perimeter coverage.',
                'location'         => 'Bethesda, Maryland',
                'scope'            => 'Mesh fence wrap, 640 linear ft',
                'service_line'     => 'Signage Solutions',
                'market'           => 'Construction',
                'lead_image'       => '/commanders-building-banner-mu13bbnp-up6d.jpg',
                'filter_services'  => 'signage largeformat',
                'filter_market'    => 'construction',
                'card_tags'        => ['Signage', 'Construction', '640 linear ft'],
            ],
        ],
        [
            'title' => 'Performing arts donor wall, Northern Virginia',
            'slug'  => 'performing-arts-donor-wall-northern-virginia',
            'meta'  => [
                'sort_order'       => 8,
                'service_category' => 'Exhibits & Displays',
                'summary'          => 'Updatable name plates and halo lighting, built so a new gift is a plate rather than a new wall.',
                'location'         => 'Northern Virginia',
                'scope'            => 'Donor recognition wall',
                'service_line'     => 'Exhibits & Displays',
                'market'           => 'Museums & Cultural',
                'lead_image'       => '/hall-exhibit-display-mu12il5t-6a71.jpg',
                'filter_services'  => 'exhibits branding',
                'filter_market'    => 'museums',
                'card_tags'        => ['Exhibits', 'Cultural', 'Updatable'],
            ],
        ],
        [
            'title' => 'Visitor center interpretive graphics, Maryland',
            'slug'  => 'visitor-center-interpretive-graphics-maryland',
            'meta'  => [
                'sort_order'       => 9,
                'service_category' => 'Exhibits & Displays',
                'summary'          => 'Wall murals, dimensional letters and accessible label sets produced to accessible exhibition guidance.',
                'location'         => 'Maryland',
                'scope'            => 'Interpretive graphics and label sets',
                'service_line'     => 'Exhibits & Displays',
                'market'           => 'Museums & Cultural',
                'lead_image'       => '/usms-exhibit-display-mu13mugs-hrl8.jpg',
                'filter_services'  => 'exhibits largeformat',
                'filter_market'    => 'museums',
                'card_tags'        => ['Exhibits', 'Cultural', 'ADA'],
            ],
        ],
        [
            'title' => 'Retail leasing banners, Rockville',
            'slug'  => 'retail-leasing-banners-rockville',
            'meta'  => [
                'sort_order'       => 10,
                'service_category' => 'Signage Solutions',
                'summary'          => 'Building banners and post-and-panel displays on a tension system, printed on 13 oz scrim vinyl.',
                'location'         => 'Rockville, Maryland',
                'scope'            => '13 oz scrim vinyl, 96 x 48 in',
                'service_line'     => 'Signage Solutions',
                'market'           => 'Commercial Real Estate',
                'materials'        => '13 oz scrim vinyl',
                'lead_image'       => '/real-estate-banner-mu12q7mf-0tjm.jpg',
                'filter_services'  => 'signage',
                'filter_market'    => 'cre',
                'card_tags'        => ['Signage', 'Real estate', '96 x 48 in'],
            ],
        ],
        [
            'title' => 'Workplace graphics rollout, Gaithersburg',
            'slug'  => 'workplace-graphics-rollout-gaithersburg',
            'meta'  => [
                'sort_order'       => 11,
                'service_category' => 'Corporate Branding',
                'summary'          => 'Floor-by-floor environmental graphics installed around occupied space, phased over five weekends.',
                'location'         => 'Gaithersburg, Maryland',
                'scope'            => 'Floor-by-floor workplace graphics',
                'service_line'     => 'Corporate Branding',
                'market'           => 'Corporate',
                'lead_image'       => '/gw-reception-area-mu12cgn5-nh72.jpg',
                'filter_services'  => 'branding',
                'filter_market'    => 'corporate',
                'card_tags'        => ['Branding', 'Corporate', '5 phases'],
            ],
        ],
        [
            'title' => 'Gala scenic and step and repeat, Washington DC',
            'slug'  => 'gala-scenic-step-and-repeat-washington-dc',
            'meta'  => [
                'sort_order'       => 12,
                'service_category' => 'Events',
                'summary'          => 'Entry portal, scenic panels and a step and repeat delivered early, set for one night and struck by morning.',
                'location'         => 'Washington DC',
                'scope'            => 'Entry portal, scenic panels, step and repeat',
                'service_line'     => 'Tradeshows',
                'market'           => 'Museums & Cultural',
                'lead_image'       => '/arena-event-facade-mu13hzdz-gl0o.jpg',
                'filter_services'  => 'tradeshows exhibits',
                'filter_market'    => 'museums',
                'card_tags'        => ['Events', 'Cultural', 'One night'],
            ],
        ],
        [
            'title' => 'JBG SMITH Crystal City Garage',
            'slug'  => 'jbg-smith-crystal-city-garage',
            'meta'  => [
                'sort_order'         => 13,
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
                'section_1_body'     => 'A high-traffic Arlington parking structure had accumulated years of mismatched signage, faded reserved markings and inconsistent unit identifiers. Residents were navigating by memory rather than by the graphics, and the leasing team wanted the garage to read like part of the building rather than an afterthought.',
                'section_2_heading'  => 'What we produced and installed',
                'section_2_body'     => '<p>The project involved the production and installation of Duratex blockout PET/PVC column wraps applied across multiple garage columns using high-tack adhesive systems engineered for durability in high-traffic parking environments.</p><p>Each wrap carried high-contrast reserved parking graphics, unit identifiers and directional information designed to improve readability and navigation visibility from both vehicle and pedestrian sightlines. The blockout material prevented underlying column colors and markings from interfering with graphic opacity and color consistency.</p>',
                'section_3_heading'  => 'Field conditions we worked around',
                'section_3_body'     => 'Because of field variances in column dimensions, our installers adjusted panel positioning and trim alignment on site to maintain visual continuity and consistent spacing throughout the garage despite minor structural inconsistencies between columns.',
                'section_4_heading'  => 'The result',
                'section_4_body'     => 'The completed installation delivered a cleaner, more navigable garage environment with a more cohesive visual identity and improved resident usability throughout the space.',
                'highlights_heading' => 'Project highlights',
                'highlights'         => [
                    'Duratex blockout PET/PVC column wraps',
                    'High-tack adhesive vinyl installation',
                    'Parking garage wayfinding graphics',
                    'Reserved parking identification systems',
                    'Multi-column alignment and field adjustment',
                    'High-contrast visibility graphics',
                    'Commercial environmental branding',
                ],
                'outcome_heading'    => 'Measured on the deck, not on the proof.',
                'outcome_stats'      => [
                    ['value' => '28', 'label' => 'Columns wrapped across the structure'],
                    ['value' => '4', 'label' => 'Levels brought onto one visual system'],
                    ['value' => '0', 'label' => 'Days the garage was closed to residents'],
                    ['value' => '100%', 'label' => 'Reserved spaces identified and legible from a moving vehicle'],
                ],
                'gallery_heading'    => 'Installed work',
                'gallery_images'     => [
                    ['url' => '/parking-notice-sign-mu13jclv-qgtf.jpg', 'caption' => 'Column wrap, reserved parking identification'],
                    ['url' => '/building-facade-graphics-mu13937x-72if.jpg', 'caption' => 'Directional graphics at the ramp'],
                    ['url' => '/colonial-one-windows-mu13royg-84om.jpg', 'caption' => 'Unit identifiers, high-contrast set'],
                    ['url' => '/real-estate-banner-mu12q7mf-0tjm.jpg', 'caption' => 'Installed run, level two'],
                ],
                'testimonial_quote'  => 'The garage finally reads the way the rest of the property does. Residents stopped asking us where their space is.',
                'testimonial_source' => 'Property management team, Crystal City',
                'filter_services'    => 'signage',
                'filter_market'      => 'cre',
                'card_tags'          => ['Signage', 'Real estate', '28 columns'],
                'related_intro'      => 'More work in commercial real estate and permanent signage.',
            ],
        ],
    ],
    // Projects replaced by the source portfolio; moved to trash so they can be restored.
    'retired_projects' => [
        'retail-leasing-graphics-rollout-rockville-md',
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
            'title' => 'Corporate headquarters relocation',
            'meta'  => [
                'quote'  => 'I wanted to send my appreciation and bravos to you and your team for such an amazing visual presence at our new space. It provided the wow factor we were looking for.',
                'source' => 'Marketing director, corporate headquarters relocation',
            ],
        ],
        [
            'title' => 'National nonprofit',
            'meta'  => [
                'quote'  => 'I really appreciate all the wonderful work that you have done for us through the years. It is always a joy to work with vendors that are more like partners and extensions of our team than just service providers.',
                'source' => 'Communications lead, national nonprofit',
            ],
        ],
        [
            'title' => 'Cultural institution',
            'meta'  => [
                'quote'  => 'As always, the exhibit was fabulous. It arrived in plenty of time and looked gorgeous. My board chair and other members commented on how awesome it looked, and the step and repeat had plenty of room for everyone in the photo.',
                'source' => 'Events director, cultural institution',
            ],
        ],
        [
            'title' => 'Medical technology company',
            'meta'  => [
                'quote'  => 'So much is thrown at me during final preparations that major balls start dropping. I am glad I can count on you and your team.',
                'source' => 'Tradeshow manager, medical technology company',
            ],
        ],
        [
            'title' => 'Multi-location retail',
            'meta'  => [
                'quote'  => 'Amazing service. They handled our large order flawlessly and delivered everything on time, and the print quality was exceptional: vibrant color and an incredibly fast turnaround.',
                'source' => 'Brand manager, multi-location retail',
            ],
        ],
    ],
    // The JBG SMITH quote lives on its case study, not in the Home slider.
    'retired_testimonials' => [
        'JBG SMITH Testimonial',
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

foreach ($seed_data['retired_projects'] as $slug) {
    $retired = get_page_by_path($slug, OBJECT, 'project');
    if ($retired) {
        wp_trash_post($retired->ID);
        echo "  [Project] Trashed retired '{$slug}' (ID {$retired->ID})\n";
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

foreach ($seed_data['retired_testimonials'] as $title) {
    $retired = get_posts([
        'post_type'   => 'testimonial',
        'title'       => $title,
        'post_status' => 'publish',
        'numberposts' => 1,
    ]);
    if (!empty($retired)) {
        wp_trash_post($retired[0]->ID);
        echo "  [Testimonial] Trashed retired '{$title}' (ID {$retired[0]->ID})\n";
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
            'hero_headline' => 'For over 20 years, EPI-Colorspace has been a trusted partner in delivering high-impact graphics, expert printing, fabrication and installation services to create immersive brand experiences.',
            'hero_subhead'  => 'We specialize in transforming a wide variety of spaces, from museums and universities to commercial real estate and corporate environments, into dynamic, immersive brand experiences that engage and inspire.',
            'lead_image'    => '/exhibit-booth-display-mu12smxg-u4qk.jpg',
        ],
    ],
    [
        'title'   => 'Projects',
        'slug'    => 'projects',
        'content' => 'Installed work by EPI-Colorspace across the DMV: exhibits, tradeshow booths, signage, large format printing and environmental graphics.',
        'meta'    => [
            'hero_headline' => 'See how our in-house team delivers on time and on budget, one installed project at a time.',
            'hero_subhead'  => 'Galleries, show floors, storefronts, garages and job sites across DC, Maryland and Virginia. Every project below was designed, printed, fabricated and installed by the same team in Gaithersburg.',
            'lead_image'    => '/fbi-wanted-display-mu1372so-z1pt.jpg',
        ],
    ],
    [
        'title'   => 'Markets',
        'slug'    => 'markets',
        'content' => 'Museums and universities, commercial real estate and corporate environments, retail and construction.',
        'meta'    => [
            'hero_headline' => 'We specialize in transforming a wide variety of spaces into dynamic, immersive brand experiences that engage and inspire.',
            'hero_subhead'  => 'Museums and universities, commercial real estate and corporate environments, retail and construction. Each market has its own rules about access, materials and downtime, and we plan for them before the truck is loaded.',
            'lead_image'    => '/hall-exhibit-display-mu12il5t-6a71.jpg',
        ],
    ],
    [
        'title'   => 'Contact Us',
        'slug'    => 'contact',
        'content' => 'Contact EPI-Colorspace in Gaithersburg, Maryland: 301.990.2666. We cannot wait to work with you.',
        'meta'    => [
            'hero_headline' => 'We cannot wait to work with you.',
            'hero_subhead'  => 'Whether you are shaping immersive environments, enhancing functionality or telling your brand story, EPI-Colorspace is here to make it unforgettable. Send a scope, a floor plan, a show schedule or a photo of the wall.',
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
