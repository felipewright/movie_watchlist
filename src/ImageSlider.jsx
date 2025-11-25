import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";

export function ImageSlider({ arr }) {
    const [displayArr, setDisplayArr] = useState([...arr]);
    const [isSliding, setIsSliding] = useState(false);
    const rotationIntervalRef = useRef(null);

    useEffect(() => {
        setDisplayArr([...arr])
    }, [arr])

    const rotationInterval = () => {
        rotationIntervalRef.current = setInterval(() => {
            setIsSliding(true);

            setTimeout(() => {
                setDisplayArr(prev => {
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
                {displayArr.map((el, index) => (
                    <Link to={`/selected/${arr[index].id}`}>
                        <div key={el.key} className={`w-60 flex-none rounded-xl overflow-hidden border border-purple-500 shadow-lg
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
        </div>
    );
}
