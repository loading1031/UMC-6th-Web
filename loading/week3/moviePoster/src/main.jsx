import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import MainPage from "./Pages/MainPage/index.jsx";
import NowPlaying from "./Pages/NowPlaying.jsx";
import Popular from "./Pages/Popular.jsx";
import TopRated from "./Pages/TopRated.jsx";
import Upcoming from "./Pages/UpComing.jsx";
import MovieDetail from "./Pages/MovieDetail/index.jsx";
import NotFound from "./Pages/NotFound/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "/popular", element: <Popular /> },
      { path: "/nowplaying", element: <NowPlaying /> },
      { path: "/toprated", element: <TopRated /> },
      { path: "/upcoming", element: <Upcoming /> },
      { path: "/movie/:title", element: <MovieDetail /> },
      { path: "*", element: <NotFound/>}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
