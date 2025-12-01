import { useContext, useState, useEffect, useRef } from "react";
import { CatalogContext } from "./App";
import { Carousel } from "./ImageCarousel";
import { ImageSlider } from "./ImageSlider";
import { HomeGenres } from "./HomeGenres";

export default function Home() {
    const { movies, series, genresMovies, genresSeries } = useContext(CatalogContext);

    return movies.length > 1 && series.length > 1 && (
        <div className="flex flex-col">
            <Carousel
                arr={movies.slice(0, 5)}
            />
            <ImageSlider
                moviesArr={movies.slice(0, 15)}
                seriesArr={series.slice(0, 15)}
            />
            <HomeGenres
                genresMovies={genresMovies}
            />
        </div>
    )
}