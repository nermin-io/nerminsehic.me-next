import React from "react";
import { styled } from "@stitches/react";
import Container from "./Container";
import Navbar from "./Navbar";
import Box from "../Box";
import Footer from "./Footer";
import { FooterDocument, NavigationDocument } from "../../.slicemachine/prismicio";

interface Props {
  children: React.ReactNode | React.ReactNode[];
  navData: NavigationDocument<string>;
  footerData: FooterDocument<string>;
}

const Content = styled(Box, {});
const Spacer = styled(Box, {
    height: 20
});

const FullHeight = styled(Box, {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
});

const Layout: React.FC<Props> = ({ children, navData, footerData }) => {
  return (
    <FullHeight>
      <Container>
        <Navbar data={navData} />
        <Content>{children}</Content>
      </Container>
      <Spacer />
      <Footer data={footerData} />
    </FullHeight>
  );
};

export default Layout;
