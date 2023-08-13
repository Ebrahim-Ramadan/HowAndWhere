// Photos from https://citizenofnowhe.re/lines-of-the-city
import "./consecutives.css";
import React,{ useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";


//Fetching IDs
const MIN = 6; // MINimum ID
const MAX = 100; // MAXimum ID

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }: { id: number }) {


  const [img, setImg] = React.useState();
  const [Imgtitle, setImgtitle] = React.useState('');

  React.useEffect(() => {
    
    const fetchImage = async () => {
      const response = await fetch(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
      const data = await response.json();
      setImg(data.photo.url);
      setImgtitle(data.photo.title)
    };
  
    fetchImage();
  }, []); // Empty dependency array ensures this effect runs only once on component mounts



  const ref = useRef(null);
   
    const { scrollYProgress } = useScroll({ target: ref , });
  const y = useParallax(scrollYProgress, 250);

  return (
    <section >
      <div >
        <img ref={ref} src={img} alt={Imgtitle} style={{zIndex:-1}} />
        <figure className="VerticalScroll-progress">
          <svg id="VerticalScroll-progress" width="75" height="75" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="VerticalScroll-indicator"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
        </figure>
      </div>
      <motion.p style={{ y }}>{Imgtitle}</motion.p>
    </section>
  );
}

export function Consecutives() {


  return (
    <div className="consecutives">
      {[11, 12, 13, 14, 15, 16, 17].map((image) => (
        <Image id={image} />
      ))}
    </div>
  );
}
