import React from 'react';
import type { Content } from '@prismicio/client';
import { styled } from '@stitches/react';
import { PrismicRichText } from '@prismicio/react';
import FormattedCode from './FormattedCode';

interface Props {
    post: Content.PostDocument
}

const Article = styled('main', {
    lineHeight: 1.5,
    padding: '40px 120px',
    '& a': {
        color: '#DFF962',
        fontWeight: 500
    },
    '& p': {
        fontSize: 16,
        marginBottom: 40
    },
    '& h1, h2, h3, h4, h5, h6': {
        fontWeight: 500
    }
});

const ArticleBody: React.FC<Props> = ({ post }) => {
  return (
    <Article>
      <PrismicRichText field={post.data.body} />
    </Article>
  );
};


export default ArticleBody;