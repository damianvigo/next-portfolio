import Layout from '../components/Layout';
import Error from './_error';

const Github = ({ user, statusCode }) => {
  // console.log(statusCode);
  if (statusCode) {
    return <Error statusCode={statusCode} />
  }

  // console.log(props.user);
  return (
    <Layout footer={false} dark>
      <div className='row'>
        <div className='col-md-4 offset-md-4'>
          <div className='card card-body text-center'>
            <h1>{user.name}</h1>
            <img src={user.avatar_url} alt='' />
            <p>{user.bio}</p>
            <a href={user.blog} target='_blank' rel='noreferrer' className='btn btn-outline-secondary my-2'>
              My Blog
            </a>
            <a href={user.html_url} target='_blank' rel='noreferrer' className='btn btn-outline-secondary'>
              Go to Github
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch('https://api.github.com/users/damianvigo');
  const data = await res.json();

  // console.log(res)
  const statusCode = res.status > 200 ? res.status : false;

  // respuesta del backend en terminal
  // console.log(data);
  return {
    props: {
      user: data,
      statusCode
    },
  };
}

export default Github;
