import React from "react";
import Head from "next/head";

interface Props {
    title: string;
    description: string;
}

const DocumentHead: React.FC<Props> = ({ title, description }) => {
  return (
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
  );
};

export default DocumentHead;
