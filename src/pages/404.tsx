import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { transitionProps } from 'variants';

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.push("/"), 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div {...transitionProps} className="py-40">
      <p className="text-center"> 
        Ooops... This page doesn't exist. 
      </p>
      <p className="text-center"> 
        Redirect to
        <Link href="/">
          <a className="text-blue-500 mx-2">Home Page</a>
        </Link>
        in 5 seconds...
      </p>
    </motion.div>
  )
};

export default Home;