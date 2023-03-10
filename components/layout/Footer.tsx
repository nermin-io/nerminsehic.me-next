import React from 'react';
import { styled } from '../../stitches.config';
import Box from '../Box';
import { FooterDocument } from '../../.slicemachine/prismicio';
import { PrismicRichText } from '@prismicio/react';

interface Props {
  data: FooterDocument<string>;
}

const BaseFooter = styled('footer', {
  height: 46,
  backgroundColor: 'rgba(255, 255, 255, 0.02)',
});

const FooterContainer = styled(Box, {
  width: 1195,
  height: '100%',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '@large': {
    width: '100%',
    padding: '0 20px',
  },
});

const FooterTitle = styled(Box, {
  '& p': {
    fontSize: 16,
    fontWeight: 500,
  },
});

const CopyRight = styled(Box, {
  display: 'flex',
  gap: 5,
  fontSize: 13,
  '& p': {
    fontSize: 13,
    color: '#A7A7A7',
  },
});

const Footer: React.FC<Props> = ({ data: footer }) => {
  if (!footer) return <div></div>;
  return (
    <BaseFooter>
      <FooterContainer>
        <FooterTitle>
          <PrismicRichText field={footer.data.title} />
        </FooterTitle>
        <CopyRight>
          <PrismicRichText field={footer.data.copyright} />
          <p>{` ${new Date().getFullYear()}`}</p>
        </CopyRight>
      </FooterContainer>
    </BaseFooter>
  );
};

export default Footer;
