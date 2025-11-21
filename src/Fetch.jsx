const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export async function FetchMovies() {
    return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`, { mode: "cors" })
        .then(res => res.json())
        .then(data => data.results.map(el => ({
            key: crypto.randomUUID(),
            id: el.id,
            title: el.title,
            image: `https://image.tmdb.org/t/p/original${el.poster_path}`,
            wideImage: `https://image.tmdb.org/t/p/original${el.backdrop_path}`,
            overview: el.overview,
            date: el.release_date,
            language: el.original_language,
            vote: Number(el.vote_average).toFixed(1)
        })));
}

export async function FetchSeries() {
    return fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`, { mode: "cors" })
        .then(res => res.json())
        .then(data => data.results.map(el => ({
            key: crypto.randomUUID(),
            id: el.id,
            title: el.name,
            image: `https://image.tmdb.org/t/p/original${el.poster_path}`,
            wideImage: `https://image.tmdb.org/t/p/original${el.backdrop_path}`,
            overview: el.overview,
            date: el.first_air_date,
            language: el.original_language,
            vote: Number(el.vote_average).toFixed(1)
        })));
}

