import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/main.scss';
// import { RouterProvider } from 'react-router-dom';
// import router from './routes/routes';

import { store } from './app/store';
import { Provider } from 'react-redux';
import Counter from './features/counter/Counter';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Counter />
    </Provider>
  </React.StrictMode>
);
