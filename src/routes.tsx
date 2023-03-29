import { createBrowserRouter } from 'react-router-dom';
import App from './pages/app';
import { Board } from './pages/board';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: 'boards/:id',
          element: <Board />,
        },
      ],
    },
  ],
  {
    basename: '/my-own-kanban/',
  }
);
