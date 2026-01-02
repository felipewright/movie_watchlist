import { useState, useEffect, useRef } from "react";

export function useAutoSlider(length, delay = 4000) {
    const [index, setIndex] = useState(0);
    const intervalRef = useRef(null);

    const start = () => {
        intervalRef.current = setInterval(() => {
            setIndex(i => (i + 1) % length);
        }, delay);
    };

    const stop = () => {
        clearInterval(intervalRef.current);
    };

    const goTo = (i) => {
        setIndex(i);
        stop();
        start();
    };

    useEffect(() => {
        if (!length) return;
        start();
        return stop;
    }, [length, delay]);

    return { index, setIndex: goTo };
}
