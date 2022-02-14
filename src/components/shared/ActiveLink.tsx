
interface Props {
  path: string;
};

const ActiveLink = ({path}: Props) => {
  return (
    <p className="capitalize">
      {path === '/' ? 'Home' : path.slice(1,path.length)}
    </p>
  );
};

export default ActiveLink;
