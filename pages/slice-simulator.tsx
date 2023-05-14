import { SliceSimulator } from '@prismicio/slice-simulator-react';
import { SliceZone } from '@prismicio/react';
import { styled } from '../stitches.config';
import { components } from '../slices';
import Box from '../components/Box';

const Wrapper = styled(Box, {
  backgroundColor: '#191919',
  color: '#F6F6F6',
  height: '100vh',
  padding: 20,
});

const SliceSimulatorPage = () => (
  <SliceSimulator
    // The "sliceZone" prop should be a function receiving slices and rendering them using your "SliceZone" component.
    state={{}}
    sliceZone={(props) => (
      <Wrapper>
        <SliceZone {...props} components={components} />
      </Wrapper>
    )}
  />
);

export default SliceSimulatorPage;

export const getStaticProps = async () => {
  if (process.env.NODE_ENV === 'production') {
    return { notFound: true };
  } else {
    return { props: {} };
  }
};
