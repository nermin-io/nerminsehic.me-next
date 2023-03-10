import type {
  GetStaticProps,
  GetStaticPaths,
  NextPage,
  InferGetStaticPropsType,
} from 'next';
import { createClient } from '../../prismicio';
import DocumentHead from '../../components/layout/DocumentHead';
import type { Content } from '@prismicio/client';
import ArticleBody from '../../components/ArticleBody';
import ProjectPageHeader from '../../components/ProjectPageHeader';

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

const ProjectPage: NextPage<PageProps> = ({ project }) => {
  return (
    <div>
      <DocumentHead
        title={`${project.data.title} :: Nermin Sehic`}
        description={project.data.snippet}
      />
      <ProjectPageHeader project={project as Content.ProjectDocument} />
      <ArticleBody document={project as Content.ProjectDocument} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient();
  const projects = await client.getAllByType('project');

  return {
    paths: projects.map((project) => ({ params: { pid: project.uid } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  previewData,
  params,
}) => {
  if (!params || !params?.pid)
    return {
      notFound: true,
    };

  const { pid } = params;

  const client = createClient({ previewData });
  const navigation = await client.getSingle('navigation');
  const footer = await client.getSingle('footer');
  const project = await client.getByUID('project', `${pid}`);

  return {
    props: {
      project,
      global: {
        navigation,
        footer,
      },
    },
  };
};

export default ProjectPage;
