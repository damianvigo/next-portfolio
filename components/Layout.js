import Navbar from './Navbar';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import ClassNames from 'classnames';
import Title from './Title';

const Layout = ({ title, children, titleHead, footer = true, dark = false }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      // console.log(url);
      NProgress.start();
    };

    router.events.on('routeChangeStart', handleRouteChange);

    router.events.on('routeChangeComplete', () => NProgress.done());

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  return (
    
    // <div className={dark ? 'bg-dark' : ''}>
    <div className={ClassNames({'bg-dark': dark, 'bg-light': !dark})}>
     <Title titleHead={titleHead} />
      <Navbar />
      {/* {props.children} */}
      <main className='container py-4'>

          {title && (
            <h1 className={ClassNames('text-center mb-5', {'text-light': dark})}>{title}</h1>
          )}

      {children}
     </main>

      {footer && (
        <footer className='bg-dark text-light text-center'>
          <div className='container p-4'>
            <h2>&copy; Ryan Ray Portfolio</h2>
            <p>2000 - {new Date().getFullYear()}</p>
            <small>All rights Reserverd.</small>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;
