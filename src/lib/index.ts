import { request, gql } from 'graphql-request';
import { GetSkills, GetProjects } from 'interfaces';


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
        demoVideoUrl
        repo
      }
    }
  `;

  const result = await request<GetProjects>(graphqlAPI, query);
  return result.projects;
};
