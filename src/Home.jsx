import { useContext, useState, useEffect } from "react";
import { CatalogContext } from "./App";

export function Carousel({ arr }) {
    const [index, setIndex] = useState(0);
    console.log("Carousel parameter:", arr);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(i => (i + 1) % arr.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="relative w-full h-4/6 overflow-hidden">
            <img src={arr[index].wideImage} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex justify-center items-end pb-4 z-10">
                {arr.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`mx-2 px-3 py-1 rounded text-sm font-medium transition 
                        ${i === index ? "active text-white" : ""}`}
                    >
                        BUTTON
                    </button>
                ))}
            </div>
        </div>
    );
}

// LATER ON YOU SHOULD CREATE A COMPONENT MODULE AND IMPORT THEM TO KEEP THINGS ORGANIZED

export default function Home() {
    const { movies, series } = useContext(CatalogContext);
    console.log("movies", movies);

    return movies.length > 1 && (
        <>
            <Carousel className="absolute"
                arr={movies.slice(0, 5)}
            />
        </>
    )
}