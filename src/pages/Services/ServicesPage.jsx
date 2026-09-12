import { useEffect } from 'react';
import { motion } from 'motion/react';
import SEO from '../../components/SEO';
import StrokeText from '../../components/StrokeText';

import './ServicesPage.css';
import ServiceCards from './components/ServiceCards';

const services = [
  {
    icon: '🌐',
    title: 'Business Website Development',
    desc: 'Get a modern, fast website for your shop, restaurant, clinic, or business. Show your location, services, product photos, and business hours so local customers can easily find you on Google.',
    tag: 'MOST POPULAR',
    highlights: [
      'Works perfectly on all mobile phones',
      'Direct WhatsApp & Call buttons for fast orders',
      'Google Maps location & business hours setup'
    ]
  },
  {
    icon: '💻',
    title: 'Online Order & Booking Systems',
    desc: 'Let your customers view your menu, book appointments, order products, or send custom service requests directly through your website without paying heavy third-party commissions.',
    tag: 'BUSINESS APPS',
    highlights: [
      'Direct customer ordering with zero commission',
      'Instant online booking & slot reservation',
      'Automatic order details & receipt collection'
    ]
  },
  {
    icon: '📊',
    title: 'Easy Shop Admin Panel',
    desc: 'A super simple, mobile-friendly owner dashboard. Easily change prices, upload new photos, check customer enquiries, and update your product or service list anytime without technical knowledge.',
    tag: 'EASY CONTROL',
    highlights: [
      'Update prices & food/product menus anytime',
      'View & manage daily customer enquiries easily',
      'Upload new photos to your business gallery'
    ]
  },
  {
    icon: '🤖',
    title: 'WhatsApp & AI Auto-Reply Assistant',
    desc: 'Never miss a customer lead again. Automatically reply to customer enquiries on WhatsApp 24/7, send instant booking confirmations, and answer common questions even when your shop is closed.',
    tag: '24/7 AUTOMATION',
    highlights: [
      'Automatic 24/7 customer replies on WhatsApp',
      'Instant order & appointment confirmation alerts',
      'Automated customer reminders & follow-ups'
    ]
  },
  {
    icon: '🎨',
    title: 'Modern Design & Visual Branding',
    desc: 'Make your local business look attractive, trustworthy, and modern online. We design eye-catching layouts, digital menus, price catalogs, and banners tailored specifically to your shop.',
    tag: 'SHOP BRANDING',
    highlights: [
      'Clean, attractive & easy-to-read layout',
      'Custom digital menus & price catalog displays',
      'Professional design that builds customer trust'
    ]
  },
  {
    icon: '🚀',
    title: 'Domain, Hosting & Full Technical Support',
    desc: 'We handle all the technical details for you — business domain registration, fast hosting, SSL security, website maintenance, backups, and friendly support whenever you need help.',
    tag: 'COMPLETE SUPPORT',
    highlights: [
      '1-Year Business Domain & Fast Hosting included',
      'Free SSL Security & Automatic Backups',
      'Friendly WhatsApp & Call Support whenever needed'
    ]
  }
];

export default function ServicesPage() {
  // Sync scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'VyuhaTech Services',
    'itemListElement': services.map((s, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'Service',
        'name': s.title,
        'description': s.desc,
        'provider': {
          '@type': 'Organization',
          'name': 'VyuhaTech',
          'url': 'https://www.vyuhatech.site'
        }
      }
    }))
  };

  return (
    <div className="services-page-container">
      <SEO
        title="Web Development & Software Solutions | VyuhaTech"
        description="Explore VyuhaTech's web development, custom software solutions, admin dashboards, AI business automation, and UI/UX design services."
        canonicalPath="/services"
        schema={servicesSchema}
      />
      {/* Background Enhancements */}
      <div className="services-bg-glow"></div>
      <div className="services-bg-grid"></div>

      <div className="services-content-wrapper">
        {/* Services Header */}
        <header className="services-header">
          <motion.div 
            className="services-badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            ✨ Our Services
          </motion.div>
          
          <h1 className="visually-hidden">Web Development &amp; Software Solutions</h1>
          
          <StrokeText
            text="Digital Solutions Built for Growing Businesses"
            strokeColor="#A78BFA"
            fillColor="#F8FAFC"
            strokeWidth={1.4}
            drawDuration={1.6}
            fillDelay={0.2}
            stagger={0.05}
            ease="power2.out"
            trigger="mount"
            fillMode="wipe"
            fontSize={72}
            fontWeight={800}
            letterSpacing={-2}
            className="services-stroke-heading"
          />

          
          <motion.p 
            className="services-desc"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            We build modern websites, custom business applications, admin dashboards, AI-powered automation, and scalable digital solutions that help businesses streamline operations and grow online.
          </motion.p>
        </header>

        {/* Services Grid */}
        <ServiceCards services={services} />
      </div>
    </div>
  );
}
