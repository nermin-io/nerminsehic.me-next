import React from 'react';
import { styled } from '../stitches.config';
import Box from './Box';
import * as PrismicType from '@prismicio/types';
import Image from 'next/image';

interface Props {
  image: PrismicType.ImageField;
}

const CardHeader = styled(Box, {
  height: 145,
  width: '100%',
  borderRadius: 3,
  backgroundBlendMode: 'overlay',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const ProjectCardImage: React.FC<Props> = ({ image }) => {
  return (
    <CardHeader>
      {image.url && (
        <Box
          css={{
            width: '100%',
            borderRadius: 3,
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Image
            src={image.url}
            alt={image.alt || 'Project Image'}
            width={380}
            height={145}
            style={{ borderRadius: 3 }}
          />
        </Box>
      )}
    </CardHeader>
  );
};

export default ProjectCardImage;
