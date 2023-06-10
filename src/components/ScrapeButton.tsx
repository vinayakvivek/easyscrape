import { useState } from "react";
import { type Result, useStore } from "~/store";

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

    fetch("http://139.84.135.59:8080/scrape_fields", {
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
      className="w-fit rounded-full bg-white px-5 py-2"
      disabled={loading}
      onClick={fetchResults}
    >
      {loading ? "Scraping" : "Scrape"}
    </button>
  );
};

export default ScrapeButton;
