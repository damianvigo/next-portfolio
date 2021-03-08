import Navbar from './Navbar';

const Layout = ({ children }) => (
  <>
    <Navbar />
    {/* {props.children} */}
    <main className='container py-4'>
      {children}
    </main>
  </>
);

export default Layout;
