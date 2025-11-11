const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export async function FetchMovies() {
    return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`, { mode: "cors" })
        .then(res => res.json())
        .then(data => data.results.map(el => ({
            title: el.title,
            image: `https://image.tmdb.org/t/p/original${el.poster_path}`,
            wideImage: `https://image.tmdb.org/t/p/original${el.backdrop_path}`
        })));

}

export async function FetchSeries() {
    return fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`, { mode: "cors" })
        .then(res => res.json())
        .then(data => data.results.map(el => ({
            title: el.title,
            image: `https://image.tmdb.org/t/p/w500${el.poster_path}`,
        })));

}

