import { useContext, useState, useEffect, useRef } from "react";
import { CatalogContext } from "./App";
import { Carousel } from "./ImageCarousel";
import { ImageSlider } from "./ImageSlider";


// LATER ON YOU SHOULD CREATE A COMPONENT MODULE AND IMPORT THEM TO KEEP THINGS ORGANIZED

export default function Home() {
    const { movies, series } = useContext(CatalogContext);

    return movies.length > 1 && (
        <>
            <Carousel 
                arr={movies.slice(0, 5)}
            />
            <ImageSlider 
                arr={movies.slice(0, 15)}
            />
        </> 
    )
}