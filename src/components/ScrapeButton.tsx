import { useState } from "react";
import { EASYSCRAPE_ENDPOINT } from "~/config";
import { type Result, useStore } from "~/store";
import LoadingSpinner from "./LoadingSpinner";

const ScrapeButton = () => {
  const { url, fields, setResult } = useStore();
  const [loading, setLoading] = useState(false);

  const fetchResults = () => {
    if (loading) {
      console.log("fetching in progress");
      return;
    }
    setLoading(true);
    const data = JSON.stringify({
      url,
      fields,
    });

    fetch(EASYSCRAPE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    })
      .then(async (res) => {
        const data = (await res.json()) as { result: Result };
        setResult(data.result);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setLoading(false));
  };

  return (
    <button
      className="w-fit rounded-full bg-white px-5 py-2 flex flex-row space-x-2 items-center"
      disabled={loading}
      onClick={fetchResults}
    >
      {loading && <LoadingSpinner />}
      {loading ? "Scraping" : "Scrape"}
    </button>
  );
};

export default ScrapeButton;
