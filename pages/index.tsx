import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import DocumentHead from '../components/layout/DocumentHead';
import { createClient } from '../prismicio';
import { styled } from '../stitches.config';
import { components } from '../slices';
import { SliceZone} from '@prismicio/react';
import type { Content } from '@prismicio/client';
import ArticleList from '../components/ArticleList';
import ArticleCard from '../components/ArticleCard';
import Box from '../components/Box';
import dayjs from 'dayjs';

interface PageProps {
  page: Content.HomepageDocument<string>;
  posts: Content.PostDocument<string>[];
}

const Spacer = styled(Box, {
  padding: '20px 0'
});

const Home: NextPage<PageProps> = ({ page, posts }) => {
  return (
    <div>
      <DocumentHead
        title={page.data.title || ""}
        description={page.data.description || ""}
      />
      <SliceZone slices={page.data.slices} components={components} />
      <Spacer>
        <h5>Today I Learned</h5>
        <p style={{fontSize: 16}}>A blog on software engineering topics</p>
        <ArticleList>
          {posts.map((post) => (
            <ArticleCard post={post} key={post.id} />
          ))}
        </ArticleList>
      </Spacer>
    </div>
  );
};

const sortByMostRecent = (a: Content.PostDocument, b: Content.PostDocument) => {
  return dayjs(a.last_publication_date).isBefore(dayjs(b.last_publication_date)) ? 1 : -1;
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });

  const page = await client.getSingle("homepage");
  const navigation = await client.getSingle("navigation");
  const footer = await client.getSingle("footer");

  const posts = await client.getAllByType("post");
  const filteredPosts = posts.sort(sortByMostRecent).slice(0, 3);

  return {
    props: {
      page,
      posts: filteredPosts,
      global: {
        navigation,
        footer,
      },
    },
  };
};

export default Home;
