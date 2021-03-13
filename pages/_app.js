// pages/_app.js
import React from 'react';
import Head from 'next/head';
// Configuracion de toda la aplicacion. Partes fuera del body
import 'bootswatch/dist/cosmo/bootstrap.min.css';
import '../global.css';
import '../components/navbar.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My portfolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
