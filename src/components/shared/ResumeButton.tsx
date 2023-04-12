import { FiDownload } from 'react-icons/fi';

interface IProps {
  resumeUrl: string;
};

const ResumeButton = ({resumeUrl}: IProps) => {
  return (
    <a
      download
      href={resumeUrl}
      target="_blank"
      className="flex items-center w-32 space-x-2 text-primary py-1 px-3 border-2 border-primary rounded-lg transition duration-300 hover:shadow-sm hover:shadow-primary"
    >
      <FiDownload />
      <span>Resume</span>
    </a>
  );
};

export default ResumeButton;
