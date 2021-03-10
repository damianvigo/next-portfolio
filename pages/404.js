import Layout from '../components/Layout';
import Link from 'next/link';

const custom404 = () => (
  <Layout titleHead='Error' footer={false}>
    <div className='text-center'>
      <h1>404</h1>
      <p>
        this page does not exists. Please return to
        <Link href='/'>
          <a> Home</a>
        </Link>
      </p>
    </div>
  </Layout>
);

export default custom404;
