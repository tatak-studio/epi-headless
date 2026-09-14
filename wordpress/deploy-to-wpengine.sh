#!/bin/bash
set -e

REMOTE_HOST="epiheadless.ssh.wpengine.net"
REMOTE_USER="epiheadless"
REMOTE_TARGET="${REMOTE_USER}@${REMOTE_HOST}"
REMOTE_WP="/sites/epiheadless"
VERCEL_FRONTEND="https://epi-headless.vercel.app"

echo "=================================================="
echo " Deploying EPI Colorspace Headless to WP Engine"
echo " Target: ${REMOTE_TARGET}:${REMOTE_WP}"
echo " Frontend: ${VERCEL_FRONTEND}"
echo "=================================================="

# Test SSH connection
echo "--> Verifying SSH connection..."
WP_VERSION=$(ssh -o BatchMode=yes -o ConnectTimeout=15 "${REMOTE_TARGET}" "wp --path=${REMOTE_WP} core version")
echo "--> Connected! WordPress core version: ${WP_VERSION}"

# 1. Upload mu-plugins
echo "--> Uploading mu-plugins (CORS, Meta Box & SEOPress bridge, preview links)..."
ssh "${REMOTE_TARGET}" "mkdir -p ${REMOTE_WP}/wp-content/mu-plugins"
tar -czf - -C wordpress/mu-plugins . | ssh "${REMOTE_TARGET}" "tar -xzf - -C ${REMOTE_WP}/wp-content/mu-plugins"

# 2. Upload seed-content and metabox builder json
echo "--> Uploading seed script and Meta Box field definitions..."
ssh "${REMOTE_TARGET}" "cat > ${REMOTE_WP}/wp-content/seed-content.php" < wordpress/seed-content.php
ssh "${REMOTE_TARGET}" "cat > ${REMOTE_WP}/wp-content/metabox-builder.json" < wordpress/metabox-builder.json

# 3. Install required plugins: meta-box, wp-seopress
echo "--> Ensuring plugins are installed and active on WP Engine..."
ssh "${REMOTE_TARGET}" bash << EOF
cd ${REMOTE_WP}
wp plugin install meta-box --activate || wp plugin activate meta-box || true
wp plugin install wp-seopress --activate || wp plugin activate wp-seopress || true

# Set frontend URL for preview and view links
wp option update epi_frontend_url "${VERCEL_FRONTEND}"

# Ensure pretty permalinks
wp rewrite structure "/%postname%/" --hard
wp rewrite flush --hard
EOF

# 4. Run content seeding (creates pages, projects, services, insights, team members, SEOPress, Meta Box values)
echo "--> Seeding WordPress content..."
ssh "${REMOTE_TARGET}" "wp --path=${REMOTE_WP} eval-file ${REMOTE_WP}/wp-content/seed-content.php"

# 5. Import Meta Box Builder groups into GUI if MBB is active
echo "--> Checking Meta Box Builder GUI import..."
ssh "${REMOTE_TARGET}" bash << EOF
cd ${REMOTE_WP}
wp eval '
if (class_exists("\MBB\Import")) {
    \$existing = get_posts(["post_type" => "meta-box", "numberposts" => 1]);
    \$json_file = "${REMOTE_WP}/wp-content/metabox-builder.json";
    if (empty(\$existing) && file_exists(\$json_file)) {
        \$importer = new \MBB\Import();
        \$method = new \ReflectionMethod(\$importer, "import_json");
        \$method->setAccessible(true);
        \$method->invoke(\$importer, file_get_contents(\$json_file));
        echo "Imported Meta Box Builder field groups.\n";
    }
}
' || true
EOF

# 6. Upload media assets to wp-content/uploads
echo "--> Uploading media assets..."
ssh "${REMOTE_TARGET}" "mkdir -p ${REMOTE_WP}/wp-content/uploads/2026/09"
tar -czf - -C public . | ssh "${REMOTE_TARGET}" "tar -xzf - -C ${REMOTE_WP}/wp-content/uploads/2026/09"

echo "=================================================="
echo " WP Engine Deployment Finished Successfully!"
echo " WP Engine Site: https://epiheadless.wpenginepowered.com"
echo " REST API: https://epiheadless.wpenginepowered.com/wp-json/wp/v2/pages"
echo " Frontend Vercel: ${VERCEL_FRONTEND}"
echo "=================================================="
