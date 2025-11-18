import { Outlet } from "react-router";
import { NavLink } from "react-router";

const Navbar = () => {
    return (
        <header className="flex items-center h-16 absolute top-0 left-0 w-full z-10 bg-transparent text-white z-50">
            <h1 className="ml-4">Movie Site</h1>
            <nav className="absolute left-1/2 -translate-x-1/2">
                <ul className="flex gap-6">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/movies">Movies</NavLink></li>
                    <li><NavLink to="/series">Series</NavLink></li>
                </ul>
            </nav>
        </header >
    )
}

const Layout = () => {
    return (
        <>
            <Navbar />
            <main className="bg-blue-950 w-screen h-screen">
                <Outlet />
            </main>
        </>
    );
}

export default Layout;
