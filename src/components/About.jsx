import { ABOUT_TEXT } from "../constants";
import aboutImg from "../assets/about.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  // Create a ref for the about section
  const aboutRef = useRef(null);

  // Use useInView to trigger animation when section is visible
  const isInView = useInView(aboutRef, { once: true, margin: "-50px" });

  return (
    <div ref={aboutRef} className="border-b border-neutral-900 pb-4">
      <motion.h1
        className="my-20 text-center text-4xl"
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}} // Only animate when in view
        transition={{ duration: 0.8 }}
      >
        About
        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"> Me</span>
      </motion.h1>

      <div className="flex flex-wrap">
        <motion.div
          className="w-full lg:w-1/2 lg:p-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}} // Animate on view
          transition={{ duration: 1 }}
        >
          <div className="flex items-center justify-center">
            <motion.img
              className="rounded-2xl"
              src={aboutImg}
              alt="About"
              initial={{ scale: 0.8, rotate: -10 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}} // Animate image on view
              transition={{ duration: 1.2 }}
            />
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}} // Animate text on view
          transition={{ duration: 1 }}
        >
          <div className="flex justify-center lg:justify-start">
            <motion.p
              className="my-2 max-w-xl py-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}} // Fade text when in view
              transition={{ delay: 0.3, duration: 1 }}
            >
              {ABOUT_TEXT}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
