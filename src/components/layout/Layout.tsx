import React from "react";
import { styled } from "@stitches/react";
import Container from "./Container";
import Navbar from "./Navbar";
import Box from "../Box";
import Footer from "./Footer";
import { NavigationDocument } from "../../../.slicemachine/prismicio";

interface Props {
  children: React.ReactNode | React.ReactNode[];
  navData: NavigationDocument<string>;
}

const Content = styled(Box, {});
const Spacer = styled(Box, {
    height: 20
});

const Layout: React.FC<Props> = ({ children, navData }) => {
  return (
    <>
      <Container>
        <Navbar data={navData} />
        <Content>{children}</Content>
      </Container>
      <Spacer />
      <Footer />
    </>
  );
};

export default Layout;
