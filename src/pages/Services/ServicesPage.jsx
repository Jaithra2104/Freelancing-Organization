import { useEffect } from 'react';
import { motion } from 'motion/react';
import SEO from '../../components/SEO';
import StrokeText from '../../components/StrokeText';

import './ServicesPage.css';
import ServiceCards from './components/ServiceCards';

const services = [
  {
    icon: '🌐',
    title: 'Get Your Business Online',
    desc: 'Get a professional online presence for your business so customers can easily find you, see what you offer, check your location and timings, and contact you whenever they need you.',
    tag: 'MOST POPULAR',
    highlights: [
      'Works beautifully on mobile phones',
      'Show your products, services & prices',
      'Customers can easily find your location',
      'One-click WhatsApp & Call buttons'
    ],
    detailedText: 'Your customers can see your business from anywhere, even before they visit your shop. We create a clean, modern online website for your business with your products, opening hours, Google Maps location, and instant WhatsApp contact buttons so local customers can reach you in one tap.',
    modalIncludes: [
      'Custom business website design',
      'Mobile & tablet friendly layout',
      'Google Maps & address integration',
      'One-click WhatsApp & phone call buttons',
      'Product & service showcase gallery',
      'Simple online contact & enquiry form'
    ]
  },
  {
    icon: '🛒',
    title: 'Let Customers Order & Book Online',
    desc: 'Give your customers an easy way to order products, book appointments, reserve a time, or request your services directly from your website.',
    tag: 'BUSINESS ORDERS',
    highlights: [
      'Customers can place orders from anywhere',
      'Customers can book appointments or time slots',
      'Receive new order & booking requests easily',
      'Reduce unnecessary calls and manual work'
    ],
    detailedText: 'Allow your customers to order food, products, or reserve appointments 24/7 without having to call you every time. Orders and booking requests arrive organized directly to your phone so you never lose a sale.',
    modalIncludes: [
      'Online product catalog & menu display',
      'Appointment & time slot reservation system',
      'Direct WhatsApp order notifications',
      'Instant customer booking confirmations',
      'Easy order enquiry management',
      'Zero third-party commission fees'
    ]
  },
  {
    icon: '📊',
    title: 'Manage Your Business Easily',
    desc: 'Keep your business information updated yourself. Change prices, add products, upload photos, update services, and check customer enquiries without needing technical knowledge.',
    tag: 'EASY CONTROL',
    highlights: [
      'Change prices & product details anytime',
      'Upload new photos whenever you want',
      'See and manage customer enquiries',
      'Keep your services and products up to date'
    ],
    detailedText: 'No technical skills needed. You get a simple owner login panel on your phone where you can change product prices, upload new shop photos, manage customer enquiries, and update your menu or service list anytime.',
    modalIncludes: [
      'Simple owner login on phone or laptop',
      'Update prices & items in seconds',
      'Add or remove shop photos anytime',
      'View & organize customer enquiries',
      'No developer needed for simple edits',
      'One-click website updates'
    ]
  },
  {
    icon: '🤖',
    title: 'Let Your Business Handle Customers Automatically',
    desc: 'Stay connected with your customers even when you are busy. Automate common questions, booking updates, reminders, and WhatsApp messages.',
    tag: 'SMART BUSINESS',
    highlights: [
      'Automatically answer common customer questions',
      'Send WhatsApp updates and notifications',
      'Remind customers about appointments',
      'Help customers even outside business hours'
    ],
    detailedText: 'Save hours of manual effort every day. Automatic auto-replies on WhatsApp answer customer questions about pricing, availability, and location 24/7 even when your shop is closed or you are busy serving in-store clients.',
    modalIncludes: [
      '24/7 automated WhatsApp customer replies',
      'Instant answers to location & pricing questions',
      'Automatic appointment & booking reminders',
      'Follow-up messages for customer enquiries',
      'Custom auto-response messages',
      'Runs automatically day and night'
    ]
  },
  {
    icon: '📍',
    title: 'Help More Customers Find You',
    desc: 'Make it easier for people nearby to discover your business when they search online for the products or services you provide.',
    tag: 'GET FOUND',
    highlights: [
      'Show your business on Google',
      'Display your location and business hours',
      'Help customers discover your services',
      'Make it easy for customers to contact you'
    ],
    detailedText: 'When people in your city search for your products or services online, we make sure your business pops up on Google with your phone number, address, customer reviews, and map location.',
    modalIncludes: [
      'Google Maps & Search profile optimization',
      'Local search visibility for your area',
      'Display shop address, phone & working hours',
      'Direct direction maps for new customers',
      'Customer review & trust badges',
      'Mobile-friendly search appearance'
    ]
  },
  {
    icon: '💬',
    title: 'Stay Connected With Your Customers',
    desc: 'Keep your customers coming back with simple reminders, updates, offers, and follow-up messages.',
    tag: 'CUSTOMER CARE',
    highlights: [
      'Send customer updates & announcements',
      'Send appointment & booking reminders',
      'Follow up with customer enquiries',
      'Keep customers connected with your business'
    ],
    detailedText: 'Turn one-time visitors into repeat buyers. Send automated appointment reminders, offer announcements, and polite follow-up messages so customers keep returning to your business.',
    modalIncludes: [
      'Customer contact list organization',
      'Automated appointment reminder alerts',
      'Offer & festival greeting messages',
      'Polite customer enquiry follow-ups',
      'Repeat customer engagement',
      'Friendly technical & support setup'
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
        title="Everything Your Business Needs to Grow Online | VyuhaTech"
        description="We help local businesses get found, get more customers, manage their work easily, and save time with simple digital solutions."
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
            ✨ What We Do For Your Business
          </motion.div>
          
          <h1 className="visually-hidden">Everything Your Business Needs to Grow Online</h1>
          
          <StrokeText
            text="Everything Your Business Needs to Grow Online"
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
            We help local businesses get found, get more customers, manage their work easily, and save time with simple digital solutions.
          </motion.p>
        </header>

        {/* Services Grid */}
        <ServiceCards services={services} />
      </div>
    </div>
  );
}
