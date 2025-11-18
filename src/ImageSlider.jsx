import { useState, useEffect, useRef } from "react";

export function ImageSlider({ arr }) {
    return (
        <div className="w-full">
            <div className="flex w-8/10 mx-auto justify-center gap-7 overflow-hidden">
                {arr.map((el) => (
                    <div className="w-60 flex-none rounded-xl overflow-hidden border border-purple-500 shadow-lg">
                        <img src={el.image} className="object-cover w-full h-full" />
                    </div>
                ))}
            </div>
        </div>
    );

}


