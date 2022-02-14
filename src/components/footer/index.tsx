import { FaFacebookSquare } from 'react-icons/fa';
import { GrLinkedin } from 'react-icons/gr';
import { VscGithub } from 'react-icons/vsc';


type SocialIcon = {
  icon: JSX.Element;
  route: string;
};

export const Footer = () => {
  
  const socialIcons: SocialIcon[] = [
    {
      icon: <GrLinkedin />,
      route: "https://www.linkedin.com/in/nazimmusayev/",
    },
    {
      icon: <VscGithub />,
      route: "https://github.com/nazim-musayev",
    },
    {
      icon: <FaFacebookSquare />,
      route: "https://www.facebook.com/musayevna0zim/",
    },
  ];
 
  return (
    <footer>
      <ul className="flex justify-center space-x-10">
        {socialIcons.map(({icon, route}) => (
          <li key={route}>
            <a href={route} target="_blank" className="text-2xl text-white cursor-pointer">
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
