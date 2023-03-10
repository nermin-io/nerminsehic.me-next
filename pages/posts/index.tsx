import type { GetStaticProps, NextPage, InferGetStaticPropsType } from 'next';
import { createClient } from '../../prismicio';
import DocumentHead from '../../components/layout/DocumentHead';
import PageHeader from '../../components/PageHeader';
import { Query } from '@prismicio/types';
import type { Content } from '@prismicio/client';
import ArticleCard from '../../components/ArticleCard';
import ArticleList from '../../components/ArticleList';

interface PageProps {
  posts: Query<Content.PostDocument<string>>;
  page: Content.PostIndexDocument<string>;
}

const PostsIndex: NextPage<PageProps> = ({ posts, page }) => {
  return (
    <div>
      <DocumentHead
        title={`${page.data.document_title} :: Nermin Sehic`}
        description={`${page.data.document_description}`}
      />
      <PageHeader title={`${page.data.title}`} />
      <ArticleList>
        {posts.results.map((post) => (
          <ArticleCard key={post.id} post={post} />
        ))}
      </ArticleList>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });
  const navigation = await client.getSingle('navigation');
  const footer = await client.getSingle('footer');

  const posts = await client.getByType('post');
  const page = await client.getSingle('post_index');

  return {
    props: {
      global: {
        navigation,
        footer,
      },
      posts,
      page,
    },
  };
};

export default PostsIndex;
