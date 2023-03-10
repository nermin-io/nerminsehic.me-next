import React from 'react';
import { styled } from '../stitches.config';
import type { Content } from '@prismicio/client';
import Box from './Box';
import dayjs from 'dayjs';
import Link from 'next/link';
import { isFilled } from '@prismicio/helpers';
import Header from './Header';
import HighlightedText from './HighlightedText';

interface Props {
  project: Content.ProjectDocument;
}

const ArticleMeta = styled(Box, {
  fontSize: 16,
});

const ProjectPageHeader: React.FC<Props> = ({ project }) => {
  return (
    <Header>
      <h1>{project.data.title}</h1>
      <ArticleMeta>
        {dayjs(project.data.published_at).format('DD MMM YYYY')}
        {isFilled.contentRelationship(project.data.site) && (
          <HighlightedText>
            {' '}
            <Link href={`${project.data.site.url}`}>&#x2022; Visit Site</Link>
          </HighlightedText>
        )}
      </ArticleMeta>
    </Header>
  );
};

export default ProjectPageHeader;
