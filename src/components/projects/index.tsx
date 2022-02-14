import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Project } from 'interfaces';
import ProjectCard from './ProjectCard';
import ModalCloseButton from 'components/shared/ModalCloseButton';

interface Props {
  projects: Project[];
};

const Projects = ({projects}: Props) => {
  const [selected, setSelected] = useState<string>('');
  const selectedProject = projects.find(project => project.id === selected);

  return (
    <>
      <p className="px-5 pb-10 text-red-500">
        * The last 3 projects from above are not responsive for mobile devices.
      </p>
      <div className="grid lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <motion.div key={project.id} layoutId={project.id} onClick={() => setSelected(project.id)}>
            <ProjectCard project={project} selected={selected} />
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedProject && (
          <div className="backdrop">
            <motion.div layoutId={selected} className="relative bg-light w-[85%] lg:w-[70%] h-[80%] overflow-y-scroll">
              <ProjectCard project={selectedProject} selected={selected} />
              <ModalCloseButton setSelected={setSelected} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
  
export default Projects;
