import { Outlet, NavLink } from "react-router";

const Navbar = () => {
    return (
        <header className="flex items-center h-16 fixed top-0 left-0 w-full z-20 bg-transparent text-white">
            <h1 className="ml-4">Movie Site</h1>
            <nav className="absolute left-1/2 -translate-x-1/2">
                <ul className="flex gap-6">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/movies/popular">Movies</NavLink></li>
                    <li><NavLink to="/series/popular">Series</NavLink></li>
                </ul>
            </nav>
        </header >
    )
}

const Layout = () => {
    return (
        <>
            <Navbar />
            <main className="bg-blue-950 w-full min-h-screen">
                <Outlet />
            </main>
        </>
    );
}

export default Layout;
