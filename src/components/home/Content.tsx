import ResumeButton from "components/shared/ResumeButton";

interface IProps {
  resumeUrl: string;
};

const Content = ({resumeUrl}: IProps) => {
  return (
    <article>
      <p className="mb-5 text-justify">
        This is my portfolio website, where you can find my projects, contact information
        and also a little bit personal information about me.<br />
        <br />
        As a React developer and coding enthusiast I am passionate about
        learning new technologies and building projects.<br />
        Also I am really enjoying that trying different solutions for the problems which
        I am facing in development process.
      </p>
      <ResumeButton resumeUrl={resumeUrl} />
    </article>
  );
};

export default Content;
