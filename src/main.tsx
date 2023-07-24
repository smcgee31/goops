import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
// import theme from './theme';
import App from './App';
import ErrorPage from './error-page';
import About from './About';
import ChoiceCard from './components/choice_card';
import FindTheLost from './find_the_lost';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  { path: '/about', element: <About /> },
  { path: '/find_or_fix', element: <ChoiceCard cardName="find_or_fix" /> },
  { path: '/fix_a_change', element: <ChoiceCard cardName="fix_a_change" /> },
  { path: '/find_the_lost', element: <FindTheLost /> },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    {/* <CssBaseline /> */}
    <RouterProvider router={router} />
    {/* </ThemeProvider> */}
  </React.StrictMode>
);
