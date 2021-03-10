import Head from 'next/head';

const Title = ({titleHead}) => {
  return ( 
    <Head><title>{titleHead}</title></Head>
   );
}
 
export default Title;