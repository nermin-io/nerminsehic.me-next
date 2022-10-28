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
      <DocumentHead title={page.data.title} description={page.data.description} />
        <SliceZone slices={page.data.slices} components={components} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });
  const page = await client.getSingle('homepage');
  const navigation = await client.getSingle('navigation');
  const footer = await client.getSingle('footer');

  return {
    props: {
      page,
      global: {
        navigation,
        footer
      }
    }
  }
}

export default Home;
