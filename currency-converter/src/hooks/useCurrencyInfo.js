import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`);
      const data = await response.json();
      //   console.log(data);
      setApiData(data[currency]);
    };
    fetchData();
  }, [currency]);
  return apiData;
}

export default useCurrencyInfo;
