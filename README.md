# EPI-Colorspace Headless (Astro.js + WordPress)

A high-performance headless web application built with **Astro 5** and **WordPress**, featuring complete **Meta Box** and **SEOPress PRO** integration, custom design system, and full dynamic synchronization.

---

## 🚀 Architecture & Tech Stack

- **Frontend**: [Astro 5](https://astro.build/) with TypeScript and Vanilla CSS design tokens.
- **Backend CMS**: Headless WordPress (PHP 8.3 Apache + MariaDB 11.4 in Docker).
- **Custom Content**: [Meta Box](https://metabox.io/) (Custom Post Types: `Projects`, `Services`, `Markets`, `Testimonials`, and extended `Pages`).
- **SEO & Schemas**: [SEOPress PRO](https://www.seopress.org/) with synchronized JSON-LD structured data, Open Graph, and Twitter Cards.
- **Data Layer**: Resilient REST API consumer with automatic offline fallback to curated mock data.

---

## 🛠️ Quick Start

### 1. Start the WordPress Backend

```bash
docker compose up -d
```

- **WordPress Admin**: `http://localhost:8080/wp-admin`
  - **Username**: `admin`
  - **Password**: `epi-123`
- **phpMyAdmin**: `http://localhost:8081`

The stack automatically configures WordPress, installs/activates plugins, seeds initial content, imports media, and sets up Meta Box Builder field groups.

### 2. Start the Astro Frontend

```bash
npm install
npm run dev
```

The site will be running at `http://localhost:4321`.

To build for production:

```bash
npm run build
```

---

## 📁 Repository Structure

```
├── public/                 # Static assets, logos, and high-res photography
├── src/
│   ├── components/         # Reusable Astro UI components
│   ├── data/               # Rich offline fallback data
│   ├── layouts/            # BaseLayout with dynamic SEO & Schema.org tags
│   ├── lib/                # WordPress REST API client and SEO resolvers
│   ├── pages/              # Astro routing (/, /projects, /services, /markets, /contact)
│   ├── styles/             # Curated design tokens and component styling
│   └── types/              # TypeScript definitions for WP, Meta Box & SEO
├── wordpress/
│   ├── mu-plugins/         # Must-use plugins (CORS, Meta Box REST bridge, permalinks)
│   ├── metabox-builder.json # Exported Meta Box Builder schema for 1-click import
│   ├── seed-content.php    # Initial content and custom fields seeder
│   └── setup.sh            # Automated WP-CLI provisioning script
├── docker-compose.yml      # Local WordPress + DB + phpMyAdmin stack
└── astro.config.mjs        # Astro configuration
```

---

## 🔑 Environment Variables

Copy `.env.example` to `.env`:

```ini
# WordPress REST API URL
WORDPRESS_URL=http://localhost:8080

# Public frontend URL
PUBLIC_SITE_URL=http://localhost:4321
```

If `WORDPRESS_URL` is omitted or WordPress is unavailable, Astro gracefully falls back to the embedded data in `src/data/mock-data.ts`.

