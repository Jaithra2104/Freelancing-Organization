import { useEffect } from 'react';
import { motion } from 'motion/react';
import SEO from '../../components/SEO';
import StrokeText from '../../components/StrokeText';

import './ServicesPage.css';
import ServiceCards from './components/ServiceCards';

const services = [
  {
    iconType: 'globe',
    title: 'Get Your Business Online',
    desc: 'Give your business a professional online presence so customers can easily find you, see what you offer, check your location and timings, and contact you whenever they need you.',
    tag: 'MOST POPULAR',
    highlights: [
      'Works beautifully on mobile phones',
      'Show your products, services & prices',
      'Customers can easily find your location',
      'One-click WhatsApp & Call buttons'
    ],
    modalIntro: 'Your customers are already searching online. Give them a simple place to discover your business, understand what you offer, and contact you.',
    modalHelps: [
      'Customers can find your business online',
      'Your business looks more professional',
      'Customers can see products and services',
      'Customers can check your location and timings',
      'Customers can contact you instantly'
    ],
    modalGets: [
      'Professional business website',
      'Mobile-friendly pages',
      'Products / services section',
      'Business photos',
      'Location & Google Maps',
      'WhatsApp contact',
      'Call button',
      'Enquiry form',
      'Business hours',
      'Social media links'
    ],
    perfectFor: 'Shops • Restaurants • Salons • Clinics • Gyms • Boutiques • Local Services',
    ctaText: 'Get My Business Online →'
  },
  {
    iconType: 'cart',
    title: 'Let Customers Order & Book Online',
    desc: 'Give your customers an easy way to order products, book appointments, reserve a time, or request your services directly from your website.',
    tag: 'BUSINESS ORDERS',
    highlights: [
      'Customers can place orders from anywhere',
      'Customers can book appointments or time slots',
      'Receive new order & booking requests easily',
      'Reduce unnecessary calls and manual work'
    ],
    modalIntro: 'Stop depending only on phone calls and messages. Let customers place orders or request appointments whenever it is convenient for them.',
    modalHelps: [
      'Customers can order without calling',
      'Customers can request appointments',
      'Customers can select preferred time slots',
      'You receive new requests in one place',
      'Less manual work for you'
    ],
    modalGets: [
      'Online order requests',
      'Appointment booking',
      'Time-slot selection',
      'Booking request management',
      'Customer details collection',
      'Order details',
      'Booking notifications',
      'WhatsApp communication'
    ],
    perfectFor: 'Restaurants • Salons • Clinics • Doctors • Repair Services • Consultants • Service Businesses',
    ctaText: 'Start Taking Orders & Bookings →'
  },
  {
    iconType: 'dashboard',
    title: 'Manage Your Business Easily',
    desc: 'Update your business information yourself without depending on a developer every time. Change prices, add products, upload photos, and check customer enquiries from one simple place.',
    tag: 'EASY CONTROL',
    highlights: [
      'Change prices & product details anytime',
      'Upload new photos whenever you want',
      'See and manage customer enquiries',
      'Keep your services and products up to date'
    ],
    modalIntro: 'You should not have to call a developer every time you want to change a price, add a product, or upload a new photo.',
    modalHelps: [
      'Update information yourself',
      'Keep prices current',
      'Add new products',
      'Change photos',
      'Check customer enquiries',
      'Manage bookings'
    ],
    modalGets: [
      'Simple owner dashboard',
      'Product management',
      'Service management',
      'Price updates',
      'Photo updates',
      'Customer enquiry management',
      'Booking management',
      'Business information updates'
    ],
    perfectFor: 'Shops • Restaurants • Boutiques • Salons • Clinics • Small Businesses',
    ctaText: 'Make My Business Easier to Manage →'
  },
  {
    iconType: 'bot',
    title: 'Let Your Business Handle Customers Automatically',
    desc: 'Stay connected with your customers even when you are busy. Automate common questions, booking updates, reminders, and customer messages.',
    tag: 'SMART BUSINESS',
    highlights: [
      'Automatically answer common customer questions',
      'Send WhatsApp updates and notifications',
      'Remind customers about appointments',
      'Help customers even outside business hours'
    ],
    modalIntro: 'Your business can stay connected with customers even while you are busy serving them.',
    modalHelps: [
      'Answer common questions automatically',
      'Send appointment reminders',
      'Send customer updates',
      'Reduce repetitive messages',
      'Respond outside business hours'
    ],
    modalGets: [
      'Smart customer assistant',
      'Automated WhatsApp messages',
      'Customer notifications',
      'Appointment reminders',
      'Follow-up messages',
      'Common-question assistance'
    ],
    perfectFor: 'Busy Shops • Clinics • Salons • Restaurants • Service Businesses • Appointment-Based Businesses',
    ctaText: 'Automate My Customer Support →'
  },
  {
    iconType: 'mappin',
    title: 'Help More Customers Find You',
    desc: 'Make it easier for people nearby to discover your business when they search online for the products or services you provide.',
    tag: 'GET FOUND',
    highlights: [
      'Help customers discover your business online',
      'Show your location and business hours',
      'Display your services and products clearly',
      'Make it easy for customers to contact you'
    ],
    modalIntro: 'Make it easier for people nearby to discover your business when they are looking for the products or services you provide.',
    modalHelps: [
      'More people can discover your business',
      'Customers can see where you are located',
      'Customers can check your business hours',
      'Customers can quickly contact you',
      'Your online presence looks complete and trustworthy'
    ],
    modalGets: [
      'Business information',
      'Location display',
      'Business hours',
      'Products / services information',
      'Contact options',
      'Google Maps',
      'Search-friendly business content'
    ],
    perfectFor: 'Local Shops • Restaurants • Clinics • Salons • Gyms • Boutiques • Service Providers',
    ctaText: 'Help Customers Find My Business →'
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
