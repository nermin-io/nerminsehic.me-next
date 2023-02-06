import React from 'react';
import { styled } from '../stitches.config';
import type { Content } from '@prismicio/client';
import Box from './Box';
import _ from 'lodash';
import dayjs from 'dayjs';
import Header from "./Header";

interface Props {
    post: Content.PostDocument 
}

const ArticleMeta = styled(Box, {
    fontSize: 16
});

const HighlightedText = styled('span', {
    color: '#DFF962'
})

const ArticlePageHeader: React.FC<Props> = ({ post }) => {
    return (
        <Header>
            <h1>{post.data.title}</h1>
            <ArticleMeta>
                { dayjs(post.data.published_at).format('DD MMM YYYY')} &#x2022; Published in <HighlightedText>{ _.startCase(post.data.type as string) }</HighlightedText>
            </ArticleMeta>
        </Header>
    );
}


export default ArticlePageHeader;