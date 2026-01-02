import { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import { CatalogContext } from "../App";

export default function Series() {
    const { series: popularSeries } = useContext(CatalogContext);
    const { selectedId } = useParams();
    const [selectedSeries, setSelectedSeries] = useState(popularSeries);

    useEffect(() => {
        if (String(selectedId) === "popular") {
            setSelectedSeries(popularSeries);
        } else {
            setSelectedSeries(popularSeries);
        }
    }, [selectedId, popularSeries]);

    return (
        <>
            <div>
                {/* PUT THE GENRES HERE */}
            </div>

            <div className="w-full h-full mx-auto pl-28 py-6 flex justify-start gap-x-8 gap-y-6 flex-wrap">
                {selectedSeries.map(el => (
                    <Link key={el.id} to={`/selected/${el.id}`} className="w-40 h-75" preventScrollReset="true">
                        <div className="rounded-xl overflow-hidden mx-auto">
                            <img
                                src={el.image}
                                className="object-cover w-full h-full border rounded-xl border-purple-500 shadow-lg"
                            />
                            <p className="pl-0.5 py-1 text-white">
                                {el.title.slice(0, 25)}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}
