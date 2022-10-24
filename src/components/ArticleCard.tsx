import React from 'react';
import { styled } from '@stitches/react';
import type { Article } from '../types/Article';
import Box from './Box';
import ArticleCardHeader from './ArticleCardHeader';
import Heading from './Heading';
import Text from './Text';
import Button from './Button';

interface Props {
    article: Article;
}

const Card = styled(Box, {
    border: '1px solid #4D4D4D',
    borderRadius: 8,
    padding: 5,
    width: '100%',
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

const ArticleCard: React.FC<Props> = ({ article }) => {
    return (
      <Card>
        <ArticleCardHeader language={article.language} />
        <DateTag>{article.publishedAt}</DateTag>
        <CardContent css={{height: 160}}>
            <Box css={{height: 65, paddingTop: 5}}>
                <Heading as='h5' lineHeight={1.5}>{article.title}</Heading>
            </Box>
            <Text>{article.description}</Text>
        </CardContent>
        <CardContent css={{paddingBottom: 5}}>
            <Button>Read Now</Button>
        </CardContent>
        
      </Card>  
    );
};

export default ArticleCard;