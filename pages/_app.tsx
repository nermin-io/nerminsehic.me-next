import '../styles/globals.css';
import type { AppProps as NextAppProps } from "next/app";
import Link from 'next/link';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '../prismicio';
import Layout from '../components/layout/Layout';
import { FooterDocument, NavigationDocument } from '../.slicemachine/prismicio';
import FormattedCode from '../components/FormattedCode';
import type { JSXMapSerializer } from '@prismicio/react';

const determineLanguage = (text: string | undefined) => {
  const fallbackLanguage = 'plaintext';

  if(!text) return [fallbackLanguage, ''];
  if(!text.startsWith('//')) return [fallbackLanguage, text];

  const [firstLine, ...lines ] = text.split('\n');
  const language = firstLine.replace('//','').trim();
  return [language, lines.join('\n')];
}

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
  preformatted: ({ text }) => {
    const [language, code] = determineLanguage(text);
    return <FormattedCode language={language}>{code}</FormattedCode>;
  },
};

function BlogApplication({ Component, pageProps }: AppProps<PageProps>) {
  return (
    <PrismicProvider richTextComponents={richTextComponents} internalLinkComponent={({ href, ...props}) => (
      <Link href={href} {...props}>
        
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
