import Head from 'next/head';
import { useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import CreateCookieStandForm from './components/cookie-stand-form';
import ReportTable from './components/table';
import { hours } from '../data';

export default function Home() {


  const [cookieStandResponse, setCookieStandResponse] = useState([]);

  function onCreate(cookieStandInfo){
    setCookieStandResponse([...cookieStandResponse, cookieStandInfo]);

  }
  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <main className="flex flex-col items-center py-4 space-y-8">
        <CreateCookieStandForm onCreate={onCreate} />
        <ReportTable reports={cookieStandResponse} hours={hours} />
      </main>
      <footer><Footer /></footer>
    </div>
  );
};