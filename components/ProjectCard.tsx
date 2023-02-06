import React from 'react';
import {styled} from '../stitches.config';
import Box from './Box';
import Button from './Button';
import type {Content} from '@prismicio/client';
import {PrismicRichText} from '@prismicio/react';
import dayjs from 'dayjs';
import Link from 'next/link';
import ProjectCardImage from "./ProjectCardImage";

interface Props {
  project: Content.ProjectDocument;
}

const Card = styled(Box, {
  border: '1px solid #4D4D4D',
  borderRadius: 8,
  padding: 5,
  maxWidth: 389,
  // flexGrow: 1,
  position: 'relative'
});

const CardContent = styled(Box, {
  padding: '0px 15px',
  display: 'flex',
  flexDirection: 'column',
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

const ProjectCard: React.FC<Props> = ({project}) => {
  return (
    <Card>
      <ProjectCardImage image={project.data.image}/>
      <DateTag>{dayjs(project.data.published_at).format("DD MMM YYYY")}</DateTag>
      <CardContent>
        <Box css={{padding: '10px 0px'}}>
          <h5 style={{lineHeight: 1.5, fontWeight: 500}}>
            {project.data.title}
          </h5>
          <PrismicRichText field={project.data.snippet}/>
        </Box>
      </CardContent>
      <CardContent css={{paddingBottom: 5}}>
        <Link href={`${project.url}`}>
          <Button>Read Case Study</Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;