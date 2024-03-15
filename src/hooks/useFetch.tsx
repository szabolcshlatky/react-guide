import { useEffect, useState, useRef, useCallback } from 'react';

export default function useFetch(
  url: string,
  options = {},
  method = 'GET',
  body = null,
) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const optionsRef = useRef(options).current;

  const fetchData = useCallback(async () => {
    const controller = new AbortController();

    setIsPending(true);

    try {
      const response = await fetch(url, {
        method,
        body: method === 'GET' ? null : JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        ...optionsRef,
      });

      if (!response.ok) {
        throw Error(response.statusText);
      }

      const json = await response.json();

      setIsPending(false);
      setData(json);
      setError(null);
    } catch (error) {
      if ((error as Error).name === 'AbortError') {
        console.log('Fetch aborted');
      } else {
        setIsPending(false);
        setError('Could not fetch the data');
      }
    }

    return () => {
      controller.abort();
    };
  }, [url, optionsRef, method, body]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isPending, error };
}

/** Usage of the useFetch hook:

 * GET request:
 * The default method is 'GET', so you only need to pass the URL.
 * const { data, isPending, error } = useFetch('https://api.example.com/items');

 * POST request:
 * Pass the URL, an empty options object, the method 'POST', and the body data.
 * const { data, isPending, error } = useFetch('https://api.example.com/items', {}, 'POST', { name: 'New Item' });

 * PATCH request:
 * Pass the URL, an empty options object, the method 'PATCH', and the body data.
 * const { data, isPending, error } = useFetch('https://api.example.com/items/1', {}, 'PATCH', { name: 'Updated Item' });

 * PUT request:
 * Pass the URL, an empty options object, the method 'PUT', and the body data.
 * const { data, isPending, error } = useFetch('https://api.example.com/items/1', {}, 'PUT', { name: 'Replaced Item' });

 * DELETE request:
 * Pass the URL, an empty options object, and the method 'DELETE', no body data.
 * const { data, isPending, error } = useFetch('https://api.example.com/items/1', {}, 'DELETE');
 */
