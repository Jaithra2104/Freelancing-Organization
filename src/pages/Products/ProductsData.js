import { FaUtensils, FaGlassCheers, FaPills, FaLeaf } from 'react-icons/fa';

export const industryDemos = [
  {
    id: 'restaurant',
    icon: FaUtensils,
    title: 'Restaurant Website',
    description: 'Modern restaurant websites designed to attract more customers with beautiful menus, gallery pages, online enquiries and business information.',
    image: '/images/restaurant.png',
    plans: {
      basic: 'https://project-bolt-sb1-sprzgxvd.vercel.app/',
      pro: 'https://restaurant-pro-version.vercel.app/',
      premium: 'https://restaurant-premium-six.vercel.app/',
      ultra: null
    }
  },
  {
    id: 'functionhall',
    icon: FaGlassCheers,
    title: 'Function Hall Website',
    description: 'Elegant event booking websites with galleries, pricing information, enquiry forms and premium business presentation.',
    image: '/images/function_hall.png',
    plans: {
      basic: 'https://function-hall-basic.vercel.app',
      pro: 'https://function-hall-pro.vercel.app/',
      premium: null,
      ultra: null
    }
  },
  {
    id: 'medicalshop',
    icon: FaPills,
    title: 'Medical Shop Website',
    description: 'Professional medical shop websites to display medicines, services, contact information and customer enquiries.',
    image: '/images/medical_shop.png',
    plans: {
      basic: 'https://medical-store-basic-plan.vercel.app/',
      pro: 'https://medical-store-pro.vercel.app/',
      premium: 'https://medical-store-premium-plan.vercel.app/',
      ultra: null
    }
  },
  {
    id: 'nursery',
    icon: FaLeaf,
    title: 'Nursery Website',
    description: 'Beautiful nursery websites with plant galleries, product showcases and customer enquiry features.',
    image: '/images/nursery.png',
    plans: {
      basic: 'https://nursery-basic-beta.vercel.app/',
      pro: 'https://nursery-pro.vercel.app/',
      premium: 'https://nursery-premium.vercel.app/',
      ultra: null
    }
  }
];
