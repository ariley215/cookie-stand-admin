import Head from 'next/head';
import { useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import CreateCookieStandForm from './components/cookie-stand-form';


export default function Home() {


  const [standResponse, setStandResponse] = useState('');

  function onCreate(cookieStandInfo){
    setStandResponse([standResponse, ...cookieStandInfo]);

  }
  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <main className="flex flex-col items-center py-4 space-y-8">
        <CreateCookieStandForm onCreate={onCreate} />
        <Response reports={standResponse} />
      </main>
      <footer><Footer /></footer>
    </div>
  );
};



  



function Response(props) {

  return (
    <p>{props.response}</p>
  )
};