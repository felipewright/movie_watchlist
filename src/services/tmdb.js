const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE = "https://api.themoviedb.org/3";

async function request(url) {
  const res = await fetch(url, { mode: "cors" });
  if (!res.ok) throw new Error("TMDB request failed");
  return res.json();
}

export async function getMovieGenres() {
  const data = await request(`${BASE}/genre/movie/list?api_key=${API_KEY}`);
  return data.genres;
}

export async function getSeriesGenres() {
  const data = await request(`${BASE}/genre/tv/list?api_key=${API_KEY}`);
  return data.genres;
}

export async function getPopularMovies() {
  const data = await request(`${BASE}/movie/popular?api_key=${API_KEY}`);
  return data.results;
}

export async function getTopSeries() {
  const data = await request(`${BASE}/tv/top_rated?api_key=${API_KEY}`);
  return data.results;
}

export async function getMoviesByGenre(genreId) {
  const data = await request(
    `${BASE}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`
  );
  return data.results;
}
export async function getSeriesByGenre(genreId) {
  const data = await request(
    `${BASE}/discover/tv?api_key=${API_KEY}&with_genres=${genreId}`
  );
  return data.results;
}
