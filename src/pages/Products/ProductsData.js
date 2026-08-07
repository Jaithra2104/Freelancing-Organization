import { FaUtensils, FaGlassCheers, FaPills, FaLeaf } from 'react-icons/fa';

export const industryDemos = [
  {
    id: 'restaurant',
    icon: FaUtensils,
    title: 'Restaurant Website',
    description: 'Modern restaurant websites designed to attract more customers with beautiful menus, gallery pages, online enquiries and business information.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    plans: {
      basic: null,
      pro: null,
      premium: null,
      ultra: null
    }
  },
  {
    id: 'functionhall',
    icon: FaGlassCheers,
    title: 'Function Hall Website',
    description: 'Elegant event booking websites with galleries, pricing information, enquiry forms and premium business presentation.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    plans: {
      basic: 'https://nursery-basic-beta.vercel.app/',
      pro: 'https://nursery-pro.vercel.app/',
      premium: null,
      ultra: null
    }
  }
];
