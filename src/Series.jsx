import { useContext } from "react";
import { CatalogContext } from "./App";

export default function Series() {
    const { series } = useContext(CatalogContext);

    return (
        <p>This is Series</p>
    )
}