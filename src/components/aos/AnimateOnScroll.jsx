import { useEffect, useRef } from "react";

import { motion, useAnimation, useInView } from "framer-motion";

const AnimateOnScroll = ({ children }) => {
  const boxVariants = {
    hidden: {
      opacity: 0,
      y: "100px",
    },
    visible: {
      opacity: 1,
      y: "0px",
      transition: {
      ease: "linear",
      duration: 0.2,
      delay:0.2
    },
    },
    
  };
  const control = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      control.start("visible");
    }
  }, [control, isInView]);

  return (
    <motion.div
      ref={ref}
      variants={boxVariants}
      initial="hidden"
      animate={control}
      className="box"
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;
