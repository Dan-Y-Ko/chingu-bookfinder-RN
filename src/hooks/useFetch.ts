import { useState } from "react";

import API from "../api/axiosConfig";

const useFetch = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (url: string) => {
    try {
      setLoading(true);
      setError(null);
      const result = await API.get(url);

      setResponse(result.data.items);
      setLoading(false);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  };

  return { fetchData, response, loading, error };
};

export default useFetch;
