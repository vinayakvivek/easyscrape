import { type NextPage } from "next";
import Head from "next/head";
import InputFields from "~/components/InputFields";
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
        <div className="flex h-screen flex-col items-center space-y-14 py-20">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Easy<span className="text-blue-300">Scrape</span>
          </h1>
          <div className="flex w-1/2 flex-col items-center">
            <URLInput />
          </div>
          <div className="grid w-4/5 flex-1 grid-cols-2 gap-4">
            <div className="border border-yellow-300 p-8">
              <InputFields />
            </div>
            <div className="bg-slate-300"></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
