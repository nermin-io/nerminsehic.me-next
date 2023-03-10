import { styled } from '../stitches.config';

const Header = styled('header', {
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
      width: '100%',
    },
  },
});

export default Header;
