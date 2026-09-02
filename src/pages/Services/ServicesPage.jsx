import { useEffect } from 'react';
import { motion } from 'motion/react';
import SEO from '../../components/SEO';
import StrokeText from '../../components/StrokeText';

import './ServicesPage.css';
import ServiceCards from './components/ServiceCards';

const services = [
  {
    icon: '🌐',
    title: 'Website Development',
    desc: 'Build fast, responsive, SEO-friendly business websites that create a strong online presence and convert visitors into customers.',
    tag: 'CORE SERVICE',
  },
  {
    icon: '💻',
    title: 'Business Web Applications',
    desc: 'Develop custom web applications tailored to automate workflows, manage operations, and improve business productivity.',
    tag: 'BUSINESS SOLUTIONS',
  },
  {
    icon: '📊',
    title: 'Admin Dashboards & CMS',
    desc: 'Create secure management dashboards that allow business owners to manage bookings, products, customers, galleries, reports, and content effortlessly.',
    tag: 'MANAGEMENT',
  },
  {
    icon: '🤖',
    title: 'AI & Business Automation',
    desc: 'Integrate WhatsApp automation, AI chatbots, email workflows, appointment reminders, and intelligent business automation.',
    tag: 'AUTOMATION',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    desc: 'Craft elegant, responsive, and intuitive interfaces that provide exceptional user experiences across every device.',
    tag: 'DESIGN',
  },
  {
    icon: '🚀',
    title: 'Hosting, Deployment & Maintenance',
    desc: 'Handle domain setup, hosting, SSL, deployment, monitoring, backups, maintenance, updates, and long-term technical support.',
    tag: 'SUPPORT',
  },
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
