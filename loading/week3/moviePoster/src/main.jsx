import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import MainPage from "./components/MainPage";
import NowPlaying from "./components/NowPlaying.jsx";
import Popular from "./components/Popular.jsx";
import TopRated from "./components/TopRated.jsx";
import Upcoming from "./components/UpComing.jsx";
import MovieDetail from "./components/MovieDetail/index.jsx";

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
