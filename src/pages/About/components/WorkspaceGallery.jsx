import { motion } from 'motion/react';

const galleryItems = [
  { src: '/images/gallery/photo_1.jpg', title: 'VYUHA Team', label: 'Collaboration', isLarge: true },
  { src: '/images/gallery/photo_2.jpg', title: 'Workspace Culture', label: 'Innovation', isLarge: false },
  { src: '/images/gallery/photo_3.jpg', title: 'Engineering & Tech', label: 'Development', isLarge: false },
  { src: '/images/gallery/photo_4.jpg', title: 'Team Dynamics', label: 'Synergy', isLarge: false },
  { src: '/images/gallery/photo_5.jpg', title: 'Creative Planning', label: 'Strategy', isLarge: false },
  { src: '/images/gallery/photo_6.jpg', title: 'Project Discussion', label: 'Execution', isLarge: true },
  { src: '/images/gallery/photo_7.jpg', title: 'Office Environment', label: 'Workspace', isLarge: false },
  { src: '/images/gallery/photo_8.jpg', title: 'Client Collaboration', label: 'Partnership', isLarge: false },
  { src: '/images/gallery/photo_9.jpg', title: 'Tech & Design', label: 'Solutions', isLarge: false },
  { src: '/images/gallery/photo_10.jpg', title: 'Team Moments', label: 'Community', isLarge: false },
  { src: '/images/gallery/photo_11.jpg', title: 'Building Together', label: 'Growth', isLarge: false },
];

export default function WorkspaceGallery() {
  return (
    <section className="section-container">
      <h2 className="section-title text-center text-gradient" style={{ textAlign: 'center' }}>Our Workspace & Team</h2>
      <div className="gallery-grid">
        {galleryItems.map((item, i) => (
          <motion.div 
            key={i}
            className={`gallery-item ${item.isLarge ? 'large' : ''}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: (i % 4) * 0.1 }}
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

