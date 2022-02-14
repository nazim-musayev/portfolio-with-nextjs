import ActiveLink from 'components/shared/ActiveLink';
import NavLink from 'components/shared/NavLink';
import { NavItem } from 'interfaces';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';


export const navItems: NavItem[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Contact",
    path: '/contact',
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Blogs",
    path: "/blogs",
  },
];

const Navs = () => {
  const { route } = useRouter();

  return (
    <nav className="h-full">
      <ul className={`flex space-x-14`}>
        {navItems.map((nav) => {
          const { path } = nav;
          const active = route === path;
          return (
            <motion.li 
             key={path}
             whileHover={{scale: active ? 1 : 1.3}}
             className={`text-xl ${active ? 'underline' : 'hover:underline'} underline-offset-8 decoration-2 decoration-primary`}
            >
             {active ? <ActiveLink path={path} /> : <NavLink nav={nav} />}
            </motion.li>
          ) 
        })}
      </ul>
    </nav>
  )
};
  
export default Navs;