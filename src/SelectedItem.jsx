import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { CatalogContext } from "./App";

export default function SelectedItem() {
    const { movies, series } = useContext(CatalogContext);
    const { selectedId } = useParams();
    const [selectedEl, setSelectedEl] = useState(null);

    useEffect(() => {
        if (movies && series && selectedId) {
            let match = movies.filter(el => Number(el.id) === Number(selectedId));
            setSelectedEl(match[0]);
        }
    }, [selectedId, movies, series])

    console.log(selectedEl);

    return selectedEl && (
        <div className="relative w-full h-[75vh] overflow-hidden mb-5">
            <div className="absolute inset-0 z-10 flex flex-col justify-center items-start text-center space-y-4 bg-black/40 p-6">
                <h2 className="text-3xl md:text-5xl font-semibold text-white max-w-3xl leading-tight px-3">
                    {selectedEl.title}
                </h2>
                <div className="flex items-center gap-4 text-white px-4">
                    <span>{selectedEl.date}</span>
                    <span>{selectedEl.language}</span>
                    <span>{selectedEl.genre}</span>
                    <span className="px-2 py-1 rounded-lg border border-white/40 backdrop-blur-sm">
                        {selectedEl.vote}
                    </span>
                </div>
                <p className="max-w-2xl h-15 text-white text-sm md:text-base mx-4 md:px-0 text-left">
                    {selectedEl.overview}
                </p>
            </div>
            <img
                key={selectedEl.title}
                src={selectedEl.wideImage}
                className="absolute w-full h-full object-cover inset-0 opacity-100 transition-opacity duration-300 ease-in-out"
            />
        </div>
    )
}

