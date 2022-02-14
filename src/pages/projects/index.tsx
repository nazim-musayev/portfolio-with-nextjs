import type { NextPage, GetStaticProps } from 'next';
import Projects from 'components/projects';
import { motion } from 'framer-motion';
import { transitionProps } from 'variants';
import { GET_PROJECTS } from 'lib';
import { Project } from 'interfaces';


export const getStaticProps: GetStaticProps = async () => {
  const projects = await GET_PROJECTS();

  return {
    props: {
      projects
    }
  }
};

interface Props {
  projects: Project[];
};

const ProjectsPage: NextPage<Props> = ({projects}) => {

  return (
    <motion.div {...transitionProps}>
      <Projects projects={projects} />
    </motion.div>
  )
};

export default ProjectsPage;
