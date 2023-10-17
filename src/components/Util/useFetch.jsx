import axios from "axios";
import { useEffect, useState } from "react";


const useFetch = (url) => {

const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {   
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setIsLoading(false);
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    };

    // react 18 uses autoCleanup function to stop rendering
    // before 18 we used to use AbortController to destory the fetch

    fetchData();
  }, [url]);

  return {data, isLoading, error}
}

export default useFetch