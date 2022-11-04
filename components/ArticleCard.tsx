import React from 'react';
import { styled } from '../stitches';
import Box from './Box';
import ArticleCardHeader from './ArticleCardHeader';
import Button from './Button';
import type { Content } from '@prismicio/client';
import { PrismicRichText } from '@prismicio/react';
import dayjs from 'dayjs';
import Link from 'next/link';

interface Props {
    post: Content.PostDocument;
}

const Card = styled(Box, {
    border: '1px solid #4D4D4D',
    borderRadius: 8,
    padding: 5,
    maxWidth: 389,
    // flexGrow: 1,
    position: 'relative'
});

const CardContent = styled(Box, {
    padding: '0px 15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
});

const DateTag = styled(Box, {
    position: 'absolute',
    top: 15, 
    right: 15,
    backgroundColor: '#FFFFFF16',
    padding: '6px 12px',
    borderRadius: '50px',
    fontSize: 12
});

const ArticleCard: React.FC<Props> = ({ post }) => {
  return (
    <Card>
      <ArticleCardHeader language={post.data.type} />
      <DateTag>{dayjs(post.data.published_at).format("DD MMM YYYY")}</DateTag>
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
          <a>
            <Button>Read Now</Button>
          </a>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;