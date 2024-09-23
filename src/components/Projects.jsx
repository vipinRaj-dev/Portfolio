import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => {
          // Create a ref for each project block
          const projectRef = useRef(null);
          const isInView = useInView(projectRef, { once: true });

          return (
            <div key={index} ref={projectRef} className="mb-8 flex flex-wrap lg:justify-center">
              
              {/* Image Animation: Slide from Left */}
              <motion.div
                className="w-full lg:w-1/4"
                initial={{ opacity: 0, x: -100 }} // Start off to the left
                animate={isInView ? { opacity: 1, x: 0 } : {}} // Slide into view when in viewport
                transition={{ duration: 1, delay: 0.2 }} // Delay for smooth entry
              >
                <img
                  src={project.image}
                  width={150}
                  height={150}
                  alt={project.title}
                  className="mb-6 rounded"
                />
              </motion.div>

              {/* Text Animation: Slide from Right */}
              <motion.div
                className="w-full max-w-xl lg:w-3/4"
                initial={{ opacity: 0, x: 100 }} // Start off to the right
                animate={isInView ? { opacity: 1, x: 0 } : {}} // Slide into view when in viewport
                transition={{ duration: 1, delay: 0.4 }} // Delay for smooth entry
              >
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                <div>
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium"
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

export default Projects;
