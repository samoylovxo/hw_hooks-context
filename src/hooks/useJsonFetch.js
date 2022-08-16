import { useEffect, useState } from "react";

export const useJsonFetch = ({ url, options, deps = [] }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url || (deps && !deps.every(Boolean))) return;

    (async () => {
      try {
        const response = await fetch(url, options);
        const json = await response.json();

        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [options, url, ...deps]);

  return [data, loading, error];
};
