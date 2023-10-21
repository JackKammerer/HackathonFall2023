import "./hero.scss";
import { motion } from "framer-motion";

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-320%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="slidingTextContainer"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
          style={{ color: "rgba(255, 255, 255, 0.5)" }}
        >
          Find Students Alike
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

