import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root';
import ErrorPage from '../pages/ErrorPage';
import IndexPage from '../pages/IndexPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
    ],
  },
]);

export default router;
