import type { Project, Service, Market, Testimonial, WPPage, SEOMetadata } from '../types/wordpress';
import { mockProjects, mockServices, mockMarkets, mockTestimonials } from '../data/mock-data';

const RAW_WP_URL = import.meta.env.WORDPRESS_URL || process.env.WORDPRESS_URL || '';
const WORDPRESS_AUTH = import.meta.env.WORDPRESS_AUTH || process.env.WORDPRESS_AUTH || '';
const SITE_URL = (import.meta.env.PUBLIC_SITE_URL || 'http://localhost:4321').replace(/\/$/, '');

// Parse any embedded credentials from WORDPRESS_URL if present
let parsedWpUrl = RAW_WP_URL;
let wpAuthHeader = WORDPRESS_AUTH;

if (RAW_WP_URL) {
  try {
    const u = new URL(RAW_WP_URL);
    if (u.username || u.password) {
      const creds = `${decodeURIComponent(u.username)}:${decodeURIComponent(u.password)}`;
      wpAuthHeader = wpAuthHeader || `Basic ${typeof btoa !== 'undefined' ? btoa(creds) : Buffer.from(creds).toString('base64')}`;
      u.username = '';
      u.password = '';
      parsedWpUrl = u.toString().replace(/\/$/, '');
    }
  } catch {
    // Keep as is
  }
}

const WORDPRESS_URL = parsedWpUrl.replace(/\/$/, '');

export function resolveImageUrl(img: any, fallback = ''): string {
  if (!img) return fallback;
  if (typeof img === 'string') return img;
  if (typeof img === 'object') {
    if (img.url && typeof img.url === 'string') return img.url;
    if (img.full_url && typeof img.full_url === 'string') return img.full_url;
  }
  return fallback;
}

export function resolveSeoData(
  item: any,
  defaultTitle: string,
  defaultDesc: string,
  canonicalPath: string,
  defaultImage = '/assets/epi-colorspace-logo.png'
): SEOMetadata {
  const rawSeo = item?.seo;

  const title = rawSeo?.title || defaultTitle;
  const description = rawSeo?.description || defaultDesc;
  const canonical = rawSeo?.canonical || `${SITE_URL}${canonicalPath}`;

  const image = resolveImageUrl(
    rawSeo?.open_graph?.image || rawSeo?.twitter?.image || item?.meta_box?.lead_image,
    defaultImage
  );
  const imageUrl = image.startsWith('http://') || image.startsWith('https://')
    ? image
    : `${SITE_URL}${image.startsWith('/') ? '' : '/'}${image}`;

  return {
    title,
    description,
    canonical,
    robots: rawSeo?.robots || { index: 'index', follow: 'follow' },
    open_graph: {
      title: rawSeo?.open_graph?.title || title,
      description: rawSeo?.open_graph?.description || description,
      image: imageUrl,
      type: rawSeo?.open_graph?.type || 'website',
      site_name: rawSeo?.open_graph?.site_name || 'EPI-Colorspace',
    },
    twitter: {
      card: rawSeo?.twitter?.card || 'summary_large_image',
      title: rawSeo?.twitter?.title || title,
      description: rawSeo?.twitter?.description || description,
      image: imageUrl,
    },
    schema: rawSeo?.schema,
  };
}

