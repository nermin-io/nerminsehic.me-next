import type { NextPage } from 'next';
import DocumentHead from '../../src/components/layout/DocumentHead';
import Layout from '../../src/components/layout/Layout';

const PostsIndex: NextPage = () => {
  return (
    <div>
      <DocumentHead title="Posts"/>
      <Layout>
      </Layout>
    </div>
  )
}

export default PostsIndex;
