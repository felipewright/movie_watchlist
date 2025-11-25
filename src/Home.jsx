import { useContext, useState, useEffect, useRef } from "react";
import { CatalogContext } from "./App";
import { Carousel } from "./ImageCarousel";
import { ImageSlider } from "./ImageSlider";

export default function Home() {
    const { movies, series } = useContext(CatalogContext);
    const [toggleSlider, setToggleSlider] = useState(true);

    useEffect(() => {
        console.log("toggleSlider", toggleSlider);
    }, [toggleSlider])

    return movies.length > 1 && series.length > 1 && (
        <div className="flex flex-col">
            <Carousel
                arr={movies.slice(0, 5)}
            />
            <div className="flex my-4 mx-auto">
                <button
                    onClick={() => setToggleSlider(true)}
                    className={`px-4 py-2 text-white border border-gray-600 hover:cursor-pointer ${toggleSlider
                        ? "bg-gray-800 shadow-md"
                        : "bg-gray-700 hover:bg-gray-600"}`}
                >
                    Movies
                </button>

                <button
                    onClick={() => setToggleSlider(false)}
                    className={`px-4 py-2 border text-white border-gray-600 hover:cursor-pointer ${!toggleSlider
                        ? "bg-gray-800 shadow-md"
                        : "bg-gray-700 hover:bg-gray-600"}`}
                >
                    Series
                </button>
            </div>

            <ImageSlider
                arr={toggleSlider
                    ? movies.slice(0, 15)
                    : series.slice(0, 15)
                }
            />
        </div>
    )
}