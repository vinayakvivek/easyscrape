import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import URLInput from "~/components/URLInput";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>EasyScrape</title>
        <meta name="description" content="Scrape any URL using AI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-[#081370] to-blue-300">
        <div className="flex flex-col items-center py-20">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Easy<span className="text-blue-300">Scrape</span>
          </h1>
          <div className="h-32" />
          <div className="flex flex-col items-center w-1/2">
            <URLInput />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
