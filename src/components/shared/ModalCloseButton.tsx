import { Dispatch, SetStateAction } from 'react';
import { FaRegWindowClose } from 'react-icons/fa';
import { useRouter } from 'next/router';

interface Props {
  setSelected: Dispatch<SetStateAction<string>>;
};

const ModalCloseButton = ({setSelected}: Props) => {
  const { route } = useRouter();

  const closeModal = (e: React.MouseEvent<HTMLDivElement | SVGElement>) => {
    e.stopPropagation();
    setSelected('');
  };

  return (
    <>
      <FaRegWindowClose 
       onClick={closeModal}
       className={`absolute top-6 right-6 ${route.includes('projects') && 'top-3 right-3'} text-2xl text-primary cursor-pointer`} 
      /> 
    </>
  )
};

export default ModalCloseButton;
