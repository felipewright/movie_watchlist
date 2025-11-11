import { useContext, useState, useEffect } from "react";
import { CatalogContext } from "./App";

export function Carousel({arr}) {
    const [index, setIndex] = useState(0);
    console.log("Carousel parameter:", arr);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(i => (i + 1) % arr.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute w-full h-4/6 overflow-hidden">
            <img src={arr[index].wideImage} className="w-full" />
            <div className="dots">
                {arr.map((_, i) => (
                    <button key={i} onClick={() => setIndex(i)} className={i === index ? "active" : ""}>+</button>
                ))}
            </div>
        </div>
    );
}

export default function Home() {
    const { movies, series } = useContext(CatalogContext);
    console.log("movies", movies);

    return movies.length > 1 && (
        <>
            <Carousel
                arr={movies.slice(0, 5)}
            />
        </>
    )
}