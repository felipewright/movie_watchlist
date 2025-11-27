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
    }, [isMovieSelected])

    useEffect(() => {
        rotationIntervalRef.current = setInterval(() => {
            setIsSliding(true);

            setTimeout(() => {
                setSliderItems(prev => {
                    const copy = [...prev];
                    copy.push(copy.shift());
                    return copy;
                });

                setIsSliding(false);
            }, 1000);
        }, 4000);

        return () => clearInterval(rotationIntervalRef.current);
    }, [isMovieSelected]);

    return (
        <div className="w-full py-10">
            <div className="flex my-4 mx-auto">
                <button
                    onClick={() => {
                        if (!isMovieSelected) {
                            setIsMovieSelected(true);
                        }
                    }}
                    className={`px-4 py-2 text-white border border-gray-600 hover:cursor-pointer
                        ${isMovieSelected
                            ? "bg-gray-800 shadow-md"
                            : "bg-gray-700 hover:bg-gray-600"
                        }`}
                >
                    Movies
                </button>
                <button
                    onClick={() => {
                        if (isMovieSelected) {
                            setIsMovieSelected(false);
                        }
                    }}
                    className={`px-4 py-2 text-white border border-gray-600 hover:cursor-pointer
                        ${isMovieSelected
                            ? "bg-gray-700 hover:bg-gray-600"
                            : "bg-gray-800 shadow-md"
                        }`}
                >
                    Series
                </button>
            </div>
            <div className="flex w-8/10 mx-auto justify-center gap-7 overflow-hidden">
                {sliderItems.map((el) => (
                    <Link key={el.id} to={`/selected/${el.id}`}>
                        <div className={`w-60 flex-none rounded-xl overflow-hidden border border-purple-500 shadow-lg
                    ${isSliding
                                ? "transition-transform duration-500 ease-in-out translate-x-[-111.65%]"
                                : ""

                            }
                    `}>
                            <img src={el.image} className="object-cover w-full h-full" />
                        </div>
                    </Link>
                ))}
            </div>
        </div >
    );
}