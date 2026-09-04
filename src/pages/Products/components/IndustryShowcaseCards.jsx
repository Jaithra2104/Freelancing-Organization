import { motion } from 'motion/react';
import Folder from '../../../components/Folder';

export default function IndustryShowcaseCards({ industries }) {
  return (
    <div className="folder-showcase-container">
      {industries.map((industry, index) => {
        const isEven = index % 2 === 0;
        
        const folderItems = [
          { label: 'Basic', url: industry.plans.basic },
          { label: 'Pro', url: industry.plans.pro },
          { label: 'Premium', url: industry.plans.premium },
          { label: 'Ultra', url: industry.plans.ultra }
        ];

        return (
          <div
            key={industry.id}
            className={`folder-showcase-row ${isEven ? 'row-even' : 'row-odd'}`}
          >
            {/* Image Side */}
            <motion.div 
              className="folder-showcase-image-side"
              initial={{ opacity: 0, x: isEven ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img src={industry.image} alt={industry.title} className="folder-showcase-img" loading="lazy" />
            </motion.div>

            {/* Content Side */}
            <div className="folder-showcase-content-side">
              <motion.h3 
                className="folder-industry-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
              >
                {industry.icon && <industry.icon style={{ color: '#A78BFA' }} />}
                {industry.title}
              </motion.h3>
              <motion.p 
                className="folder-industry-desc"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                {industry.description}
              </motion.p>
              
              <motion.div 
                className="folder-interaction-area"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              >
                <Folder 
                  color="#A78BFA"
                  size={1.15}
                  items={folderItems}
                  className="showcase-folder-wrapper"
                />
                <p className="folder-instruction">Click folder to explore all four plans</p>
              </motion.div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
