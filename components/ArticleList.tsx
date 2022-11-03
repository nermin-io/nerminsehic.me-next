import { styled } from '@stitches/react';
import Box from './Box';

const ArticleList = styled(Box, {
  display: 'flex',
  gap: 14,
  padding: '20px 0',
  flexWrap: 'wrap'
});

export default ArticleList;
