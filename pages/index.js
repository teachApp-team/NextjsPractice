import Link from 'next/link';
import style from '../static/Style';
import Counter from '../components/Counter';
import Layout from '../components/Layout';

export default () => (
  <Layout header ="Next" title ="Top page.">
    <Counter/>
    <hr/>
    <Link href="./other">
      <button>
        go to other &gt;&gt;
      </button>
    </Link>
  </Layout>
);
