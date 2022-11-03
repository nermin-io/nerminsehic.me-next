import type { GetStaticProps, GetStaticPaths, NextPage, InferGetStaticPropsType } from 'next';
import { createClient } from '../../prismicio';
import DocumentHead from '../../components/layout/DocumentHead';
import type { Content } from '@prismicio/client';
import ArticlePageHeader from '../../components/ArticlePageHeader';
import ArticleBody from '../../components/ArticleBody';

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

const PostPage: NextPage<PageProps> = ({ post }) => {
    return (
        <div>
            <DocumentHead title={`${post.data.title} :: Nermin Sehic`} description={post.data.description } />
            <ArticlePageHeader post={post as Content.PostDocument} />
            <ArticleBody post={post as Content.PostDocument} />
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient();
  const posts = await client.getAllByType("post");

  return {
    paths: posts.map(post => ({ params: { pid: post.uid }})),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async({ previewData, params }) => {
    if(!params || !params?.pid) return {
        notFound: true
    }

    const { pid } = params;

    const client = createClient({ previewData });
    const navigation = await client.getSingle('navigation');
    const footer = await client.getSingle('footer');
    const post = await client.getByUID('post', pid as string); 

    return {
        props: {
            post,
            global: {
                navigation,
                footer
            }
        }
    };
}

export default PostPage;