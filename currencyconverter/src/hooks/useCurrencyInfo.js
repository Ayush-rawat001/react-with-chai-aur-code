import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.rates); // ✅ rates object ko store karo
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, [currency]);

  return data; // ✅ data return kar do
}

export default useCurrencyInfo;
