import Head from 'next/head';
import { useState } from 'react';


export default function Home() {

  const [cookieStands, setCookieStands] = useState([]);

  function createCookieStandHandler(props) {
    function handleSubmit(event) {
      props.onCreateStand({
        location: event.target.location.value,
        minCustomers: parseInt(event.target.minCustomers.value),
        maxCustomers: parseInt(event.target.maxCustomers.value),
        aveCookies: parseInt(event.target.aveCookies.value),
      });
      event.target.reset();
  }
     
  

  }

  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <main className="flex flex-col items-center py-4 space-y-8">
        <CreateCookieStandForm onSubmit={createCookieStandHandler} />
        <Response />
      </main>
      <footer><Footer /></footer>
    </div>
  );
};

function Header() {

  return (
    <header className="bg-green-500 p-8 mb-8">
      <h1 className="text-6xl">Cookie Stand Admin</h1>
    </header>
  )
};

function CreateCookieStandForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit} className=" flex flex-col w-3/4 gap-2 p-8 mx-auto my-4 bg-green-300 rounded-lg">
      <legend className="text-4xl justify-center text-center p-6">Create Cookie Stand</legend>

      <div className='flex py-4'>
        <label className="text-2xl">Location</label>
        <input name="location" type="text" className=" flex-auto pl-2" />
      </div>

      <div className='flex gap-2 text-center '>

        <div className='flex flex-col flex-1 min-w-0 p-2'>
          <label className="text-2xl">Minimum Customers per Hour</label>
          <input name="min customers" type="number" className="flex flex-col flex-1 gap-2 min-w-0 p-2" />
        </div>

        <div className='flex flex-col flex-1 min-w-0 p-2'>
          <label className="text-2xl">Maximum Customers per Hour</label>
          <input name="max customers" type="number" className="" />
        </div>

        <div className='flex flex-col flex-1 min-w-0 p-2'>
          <label className="text-2xl">Average Cookies per Sale</label>
          <input name="ave cookies" type="number" className="" />
        </div>
        
        <button type="submit" className="bg-green-500 hover:bg-green-650 transition-colors text-3xl py-10 px-12">Create</button>

      </div>

    </form>
  )
};

function Footer() {
  return (
    <footer className="bg-green-500 text-2xl mt-8 px-6 py-8">
      <p>&copy;{new Date().getFullYear()}</p>
    </footer>
  );
};


function Response(props) {

  return (
    <p>{props.response}</p>
  )
};