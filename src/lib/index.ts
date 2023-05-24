import { request, gql } from 'graphql-request';
import { GetSkills, GetProjects, GetResume } from 'interfaces';


const graphqlAPI = process.env.GRAPH_CMS as string;

export const GET_SKILLS = async () => {
  const query = gql`
    query MyQuery {
      skills {
        id
        name
        description
        image {
          url
        }
      }
    }
  `;
  
  const result = await request<GetSkills>(graphqlAPI, query);
  return result.skills;
};

export const GET_PROJECTS = async () => {
  const query = gql`
    query MyQuery {
      projects(orderBy: createdAt_DESC) {
        id
        name
        url
        image {
          url
        }
        content {
          json
        }
        demoVideoUrl {
          url
        }
        repo
      }
    }
  `;

  const result = await request<GetProjects>(graphqlAPI, query);
  return result.projects;
};

export const GET_RESUME = async () => {
  const query = gql`
    query MyQuery {
      resumes {
        id
        file {
          url
        }
      }
    }
  `;

  const result = await request<GetResume>(graphqlAPI, query);
  return result.resumes;
};
