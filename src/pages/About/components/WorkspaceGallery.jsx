import { motion } from 'motion/react';

const galleryItems = [
  { src: '/images/gallery_1.png', title: 'UI Design', label: 'Creative', isLarge: true },
  { src: '/images/gallery_2.png', title: 'Engineering', label: 'Development', isLarge: false },
  { src: '/images/gallery_3.png', title: 'Client Meetings', label: 'Strategy', isLarge: false },
  { src: '/images/gallery_4.png', title: 'Premium Workspace', label: 'Environment', isLarge: true },
];

export default function WorkspaceGallery() {
  return (
    <section className="section-container">
      <h2 className="section-title text-center text-gradient" style={{ textAlign: 'center' }}>Our Workspace</h2>
      <div className="gallery-grid">
        {galleryItems.map((item, i) => (
          <motion.div 
            key={i}
            className={`gallery-item ${item.isLarge ? 'large' : ''}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <img src={item.src} alt={item.title} loading="lazy" />
            <div className="gallery-overlay">
              <div className="gallery-title">{item.title}</div>
              <div className="gallery-label">{item.label}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
