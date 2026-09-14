#!/usr/bin/env python3
import os
import re

SOURCE_DIR = "/Users/jaypee/Downloads/EPI Colorspace Website"
APP_DIR = "/Users/jaypee/dev/epi-headless"

IMAGE_FALLBACKS = {
    # Tradeshows
    "trade-hero-bg": "/exhibit-booth-display-mu12smxg-u4qk.jpg",
    "trade-intro": "/trade-show-printer-mu13gi32-4z7q.jpg",
    "trade-work-1": "/exhibit-booth-display-mu13gv5v-afm0.jpg",
    "trade-work-2": "/modular-booth-rendering-mu13df64-u8nu.jpg",
    "trade-work-3": "/exhibit-booth-display-mu13k6af-c3hn.jpg",
    "trade-work-4": "/arena-event-facade-mu13hzdz-gl0o.jpg",
    "trade-work-5": "/blue-lobby-displays-mu13q4jd-onxx.jpg",
    "trade-work-6": "/usms-exhibit-display-mu13mugs-hrl8.jpg",

    # Signage
    "sig-hero-bg": "/commanders-building-banner-mu13bbnp-up6d.jpg",
    "sig-intro": "/parking-notice-sign-mu13jclv-qgtf.jpg",
    "sig-work-1": "/real-estate-banner-mu12q7mf-0tjm.jpg",
    "sig-work-2": "/building-facade-graphics-mu13937x-72if.jpg",
    "sig-work-3": "/parking-notice-sign-mu13jclv-qgtf.jpg",
    "sig-work-4": "/retail-window-wrap-mu13ikr7-460d.jpg",
    "sig-work-5": "/community-event-sign-mu13ngzx-8om1.jpg",
    "sig-work-6": "/colonial-one-windows-mu13royg-84om.jpg",

    # Large Format Printing
    "lfp-hero-bg": "/building-facade-graphics-mu13937x-72if.jpg",
    "lfp-intro": "/commanders-building-banner-mu13bbnp-up6d.jpg",
    "lfp-prod-1": "/retail-window-wrap-mu13ikr7-460d.jpg",
    "lfp-prod-2": "/anacostia-exhibit-wall-mu13p5yi-dm4c.jpg",
    "lfp-prod-3": "/real-estate-banner-mu12q7mf-0tjm.jpg",
    "lfp-prod-4": "/commanders-building-banner-mu13c8xa-kpu3.jpg",
    "lfp-prod-5": "/community-event-sign-mu13ngzx-8om1.jpg",
    "lfp-prod-6": "/blue-lobby-displays-mu13q4jd-onxx.jpg",
    "lfp-work-1": "/colonial-one-windows-mu13royg-84om.jpg",
    "lfp-work-2": "/building-facade-graphics-mu13937x-72if.jpg",
    "lfp-work-3": "/commanders-building-banner-mu13c8xa-kpu3.jpg",
    "lfp-work-4": "/real-estate-banner-mu12q7mf-0tjm.jpg",
    "lfp-work-5": "/spiral-lobby-graphics-mu13h9gi-cfz7.jpg",
    "lfp-work-6": "/arena-event-facade-mu13hzdz-gl0o.jpg",

    # Corporate Branding
    "corp-hero-bg": "/gw-reception-area-mu12cgn5-nh72.jpg",
    "corp-intro": "/spiral-lobby-graphics-mu13h9gi-cfz7.jpg",
    "corp-framing": "/fbi-wanted-display-mu1372so-z1pt.jpg",
    "corp-work-1": "/gw-reception-area-mu12cgn5-nh72.jpg",
    "corp-work-2": "/blue-lobby-displays-mu13q4jd-onxx.jpg",
    "corp-work-3": "/spiral-lobby-graphics-mu13h9gi-cfz7.jpg",
    "corp-work-4": "/colonial-one-windows-mu13royg-84om.jpg",
    "corp-work-5": "/fbi-wanted-display-mu1372so-z1pt.jpg",
    "corp-work-6": "/building-facade-graphics-mu13937x-72if.jpg",

    # Exhibits and Displays
    "exh-hero-bg": "/exhibit-booth-display-mu13k6af-c3hn.jpg",
    "exh-intro": "/usms-exhibit-display-mu13mugs-hrl8.jpg",
    "exh-feature": "/community-event-sign-mu13ngzx-8om1.jpg",
    "exh-work-1": "/anacostia-exhibit-wall-mu13p5yi-dm4c.jpg",
    "exh-work-2": "/hall-exhibit-display-mu12il5t-6a71.jpg",
    "exh-work-3": "/fbi-wanted-display-mu1372so-z1pt.jpg",
    "exh-work-4": "/usms-exhibit-display-mu13mugs-hrl8.jpg",
    "exh-work-5": "/exhibit-booth-display-mu13gv5v-afm0.jpg",
    "exh-work-6": "/modular-booth-rendering-mu13df64-u8nu.jpg",

    # Environmental Graphics
    "env-hero-bg": "/anacostia-exhibit-wall-mu13p5yi-dm4c.jpg",
    "env-intro": "/blue-lobby-displays-mu13q4jd-onxx.jpg",
    "env-zone-1": "/spiral-lobby-graphics-mu13h9gi-cfz7.jpg",
    "env-zone-2": "/colonial-one-windows-mu13royg-84om.jpg",
    "env-zone-3": "/retail-window-wrap-mu13ikr7-460d.jpg",
    "env-zone-4": "/building-facade-graphics-mu13937x-72if.jpg",
    "env-impact": "/colonial-one-windows-mu13royg-84om.jpg",
    "env-work-1": "/commanders-building-banner-mu13c8xa-kpu3.jpg",
    "env-work-2": "/colonial-one-windows-mu13royg-84om.jpg",
    "env-work-3": "/parking-notice-sign-mu13jclv-qgtf.jpg",
    "env-work-4": "/building-facade-graphics-mu13937x-72if.jpg",
    "env-work-5": "/spiral-lobby-graphics-mu13h9gi-cfz7.jpg",
    "env-work-6": "/real-estate-banner-mu12q7mf-0tjm.jpg",

    # Museums
    "mus-hero-bg": "/museum-entrance-banner-mu12w0v6-v6y0.jpg",
    "mus-intro": "/hall-exhibit-display-mu12il5t-6a71.jpg",
    "mus-cap-1": "/anacostia-exhibit-wall-mu13p5yi-dm4c.jpg",
    "mus-cap-2": "/fbi-wanted-display-mu1372so-z1pt.jpg",
    "mus-cap-3": "/usms-exhibit-display-mu13mugs-hrl8.jpg",
    "mus-cap-4": "/exhibit-booth-display-mu13k6af-c3hn.jpg",
    "mus-work-1": "/anacostia-exhibit-wall-mu13p5yi-dm4c.jpg",
    "mus-work-2": "/hall-exhibit-display-mu12il5t-6a71.jpg",
    "mus-work-3": "/museum-entrance-banner-mu12w0v6-v6y0.jpg",
    "mus-work-4": "/community-event-sign-mu13ngzx-8om1.jpg",
    "mus-work-5": "/fbi-wanted-display-mu1372so-z1pt.jpg",
    "mus-work-6": "/usms-exhibit-display-mu13mugs-hrl8.jpg",

    # Commercial Real Estate
    "cre-hero-bg": "/real-estate-banner-mu12q7mf-0tjm.jpg",
    "cre-intro": "/parking-notice-sign-mu13jclv-qgtf.jpg",
    "cre-type-1": "/building-facade-graphics-mu13937x-72if.jpg",
    "cre-type-2": "/spiral-lobby-graphics-mu13h9gi-cfz7.jpg",
    "cre-type-3": "/retail-window-wrap-mu13ikr7-460d.jpg",
    "cre-type-4": "/parking-notice-sign-mu13jclv-qgtf.jpg",
    "cre-work-1": "/retail-window-wrap-mu13ikr7-460d.jpg",
    "cre-work-2": "/spiral-lobby-graphics-mu13h9gi-cfz7.jpg",
    "cre-work-3": "/parking-notice-sign-mu13jclv-qgtf.jpg",
    "cre-work-4": "/real-estate-banner-mu12q7mf-0tjm.jpg",
    "cre-work-5": "/colonial-one-windows-mu13royg-84om.jpg",
    "cre-work-6": "/community-event-sign-mu13ngzx-8om1.jpg",
}

