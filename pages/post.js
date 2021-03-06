import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { posts } from '../profile';

const Post = () => {
  const router = useRouter();

  // console.log(router.query)

  const currentPost = posts.filter((post) => post.title === router.query.title)[0];

  // console.log(currentPost);

  return (
    <Layout footer={false} title={router.query.title}>
      <div className='text-center'>
        {router.query.title === 'React' || router.query.title === 'Svelte' || router.query.title === 'Vue' ? <img src={currentPost.imageURL} alt='' className='img-fluid' style={{ width: '50%' }} /> : ''
        }
        {router.query.title && <p className='p-3 w-50 m-auto'>{currentPost.content}</p>
        }
      </div>
    </Layout>
  );
};

export default Post;
