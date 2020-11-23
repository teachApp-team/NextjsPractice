import Link from 'next/link';
import style from '../static/Style';
import Counter from '../components/Counter';
import Layout from '../components/Layout';

export default () => (
  <Layout header ="Other" title ="other page.">
    <Counter/>
    <hr/>
    <div>
      <Link href="/">
        <button>
          &gt;&gt;Back to Top
        </button>
      </Link>
    </div>
  </Layout>
);
