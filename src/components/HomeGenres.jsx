import { useState, useEffect } from "react";
import { Link } from "react-router";
import { genreIcons } from "../constants/genreIcons";
import { FEATURED_GENRES } from "../constants/genres";

export function HomeGenres({ genresMovies }) {
    const [topGenresMovies, setTopGenresMovies] = useState([]);

    useEffect(() => {
        const filtered = genresMovies.filter(el =>
            FEATURED_GENRES.includes(el.name)
        );

        setTopGenresMovies(filtered);
    }, [genresMovies]);

    return (
        <div className="flex flex-wrap flex-col gap-3 px-28 py-6">
            <h2 className="mx-auto mb-6 text-3xl font-bold tracking-wide text-white relative">
                TOP GENRES
                <span className="absolute left-1/2 -bottom-2 w-40 h-0.5 bg-purple-500 -translate-x-1/2" />
            </h2>
            <div className="flex flex-row mx-auto gap-3">
                {topGenresMovies.map(el => {
                    const genreName = el.name;
                    const Icon = genreIcons[genreName];

                    return (
                        <Link key={el.id} to={`/movies/${genreName}`}>
                            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition">
                                {Icon && <Icon className="text-lg" />}
                                <span>{genreName}</span>
                            </button>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
