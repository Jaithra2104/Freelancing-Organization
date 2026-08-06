import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FaUtensils, FaBuilding, FaPills, FaHospital, 
  FaSeedling, FaHotel, FaStethoscope, FaGraduationCap,
  FaCalendarAlt, FaQrcode, FaBoxOpen, FaUserMd
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const businesses = [
  {
    id: 'restaurant',
    name: 'Restaurant',
    icon: <FaUtensils />,
    demoUrl: 'https://demo.softnexus.com/restaurant',
    features: [
      { title: 'Table Booking', desc: 'Real-time reservation system', icon: <FaCalendarAlt /> },
      { title: 'QR Menu', desc: 'Contactless dynamic menus', icon: <FaQrcode /> },
      { title: 'Admin Dashboard', desc: 'Manage orders & staff', icon: <FaBoxOpen /> },
      { title: 'WhatsApp Ordering', desc: 'Automated chat bot', icon: <FaUserMd /> } // Dummy icon
    ]
  },
  {
    id: 'functionhall',
    name: 'Function Hall',
    icon: <FaBuilding />,
    demoUrl: 'https://demo.softnexus.com/events',
    features: [
      { title: 'Booking Calendar', desc: 'Availability checking', icon: <FaCalendarAlt /> },
      { title: 'Packages', desc: 'Dynamic pricing tiers', icon: <FaBoxOpen /> },
      { title: 'Gallery', desc: 'Premium image showcases', icon: <FaQrcode /> },
      { title: 'Admin Dashboard', desc: 'Manage event dates', icon: <FaBuilding /> }
    ]
  },
  {
    id: 'medical',
    name: 'Medical Shop',
    icon: <FaPills />,
    demoUrl: 'https://demo.softnexus.com/medical',
    features: [
      { title: 'Medicine Catalog', desc: 'Searchable inventory', icon: <FaPills /> },
      { title: 'Inventory Alert', desc: 'Low stock notifications', icon: <FaBoxOpen /> },
      { title: 'Admin Panel', desc: 'Sales & restock management', icon: <FaBuilding /> },
      { title: 'Order Requests', desc: 'Prescription uploads', icon: <FaUserMd /> }
    ]
  },
  {
    id: 'nursery',
    name: 'Nursery',
    icon: <FaSeedling />,
    demoUrl: 'https://demo.softnexus.com/nursery',
    features: [
      { title: 'Plant Catalog', desc: 'Categorized by care level', icon: <FaSeedling /> },
      { title: 'Delivery System', desc: 'Local logistics integration', icon: <FaBoxOpen /> },
      { title: 'Admin Panel', desc: 'Manage stock & prices', icon: <FaBuilding /> },
      { title: 'Care Guides', desc: 'Automated email tips', icon: <FaQrcode /> }
    ]
  }
];

export default function BusinessSelector() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate every 5 seconds if user isn't hovering
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % businesses.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const activeBusiness = businesses[activeIndex];

  return (
    <section className="business-selector-section">
      <div className="business-list">
        <h3 className="business-list-title">Choose Your Business</h3>
        {businesses.map((biz, idx) => (
          <div 
            key={biz.id}
            className={`business-card ${activeIndex === idx ? 'active' : ''}`}
            onMouseEnter={() => setActiveIndex(idx)}
            onClick={() => setActiveIndex(idx)}
          >
            <div className="business-card-icon">{biz.icon}</div>
            <div className="business-card-name">{biz.name}</div>
          </div>
        ))}
      </div>

      <div className="browser-preview-wrapper">
        <div className="browser-header">
          <div className="browser-dot dot-red"></div>
          <div className="browser-dot dot-yellow"></div>
          <div className="browser-dot dot-green"></div>
          <div className="browser-url-bar">
            {activeBusiness.demoUrl}
          </div>
        </div>
        
        <div className="browser-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeBusiness.id}
              className="preview-inner"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="preview-title">{activeBusiness.name} Demo</h4>
              <div className="preview-features">
                {activeBusiness.features.map((feat, i) => (
                  <div key={i} className="preview-feature-item">
                    <div className="preview-feature-icon">{feat.icon}</div>
                    <div className="preview-feature-title">{feat.title}</div>
                    <div className="preview-feature-desc">{feat.desc}</div>
                  </div>
                ))}
              </div>
              
              <Link to="/products" className="preview-btn">
                View Live Demo →
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
