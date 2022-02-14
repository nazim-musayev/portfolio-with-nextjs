import Header from 'components/header';
import Drawer from 'components/drawer';
import Footer from 'components/footer';
import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';


const Layout = ({children}: {children: React.ReactNode}) => {
  const [open, setOpen] = useState<boolean>(false);
  const toggleDrawer = useCallback(() => setOpen(pre => !pre), []);

  return (
    <div className="text-white py-10">
      <Header toggleDrawer={toggleDrawer} />
      <main className="py-20 px-5 sm:px-10 md:px-15">
        {children}
      </main>
      <Footer />
      <AnimatePresence>
        {open && <Drawer toggleDrawer={toggleDrawer} /> }
      </AnimatePresence>
    </div>
  );
};

export default Layout;
