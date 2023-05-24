import { RichTextContent } from '@graphcms/rich-text-types';

export interface Skill {
  id: string;
  name: string;
  description: string;
  image: {
    url: string;
  };
};

export interface GetSkills {
  skills: Skill[];
};

export interface Project {
  id: string;
  name: string;
  url: string;
  image: {
    url: string;
  };
  content: {
    json: RichTextContent;
  };
  demoVideoUrl: File;
  repo: string;
};

export interface GetProjects {
  projects: Project[];
};

export interface FormInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export interface NavItem {
  title: string;
  path: string;
};

export interface File {
  url: string;
};

export interface Resume {
  file: File;
};

export interface GetResume {
  resumes: Resume[];
};
