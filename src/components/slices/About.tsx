import React from "react";
import { styled } from "@stitches/react";
import Section from "../Section";
import Heading from "../Heading";
import Text from "../Text";
import Link from "next/link";
import TechnologiesSlider from "../TechnologiesSlider";

interface Props {}

const About: React.FC<Props> = () => {
  return (
    <Section id="about">
      <Heading as="h5">About</Heading>
      <Text css={{ fontSize: 16 }}>
        Hi, I’m Nermin. I’m an 25 y/o Bosnian-Australian developer currently
        based in Melbourne.
      </Text>
      <Text css={{ fontSize: 16 }}>
        I love building things for the web. I’m an <Link href="#"><a>Oracle Certified Professional </a></Link>
        Java developer, but some of my favourite technologies include Scala,
        Typescript, React & Next.js.
      </Text>
      <Text css={{ fontSize: 16 }}>
        I’m currently building internal tools at Rendr, a fulfilment and
        delivery technology company in Richmond. On side, I’m creating an
        eCommerce platform and learning more and more about Scala.
      </Text>
      <Text css={{ fontSize: 16 }}>
        In my free time I love to do Karaoke, skate and try new restaurants.
      </Text>
      <TechnologiesSlider />
    </Section>
  );
};

export default About;
