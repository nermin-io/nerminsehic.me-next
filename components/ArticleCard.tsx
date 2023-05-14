import React from 'react';
import Box from './Box';
import ArticleCardHeader from './ArticleCardHeader';
import Button from './Button';
import type { Content } from '@prismicio/client';
import { PrismicRichText } from '@prismicio/react';
import dayjs from 'dayjs';
import Link from 'next/link';
import Card from './Card';
import DateTag from './DateTag';
import CardContent from './CardContent';

interface Props {
  post: Content.PostDocument;
}

const ArticleCard: React.FC<Props> = ({ post }) => {
  return (
    <Card>
      <ArticleCardHeader language={post.data.type} />
      <DateTag>{dayjs(post.data.published_at).format('DD MMM YYYY')}</DateTag>
      <CardContent css={{ height: 160 }}>
        <Box css={{ height: 65, paddingTop: 5 }}>
          <h5 style={{ lineHeight: 1.5, fontWeight: 500 }}>
            {post.data.title}
          </h5>
        </Box>
        <PrismicRichText field={post.data.snippet} />
      </CardContent>
      <CardContent css={{ paddingBottom: 5 }}>
        <Link href={`${post.url}`}>
          <Button>Read Now</Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
