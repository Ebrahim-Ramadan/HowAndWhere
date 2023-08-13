import { motion } from "framer-motion";
import { ZtextComponent } from '../ZtextComponent/Ztext'
import { Contacts } from '../contacts/Contacts'

import './Shapes.css'
const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};

export function Shapes() {
  return (
<div className="AmazingPage-head">
<div  className='shapes'>
      <motion.svg
       
        width="400"
        height="200"
        viewBox="0 0 600 300"
        initial="hidden"
        animate="visible"
      >
        <motion.circle
          cx="100"
          cy="100"
          r="80"
          stroke="#ff0055"
          variants={draw}
          custom={1}
        />
          <motion.line
            id='shapeID'
          x1="220"
          y1="30"
          x2="360"
          y2="170"
          stroke="#00cc88"
          variants={draw}
          custom={2}
        />
          <motion.line
            id='shapeID'
            
          x1="220"
          y1="170"
          x2="360"
          y2="30"
          stroke="#00cc88"
          variants={draw}
          custom={2.5}
        />
        <motion.rect
          width="140"
          height="140"
          x="410"
          y="30"
          rx="20"
          stroke="#0099ff"
          variants={draw}
          custom={3}
        />
      </motion.svg>
    </div>
      <ZtextComponent />
<Contacts/>

</div>
  );
}
