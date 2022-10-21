import React from 'react';
import { styled } from '@stitches/react';
import Container from './Container';
import Navbar from './Navbar';
import Box from '../Box';

interface Props {
    children: React.ReactNode | React.ReactNode[];
}

const Content = styled(Box, {});

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <Container>
            <Navbar />
            <Content>
                { children }
            </Content>
        </Container>
    );
}

export default Layout;