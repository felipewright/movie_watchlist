import { Link } from "react-router";
import { useAutoSlider } from "../hooks/useAutoSlider";
import { useRef } from "react";

export function ImageShowcase({ arr }) {
    const { index, setIndex } = useAutoSlider(arr.length, 3000);
    const prevIndexRef = useRef(index);
    const prevIndex = prevIndexRef.current;

    if (prevIndex !== index) prevIndexRef.current = index;

    const extendedArr = [...arr, ...arr];
    const itemHeight = 84;
    const translateY = (index % arr.length) * itemHeight;

    return (
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 py-10 overflow-hidden">
            <div className="relative h-[60vh] overflow-hidden rounded-xl">
                {arr.map((el, i) => {
                    let position = "translate-x-full";

                    const isCurrent = i === index;
                    const isPrev =
                        i === prevIndex ||
                        (prevIndex === arr.length - 1 && index === 0 && i === arr.length - 1);

                    if (isCurrent) position = "translate-x-0";
                    else if (isPrev) position = "-translate-x-full";

                    return (
                        <Link key={el.id} to={`/selected/${el.id}`}>
                            <img
                                src={el.wideImage}
                                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out ${position}`}
                            />
                        </Link>
                    );
                })}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-linear-to-t from-black/80 to-transparent">
                    <h3 className="text-white text-2xl font-semibold">
                        {arr[index].title}
                    </h3>
                    <p className="text-gray-300 text-sm mt-1">
                        IMDb {arr[index].vote} · {arr[index].date}
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-4 h-[60vh] overflow-hidden">
                <h3 className="text-purple-400 font-semibold tracking-wide">
                    UP NEXT
                </h3>
                <div className="relative flex-1 overflow-hidden">
                    <div
                        className="absolute top-0 left-0 w-full flex flex-col gap-3 transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateY(-${translateY}px)` }}
                    >
                        {extendedArr.map((el, i) => {
                            const realIndex = i % arr.length;

                            return (
                                <button
                                    key={`${el.id}-${i}`}
                                    onClick={() => setIndex(realIndex)}
                                    className={`flex items-center gap-4 p-3 h-[72px] rounded-lg text-left transition-colors
                                        ${realIndex === index ? "bg-white/10" : "bg-white/5 hover:bg-white/10"}
                                    `}
                                >
                                    <img
                                        src={el.image}
                                        className="w-12 h-full object-cover rounded-md"
                                    />
                                    <div className="flex flex-col">
                                        <span className="text-white text-sm">
                                            {el.title}
                                        </span>
                                        <span className="text-gray-400 text-xs">
                                            Trailer
                                        </span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
