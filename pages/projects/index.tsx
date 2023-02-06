import type { GetStaticProps, NextPage, InferGetStaticPropsType } from 'next';
import { createClient } from '../../prismicio';
import DocumentHead from '../../components/layout/DocumentHead';
import PageHeader from '../../components/PageHeader';
import { Query } from '@prismicio/types';
import type { Content } from '@prismicio/client';
import ArticleList from '../../components/ArticleList';
import ProjectCard from "../../components/ProjectCard";

interface PageProps {
  projects: Query<Content.ProjectDocument<string>>;
  page: Content.ProjectIndexDocument<string>;
}

const ProjectIndex: NextPage<PageProps> = ({ projects, page }) => {
  return (
    <div>
      <DocumentHead title={`${page.data.document_title} :: Nermin Sehic`} description={`${page.data.document_description}`}/>
      <PageHeader title={`${page.data.title}`} />
      <ArticleList>
        { projects.results.map(project => (
            <ProjectCard key={project.id} project={project} />
        ))}
      </ArticleList>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
    const client = createClient({ previewData });
    const navigation = await client.getSingle('navigation');
    const footer = await client.getSingle('footer');

    const projects = await client.getByType('project');
    const page = await client.getSingle('project_index');
  
    return {
      props: {
        global: {
          navigation,
          footer
        },
        projects,
        page
      }
    }
  }

export default ProjectIndex;
