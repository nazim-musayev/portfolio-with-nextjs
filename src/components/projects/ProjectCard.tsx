import RichTextrenderer from './RichTextRenderer';
import CardButton from './CardButton';
import { Project } from 'interfaces';
import Image from 'next/image';
import { BsCollectionPlay } from 'react-icons/bs';
import { BiLinkExternal } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';

interface Props {
  project: Project;
  selected: string;
};

const ProjectCard = ({project, selected }: Props) => {
  const { image, content, demoVideoUrl, name, url, repo } = project;
  const isSelected = selected === project.id;

  return (
    <div className={`bg-light max-h-[700px] lg:max-h-[600px] p-6 rounded-lg space-y-3
      ${!isSelected && 'border-b-2 border-red-500 cursor-pointer hover:-translate-y-3 transition duration-700 py-2'}
      ${isSelected && 'px-5 py-14'}`} 
    >
      <Image
       priority 
       src={image.url}
       alt={name}
       layout="responsive"
       width={500}
       height={250}
       placeholder="blur"
       blurDataURL={image.url}
      />
      <div className={`grid ${!isSelected && 'md:grid-cols-8'} lg:grid-cols-1 gap-5 py-5 px-1`}>
        <h2 className={`font-semibold text-3xl text-slate-200 ${!isSelected && 'md:col-span-3'}`}>
          {name}
        </h2>
        <div className={`flex ${!isSelected && 'md:col-span-5 md:justify-end'} lg:justify-start text-primary space-x-4`}>
          <CardButton url={url} text="website">
            <BiLinkExternal />
          </CardButton>
          <CardButton url={repo} text="repo">
            <FaGithub />
          </CardButton>
          {(demoVideoUrl?.url) && (
            <CardButton url={demoVideoUrl.url} text="video">
              <BsCollectionPlay />
            </CardButton>
          )} 
        </div>
      </div>
      {isSelected && (
        <div className="pb-5">
          <RichTextrenderer richText={content.json} />
        </div>
      ) }
      {!isSelected && (
        <>
          <div className="h-12 overflow-hidden text-justify">
            <RichTextrenderer richText={content.json} />
          </div>
          <div className="text-xl font-bold text-center">. . .</div>
        </>
      )}
    </div>
  );
};

export default ProjectCard;
