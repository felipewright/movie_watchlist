import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./Layout";
import Home from "./Home";
import Movies from "./Movies";
import Series from "./Series";
import SelectedItem from "./SelectedItem";
import { createContext, useEffect } from "react";
import { FetchMovies, FetchSeries, FetchGenresMovies, FetchGenresSeries } from "./Fetch"
import { useState } from "react";

export const CatalogContext = createContext({
    movies: {},
    series: {}
})

export default function App() {
    const [movies, setMovies] = useState({});
    const [series, setSeries] = useState({});

    useEffect(() => {
        async function fetchAndMergeMovies() {
            const [movieData, genresData] = await Promise.all([
                FetchMovies(),
                FetchGenresMovies()
            ]);

            if (!movieData || !genresData) return;

            const merged = movieData.map(movie => ({
                ...movie,
                genre: genresData.find(g => g.id === movie.genreId)?.genre
            }));

            setMovies(merged);
        }

        async function fetchAndMergeSeries() {
            const [seriesData, genresData] = await Promise.all([
                FetchSeries(),
                FetchGenresSeries()
            ]);

            if (!seriesData || !genresData) return;

            const merged = seriesData.map(series => ({
                ...series,
                genre: genresData.find(g => g.id === series.genreId)?.genre
            }));

            setSeries(merged);
        }

        fetchAndMergeMovies();
        fetchAndMergeSeries();
    }, []);


    return (
        <BrowserRouter>
            <CatalogContext value={{ movies, series }}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="movies" element={<Movies />} />
                        <Route path="series" element={<Series />} />
                        <Route path="selected/:selectedId" element={<SelectedItem />} />
                    </Route>
                </Routes>
            </CatalogContext>
        </BrowserRouter>
    )
}

