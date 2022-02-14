import { Skill } from 'interfaces';
import Image from 'next/image';

interface Props {
  skill: Skill;
  selected: string;
};

const SkillCard = ({skill, selected }: Props) => {
  const { name, image, description } = skill;
  const isSelected: boolean = selected === skill.id;
  
  return (
    <div className={`bg-light h-auto md:h-52 lg:h-60 p-5 md:p-5 lg:p-8 space-y-4 rounded-xl ${isSelected && 'h-auto'}
     ${!isSelected && 'cursor-pointer hover:-translate-y-3 transition duration-700'}`}
    >
      <div className="flex items-center space-x-4">
        <div className="relative w-20 h-20 lg:w-24 lg:h-24 shrink-0">
          <Image src={image.url} alt={name} layout="fill" objectFit="cover" />
        </div>
        <p className={`text-xl font-semibold ${isSelected && 'text-2xl md:pl-10 lg:pl-20'}`}>
          {name}
        </p>
      </div>
      <p className="text-gray-400">
        {isSelected ? description : `${description.slice(0,70)}...`}
      </p>
    </div>
  );
};
  
export default SkillCard;
