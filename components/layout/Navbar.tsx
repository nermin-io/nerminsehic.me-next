import React from 'react';
import { styled } from '../../stitches.config';
import { NavigationDocument } from '../../prismicio-types';
import { SliceZone } from '@prismicio/react';
import { components } from '../../slices';

interface Props {
  data: NavigationDocument<string>;
}

const Nav = styled('nav', {
  all: 'unset',
  borderBottom: '1px solid #242424',
  display: 'flex',
  height: 52,
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Navbar: React.FC<Props> = ({ data: nav }) => {
  if (!nav) return <div></div>;
  return (
    <Nav>
      <SliceZone slices={nav.data.slices} components={components} />
    </Nav>
  );
};

export default Navbar;
