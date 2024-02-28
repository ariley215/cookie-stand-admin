import Head from 'next/head';
import { useState } from 'react';


export default function Home() {
  const [cookieStands, setCookieStands] = useState([]);


  function createCookieStandHandler(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const location = form.get('location');
    const minCustomers = form.get('min customers');
    const maxCustomers = form.get('max customers');
    const aveCookies = form.get('ave cookies');
    const newStand = {
      location: location,
      minCustomers: minCustomers,
      maxCustomers: maxCustomers,
      aveCookies: aveCookies,
    };
    setCookieStands([...cookieStands, newStand]);

  }

  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <main className="flex flex-col items-center py-4 space-y-8">
        <form>
          <CreateCookieStandForm onSubmit={ createCookieStandHandler }/>
        </form>
        <Response />
      </main>
      <footer><Footer /></footer>
    </div>
  );
};

function Header(){

    return(
        <header className="bg-green-500 p-8 mb-8">
            <h1 className="text-6xl">Cookie Stand Admin</h1>
        </header>
    )
};

function CreateCookieStandForm( {onSubmit} ) {
    return(
      <form onSubmit={onSubmit} className=" justify-center w-3/4 p-8 mx-auto my-4 bg-green-300 rounded-lg">
        <h2 className="text-4xl flex justify-center items-center p-6">Create Cookie Stand</h2>

        <label className="text-2xl">Location</label>
        <input name="location" className=" w-5/6" />
        <br />

        <label className="text-2xl">Minimum Customers per Hour</label>
        <input name="min customers" className="" />

        <label className="text-2xl">Maximum Customers per Hour</label>
        <input name="max customers" className="" />

        <label className="text-2xl">Average Cookies per Sale</label>
        <input name="ave cookies" className="" />

        <button className="bg-green-500 hover:bg-green-650 transition-colors text-3xl py-10 px-12">Create</button>
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

    return(
      <p>{props.response}</p>
    )
};