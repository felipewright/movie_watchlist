import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./Layout";
import Home from "./Home";
import Movies from "./Movies";
import Series from "./Series";
import Fetch from "./Fetch";

// BUILD THE CONTEXT TO PASS THE FETCHED DATA TO THE DIFFERENT ROUTES

export default function App() {
    Fetch();

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="movies" element={<Movies />} />
                    <Route path="series" element={<Series />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

