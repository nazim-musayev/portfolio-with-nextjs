import HeaderTitle from './HeaderTitle';
import Navs from './Navs';
import { RiMenu3Line } from 'react-icons/ri';


interface Props {
  toggleDrawer: () => void;
};

const Header = ({toggleDrawer}: Props) => {

  return (
    <header className="flex pb-5 px-6 lg:px-12 items-center shadow-md shadow-slate-800">
      <HeaderTitle />
      <div className="flex hidden lg:block">
        <Navs />
      </div>
      <RiMenu3Line className="text-primary text-2xl lg:hidden" onClick={toggleDrawer} />
    </header>
  );
};

export default Header;