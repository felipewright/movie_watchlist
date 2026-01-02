import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import SelectedItem from "./pages/SelectedItem";
import CatalogContext from "./context/CatalogContext";
export { CatalogContext };
import { useCatalog } from "./hooks/useCatalog";

export default function App() {
  const catalog = useCatalog();

  if (catalog.loading) {
    return <p className="text-white p-4">Loading...</p>;
  }

  if (catalog.error) {
    return <p className="text-red-500 p-4">Something went wrong.</p>;
  }

  return (
    <BrowserRouter>
      <CatalogContext.Provider value={catalog}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies/:selectedId" element={<Movies />} />
            <Route path="series/:selectedId" element={<Series />} />
            <Route path="selected/:selectedId" element={<SelectedItem />} />
          </Route>
        </Routes>
      </CatalogContext.Provider>
    </BrowserRouter>
  );
}
