import { useContext, useState, useEffect, useRef } from "react";
import { CatalogContext } from "./App";

// TO CREATE AN EASE-IN/OUT EFFECT YOU NEED TO CHANGE THE LOGIC A LITTLE BIT
// DON'T CHANGE THE IMAGE BUT RATHER STACK THEM AND CHANGE THE OPACITY.

export function Carousel({ arr }) {
    const [index, setIndex] = useState(0);
    const intervalRef = useRef(null);

    const startInterval = () => {
        intervalRef.current = setInterval(() => {
            setIndex(i => (i + 1) % arr.length);
        }, 3000);
    };

    useEffect(() => {
        startInterval();
        return () => clearInterval(intervalRef.current);
    }, []);

    const handleClick = (i) => {
        setIndex(i);
        clearInterval(intervalRef.current);
        startInterval();
    };

    return (
        <div className="relative w-full h-4/6 overflow-hidden">
            <img
                src={arr[index].wideImage}
                className="absolute w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-end pb-4 z-10">
                {arr.map((el, i) => (
                    <button
                        key={i}
                        onClick={() => handleClick(i)}
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

// {arr.map((_, i) => (
//                     <button
//                         key={i}
//                         onClick={() => handleClick(i)}
//                         className={`mx-2 px-3 py-1 rounded text-sm font-medium transition 
//                         ${i === index ? "active text-white" : ""}`}
//                     >
//                         BUTTON
//                     </button>