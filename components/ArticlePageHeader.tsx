import React from 'react';
import { styled } from '../stitches.config';
import type { Content } from '@prismicio/client';
import Box from './Box';
import _ from 'lodash';
import dayjs from 'dayjs';

interface Props {
    post: Content.PostDocument 
}

const ArticleHeader = styled("header", {
    height: 300,
    borderBottom: '1px solid #242424',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 20,
    '& h1': {
        fontSize: 50,
        width: 700,
        fontWeight: 500,
        textAlign: 'center',
        '@large': {
            fontSize: 40,
            width: '100%'
        }
    }
});

const ArticleMeta = styled(Box, {
    fontSize: 16
});

const HighlightedText = styled('span', {
    color: '#DFF962'
})

const ArticlePageHeader: React.FC<Props> = ({ post }) => {
    return (
        <ArticleHeader>
            <h1>{post.data.title}</h1>
            <ArticleMeta>
                { dayjs(post.data.published_at).format('DD MMM YYYY')} &#x2022; Published in <HighlightedText>{ _.startCase(post.data.type as string) }</HighlightedText>
            </ArticleMeta>
        </ArticleHeader>
    );
}


export default ArticlePageHeader;