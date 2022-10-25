import React from "react";
import { styled } from "@stitches/react";
import Container from "./Container";
import Navbar from "./Navbar";
import Box from "../Box";
import Footer from "./Footer";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const Content = styled(Box, {});
const Spacer = styled(Box, {
    height: 20
});

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Container>
        <Navbar />
        <Content>{children}</Content>
      </Container>
      <Spacer />
      <Footer />
    </>
  );
};

export default Layout;
