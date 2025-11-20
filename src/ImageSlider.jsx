import { useState, useEffect, useRef } from "react";

export function ImageSlider({ arr }) {
    const [movieArr, setMovieArr] = useState([...arr]);
    const [isSliding, setIsSliding] = useState(false);
    const rotationIntervalRef = useRef(null);

    const rotationInterval = () => {
        rotationIntervalRef.current = setInterval(() => {
            setIsSliding(true);

            setTimeout(() => {
                setMovieArr(prev => {
                    const copy = [...prev];
                    copy.push(copy.shift());
                    return copy;
                });

                setIsSliding(false);
            }, 1000);
        }, 4000);
    };

    useEffect(() => {
        rotationInterval();
        return () => clearInterval(rotationIntervalRef.current);
    }, []);


    return (
        <div className="w-full py-10">
            <div className="flex w-8/10 mx-auto justify-center gap-7 overflow-hidden">
                {movieArr.map((el) => (
                    <div key={el.key} className={`w-60 flex-none rounded-xl overflow-hidden border border-purple-500 shadow-lg
                    ${isSliding
                            ? "transition-transform duration-500 ease-in-out translate-x-[-111.65%]"
                            : ""
                        }
                    `}>
                        <img src={el.image} className="object-cover w-full h-full" />
                    </div>
                ))}
            </div>
        </div>
    );
}
