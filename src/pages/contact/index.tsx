import type { NextPage } from 'next';
import ContactPage from 'components/contact';
import { motion } from 'framer-motion';
import { transitionProps } from 'variants';


const Contact: NextPage = () => {
  return (
    <motion.div {...transitionProps}>
      <ContactPage />
    </motion.div>
  )
};

export default Contact;