def clean_html(html):
    # Fix links
    replacements = [
        (r'href=[\"\']Home\.html[\"\']', 'href="/"'),
        (r'href=[\"\']Services\.html[\"\']', 'href="/services"'),
        (r'href=[\"\']Tradeshows\.html[\"\']', 'href="/services/tradeshows"'),
        (r'href=[\"\']Signage Solutions\.html[\"\']', 'href="/services/signage-solutions"'),
        (r'href=[\"\']Large Format Printing\.html[\"\']', 'href="/services/large-format-printing"'),
        (r'href=[\"\']Corporate Branding\.html[\"\']', 'href="/services/corporate-branding"'),
        (r'href=[\"\']Exhibits and Displays\.html[\"\']', 'href="/services/exhibits-and-displays"'),
        (r'href=[\"\']Environmental Graphics\.html[\"\']', 'href="/services/environmental-graphics"'),
        (r'href=[\"\']Projects\.html[\"\']', 'href="/projects"'),
        (r'href=[\"\']Project Case Study Template\.html[\"\']', 'href="/projects/jbg-smith-crystal-city-garage"'),
        (r'href=[\"\']Markets\.html[\"\']', 'href="/markets"'),
        (r'href=[\"\']Museums and Cultural (?:%7C|\|) Markets\.html[\"\']', 'href="/markets/museums-and-cultural"'),
        (r'href=[\"\']Commercial Real Estate (?:%7C|\|) Markets\.html[\"\']', 'href="/markets/commercial-real-estate"'),
        (r'href=[\"\']Contact Us\.html[\"\']', 'href="/contact"'),
    ]
    for pattern, repl in replacements:
        html = re.sub(pattern, repl, html, flags=re.IGNORECASE)

    # Convert <image-slot> to <img>
    def replace_slot(match):
        tag = match.group(0)
        id_m = re.search(r'id=[\"\']([^\"\']+)[\"\']', tag)
        slot_id = id_m.group(1) if id_m else ""
        src_m = re.search(r'src=[\"\']([^\"\']+)[\"\']', tag)
        if src_m:
            src = src_m.group(1).replace("./", "/")
        else:
            src = IMAGE_FALLBACKS.get(slot_id, "/commanders-building-banner-mu13c8xa-kpu3.jpg")
        return f'<img src="{src}" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block" />'

    html = re.sub(r'<image-slot[^>]*>(?:</image-slot>)?', replace_slot, html)
    return html

