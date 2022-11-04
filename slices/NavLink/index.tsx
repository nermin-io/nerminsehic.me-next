import React, { useState, useEffect } from "react";
import type { Content } from "@prismicio/client";
import type { SliceComponentProps } from "@prismicio/react";
import { styled } from '../../stitches';
import { Simplify } from "../../.slicemachine/prismicio";
import { useRouter } from 'next/router';
import Box from "../../components/Box";
import Link from 'next/link';

export type NavLinkProps = SliceComponentProps<Content.NavLinkSlice>;

const NAV_WIDTH = 60;
const NAV_GAP = 20;

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

const isSelected = (item: Simplify<Content.NavLinkSliceDefaultItem>, routePath: string) => {
  return (
    routePath === item.path ||
    (item.path !== "/" && routePath.startsWith(item.path || ''))
  );
};

const getCurrentPageIdx = (slice: Content.NavLinkSlice, routePath: string) => {
  return slice.items.findIndex((item) => isSelected(item, routePath));
}

const NavLink: React.FC<NavLinkProps> = ({ slice }) => {
  const { asPath: routePath } = useRouter();
  const [navIndex, setNavIndex] = useState(getCurrentPageIdx(slice, routePath));

  useEffect(() => {
    setNavIndex(getCurrentPageIdx(slice, routePath));
  }, [routePath]);  

  return (
    <NavListContainer>
      <NavList>
        {slice.items.map((item, itemIdx) => {
          const itemIsSelected = isSelected(item, routePath);
          return (
            <NavItem
              key={`${item.label}-${itemIdx}`}
              css={{ fontWeight: itemIsSelected ? 500 : 400 }}
              onMouseOver={() => setNavIndex(itemIdx)}
              onMouseLeave={() => setNavIndex(getCurrentPageIdx(slice, routePath))}
            >
              <Link href={item.path || '/'}>
                <a>{item.label}</a>
              </Link>
            </NavItem>
          );
        })}
      </NavList>
      <SlidingLine css={{ left: (navIndex * NAV_WIDTH) + (navIndex * NAV_GAP) }} />
    </NavListContainer>
  );
};

export default NavLink;
