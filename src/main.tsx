import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Sidebar } from './components/Sidebar';
import { router } from './routes';
import { Global } from './styles/global';
import { theme } from './styles/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
