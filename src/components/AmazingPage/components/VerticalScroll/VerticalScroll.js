import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
// import './VerticalScroll.css'
function Item() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });

  return (
    <section className="VerticalScroll">
      <div ref={ref}>
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
    </section>
  );
}

export function VerticalScroll() {
  return (
    <>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </>
  );
}
