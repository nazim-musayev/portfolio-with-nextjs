
interface Props {
  url: string;
  text: string;
  children: React.ReactNode;
};

const CardButton = ({url, text, children}: Props) => {

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    window.location.href = url;
  };

  return (
    <button
     onClick={handleClick}
     className="flex items-center space-x-2 border-[1px] border-primary px-2 py-1 rounded-lg transition duration-300 hover:shadow-sm hover:shadow-primary"
    >
      {children}
      <span className="text-sm">{text}</span>
    </button>
  );
};

export default CardButton;
