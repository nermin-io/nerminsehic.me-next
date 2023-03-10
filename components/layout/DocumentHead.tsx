import React from 'react';
import Head from 'next/head';

interface Props {
  title: string;
  description: string;
}

const DocumentHead: React.FC<Props> = ({ title, description }) => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#191919" />
      <meta name="msapplication-TileColor" content="#191919" />
      <meta name="theme-color" content="#191919" />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default DocumentHead;
