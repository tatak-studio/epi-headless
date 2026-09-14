# EPI Colorspace — Headless WordPress & Meta Box Integration

This repository includes a complete containerized headless WordPress stack tailored for EPI Colorspace, pre-configured with **Meta Box**, custom post types, custom taxonomies, CORS headers, frontend route redirection, and automatic content seeding.

---

## Running WordPress Locally via Docker

A complete local Docker environment is ready out-of-the-box:

```bash
# 1. Start WordPress, MariaDB, phpMyAdmin and the WP-CLI setup runner
npm run wp:up
# Or directly: docker compose up -d
```

### What Happens Automatically:
1. **MariaDB 11.4** and **WordPress 6.x (PHP 8.3)** start up.
2. The `wpcli` container executes [wordpress/setup.sh](file:///Users/jaypee/dev/epi-headless/wordpress/setup.sh):
   - Installs WordPress core at `http://localhost:8080`.
   - Configures permalinks to `/%postname%/`.
   - Automatically installs and activates the **Meta Box** plugin.
   - Activates the `wordpress/mu-plugins/` stack:
     - `00-cors.php`: Grants full CORS access to Astro at `http://localhost:4321`.
     - `01-epi-headless-metabox.php`: Registers all Custom Post Types (`project`, `service`, `market`, `testimonial`), taxonomies, Meta Box field groups (`rwmb_meta_boxes`), and REST API exposure.
     - `02-frontend-links.php`: Re-routes "View" buttons in the WP Admin to your Astro frontend (`http://localhost:4321/projects/<slug>`, etc.).
   - Runs [wordpress/seed-content.php](file:///Users/jaypee/dev/epi-headless/wordpress/seed-content.php) to seed all 12 projects, 6 services, 6 markets, and testimonials with complete Meta Box fields!

### Access Credentials:
- **WordPress Admin**: [http://localhost:8080/wp-admin](http://localhost:8080/wp-admin)
  - **Username**: `admin`
  - **Password**: `epi-123`
- **REST API Endpoints**:
  - `http://localhost:8080/wp-json/wp/v2/projects`
  - `http://localhost:8080/wp-json/wp/v2/services`
  - `http://localhost:8080/wp-json/wp/v2/markets`
  - `http://localhost:8080/wp-json/wp/v2/testimonials`
- **phpMyAdmin**: [http://localhost:8081](http://localhost:8081) (`wordpress` / `wordpress`)

### Managing WordPress:
```bash
npm run wp:logs    # View container logs
npm run wp:down    # Stop containers
npm run wp:setup   # Re-run setup & content seeding
npm run wp:cli -- <command> # Run any WP-CLI command (e.g. npm run wp:cli -- post list)
```

---

## Connecting WordPress to Astro

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Set your WordPress URL in `.env`:
   ```bash
   WORDPRESS_URL="http://localhost:8080"
   ```
3. Restart your Astro dev server:
   ```bash
   astro dev stop && astro dev --background
   ```
4. When you edit any content or Meta Box custom fields in WordPress at `http://localhost:8080/wp-admin`, Astro will consume the live data via the WP REST API!
5. If `WORDPRESS_URL` is unset or WordPress is turned off, Astro gracefully falls back to the high-fidelity mock dataset with 0 downtime.

---

## Using on an Existing / Remote WordPress Site

If you already have a remote WordPress hosting environment (e.g. Cloudways, WP Engine, Kinsta):
1. Copy the `wordpress/plugins/epi-headless-metabox` folder into your site's `wp-content/plugins/` directory.
2. In the WordPress Admin, activate the plugin under **Plugins**.
3. Alternatively, import [wordpress/plugins/epi-headless-metabox/metabox-builder.json](file:///Users/jaypee/dev/epi-headless/wordpress/plugins/epi-headless-metabox/metabox-builder.json) via **Meta Box** > **Custom Fields** > **Import**.
4. Set `WORDPRESS_URL="https://your-live-domain.com"` in Astro's `.env`.
