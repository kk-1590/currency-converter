import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [apiData, setApiData] = useState({});
  let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      //   console.log(data);
      setApiData(data[currency]);
    };
    fetchData();
  }, [currency]);
  return apiData;
}

export default useCurrencyInfo;
