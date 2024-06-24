import { createBrowserRouter } from "react-router-dom";
import MovieList from "./components/MovieList";
import TvList from "./components/TvList";
import MovieDetail from "./components/MovieDetail";
import TvDetails from "./components/TvDetails";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MovieList />
    },
    {
        path: "/:id", //params를 통해 접근가능
        element: <MovieDetail />
    },
    {
        path: "/tv",
        // element: <MovieList />
        element: <TvList />
    },
    {
        path: "/:id", //params를 통해 접근가능
        element: <TvDetails />
    },


    // {
    //     path: "/",
    //     element: <MovieList />
    // },
    // {
    //     path: "/movies/:id", // 영화 상세 페이지
    //     element: <MovieDetail />
    // },
    // {
    //     path: "/tv",
    //     element: <TvList />
    // },
    // {
    //     path: "/tv/:id", // TV 프로그램 상세 페이지
    //     element: <TvDetails />
    // },




])

export default router;