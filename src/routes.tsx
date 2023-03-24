import { createBrowserRouter } from 'react-router-dom';
import App from './pages/app';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [],
  },
]);
