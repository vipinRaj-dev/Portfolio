import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profilepicture-removebg-preview.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <motion.div 
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -100 }} // Start hidden and shifted left
          animate={{ opacity: 1, x: 0 }}   // Fade in and slide to the right
          transition={{ duration: 0.8 }}    // Animation duration
        >
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Vipin Raj R
            </motion.h1>
            <motion.span 
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              Full Stack Developer
            </motion.span>
            <motion.p 
              className="my-2 max-w-xl py-6 font-light tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </motion.div>
        <motion.div 
          className="w-full lg:w-1/2 lg:pb-24"
          initial={{ opacity: 0, scale: 0.8 }}  // Start hidden and smaller
          animate={{ opacity: 1, scale: 1 }}    // Fade in and scale up
          transition={{ duration: 1 }}
        >
          <div className="flex justify-center opacity-75">
            <motion.img 
              src={profilePic} 
              alt="Profile" 
              initial={{ rotate: -2 }}         // Start rotated
              animate={{ rotate: 0 }}            // Rotate back to normal
              transition={{ duration: 1 }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
