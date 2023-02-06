import React from 'react';
import {styled} from '../stitches.config';
import Box from './Box';
import Button from './Button';
import type {Content} from '@prismicio/client';
import {PrismicRichText} from '@prismicio/react';
import dayjs from 'dayjs';
import Link from 'next/link';
import ProjectCardImage from "./ProjectCardImage";
import CardContent from "./CardContent";
import DateTag from "./DateTag";
import Card from "./Card";

interface Props {
  project: Content.ProjectDocument;
}

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