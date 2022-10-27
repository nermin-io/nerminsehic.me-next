import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '../prismicio';

function BlogApplication({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider internalLinkComponent={({ href, ...props}) => (
      <Link href={href}>
        <a {...props} />
      </Link>
    )}>
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  );
}

export default BlogApplication;
