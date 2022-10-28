import React from "react";
import { styled } from "@stitches/react";
import Container from "./Container";
import Navbar from "./Navbar";
import Box from "../Box";
import Footer from "./Footer";
import { FooterDocument, NavigationDocument } from "../../../.slicemachine/prismicio";

interface Props {
  children: React.ReactNode | React.ReactNode[];
  navData: NavigationDocument<string>;
  footerData: FooterDocument<string>;
}

const Content = styled(Box, {});
const Spacer = styled(Box, {
    height: 20
});

const Layout: React.FC<Props> = ({ children, navData, footerData }) => {
  return (
    <>
      <Container>
        <Navbar data={navData} />
        <Content>{children}</Content>
      </Container>
      <Spacer />
      <Footer data={footerData}/>
    </>
  );
};

export default Layout;
