import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import DocumentHead from '../src/components/layout/DocumentHead';
import Layout from '../src/components/layout/Layout';
import { createClient } from '../prismicio';
import { components } from '../slices';
import { SliceZone} from '@prismicio/react';

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<PageProps> = ({ page }) => {
  return (
    <div>
      <DocumentHead title="Home"/>
      <Layout>
        <SliceZone slices={page.data.slices} components={components} />
      </Layout>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });
  const page = await client.getSingle('homepage');
  return {
    props: {
      page
    }
  }
}

export default Home;
