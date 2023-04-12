import { AnimatePresence, motion } from 'framer-motion';
import { Skill } from 'interfaces';
import { useState } from 'react';
import Content from './Content';
import ProfileImage from './ProfileImage'
import Skills from './Skills';
import SkillCard from './SkillCard';
import ModalCloseButton from 'components/shared/ModalCloseButton';


interface IProps {
  skills: Skill[];
  resumeUrl: string;
};

interface SkillsProps {
  skills: Skill[];
  selected: string;
  setSelectedCB: (id: string) => void;
};

const Home = ({skills, resumeUrl}: IProps) => {
  const [selected, setSelected] = useState<string>('');
  const setSelectedCB = (id: string) => setSelected(id);
  const selectedSkill = skills.find((skill) => skill.id === selected);

  const skillsProps: SkillsProps = {
    skills, 
    selected,
    setSelectedCB,
  };
  
  return (
    <>
      <div className="lg:hidden flex justify-center">
        <ProfileImage />
      </div>
      <div className="flex items-center py-20 lg:space-x-20 xl:space-x-20">
        <Content resumeUrl={resumeUrl} />
        <div className="hidden lg:block">
          <ProfileImage />
        </div>
      </div>
      <Skills {...skillsProps} />
      <AnimatePresence>
        {selectedSkill && (
          <div className="backdrop">
            <motion.div layoutId={selected} className="relative w-5/6 lg:w-1/2">
              <SkillCard skill={selectedSkill} selected={selected} />
              <ModalCloseButton setSelected={setSelected} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;
