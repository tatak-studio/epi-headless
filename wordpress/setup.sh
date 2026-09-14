#!/bin/sh
set -e

WP="wp --path=/var/www/html --allow-root"

echo "Waiting for WordPress core files..."
until [ -f /var/www/html/wp-load.php ]; do
  sleep 2
done

echo "Waiting for database..."
until $WP core version >/dev/null 2>&1; do
  sleep 2
done

if ! $WP core is-installed >/dev/null 2>&1; then
  echo "Installing WordPress core..."
  $WP core install \
    --url="http://localhost:8080" \
    --title="EPI-Colorspace CMS" \
    --admin_user="admin" \
    --admin_password="epi-123" \
    --admin_email="admin@example.com" \
    --skip-email

  echo "Setting permalink structure..."
  $WP rewrite structure "/%postname%/"
  $WP rewrite flush
fi

echo "Configuring site options..."
$WP option update blogname "EPI-Colorspace"
$WP option update blogdescription "Single-shop partner for high-impact environmental graphics: design, print, fabrication, and installation across the DMV."
$WP option update epi_frontend_url "${FRONTEND_URL:-http://localhost:4321}"

echo "Installing and activating Meta Box..."
if ! $WP plugin is-installed meta-box >/dev/null 2>&1; then
  $WP plugin install meta-box --activate || true
else
  $WP plugin activate meta-box || true
fi

echo "Removing default sample content..."
HELLO_WORLD_ID=$($WP post list --post_type=post --name=hello-world --field=ID || true)
[ -n "$HELLO_WORLD_ID" ] && $WP post delete "$HELLO_WORLD_ID" --force || true
SAMPLE_PAGE_ID=$($WP post list --post_type=page --name=sample-page --field=ID || true)
[ -n "$SAMPLE_PAGE_ID" ] && $WP post delete "$SAMPLE_PAGE_ID" --force || true

echo "Seeding initial EPI Colorspace content and Meta Box fields..."
if [ -f /wordpress/seed-content.php ]; then
  $WP eval-file /wordpress/seed-content.php || true
elif [ -f /var/www/html/wp-content/seed-content.php ]; then
  $WP eval-file /var/www/html/wp-content/seed-content.php || true
fi

echo "Importing Meta Box Builder field groups into GUI..."
$WP eval '
if (class_exists("\MBB\Import")) {
    $existing = get_posts(["post_type" => "meta-box", "numberposts" => 1]);
    $json_file = file_exists("/wordpress/metabox-builder.json") ? "/wordpress/metabox-builder.json" : "/var/www/html/wp-content/metabox-builder.json";
    if (empty($existing) && file_exists($json_file)) {
        $importer = new \MBB\Import();
        $method = new \ReflectionMethod($importer, "import_json");
        $method->setAccessible(true);
        $method->invoke($importer, file_get_contents($json_file));
        echo "Imported Meta Box Builder field groups.\n";
    }
}
' || true

echo "--------------------------------------------------------"
echo "WordPress Headless CMS is ready!"
echo "Admin URL: http://localhost:8080/wp-admin"
echo "Username:  admin"
echo "Password:  epi-123"
echo "Frontend:  http://localhost:4321"
echo "REST API:  http://localhost:8080/wp-json/wp/v2/projects"
echo "--------------------------------------------------------"
