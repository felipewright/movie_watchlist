import { Outlet } from "react-router";
import { NavLink } from "react-router";

const Navbar = () => {
    return (
        <header className="relative flex items-center bg-blue-200 h-16">
            <h1 className="ml-4">Movie Site</h1>
            <nav className="absolute left-1/2 -translate-x-1/2">
                <ul className="flex gap-6">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/movies">Movies</NavLink></li>
                    <li><NavLink to="/series">Series</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

const Layout = () => {
    return (
        <>
            <Navbar />
            <main className="w-full h-full">
                <Outlet />
            </main>
        </>
    );
}

export default Layout;
