<?php
/**
 * Plugin Name: Headless CORS Headers
 * Description: Enables Cross-Origin Resource Sharing (CORS) for the Astro frontend.
 */

add_action('rest_api_init', function () {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function ($value) {
        $origin = get_http_origin();
        $allowed_origins = [
            'http://localhost:4321',
            'http://localhost:3000',
            'http://127.0.0.1:4321',
            rtrim(getenv('FRONTEND_URL') ?: '', '/'),
        ];

        if ($origin && in_array($origin, array_filter($allowed_origins), true)) {
            header('Access-Control-Allow-Origin: ' . $origin);
            header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
            header('Access-Control-Allow-Credentials: true');
            header('Access-Control-Allow-Headers: Authorization, X-WP-Nonce, Content-Type, Cache-Control, X-Requested-With');
        } else {
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
            header('Access-Control-Allow-Headers: Authorization, Content-Type');
        }

        if ('OPTIONS' === $_SERVER['REQUEST_METHOD']) {
            status_header(200);
            exit;
        }

        return $value;
    });
}, 15);
