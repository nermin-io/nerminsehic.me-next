import type { GetStaticProps, NextPage } from 'next';
import { createClient } from '../../prismicio';
import DocumentHead from '../../src/components/layout/DocumentHead';

const PostsIndex: NextPage = () => {
  return (
    <div>
      <DocumentHead title="Posts" description="" />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
    const client = createClient({ previewData });
    const navigation = await client.getSingle('navigation');
    const footer = await client.getSingle('footer');
  
    return {
      props: {
        global: {
          navigation,
          footer
        }
      }
    }
  }

export default PostsIndex;