async function fetchFromWP<T>(endpoint: string): Promise<T | null> {
  if (!WORDPRESS_URL) return null;
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);
    const url = `${WORDPRESS_URL}/wp-json/wp/v2/${endpoint}`;
    const headers: Record<string, string> = {
      'Accept': 'application/json',
    };
    if (wpAuthHeader) {
      headers['Authorization'] = wpAuthHeader.startsWith('Basic ')
        ? wpAuthHeader
        : `Basic ${typeof btoa !== 'undefined' ? btoa(wpAuthHeader) : Buffer.from(wpAuthHeader).toString('base64')}`;
    }
    const res = await fetch(url, { headers, signal: controller.signal });
    clearTimeout(timeoutId);
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export async function getProjects(): Promise<Project[]> {
  const data = await fetchFromWP<Project[]>('projects?_embed&per_page=100');
  if (data && Array.isArray(data) && data.length > 0) {
    return data.map((p) => {
      const titleStr = typeof p.title === 'object' ? p.title.rendered : p.title;
      const leadImg = resolveImageUrl(p.meta_box?.lead_image, '/parking-notice-sign-mu13jclv-qgtf.jpg');
      return {
        ...p,
        meta_box: {
          ...p.meta_box,
          lead_image: leadImg,
        },
        seo: resolveSeoData(
          p,
          `${titleStr} | EPI-Colorspace`,
          p.meta_box?.summary || 'EPI-Colorspace project case study.',
          `/projects/${p.slug}`,
          leadImg
        ),
      };
    });
  }
  return mockProjects.map((p) => ({
    ...p,
    seo: resolveSeoData(
      p,
      `${typeof p.title === 'object' ? p.title.rendered : p.title} | EPI-Colorspace`,
      p.meta_box?.summary || 'EPI-Colorspace project case study.',
      `/projects/${p.slug}`,
      typeof p.meta_box?.lead_image === 'string' ? p.meta_box.lead_image : '/parking-notice-sign-mu13jclv-qgtf.jpg'
    ),
  }));
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  const data = await fetchFromWP<Project[]>(`projects?slug=${encodeURIComponent(slug)}&_embed`);
  if (data && Array.isArray(data) && data.length > 0) {
    const p = data[0];
    const titleStr = typeof p.title === 'object' ? p.title.rendered : p.title;
    const leadImg = resolveImageUrl(p.meta_box?.lead_image, '/parking-notice-sign-mu13jclv-qgtf.jpg');
    return {
      ...p,
      meta_box: {
        ...p.meta_box,
        lead_image: leadImg,
      },
      seo: resolveSeoData(
        p,
        `${titleStr} | EPI-Colorspace`,
        p.meta_box?.summary || 'EPI-Colorspace project case study.',
        `/projects/${p.slug}`,
        leadImg
      ),
    };
  }
  const mock = mockProjects.find((p) => p.slug === slug);
  if (mock) {
    return {
      ...mock,
      seo: resolveSeoData(
        mock,
        `${typeof mock.title === 'object' ? mock.title.rendered : mock.title} | EPI-Colorspace`,
        mock.meta_box?.summary || 'EPI-Colorspace project case study.',
        `/projects/${mock.slug}`,
        typeof mock.meta_box?.lead_image === 'string' ? mock.meta_box.lead_image : '/parking-notice-sign-mu13jclv-qgtf.jpg'
      ),
    };
  }
  return undefined;
}

export async function getServices(): Promise<Service[]> {
  const data = await fetchFromWP<Service[]>('services?_embed&per_page=100');
  if (data && Array.isArray(data) && data.length > 0) {
    return data.map((s) => {
      const titleStr = typeof s.title === 'object' ? s.title.rendered : s.title;
      const leadImg = resolveImageUrl(s.meta_box?.lead_image, '/exhibit-booth-display-mu12smxg-u4qk.jpg');
      return {
        ...s,
        meta_box: {
          ...s.meta_box,
          lead_image: leadImg,
        },
        seo: resolveSeoData(
          s,
          `${titleStr} | Turnkey Graphics & Fabrication | EPI-Colorspace`,
          s.meta_box?.summary || 'EPI-Colorspace turnkey graphics service line.',
          `/services/${s.slug}`,
          leadImg
        ),
      };
    });
  }
  return mockServices.map((s) => ({
    ...s,
    seo: resolveSeoData(
      s,
      `${typeof s.title === 'object' ? s.title.rendered : s.title} | Turnkey Graphics & Fabrication | EPI-Colorspace`,
      s.meta_box?.summary || 'EPI-Colorspace turnkey graphics service line.',
      `/services/${s.slug}`,
      typeof s.meta_box?.lead_image === 'string' ? s.meta_box.lead_image : '/exhibit-booth-display-mu12smxg-u4qk.jpg'
    ),
  }));
}

export async function getServiceBySlug(slug: string): Promise<Service | undefined> {
  const data = await fetchFromWP<Service[]>(`services?slug=${encodeURIComponent(slug)}&_embed`);
  if (data && Array.isArray(data) && data.length > 0) {
    const s = data[0];
    const titleStr = typeof s.title === 'object' ? s.title.rendered : s.title;
    const leadImg = resolveImageUrl(s.meta_box?.lead_image, '/exhibit-booth-display-mu12smxg-u4qk.jpg');
    return {
      ...s,
      meta_box: {
        ...s.meta_box,
        lead_image: leadImg,
      },
      seo: resolveSeoData(
        s,
        `${titleStr} | Turnkey Graphics & Fabrication | EPI-Colorspace`,
        s.meta_box?.summary || 'EPI-Colorspace turnkey graphics service line.',
        `/services/${s.slug}`,
        leadImg
      ),
    };
  }
  const mock = mockServices.find((s) => s.slug === slug);
  if (mock) {
    return {
      ...mock,
      seo: resolveSeoData(
        mock,
        `${typeof mock.title === 'object' ? mock.title.rendered : mock.title} | Turnkey Graphics & Fabrication | EPI-Colorspace`,
        mock.meta_box?.summary || 'EPI-Colorspace turnkey graphics service line.',
        `/services/${mock.slug}`,
        typeof mock.meta_box?.lead_image === 'string' ? mock.meta_box.lead_image : '/exhibit-booth-display-mu12smxg-u4qk.jpg'
      ),
    };
  }
  return undefined;
}

