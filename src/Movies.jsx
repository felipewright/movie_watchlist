import { useContext, useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { CatalogContext } from "./App";

export default function Movies() {
    const { movies } = useContext(CatalogContext);
    console.log("Movies.jsx, movies:", movies);

    return (
        <>
            <div>
                {/* PUT THE GENRES HERE */}
            </div>
            <div className="w-full h-full mx-auto pl-28 py-6 flex justify-start gap-x-8 gap-y-6 flex-wrap">
                {movies.map(el => (
                    <Link key={el.id} to={`/selected/${el.id}`} className="w-40 h-75">
                        <div className="rounded-xl overflow-hidden mx-auto">
                            <img src={el.image} className="object-cover w-full h-full border rounded-xl border-purple-500 shadow-lg" />
                            <p className="pl-0.5 py-1 text-white">{el.title.slice(0, 25)}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}