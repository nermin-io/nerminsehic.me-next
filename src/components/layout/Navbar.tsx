import React, { useState } from "react";
import Box from "../Box";
import Link from "next/link";
import { styled } from "@stitches/react";
import GithubIcon from "../icons/GithubIcon";
import { IconProps } from "../icons";
import { useRouter } from "next/router";
import LinkedinIcon from "../icons/LinkedinIcon";
import TwitterIcon from "../icons/TwitterIcon";

interface Props {}

type NavItem = {
  label: string;
  link: string;
};

type SocialItem = {
  icon: React.FC<IconProps>;
  link: string;
};

const NAV_WIDTH = 60;
const NAV_GAP = 20;

const Nav = styled("nav", {
  all: "unset",
  borderBottom: "1px solid #242424",
  display: "flex",
  height: 52,
  justifyContent: "space-between",
  alignItems: "center",
});

const NavList = styled("ul", {
  all: "unset",
  height: "100%",
  listStyle: "none",
  display: "flex",
  alignItems: "center",
  gap: NAV_GAP,
});

const NavItem = styled("li", {
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: NAV_WIDTH,
  "& a": {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});

const SlidingLine = styled("hr", {
  all: "unset",
  height: 2,
  backgroundColor: "white",
  width: NAV_WIDTH,
  margin: 0,
  position: "absolute",
  transition: "left .2s ease-out",
});

const NavListContainer = styled(Box, {
  height: "100%",
  position: "relative",
});

const IconGroup = styled(Box, {
  display: "flex",
  gap: 25,
});

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "TIL",
    link: "/posts",
  },
];

const SOCIAL_ITEMS: Array<SocialItem> = [
  {
    icon: LinkedinIcon,
    link: "https://linkedin.com/in/nsehic",
  },
  {
    icon: GithubIcon,
    link: "https://github.com/nsehic",
  },
  {
    icon: TwitterIcon,
    link: "https://twitter.com/nsehic_official",
  },
];

const isSelected = (item: NavItem, routePath: string) => {
  return (
    routePath === item.link ||
    (item.link !== "/" && routePath.startsWith(item.link))
  );
};

const Navbar: React.FC<Props> = () => {
  const { asPath: routePath } = useRouter();
  const selectedPageIdx = NAV_ITEMS.findIndex((item) =>
    isSelected(item, routePath)
  );
  const [navIndex, setNavIndex] = useState(selectedPageIdx);

  return (
    <Nav>
      <NavListContainer>
        <NavList>
          {NAV_ITEMS.map((item, itemIdx) => {
            const itemIsSelected = isSelected(item, routePath);
            return (
              <NavItem
                key={`${item.label}-${itemIdx}`}
                css={{fontWeight: itemIsSelected ? 500 : 400}}
                onMouseOver={(e) => setNavIndex(itemIdx)}
                onMouseLeave={(e) => setNavIndex(selectedPageIdx)}
              >
                <Link href={item.link}>
                  <a>{item.label}</a>
                </Link>
              </NavItem>
            );
          })}
        </NavList>
        <SlidingLine
          css={{ left: navIndex * NAV_WIDTH + navIndex * NAV_GAP }}
        />
      </NavListContainer>
      <IconGroup>
        {SOCIAL_ITEMS.map((item, itemIdx) => {
          const Icon = item.icon;
          return (
            <Link key={`${item.link}-${itemIdx}`} href={item.link}>
              <a>
                <Icon height={24} width={24} fill="#787878" />
              </a>
            </Link>
          );
        })}
      </IconGroup>
    </Nav>
  );
};

export default Navbar;