export async function getMarkets(): Promise<Market[]> {
  const data = await fetchFromWP<Market[]>('markets?_embed&per_page=100');
  if (data && Array.isArray(data) && data.length > 0) {
    return data.map((m) => {
      const titleStr = typeof m.title === 'object' ? m.title.rendered : m.title;
      const leadImg = resolveImageUrl(m.meta_box?.lead_image, '/hall-exhibit-display-mu12il5t-6a71.jpg');
      return {
        ...m,
        meta_box: {
          ...m.meta_box,
          lead_image: leadImg,
        },
        seo: resolveSeoData(
          m,
          `${titleStr} | Market Sector Graphics | EPI-Colorspace`,
          m.meta_box?.market_summary || 'EPI-Colorspace market sector graphics and installation.',
          `/markets/${m.slug}`,
          leadImg
        ),
      };
    });
  }
  return mockMarkets.map((m) => ({
    ...m,
    seo: resolveSeoData(
      m,
      `${typeof m.title === 'object' ? m.title.rendered : m.title} | Market Sector Graphics | EPI-Colorspace`,
      m.meta_box?.market_summary || 'EPI-Colorspace market sector graphics and installation.',
      `/markets/${m.slug}`,
      typeof m.meta_box?.lead_image === 'string' ? m.meta_box.lead_image : '/hall-exhibit-display-mu12il5t-6a71.jpg'
    ),
  }));
}

export async function getMarketBySlug(slug: string): Promise<Market | undefined> {
  const data = await fetchFromWP<Market[]>(`markets?slug=${encodeURIComponent(slug)}&_embed`);
  if (data && Array.isArray(data) && data.length > 0) {
    const m = data[0];
    const titleStr = typeof m.title === 'object' ? m.title.rendered : m.title;
    const leadImg = resolveImageUrl(m.meta_box?.lead_image, '/hall-exhibit-display-mu12il5t-6a71.jpg');
    return {
      ...m,
      meta_box: {
        ...m.meta_box,
        lead_image: leadImg,
      },
      seo: resolveSeoData(
        m,
        `${titleStr} | Market Sector Graphics | EPI-Colorspace`,
        m.meta_box?.market_summary || 'EPI-Colorspace market sector graphics and installation.',
        `/markets/${m.slug}`,
        leadImg
      ),
    };
  }
  const mock = mockMarkets.find((m) => m.slug === slug);
  if (mock) {
    return {
      ...mock,
      seo: resolveSeoData(
        mock,
        `${typeof mock.title === 'object' ? mock.title.rendered : mock.title} | Market Sector Graphics | EPI-Colorspace`,
        mock.meta_box?.market_summary || 'EPI-Colorspace market sector graphics and installation.',
        `/markets/${mock.slug}`,
        typeof mock.meta_box?.lead_image === 'string' ? mock.meta_box.lead_image : '/hall-exhibit-display-mu12il5t-6a71.jpg'
      ),
    };
  }
  return undefined;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const data = await fetchFromWP<Testimonial[]>('testimonials?_embed&per_page=100');
  if (data && Array.isArray(data) && data.length > 0) {
    return data;
  }
  return mockTestimonials;
}

export async function getPages(): Promise<WPPage[]> {
  const data = await fetchFromWP<WPPage[]>('pages?_embed&per_page=100');
  if (data && Array.isArray(data) && data.length > 0) {
    return data.map((p) => {
      const titleStr = typeof p.title === 'object' ? p.title.rendered : p.title;
      const leadImg = resolveImageUrl(p.meta_box?.lead_image);
      return {
        ...p,
        meta_box: {
          ...p.meta_box,
          lead_image: leadImg,
        },
        seo: resolveSeoData(
          p,
          `${titleStr} | EPI-Colorspace`,
          p.meta_box?.hero_subhead || '',
          p.slug === 'home' ? '/' : `/${p.slug}`,
          leadImg
        ),
      };
    });
  }
  return [];
}

export async function getPageBySlug(slug: string): Promise<WPPage | undefined> {
  const data = await fetchFromWP<WPPage[]>(`pages?slug=${encodeURIComponent(slug)}&_embed`);
  if (data && Array.isArray(data) && data.length > 0) {
    const p = data[0];
    const titleStr = typeof p.title === 'object' ? p.title.rendered : p.title;
    const leadImg = resolveImageUrl(p.meta_box?.lead_image);
    return {
      ...p,
      meta_box: {
        ...p.meta_box,
        lead_image: leadImg,
      },
      seo: resolveSeoData(
        p,
        slug === 'home' ? 'We Bring Visions to Life | EPI-Colorspace' : `${titleStr} | EPI-Colorspace`,
        p.meta_box?.hero_subhead || 'High-impact environmental graphics: design, print, fabrication, and installation across the DMV.',
        slug === 'home' ? '/' : `/${p.slug}`,
        leadImg
      ),
    };
  }
  return undefined;
}
