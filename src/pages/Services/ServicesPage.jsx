import { useEffect } from 'react';
import { motion } from 'motion/react';
import SEO from '../../components/SEO';
import StrokeText from '../../components/StrokeText';

import './ServicesPage.css';
import ServiceCards from './components/ServiceCards';

const services = [
  {
    icon: '🌐',
    title: 'Custom Web Development',
    desc: 'High-performance, bespoke web architectures designed for maximum conversion, search visibility, and seamless cross-device responsiveness.',
    tag: 'CORE ENGINEERING',
    highlights: [
      'High-Speed Next.js & React Frameworks',
      'Mobile-First & Cross-Platform Optimization',
      'Technical SEO & Core Web Vitals Mastery'
    ]
  },
  {
    icon: '💻',
    title: 'Enterprise Web Applications',
    desc: 'Tailored web software and SaaS platforms built to digitize core operations, streamline internal workflows, and scale business output.',
    tag: 'SCALABLE PLATFORMS',
    highlights: [
      'Custom Business Portals & Client Dashboards',
      'Secure REST/GraphQL API Architectures',
      'Role-Based Access Control & Data Encryption'
    ]
  },
  {
    icon: '📊',
    title: 'Admin Dashboards & Custom CMS',
    desc: 'Centralized operational hubs enabling non-technical teams to effortlessly manage inventories, bookings, customer records, and live content.',
    tag: 'BUSINESS CONTROL',
    highlights: [
      'Real-Time Sales & Booking Management',
      'Visual Content & Gallery Publishing Controls',
      'Exportable Financial & Customer Analytics'
    ]
  },
  {
    icon: '🤖',
    title: 'AI Assistants & Automation',
    desc: 'Intelligent automation workflows and 24/7 AI agents that handle customer support, schedule appointments, and execute WhatsApp follow-ups.',
    tag: 'SMART AUTOMATION',
    highlights: [
      '24/7 Conversational AI Customer Support',
      'Automated WhatsApp & Email Workflows',
      'Instant Lead Routing & CRM Synchronization'
    ]
  },
  {
    icon: '🎨',
    title: 'Strategic UI/UX & Brand Design',
    desc: 'Human-centered digital interfaces crafted to captivate users, eliminate friction, lower bounce rates, and deliver memorable brand experiences.',
    tag: 'PRODUCT DESIGN',
    highlights: [
      'High-Fidelity Interactive Prototypes',
      'Modern Dark Mode & Glassmorphism Aesthetics',
      'Micro-Interactions & Fluid Motion FX'
    ]
  },
  {
    icon: '🚀',
    title: 'DevOps & Managed Infrastructure',
    desc: 'End-to-end cloud hosting setup, SSL security hardening, continuous performance monitoring, and guaranteed 99.9% operational reliability.',
    tag: 'MANAGED INFRASTRUCTURE',
    highlights: [
      'Global Edge CDN & SSL Hardening',
      'Automated Backups & Disaster Recovery',
      'Dedicated Technical Maintenance & SLA'
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
