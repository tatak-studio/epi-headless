export interface OutcomeStat {
  value: string;
  label: string;
}

export interface GalleryImage {
  id?: number;
  url: string;
  title?: string;
  caption?: string;
  alt?: string;
}

export interface SEORobots {
  index: 'index' | 'noindex';
  follow: 'follow' | 'nofollow';
}

export interface SEOOpenGraph {
  title: string;
  description: string;
  image: string;
  type: string;
  site_name?: string;
}

export interface SEOTwitter {
  card: string;
  title: string;
  description: string;
  image: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  canonical?: string;
  robots?: SEORobots;
  open_graph?: SEOOpenGraph;
  twitter?: SEOTwitter;
  schema?: Record<string, any>;
}

export interface ProjectMetaBox {
  sort_order?: number | string;
  service_category?: string;
  byline?: string;
  summary?: string;
  client?: string;
  location?: string;
  scope?: string;
  service_line?: string;
  market?: string;
  materials?: string;
  completed?: string;
  lead_image?: string | { id?: number; url: string; alt?: string };
  section_1_heading?: string;
  section_1_body?: string;
  section_2_heading?: string;
  section_2_body?: string;
  section_3_heading?: string;
  section_3_body?: string;
  section_4_heading?: string;
  section_4_body?: string;
  highlights_heading?: string;
  highlights?: string[];
  outcome_heading?: string;
  outcome_stats?: OutcomeStat[];
  gallery_heading?: string;
  gallery_images?: GalleryImage[];
  gallery_captions?: string[];
  testimonial_quote?: string;
  testimonial_source?: string;
  filter_services?: string;
  filter_market?: string;
  card_tags?: string[];
  related_intro?: string;
  related_projects?: Array<{ slug: string; title: string; subtitle: string; image: string }>;
}

export interface Project {
  id: number | string;
  slug: string;
  title: { rendered: string } | string;
  featured_media_url?: string;
  meta_box: ProjectMetaBox;
  seo?: SEOMetadata;
}

export interface ServiceMetaBox {
  service_number: string;
  kicker: string;
  summary: string;
  turnkey_scope: string;
  home_summary?: string;
  home_detail_label?: string;
  home_detail?: string;
  capabilities: string[];
  deliverables: string[];
  materials_used: string[];
  lead_image?: string | { id?: number; url: string; alt?: string };
  gallery_images?: GalleryImage[];
}

export interface Service {
  id: number | string;
  slug: string;
  title: { rendered: string } | string;
  meta_box: ServiceMetaBox;
  seo?: SEOMetadata;
}

export interface MarketMetaBox {
  market_kicker: string;
  market_summary: string;
  access_window: string;
  challenges: string;
  solutions: string;
  lead_image?: string | { id?: number; url: string; alt?: string };
}

export interface Market {
  id: number | string;
  slug: string;
  title: { rendered: string } | string;
  meta_box: MarketMetaBox;
  seo?: SEOMetadata;
}

export interface TestimonialMetaBox {
  quote: string;
  client_name?: string;
  client_role?: string;
  organization?: string;
  source?: string;
}

export interface Testimonial {
  id: number | string;
  meta_box: TestimonialMetaBox;
}

export interface PageMetaBox {
  hero_headline?: string;
  hero_subhead?: string;
  lead_image?: string | { id?: number; url: string; alt?: string };
  trust_kicker?: string;
  trust_heading?: string;
  trust_body?: string;
  phone?: string;
  address?: string;
  hightail_url?: string;
}

export interface WPPage {
  id: number | string;
  slug: string;
  title: { rendered: string } | string;
  content?: { rendered: string } | string;
  meta_box: PageMetaBox;
  seo?: SEOMetadata;
}
