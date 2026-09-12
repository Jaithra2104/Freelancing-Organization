export const launchConfig = {
  enabled: false,
  discountPercent: 20,
  maxClients: 10,
  spotsAvailable: 10
};

export const referralConfig = {
  enabled: true,
  rewardPercent: 10,
  maxCreditPercent: 30
};

export const pricingPlans = [
  {
    icon: '🌱',
    name: 'BASIC',
    price: '₹9,999',
    unit: 'Starting from',
    desc: 'Perfect for small businesses that need a professional and trustworthy online presence.',
    features: [
      'Professional Business Website',
      'Modern & Responsive Design',
      'Mobile & Tablet Friendly',
      'Home Page',
      'About Us Page',
      'Services / Products Page',
      'Gallery Section',
      'Contact Page',
      'Google Maps Integration',
      'WhatsApp Contact Button',
      'Social Media Integration',
      'Contact Form',
      'Basic SEO Setup',
      'One Year Domain Setup',
      'One Year Hosting',
      'SSL Security',
      'Basic Performance Optimization'
    ],
    buttonText: 'Get Started',
    popular: false
  },
  {
    icon: '🚀',
    name: 'PRO',
    price: '₹14,999',
    unit: 'Starting from',
    desc: 'Perfect for growing businesses that want more engagement, enquiries, and conversions.',
    popular: true,
    features: [
      'Everything in Basic',
      'Premium UI/UX Design',
      'Advanced Responsive Design',
      'Online Enquiry Forms',
      'Booking Request System',
      'Customer Enquiry Collection',
      'Interactive Website Sections',
      'Premium Animations & Transitions',
      'Testimonials Section',
      'FAQ Section',
      'Lead Generation Forms',
      'WhatsApp Business Integration',
      'Basic Google Search Optimization',
      'Google Analytics Integration',
      'Better Search Visibility',
      'One Year Domain & Hosting',
      'Performance Optimization',
      'Conversion-Focused Design'
    ],
    buttonText: 'Choose Pro'
  },
  {
    icon: '💎',
    name: 'PREMIUM',
    price: '₹19,999',
    unit: 'Starting from',
    desc: 'Ideal for businesses that want a powerful website with content management, customer management, and business automation features.',
    popular: false,
    features: [
      'Everything in Pro',
      'Dynamic Website',
      'Owner Login Panel',
      'Admin Dashboard',
      'Update Website Content Anytime',
      'Update Photos & Gallery Anytime',
      'Manage Services & Prices',
      'Manage Customer Enquiries',
      'Manage Booking Requests',
      'Customer Database',
      'Online Booking Management',
      'Business Reports & Analytics',
      'Advanced SEO Optimization',
      'Google Analytics & Tracking',
      'Conversion Optimization',
      'Advanced Website Security',
      'Automated Email Notifications',
      'Premium User Experience',
      'Performance & Speed Optimization',
      'Content Management System'
    ],
    buttonText: 'Go Premium'
  },
  {
    icon: '👑',
    name: 'ULTRA',
    price: '₹24,999',
    unit: 'Starting from',
    desc: 'Complete digital business automation solution for businesses ready to scale.',
    popular: false,
    features: [
      'Everything in Premium',
      'Advanced Admin Dashboard',
      'WhatsApp Automation',
      'AI Customer Assistant',
      '24/7 Automated Customer Support',
      'Appointment Management System',
      'Automatic Customer Notifications',
      'Automated Customer Follow-Ups',
      'Customer Management System',
      'Advanced Booking System',
      'Lead Management System',
      'Business Analytics Dashboard',
      'Advanced Business Reports',
      'Sales & Enquiry Tracking',
      'Customer Behaviour Insights',
      'Email Automation',
      'WhatsApp Notifications',
      'Complete Business Automation',
      'Priority Support',
      'Advanced Security',
      'Regular Website Maintenance',
      'Performance Monitoring',
      'Business Growth Insights'
    ],
    buttonText: 'Get Ultra'
  }
];

export const includedFeatures = [
  {
    icon: '🌍',
    title: 'Business Domain',
    desc: 'We help register your business website name for one year.'
  },
  {
    icon: '☁️',
    title: 'Website Hosting',
    desc: 'Your website stays online securely for one year.'
  },
  {
    icon: '📱',
    title: 'Works on Every Device',
    desc: 'Looks beautiful on phones, tablets and computers.'
  },
  {
    icon: '⚡',
    title: 'Fast Performance',
    desc: 'Your website loads quickly and provides a smooth experience.'
  },
  {
    icon: '🔒',
    title: 'Safe & Reliable',
    desc: 'Built with modern standards to keep your website secure and stable.'
  },
  {
    icon: '🤝',
    title: 'Launch Support',
    desc: 'We help you launch your website and guide you through everything.'
  }
];

export const carePlans = [
  {
    icon: '🌱',
    name: 'BASIC CARE',
    price: '₹999',
    unit: '/ Month',
    features: [
      'Small Content Updates',
      'Website Health Checks',
      'Regular Backups',
      'Bug Fixes'
    ]
  },
  {
    icon: '🚀',
    name: 'BUSINESS CARE',
    price: '₹2499',
    unit: '/ Month',
    features: [
      'Everything in Basic PLUS',
      'New Photos Added',
      'Business Information Updates',
      'Monthly Website Check',
      'Priority Support'
    ]
  },
  {
    icon: '👑',
    name: 'PREMIUM CARE',
    price: '₹4999',
    unit: '/ Month',
    features: [
      'Everything Included PLUS',
      'Fast Priority Support',
      'New Feature Assistance',
      'Regular Improvements',
      'Monthly Website Report',
      'Emergency Help'
    ]
  }
];

export const deliverablesList = [
  'Live Website Link',
  'Business Domain Details',
  'Website Login Details (if applicable)',
  'One-to-One Training Session',
  'Easy User Guide',
  'Website Backup',
  'Launch Support',
  'Friendly Technical Support'
];

export const pricingFAQs = [
  {
    q: 'Can I upgrade my plan later?',
    a: 'Absolutely! As your business grows, we can easily upgrade your plan to add more features like online bookings, AI assistants, or customer management portals.'
  },
  {
    q: 'Who owns the website?',
    a: 'You do. Once the website is completed and paid for, you have full ownership of the website and all its content.'
  },
  {
    q: 'Will my website work on mobile phones?',
    a: 'Yes! Over 70% of local business searches happen on mobile devices. Every website we build is fully responsive and looks beautiful on phones, tablets, and computers.'
  },
  {
    q: 'Can I request changes after launch?',
    a: 'Yes, minor adjustments are included in our launch support. For ongoing changes like new photos, menu updates, or text changes, we highly recommend our affordable Website Care Plans.'
  },
  {
    q: 'How long does it take to build my website?',
    a: 'Most standard business websites take 2 to 4 weeks from our initial consultation to the final live launch, depending on the complexity of the project.'
  },
  {
    q: 'Do you provide support after launch?',
    a: 'Yes, every plan comes with basic launch support. We also offer dedicated monthly Website Care Plans to handle all updates, security, and maintenance so you can focus on running your business.'
  }
];
