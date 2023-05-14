import type { AppProps as NextAppProps } from 'next/app';
import Link from 'next/link';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '../prismicio';
import Layout from '../components/layout/Layout';
import { FooterDocument, NavigationDocument } from '../prismicio-types';
import FormattedCode from '../components/FormattedCode';
import type { JSXMapSerializer } from '@prismicio/react';
import { QueryClient, QueryClientProvider } from 'react-query';

const determineLanguage = (text: string | undefined) => {
  const fallbackLanguage = 'plaintext';

  if (!text) return [fallbackLanguage, ''];
  if (!text.startsWith('//')) return [fallbackLanguage, text];

  const [firstLine, ...lines] = text.split('\n');
  const language = firstLine.replace('//', '').trim();
  return [language, lines.join('\n')];
};

type AppProps<P = any> = {
  pageProps: P;
} & Omit<NextAppProps<P>, 'pageProps'>;

type Global = {
  navigation: NavigationDocument<string>;
  footer: FooterDocument<string>;
};

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
  const queryClient = new QueryClient();
  return (
    <PrismicProvider
      richTextComponents={richTextComponents}
      internalLinkComponent={({ href, ...props }) => (
        <Link href={href} {...props}></Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <QueryClientProvider client={queryClient}>
          <Layout
            navData={pageProps?.global?.navigation}
            footerData={pageProps?.global?.footer}
          >
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </PrismicPreview>
    </PrismicProvider>
  );
}

export default BlogApplication;
