<?php
/**
 * Plugin Name: Frontend Links for Astro
 * Description: Redirects "View" links in wp-admin to the Astro frontend at http://localhost:4321.
 */

function epi_frontend_path_prefixes(): array {
    return [
        'page'    => '',
        'project' => '/projects',
        'service' => '/services',
        'market'  => '/markets',
    ];
}

function epi_frontend_url(): string {
    $url = get_option('epi_frontend_url') ?: getenv('FRONTEND_URL') ?: 'http://localhost:4321';
    return rtrim($url, '/');
}

add_filter('post_link', 'epi_frontend_permalink', 10, 2);
add_filter('page_link', 'epi_frontend_permalink', 10, 2);
add_filter('post_type_link', 'epi_frontend_permalink', 10, 2);
add_filter('preview_post_link', 'epi_frontend_preview_link', 10, 2);

function epi_frontend_permalink(string $link, $post): string {
    $post = get_post($post);
    if (!$post) {
        return $link;
    }

    $prefixes = epi_frontend_path_prefixes();
    if (!array_key_exists($post->post_type, $prefixes)) {
        return $link;
    }

    if (!in_array($post->post_status, ['publish', 'private', 'future'], true)) {
        return $link;
    }

    $frontend_base = epi_frontend_url();
    $slug = $post->post_name;

    // Homepage routes to root
    if ($post->post_type === 'page' && ($slug === 'home' || $post->ID == get_option('page_on_front'))) {
        return "{$frontend_base}/";
    }

    $prefix = $prefixes[$post->post_type];
    return $prefix ? "{$frontend_base}{$prefix}/{$slug}" : "{$frontend_base}/{$slug}";
}

function epi_frontend_preview_link(string $link, $post): string {
    $post = get_post($post);
    if (!$post) {
        return $link;
    }
    return epi_frontend_permalink($link, $post);
}
