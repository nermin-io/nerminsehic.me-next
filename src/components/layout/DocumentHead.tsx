import React from "react";
import Head from "next/head";

interface Props {
    title: string;
}

const DocumentHead: React.FC<Props> = ({ title }) => {
  return (
      <Head>
        <title>Nermin Sehic :: Software Developer - {title}</title>
        <meta name="description" content="Nermin is a developer based in Melbourne, specialising in full-stack using Java/Scala & Javascript." />
      </Head>
  );
};

export default DocumentHead;
