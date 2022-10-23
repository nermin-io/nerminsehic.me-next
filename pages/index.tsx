import type { NextPage } from 'next';
import DocumentHead from '../src/components/layout/DocumentHead';
import Layout from '../src/components/layout/Layout';
import HeroHeader from '../src/components/HeroHeader';
import About from '../src/components/slices/About';

const Home: NextPage = () => {
  return (
    <div>
      <DocumentHead title="Home"/>
      <Layout>
        <HeroHeader />
        <About />
      </Layout>
    </div>
  )
}

export default Home;
