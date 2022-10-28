import '../styles/globals.css';
import type { AppProps as NextAppProps } from "next/app";
import Link from 'next/link';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { createClient, repositoryName } from '../prismicio';
import Layout from '../src/components/layout/Layout';
import { GetStaticProps } from 'next';
import { NavigationDocument } from '../.slicemachine/prismicio';

type AppProps<P = any> = {
  pageProps: P;
} & Omit<NextAppProps<P>, "pageProps">;

type Global = {
  navigation: NavigationDocument<string>;
}

interface PageProps {
  global: Global;
}

function BlogApplication({ Component, pageProps }: AppProps<PageProps>) {
  return (
    <PrismicProvider internalLinkComponent={({ href, ...props}) => (
      <Link href={href}>
        <a {...props} />
      </Link>
    )}>
      <PrismicPreview repositoryName={repositoryName}>
        <Layout navData={pageProps.global.navigation}>
          <Component {...pageProps} />
        </Layout>
      </PrismicPreview>
    </PrismicProvider>
  );
}


export default BlogApplication;
