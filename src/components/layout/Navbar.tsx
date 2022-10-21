import React from 'react';
import Box from '../Box';
import { styled } from '@stitches/react';

interface Props {}

const Nav = styled('nav', {});
const NavList = styled('ul', {});
const NavItem = styled('li', {});

const Navbar: React.FC<Props> = () => {
    return (
        <Nav>
            <NavList>
                <NavItem>Home</NavItem>
                <NavItem>About</NavItem>
                <NavItem>Contact</NavItem>
                <NavItem>TIL</NavItem>
            </NavList>
        </Nav>
    );
}

export default Navbar;