import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, 
  SiPython, SiFlask, SiMysql, SiFirebase, 
  SiDocker, SiGithub, SiHostinger
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const stack = [
  { icon: <SiReact />, name: 'React' },
  { icon: <SiNextdotjs />, name: 'Next.js' },
  { icon: <SiNodedotjs />, name: 'Node.js' },
  { icon: <SiExpress />, name: 'Express' },
  { icon: <SiPython />, name: 'Python' },
  { icon: <SiFlask />, name: 'Flask' },
  { icon: <SiMysql />, name: 'MySQL' },
  { icon: <SiFirebase />, name: 'Firebase' },
  { icon: <SiDocker />, name: 'Docker' },
  { icon: <SiGithub />, name: 'GitHub' },
  { icon: <FaAws />, name: 'AWS' },
  { icon: <SiHostinger />, name: 'Hostinger' },
  { icon: null, name: 'Framer Motion' },
  { icon: null, name: 'GSAP' },
  { icon: null, name: 'React Bits' },
];

export default function TechnologyMarquee() {
  return (
    <div className="tech-marquee-wrapper">
      <div className="tech-marquee-content">
        {[...stack, ...stack, ...stack].map((tech, i) => (
          <div key={i} className="tech-item">
            {tech.icon} {tech.name}
          </div>
        ))}
      </div>
    </div>
  );
}
