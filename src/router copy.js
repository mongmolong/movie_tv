import { createBrowserRouter } from "react-router-dom";
import MovieList from "./components/MovieList";
import TvList from "./components/TvList";
import MovieDetail from "./components/MovieDetail";



const router = createBrowserRouter([
    { path: '/', element: <MovieList /> },
    { path: '/tv', element: <TvList /> },
    { path: '/:id', element: <MovieDetail /> },
]);
export default router;