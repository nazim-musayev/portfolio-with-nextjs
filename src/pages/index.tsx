import type { NextPage, GetStaticProps } from 'next';
import HomePage from 'components/home';
import { motion } from 'framer-motion';
import { transitionProps } from 'variants';
import { GET_SKILLS } from 'lib';
import { Skill } from 'interfaces';


export const getStaticProps: GetStaticProps = async () => {
  const data = await GET_SKILLS();

  return {
    props: {
      skills: data
    }
  }
};

interface Props {
  skills: Skill[];
};

const Home: NextPage<Props> = ({skills}) => {

  return (
    <motion.div {...transitionProps}>
      <HomePage skills={skills} />
    </motion.div>
  )
};

export default Home;
