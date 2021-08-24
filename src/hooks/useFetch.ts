import { useState } from "react";

import API from "../api/axiosConfig";

const useFetch = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async (url: string) => {
    try {
      const result = await API.get(url);
      setResponse(result.data.results);
      setLoading(false);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  };

  return { fetchData, response, loading, error };
};

export default useFetch;
