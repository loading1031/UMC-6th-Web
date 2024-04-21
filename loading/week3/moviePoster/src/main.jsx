import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Popular from './components/PopularPage.jsx';
import MainPage from './components/MainPage';
import NowPlaying from './components/NowPlayingPage.jsx';
import TopRated from './components/TopRatedPage.jsx';
import Upcoming from './components/Upcoming.jsx';

const router = createBrowserRouter([
  {path: "/",
  element: <App />,
  children: [
    { index: true, element: <MainPage /> },
    { path: "/popular", element: <Popular /> },
    { path: "/nowplaying", element: <NowPlaying /> },
    { path: "/toprated", element: <TopRated /> },
    { path: "/upcoming", element: <Upcoming /> },
  ]}
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)
