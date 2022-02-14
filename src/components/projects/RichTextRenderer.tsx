import { RichText } from '@graphcms/rich-text-react-renderer';
import { RichTextContent } from '@graphcms/rich-text-types';

interface Props {
  richText: RichTextContent;
};

const RichTextrenderer = ({richText}: Props) => {
  return (
    <RichText 
     content={richText}
     renderers={{
       p: ({ children }) => <p className="text-slate-300">{children}</p>,
       bold: ({ children }) => <strong className="text-white">{children}</strong>,
     }}
    />
  );
};

export default RichTextrenderer;
