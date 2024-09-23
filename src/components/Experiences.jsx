import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Experience</h1>
      <div>
        {EXPERIENCES.map((experience, index) => {
          // Create a ref for each experience block
          const experienceRef = useRef(null);
          const isInView = useInView(experienceRef, { once: true });

          return (
            <div
              key={index}
              ref={experienceRef}
              className="mb-8 flex flex-wrap lg:justify-center"
            >
              {/* Picture Animation: Slide from Right */}
              <motion.div
                className="w-full lg:w-1/4"
                initial={{ opacity: 0, x: 1000 }} // Start off to the right
                animate={isInView ? { opacity: 1, x: 0 } : {}} // Slide into view when in viewport
                transition={{ duration: 1, delay: 0.2 }} // Delay for smooth entry
              >
                <p className="mb-2 text-sm text-neutral-400">
                  {experience.year}
                </p>
              </motion.div>

              {/* Text Animation: Slide from Left */}
              <motion.div
                className="w-full lg:w-3/4"
                initial={{ opacity: 0, x: -1000 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <h6 className="mb-2 font-semibold">
                  {experience.role + " "}
                  {experience.company ? (
                    <span className="text-sm text-purple-100">
                      - {experience.company}
                    </span>
                  ) : null}
                </h6>
                <p className="mb-4 text-neutral-400">
                  {experience.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="mr-2 mb-2 rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-violet-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
