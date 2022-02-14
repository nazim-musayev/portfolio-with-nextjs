import { BsFillPersonLinesFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { ImLocation } from 'react-icons/im';
import { IoMdCall } from 'react-icons/io';


type ContactItem = {
  icon: JSX.Element;
  info: string;
};

const ContactInfo = () => {
  
  const contactItems: ContactItem[] = [
    {
      icon: <BsFillPersonLinesFill />,
      info: "Nazim Musayev"
    },
    {
      icon: <ImLocation />,
      info: "Baku, Azerbaijan"
    },
    {
      icon:  <AiOutlineMail />,
      info: "nazimmusayev02@gmail.com"
    },
    {
      icon: <IoMdCall />,
      info: "+994 50 526 09 50"
    }
  ];

  return (
    <div className="space-y-6 pr-6">
      {contactItems.map(({icon, info}) => (
        <div key={info} className="flex space-x-5 items-center">
          <div className="text-primary text-4xl">
            {icon}
          </div>
          <p className="text-lg text-slate-300">
            {info}
          </p>
        </div>
      ))}
    </div>
  );
};
  
export default ContactInfo;