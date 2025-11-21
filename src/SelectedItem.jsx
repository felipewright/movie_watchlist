import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { CatalogContext } from "./App";

export default function SelectedItem() {
    const { movies, series } = useContext(CatalogContext);
    const { selectedId } = useParams();
    const [selectedEl, setSelectedEl] = useState(null);

    useEffect(() => {
        if (movies && series) {
            let match = movies.filter(el => Number(el.id) === Number(selectedId));
            setSelectedEl(match);
        }
    }, [selectedId, movies, series])

    return selectedEl && (
        <>
            <h1 className='text-9xl text-white'>The selected item is: {selectedEl.id} </h1>
        </>
    )
}

// return (
//         <div className="relative w-full h-[75vh] overflow-hidden mb-5">
//             <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center space-y-4 bg-black/40 p-6">
//                 <h2 className="text-sm md:text-base font-light tracking-wide text-gray-200">
//                     {parseInt(index) + 1} on trending today.
//                 </h2>
//                 <h2 className="text-3xl md:text-5xl font-semibold text-white max-w-3xl leading-tight">
//                     {arr[index].title}
//                 </h2>
//                 <p className="max-w-2xl h-15 text-gray-300 text-sm md:text-base px-4 md:px-0">
//                     {arr[index].overview.length > 250
//                         ? `${arr[index].overview.slice(0, 250)} ...`
//                         : arr[index].overview
//                     }
//                 </p>
//                 <div className="flex space-x-4 pt-4">
//                     <button className="px-6 py-2 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200 transition hover:cursor-pointer">
//                         WATCH
//                     </button>
//                     <Link to={`/selected/${arr[index].id}`}>
//                         <button className="px-6 py-2 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition hover:cursor-pointer">
//                             ABOUT FILM
//                         </button>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     )