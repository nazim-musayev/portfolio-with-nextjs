import type { NextPage } from 'next';
import BlogsPage from 'components/blogs';
import { motion } from 'framer-motion';
import { transitionProps } from 'variants';


const Blogs: NextPage = () => {
  return (
    <motion.div {...transitionProps}>
      <BlogsPage />
    </motion.div>
  )
};

export default Blogs;
