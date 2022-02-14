import { motion } from 'framer-motion';
import { Skill } from 'interfaces';
import SkillCard from './SkillCard';


interface Props {
  skills: Skill[];
  selected: string;
  setSelectedCB: (id: string) => void;
};

const Skills = ({skills, selected, setSelectedCB}: Props) => {

  return (
    <>
      <span className="text-gray-500">Technologies, tools I use</span>
      <h2 className="text-3xl font-bold mt-4 mb-8">Technologies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {skills.map((skill) => {
          const id = skill.id;
          return (
            <motion.div key={id} layoutId={id} onClick={() => setSelectedCB(id)}>
              <SkillCard skill={skill} selected={selected} />
            </motion.div>
          )
        })}
      </div>
    </>
  );
};

export default Skills;