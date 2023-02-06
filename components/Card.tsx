import { styled } from '../stitches.config';
import Box from "./Box";

const Card = styled(Box, {
  border: '1px solid #4D4D4D',
  borderRadius: 8,
  padding: 5,
  maxWidth: 389,
  position: 'relative',
  '@extrasmall': {
    maxWidth: '100%'
  }
});

export default Card;