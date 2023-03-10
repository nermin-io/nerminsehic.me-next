import { styled } from '../../stitches.config';
import Box from '../Box';

const Container = styled(Box, {
  width: 1195,
  margin: '0 auto',
  '@large': {
    width: '100%',
    padding: '0 20px',
  },
});

export default Container;
