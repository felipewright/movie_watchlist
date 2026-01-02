import { useContext } from "react";
import { CatalogContext } from "../App";
import { Carousel } from "../components/ImageCarousel";
import { ImageSlider } from "../components/ImageSlider";
import { HomeGenres } from "../components/HomeGenres";
import { ImageShowcase } from "../components/ImageShowcase";

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
            <ImageShowcase
                arr={movies.slice(0, 15)}
            />
        </div>
    )
}