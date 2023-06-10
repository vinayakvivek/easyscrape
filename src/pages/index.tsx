import { type NextPage } from "next";
import Head from "next/head";
import InputFields from "~/components/InputFields";
import Output from "~/components/Output";
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
        <div className="flex min-h-screen flex-col items-center space-y-14 py-20">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Easy<span className="text-blue-300">Scrape</span>
          </h1>
          <div className="flex w-screen flex-1 flex-col items-center space-y-14">
            <div className="w-1/2">
              <URLInput />
            </div>
            <div className="flex w-4/5 flex-1 flex-row">
              <div className="basis-3/5 px-8">
                <InputFields />
              </div>
              <div className="flex basis-2/5 flex-col">
                <Output />
                <div className="h-4"/>
                <button className="w-fit rounded-full bg-white px-5 py-2">
                  Scrape
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
