import { NavItem } from 'interfaces';
import Link from 'next/link';

interface Props {
  nav: NavItem;
};

const NavLink = ({nav}: Props) => {
  return (
    <Link href={nav.path}>
      <a>{nav.title}</a>
    </Link>
  );
};

export default NavLink;
