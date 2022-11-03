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
}

const PostsIndex: NextPage<PageProps> = ({ posts }) => {
  return (
    <div>
      <DocumentHead title="Today I Learned :: Nermin Sehic" description="A blog about my learning on software engineering topics." />
      <PageHeader title='Today I Learned Blog (TIL)' />
      <ArticleList>
        { posts.results.map(post => (
            <ArticleCard key={post.id} post={post} />
        ))}
      </ArticleList>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
    const client = createClient({ previewData });
    const navigation = await client.getSingle('navigation');
    const footer = await client.getSingle('footer');

    const posts = await client.getByType('post');
  
    return {
      props: {
        global: {
          navigation,
          footer
        },
        posts
      }
    }
  }

export default PostsIndex;
