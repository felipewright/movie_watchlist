const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export async function FetchGenresMovies() {
    return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`, { mode: "cors" })
        .then(res => res.json())
        .then(data => data.genres.map(el => ({
            key: crypto.randomUUID(),
            id: el.id,
            genre: el.name
        })
        ));
}

export async function FetchGenresSeries() {
    return fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}`, { mode: "cors" })
        .then(res => res.json())
        .then(data => data.genres.map(el => ({
            key: crypto.randomUUID(),
            id: el.id,
            genre: el.name
        })
        ));
}

// FetchGenresSeries();

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
            vote: Number(el.vote_average).toFixed(1),
            genreId: el.genre_ids[0]
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
            vote: Number(el.vote_average).toFixed(1),
            genreId: el.genre_ids[0]
        })));
}

// THIS FUNCTION IS FOR SELECTING A SPECIFIC GENRE USING AN ID FROM FetchGenresMovies/Series

export async function FetchSelectedGenre() {
    return fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=${genreId}`, { mode: "cors" })
        .then(res => res.json())
        .then(data => console.log(data));
}


