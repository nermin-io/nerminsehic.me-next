import React from "react";
import type { Content } from "@prismicio/client";
import type { SliceComponentProps } from "@prismicio/react";
import { styled } from "@stitches/react";
import GithubIcon from "../../src/components/icons/GithubIcon";
import LinkedinIcon from "../../src/components/icons/LinkedinIcon";
import TwitterIcon from "../../src/components/icons/TwitterIcon";
import Box from "../../src/components/Box";
import { PrismicLink } from "@prismicio/react";

export type SocialLinkProps = SliceComponentProps<Content.SocialLinkSlice>;

const IconGroup = styled(Box, {
  display: "flex",
  gap: 25,
});

const iconTypes = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: TwitterIcon
}

const SocialLink: React.FC<SocialLinkProps> = ({ slice }) => {
  return (
    <IconGroup>
        {slice.items.map((item, itemIdx) => {
          if(!item.type) return;
          const Icon = iconTypes[item.type];
          return (
            <PrismicLink key={`${item.path}-${itemIdx}`} field={item.path}>
                <Icon height={24} width={24} fill="#787878" onHoverFill="#979797" />
            </PrismicLink>
          );
        })}
      </IconGroup>
  )
}

export default SocialLink