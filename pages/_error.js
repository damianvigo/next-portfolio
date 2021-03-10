import Layout from '../components/Layout';

const _error = ({statusCode}) => {
  return (
    <Layout footer={false}>
      {
        statusCode ? (
          <p className='text-center display-4 text-muted'>Could not load your page: Status Code {statusCode}</p>
        ) : (
          <p>Cound not get this page</p>
        )
      }
      
    </Layout>
  );
};

export default _error;
