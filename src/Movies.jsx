import { useContext } from "react";
import { CatalogContext } from "./App";

export default function Movies() {
    const { movies } = useContext(CatalogContext);

    return (
        <p>This is Movies</p>
    )
}