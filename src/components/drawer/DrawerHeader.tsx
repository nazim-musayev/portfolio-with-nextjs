import { MdOutlineClose } from 'react-icons/md';


interface Props {
  toggleDrawer: () => void;
};

export const DrawerHeader = ({toggleDrawer}: Props) => {
 
  return (
    <div className="flex items-center justify-end px-6">
      <MdOutlineClose className="text-primary text-2xl cursor-pointer" onClick={toggleDrawer} />
    </div>
  );
};

export default DrawerHeader;
