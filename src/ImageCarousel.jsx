import { useState, useEffect, useRef } from "react";

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
        <div className="relative w-full h-[75vh] overflow-hidden mb-5">
            <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center space-y-4 bg-black/40 p-6 pointer-events-none">
                <h2 className="text-sm md:text-base font-light tracking-wide text-gray-200">
                    {parseInt(index) + 1} on trending today.
                </h2>
                <h2 className="text-3xl md:text-5xl font-semibold text-white max-w-3xl leading-tight">
                    {arr[index].title}
                </h2>
                <p className="max-w-2xl text-gray-300 text-sm md:text-base px-4 md:px-0">
                    {arr[index].overview.length > 250
                        ? `${arr[index].overview.slice(0, 250)} ...`
                        : arr[index].overview
                    }
                </p>
                <div className="flex space-x-4 pt-4">
                    <button className="px-6 py-2 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200 transition hover:cursor-pointer">
                        WATCH
                    </button>
                    <button className="px-6 py-2 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition hover:cursor-pointer">
                        ABOUT FILM
                    </button>
                </div>
            </div>

            {arr.map((el) => (
                <img
                    key={el.title}
                    src={el.wideImage}
                    className={
                        el === arr[index]
                            ? "absolute w-full h-full object-cover inset-0 opacity-100 transition-opacity duration-300 ease-in-out"
                            : "absolute w-full h-full object-cover inset-0 opacity-0 transition-opacity duration-300 ease-in-out"
                    }
                />
            ))}

            <div className="absolute inset-0 flex justify-center items-end pb-4">
                {arr.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => handleClick(i)}
                        className={`mx-2 transition w-4.5 h-4.5 rounded-full hover:cursor-pointer
                            ${i === index
                                ? "border-3 border-gray-500 bg-transparent"
                                : "bg-gray-500 opacity-50"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
