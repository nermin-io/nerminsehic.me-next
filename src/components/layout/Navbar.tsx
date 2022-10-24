import React from "react";
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
  gap: 20,
});

const NavItem = styled("li", {
  height: "100%",
  padding: "0 10px",
  display: "flex",
  alignItems: "center",
});

const IconGroup = styled(Box, {
  display: "flex",
  gap: 25
});

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    link: "",
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
    link: 'https://twitter.com/nsehic_official'
  }
];

const Navbar: React.FC<Props> = () => {
  return (
    <Nav>
      <NavList>
        {NAV_ITEMS.map((item, itemIdx) => (
          <NavItem key={`${item.label}-${itemIdx}`}>
            <Link href={item.link}>
              <a>{item.label}</a>
            </Link>
          </NavItem>
        ))}
      </NavList>
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
