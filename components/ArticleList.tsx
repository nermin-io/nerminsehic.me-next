import { styled } from '../stitches';
import Box from './Box';

const ArticleList = styled(Box, {
  display: 'flex',
  gap: 14,
  padding: '20px 0',
  flexWrap: 'wrap',
  '@large': {
    justifyContent: 'center'
  }
});

export default ArticleList;
