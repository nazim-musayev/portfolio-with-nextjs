import { motion } from 'framer-motion';
import { drawerAnimationProps, navItemProps } from 'variants';
import { navItems } from 'components/header/Navs'
import NavLink from 'components/shared/NavLink';
import { useRouter } from 'next/router';
import Footer from 'components/footer'
import DrawerHeader from './DrawerHeader';
import ActiveLink from 'components/shared/ActiveLink';


interface Props {
  toggleDrawer: () => void;
};

const Drawer = ({toggleDrawer}: Props) => {
  const { route } = useRouter();

  return (
    <motion.aside 
     {...drawerAnimationProps}
     className="fixed top-0 right-0 w-full h-full bg-black flex flex-col justify-between py-10"
    >
      <DrawerHeader toggleDrawer={toggleDrawer} />
      <nav>
        <ul className="flex flex-col items-center justify-center space-y-8">
          {navItems.map((nav, idx) => {
            const active = route === nav.path;
            return (
              <motion.li 
               key={idx}
               custom={idx}
               {...navItemProps}
               onClick={toggleDrawer}
               className={`text-xl text-center p-2 w-40 ${active && 'text-primary border-[1px] border-primary rounded-lg'}`}
              >
                {active ? <ActiveLink path={nav.path} /> : <NavLink nav={nav} /> }
              </motion.li>
            )
          })}
        </ul>
      </nav>
      <Footer />
    </motion.aside>
  )
};

export default Drawer;
