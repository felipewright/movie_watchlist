import { useEffect } from "react";

export default function Fetch() {
    console.log("Running Fetch!");
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
            { mode: "cors" }
        )
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const dataArr = data.results.map(el => {
                    return {
                        title: el.title,
                        image: `https://image.tmdb.org/t/p/w500${el.poster_path}`,
                    }
                })
                console.log("Movies are", dataArr);
            })
    }, [])

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`,
            { mode: "cors" }
        )
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const dataArr = data.results.map(el => {
                    return {
                        title: el.original_name,
                        image: `https://image.tmdb.org/t/p/w500${el.poster_path}`,
                    }
                })
                console.log("Series are", dataArr);
            })
    }, [])
}