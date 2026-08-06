import { motion } from 'motion/react';
import Folder from '../../../components/Folder';

export default function IndustryShowcaseCards({ industries }) {
  return (
    <div className="showcase-folders-grid">
      {industries.map((industry, index) => {
        const folderItems = [
          { label: 'Basic', url: industry.plans.basic },
          { label: 'Pro', url: industry.plans.pro },
          { label: 'Premium', url: industry.plans.premium },
          { label: 'Ultra', url: industry.plans.ultra }
        ];

        return (
          <motion.div
            key={industry.id}
            className="showcase-folder-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="folder-card-header">
              <h3 className="folder-industry-title">{industry.title}</h3>
              <p className="folder-industry-desc">{industry.description}</p>
            </div>
            
            <div className="folder-interaction-area">
              <Folder 
                color="#A78BFA"
                size={1.5}
                items={folderItems}
              />
              <p className="folder-instruction">Click folder to explore plans</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
