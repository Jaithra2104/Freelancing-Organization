import { useEffect } from 'react';

const BASE_URL = 'https://www.vyuhatech.site';
const DEFAULT_TITLE = 'VyuhaTech | Web Development & Software Solutions';
const DEFAULT_DESCRIPTION = 'VyuhaTech builds modern websites, web applications, and custom software solutions that turn ideas into reliable digital products.';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;
const DEFAULT_IMAGE_ALT = 'VyuhaTech — From Vision to Reality | Web Development & Software Solutions';

/**
 * SEO component for dynamic head metadata, canonical links, Open Graph,
 * Twitter cards, and Schema.org JSON-LD structured data.
 */
export default function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  canonicalPath = '',
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  ogImageAlt = DEFAULT_IMAGE_ALT,
  twitterCard = 'summary_large_image',
  schema = null,
  noindex = false,
}) {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper to set or update meta tag by selector
    const setMeta = (attribute, name, content) => {
      if (!content) return;
      let element = document.head.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to set link tag
    const setLink = (rel, href) => {
      if (!href) return;
      let element = document.head.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // Formulate canonical URL
    const canonicalUrl = canonicalPath.startsWith('http')
      ? canonicalPath
      : `${BASE_URL}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;

    // 2. Primary Meta Tags
    setMeta('name', 'description', description);
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');
    setLink('canonical', canonicalUrl);

    // 3. Open Graph Metadata
    setMeta('property', 'og:site_name', 'VyuhaTech');
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:image', ogImage);
    setMeta('property', 'og:image:width', '1200');
    setMeta('property', 'og:image:height', '630');
    setMeta('property', 'og:image:alt', ogImageAlt);

    // 4. Twitter / X Metadata
    setMeta('name', 'twitter:card', twitterCard);
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);
    setMeta('name', 'twitter:image:alt', ogImageAlt);

    // 5. JSON-LD Schema Insertion
    const schemaScriptId = 'json-ld-schema';
    let existingScript = document.head.querySelector(`#${schemaScriptId}`);

    if (schema) {
      if (!existingScript) {
        existingScript = document.createElement('script');
        existingScript.setAttribute('id', schemaScriptId);
        existingScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(existingScript);
      }
      existingScript.textContent = JSON.stringify(schema);
    } else if (existingScript) {
      existingScript.remove();
    }
  }, [title, description, canonicalPath, ogType, ogImage, ogImageAlt, twitterCard, schema, noindex]);

  return null;
}
