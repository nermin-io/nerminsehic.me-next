import React from 'react';
import type { Content } from '@prismicio/client';
import type { SliceComponentProps } from '@prismicio/react';
import { styled } from '../../stitches.config';
import GithubIcon from '../../components/icons/GithubIcon';
import LinkedinIcon from '../../components/icons/LinkedinIcon';
import TwitterIcon from '../../components/icons/TwitterIcon';
import Box from '../../components/Box';
import { PrismicLink } from '@prismicio/react';
import BmcIcon from '../../components/icons/BmcIcon';

export type SocialLinkProps = SliceComponentProps<Content.SocialLinkSlice>;

const IconGroup = styled(Box, {
  display: 'flex',
  gap: 25,
});

const iconTypes = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: TwitterIcon,
  bmc: BmcIcon,
};

const SocialLink: React.FC<SocialLinkProps> = ({ slice }) => {
  return (
    <IconGroup>
      {slice.items.map((item, itemIdx) => {
        if (!item.type) return;
        const Icon = iconTypes[item.type];
        return (
          <PrismicLink key={`${item.path}-${itemIdx}`} field={item.path}>
            <Icon height={24} width={24} fill="#787878" onHoverFill="#979797" />
          </PrismicLink>
        );
      })}
    </IconGroup>
  );
};

export default SocialLink;
