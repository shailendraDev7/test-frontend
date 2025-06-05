import axios from "axios";
import { useEffect, useState } from "react";

export const useGetData = () => {
  const [data, setData] = useState(null); // Start with null
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL_LOCAL}/api/v1/project/showall`);        
        if (!response.data) {
          throw new Error('No data received');
        }
        setData(response.data);
        
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};