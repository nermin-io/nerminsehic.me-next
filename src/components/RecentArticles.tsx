import React from 'react';
import { styled } from '@stitches/react';
import Section from './Section';
import Heading from './Heading';
import TextHighlight from './TextHighlight';
import type { Article } from '../types/Article';
import Box from './Box';
import ArticleCard from './ArticleCard';

interface Props {}

const RECENT_ARTICLES: Array<Article> = [
    {
        title: 'Spring Boot Best Practices',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        publishedAt: '2022-10-16',
        language: 'java'
    },
    {
        title: 'Setting Up A Scala Development Environment',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        publishedAt: '2022-10-15',
        language: 'scala'
    },
    {
        title: 'Writing React Components With Typescript',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        publishedAt: '2022-10-14',
        language: 'typescript'
    }
];

const ArticleList = styled(Box, {
    display: 'flex',
    gap: 14,
    justifyContent: 'space-between',
});

const RecentArticles: React.FC<Props> = () => {
    return (
      <Section>
        <Heading as='h5'>Today I Learned <TextHighlight variant="subtle">(TIL)</TextHighlight></Heading>
        {/* <Text css={{fontSize: 16}}>My learnings about web technologies and strategies.</Text> */}
        <ArticleList>
            { RECENT_ARTICLES.map((article, idx) => (
                <ArticleCard key={`${article.title}-${article.language}`} article={article} />
            ))}
        </ArticleList>
      </Section>  
    );
}

export default RecentArticles;