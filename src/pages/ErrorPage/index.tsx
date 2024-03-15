import { useRouteError } from 'react-router-dom';

interface NetworkError extends Error {
  statusText?: string;
}

export default function ErrorPage(): JSX.Element {
  const error = useRouteError() as NetworkError;
  console.error(error);

  return (
    <header>
      <h1>
        {error.statusText || error.message}
      </h1>
    </header>
  );
}
