import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";

export function ImageSlider({ moviesArr, seriesArr }) {
    const [isSliding, setIsSliding] = useState(false);
    const rotationIntervalRef = useRef(null);

    const [isMovieSelected, setIsMovieSelected] = useState(true);
    const activeDataset = isMovieSelected ? moviesArr : seriesArr;
    const [sliderItems, setSliderItems] = useState([]);

    useEffect(() => {
        setSliderItems(activeDataset);
        clearInterval(rotationIntervalRef.current);

        rotationIntervalRef.current = setInterval(() => {
            setIsSliding(true);

            const timeoutId = setTimeout(() => {
                setSliderItems(prev => {
                    const copy = [...prev];
                    copy.push(copy.shift());
                    return copy;
                });

                setIsSliding(false);
            }, 1000);

            return () => clearTimeout(timeoutId);
        }, 4000);

        return () => clearInterval(rotationIntervalRef.current);
    }, [isMovieSelected]);

    return (
        <div className="w-full py-12 flex flex-col items-center">
            <h2 className="mb-6 text-3xl font-bold tracking-wide text-white relative">
                POPULAR
                <span className="absolute left-1/2 -bottom-2 w-40 h-0.5 bg-purple-500 -translate-x-1/2" />
            </h2>
            <div className="flex mb-8 rounded-lg overflow-hidden border border-gray-600">
                <button
                    onClick={() => {
                        if (!isMovieSelected) setIsMovieSelected(true);
                    }}
                    className={`px-6 py-2 text-white transition
                    ${isMovieSelected
                            ? "bg-gray-800 shadow-inner"
                            : "bg-gray-700 hover:bg-gray-600"
                        }`}
                >
                    Movies
                </button>
                <button
                    onClick={() => {
                        if (isMovieSelected) setIsMovieSelected(false);
                    }}
                    className={`px-6 py-2 text-white transition
                    ${isMovieSelected
                            ? "bg-gray-700 hover:bg-gray-600"
                            : "bg-gray-800 shadow-inner"
                        }`}
                >
                    Series
                </button>
            </div>
            <div className="flex w-8/10 mx-auto justify-center gap-7 overflow-hidden">
                {sliderItems.map(el => (
                    <Link
                        key={el.id}
                        to={`/selected/${el.id}`}
                        preventScrollReset="true"
                    >
                        <div
                            className={`w-60 flex-none rounded-xl overflow-hidden border border-purple-500 shadow-lg
                            ${isSliding
                                    ? "transition-transform duration-500 ease-in-out translate-x-[-111.65%]"
                                    : ""
                                }`}
                        >
                            <img src={el.image} className="object-cover w-full h-full" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}