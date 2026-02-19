import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"

function Header() {
    const {setUser} = useContext(AppContext)
    const navigate = useNavigate()

    function logOut() {
        setUser([])
        navigate("/login")
    }

    return (
        <header class="sticky top-0 z-50 premium-header text-white">
        <div class="max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">
            <div class="flex items-center gap-12">
                <div class="flex items-center gap-2 group cursor-pointer">
                    <span
                        class="material-icons-round text-primary text-3xl group-hover:scale-110 transition-transform">movie</span>
                    <h1 class="text-2xl font-bold tracking-tight text-white">CineTrack</h1>
                </div>
                <nav class="hidden md:flex items-center gap-8">
                    <Link class="text-primary font-semibold border-b-2 border-primary pb-1" to="/home">Home</Link>
                    <Link class="text-slate-300 hover:text-white transition-colors" to="/favorites">Favorites</Link>
                </nav>
            </div>
            <div class="flex items-center gap-4 sm:gap-6">
                <button
                    class="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-slate-300 hover:text-primary theme-toggle-shadow"
                    onClick={() => document.documentElement.classList.toggle('dark')}>
                    <span class="material-symbols-outlined dark:hidden">dark_mode</span>
                    <span class="material-symbols-outlined hidden dark:block">light_mode</span>
                </button>
                <div class="h-8 w-[1px] bg-white/10 hidden sm:block"></div>
                <div class="flex items-center gap-3">
                    <span class="text-sm text-slate-300 hidden sm:inline">Welcome, <span
                            class="text-white font-medium">{localStorage.getItem("username") ? localStorage.getItem("username") : "guest"}</span></span>
                    <div
                        class="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/30 ring-2 ring-transparent hover:ring-primary/40 transition-all cursor-pointer">
                        <span class="material-icons-round text-lg">person</span>
                    </div>
                </div>
                <button
                    onClick={logOut}
                    class="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-red-400 transition-colors">
                    <span class="material-icons-round text-lg">logout</span>
                    <span class="hidden sm:inline">Logout</span>
                </button>
            </div>
        </div>
    </header>
    )
}

export default Header;