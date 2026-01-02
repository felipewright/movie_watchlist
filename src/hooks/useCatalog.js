import { useEffect, useState } from "react";
import {
  getPopularMovies,
  getTopSeries,
  getMovieGenres,
  getSeriesGenres
} from "../services/tmdb";

function mapGenres(items, genres, type) {
  return items.map(item => ({
    id: item.id,
    title: type === "movie" ? item.title : item.name,
    image: `https://image.tmdb.org/t/p/original${item.poster_path}`,
    wideImage: `https://image.tmdb.org/t/p/original${item.backdrop_path}`,
    overview: item.overview,
    date: type === "movie" ? item.release_date : item.first_air_date,
    language: item.original_language,
    vote: Number(item.vote_average).toFixed(1),
    genreId: item.genre_ids[0],
    genre: genres.find(g => g.id === item.genre_ids[0])?.name
  }));
}

export function useCatalog() {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [genresMovies, setGenresMovies] = useState([]);
  const [genresSeries, setGenresSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadCatalog() {
      try {
        const [
          rawMovies,
          rawSeries,
          movieGenres,
          seriesGenres
        ] = await Promise.all([
          getPopularMovies(),
          getTopSeries(),
          getMovieGenres(),
          getSeriesGenres()
        ]);

        setMovies(mapGenres(rawMovies, movieGenres, "movie"));
        setSeries(mapGenres(rawSeries, seriesGenres, "series"));
        setGenresMovies(movieGenres);
        setGenresSeries(seriesGenres);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadCatalog();
  }, []);

  return {
    movies,
    series,
    genresMovies,
    genresSeries,
    loading,
    error
  };
}