def process_file(source_file, target_file, css_name, props_type="service"):
    raw = open(os.path.join(SOURCE_DIR, source_file), "r", encoding="utf-8").read()

    # Extract body sections between </header> and <footer
    body_m = re.search(r'</header>\s*(.*?)\s*(?:<footer|<nav class=[\"\']sig-drawer)', raw, re.DOTALL)
    if not body_m:
        print(f"Could not match body in {source_file}")
        return

    body = clean_html(body_m.group(1).strip())

    content = f"""---
interface Props {{
  {props_type}?: any;
}}
const {{ {props_type} }} = Astro.props;
import '../../styles/{css_name}';
---

{body}
"""

    with open(os.path.join(APP_DIR, target_file), "w", encoding="utf-8") as out:
        out.write(content)
    print(f"Generated {target_file}")

# Generate all 6 service components
process_file("Tradeshows.html", "src/components/services/TradeshowsContent.astro", "tradeshows.css", "service")
process_file("Signage Solutions.html", "src/components/services/SignageSolutionsContent.astro", "signage-solutions.css", "service")
process_file("Large Format Printing.html", "src/components/services/LargeFormatPrintingContent.astro", "large-format-printing.css", "service")
process_file("Corporate Branding.html", "src/components/services/CorporateBrandingContent.astro", "corporate-branding.css", "service")
process_file("Exhibits and Displays.html", "src/components/services/ExhibitsAndDisplaysContent.astro", "exhibits-displays.css", "service")
process_file("Environmental Graphics.html", "src/components/services/EnvironmentalGraphicsContent.astro", "environmental-graphics.css", "service")

# Generate market components
process_file("Museums and Cultural | Markets.html", "src/components/markets/MuseumsAndCulturalContent.astro", "markets-museums.css", "market")
process_file("Commercial Real Estate | Markets.html", "src/components/markets/CommercialRealEstateContent.astro", "markets-cre.css", "market")

print("All components generated successfully!")
