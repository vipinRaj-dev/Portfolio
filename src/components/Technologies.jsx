import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiJavascript } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { SiBootstrap } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { FaDocker } from 'react-icons/fa';
import { FaGit } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaFigma } from 'react-icons/fa';
import { FaAws } from 'react-icons/fa';
import { SiSocketdotio } from 'react-icons/si'; // Fixed name
import { SiRedux } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Technologies = () => {
  const technologiesRef = useRef(null);
  const isInView = useInView(technologiesRef, { once: true });

  const frontendIcons = [
    { component: RiReactjsLine, color: "text-cyan-400", label: 'React.js', initialPosition: { x: -100, y: -200 } },
    { component: TbBrandNextjs, color: "text-grey", label: 'Next.js', initialPosition: { x: 100, y: -200 } },
    { component: SiJavascript, color: "text-yellow-500", label: 'JavaScript', initialPosition: { x: -100, y: 200 } },
    { component: SiCss3, color: "text-blue-500", label: 'CSS', initialPosition: { x: 100, y: 200 } },
    { component: SiHtml5, color: "text-orange-600", label: 'HTML', initialPosition: { x: 0, y: -250 } },
    { component: SiBootstrap, color: "text-purple-600", label: 'Bootstrap', initialPosition: { x: 0, y: 250 } },
    { component: SiTailwindcss, color: "text-cyan-400", label: 'Tailwind CSS', initialPosition: { x: -100, y: -200 } },
    { component: SiTypescript, color: "text-blue-600", label: 'TypeScript', initialPosition: { x: 100, y: -200 } },
  ];

  const backendIcons = [
    { component: FaNodeJs, color: "text-green-500", label: 'Node.js', initialPosition: { x: -100, y: -200 } },
    { component: SiExpress, color: "text-yellow", label: 'Express.js', initialPosition: { x: 100, y: -200 } },
    { component: SiMongodb, color: "text-green-500", label: 'MongoDB', initialPosition: { x: -100, y: 200 } },
    { component: SiMysql, color: "text-blue-500", label: 'MySQL', initialPosition: { x: 100, y: 200 } },
  ];

  const familiarSkillsIcons = [
    { component: FaDocker, color: "text-blue-500", label: 'Docker', initialPosition: { x: -200, y: -100 } },
    { component: FaGit, color: "text-red-500", label: 'Git', initialPosition: { x: 200, y: -100 } },
    { component: FaGithub, color: "text-white", label: 'GitHub', initialPosition: { x: -200, y: 100 } },
    { component: TbBrandFramerMotion, color: "text-white", label: 'Framer Motion', initialPosition: { x: -200, y: 100 } },
    { component: FaFigma, color: "text-pink-500", label: 'Figma', initialPosition: { x: 200, y: 100 } },
    { component: FaAws, color: "text-yellow-500", label: 'AWS', initialPosition: { x: 0, y: -150 } },
    { component: SiSocketdotio, color: "text-white", label: 'Socket.IO', initialPosition: { x: 0, y: -150 } },
    { component: SiRedux, color: "text-white", label: 'Redux', initialPosition: { x: 0, y: -200 } },
    // Socket.IO is skipped as there's no dedicated icon
  ];
  

  return (
    <div ref={technologiesRef} className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      
      <div className="flex flex-col items-center">
        {/* Frontend Technologies */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-2xl mb-4">Frontend Technologies</h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {frontendIcons.map((icon, index) => (
              <motion.div
                key={index}
                className="rounded-2xl border-4 border-neutral-800 p-4"
                initial={{ opacity: 0, x: icon.initialPosition.x, y: icon.initialPosition.y }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ duration: 1, delay: index * 0.1 }}
              >
                <icon.component className={`text-4xl ${icon.color}`} />
                <span className="text-center pt-2">{icon.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Backend Technologies */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-2xl mb-4">Backend Technologies</h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {backendIcons.map((icon, index) => (
              <motion.div
                key={index}
                className="rounded-2xl border-4 border-neutral-800 p-4"
                initial={{ opacity: 0, x: icon.initialPosition.x, y: icon.initialPosition.y }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ duration: 1, delay: index * 0.1 }}
              >
                <icon.component className={`text-4xl ${icon.color}`} />
                <span className="text-center mt-2">{icon.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Familiar Skills */}
      <div className="flex flex-col items-center">
        <h2 className="text-2xl mb-4">Familiar Skills</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {familiarSkillsIcons.map((icon, index) => (
            <motion.div
              key={index}
              className="rounded-2xl border-4 border-neutral-800 p-4"
              initial={{ opacity: 0, x: icon.initialPosition.x, y: icon.initialPosition.y }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.1 }}
            >
              <icon.component className={`text-4xl ${icon.color}`} />
              <span className="text-center mt-2">{icon.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
