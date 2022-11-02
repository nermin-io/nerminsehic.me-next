import '../styles/globals.css';
import type { AppProps as NextAppProps } from "next/app";
import Link from 'next/link';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '../prismicio';
import Layout from '../src/components/layout/Layout';
import { FooterDocument, NavigationDocument } from '../.slicemachine/prismicio';
import FormattedCode from '../src/components/FormattedCode';
import type { JSXMapSerializer } from '@prismicio/react';

type AppProps<P = any> = {
  pageProps: P;
} & Omit<NextAppProps<P>, "pageProps">;

type Global = {
  navigation: NavigationDocument<string>;
  footer: FooterDocument<string>;
}

interface PageProps {
  global: Global;
}

const richTextComponents: JSXMapSerializer = {
  preformatted: ({ text }) => (
   <FormattedCode language='scala'>
    { text }
   </FormattedCode> 
  )
}

function BlogApplication({ Component, pageProps }: AppProps<PageProps>) {
  return (
    <PrismicProvider richTextComponents={richTextComponents} internalLinkComponent={({ href, ...props}) => (
      <Link href={href}>
        <a {...props} />
      </Link>
    )}>
      <PrismicPreview repositoryName={repositoryName}>
        <Layout navData={pageProps?.global?.navigation} footerData={pageProps?.global?.footer}>
          <Component {...pageProps} />
        </Layout>
      </PrismicPreview>
    </PrismicProvider>
  );
}


export default BlogApplication;
