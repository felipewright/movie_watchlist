import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";

const desiredGenres = ["Comedy", "Horror", "Action", "Romance", "Sci-fi", "Animation"]

export function HomeGenres({ genresMovies }) {
    const [topGenresMovies, setTopGenresMovies] = useState([]);

    useEffect(() => {
        const arr = [];

        genresMovies.map(el => {
            for (let i = 0; i < desiredGenres.length; i++) {
                if (el.genre === desiredGenres[i]) {
                    arr.push(el);
                }
            }
        })

        setTopGenresMovies(arr);
    }, [genresMovies])

    return (
        <div className="flex flex-wrap gap-3">
            {topGenresMovies.map(el => (
                <Link key={el.key} to={`/movies/${el.genre}`}>
                    {/* <Link to={`/selected/${arr[index].id}`}></Link> */}
                    <button
                        className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition"
                    >
                        {el.genre}
                    </button>
                </Link>
            ))}
        </div>
    )
}