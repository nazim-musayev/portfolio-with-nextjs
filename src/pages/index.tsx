import type { NextPage, GetServerSideProps } from 'next';
import HomePage from 'components/home';
import { motion } from 'framer-motion';
import { transitionProps } from 'variants';
import { GET_RESUME, GET_SKILLS } from 'lib';
import { Skill } from 'interfaces';


export const getServerSideProps: GetServerSideProps = async () => {
  const skills = await GET_SKILLS();
  const resumes = await GET_RESUME();

  return {
    props: {
      skills,
      resumeUrl: resumes[0].file.url,
    }
  }
};

interface Props {
  skills: Skill[];
  resumeUrl: string,
};

const Home: NextPage<Props> = ({skills, resumeUrl}) => {
  return (
    <motion.div {...transitionProps}>
      <HomePage skills={skills} resumeUrl={resumeUrl} />
    </motion.div>
  )
};

export default Home;
