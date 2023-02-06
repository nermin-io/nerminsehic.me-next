import React from 'react';
import type { Content } from '@prismicio/client';
import { styled } from '../stitches.config';
import { PrismicRichText } from '@prismicio/react';

interface Props {
    document: Content.PostDocument | Content.ProjectDocument;
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
    },

    'img': {
      width: '100%'
    },

    '@medium': {
      padding: '40px 80px',
      textAlign: 'center'
    },
    '@small': {
      padding: '40px 20px'
    }
});

const ArticleBody: React.FC<Props> = ({ document }) => {
  return (
    <Article>
      <PrismicRichText field={document.data.body} />
    </Article>
  );
};


export default ArticleBody;