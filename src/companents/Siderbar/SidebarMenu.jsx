import {useNavigate} from "react-router-dom"
import {Link} from "react-router-dom"

function SidebarMenu() {
    const navigate = useNavigate()

    function handleFunctionFav() {
        navigate("favorites")
    }
    function handleFunctionMovies() {
        navigate("/AllMovies")
    }
    function handleFunctionTvSeries() {
        navigate("AllTvSeries")
    }
    return (
        <aside className="w-64 hidden lg:block shrink-0">
            <div className="space-y-2">
                <Link className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-primary font-semibold transition-all border border-transparent dark:border-white/5"
                    to="/AllMovies">
                    <button className="material-icons-round">movie_filter</button>
                    All Movies
                </Link>
                <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all group"
                    to="/AllTvSeries">
                    <span className="material-icons-round group-hover:text-primary transition-colors">tv</span>
                    All TV Series
                </Link>
                <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all group"
                    to="/favorites">
                    <span className="material-icons-round group-hover:text-primary transition-colors">favorite</span>
                    Favorites
                </Link>
            </div>
            <div
                className="mt-12 p-5 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/10 shadow-sm">
                <h4 className="font-bold text-sm mb-2 text-primary">Pro Feature</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Sync your library across all
                    devices and get personalized recommendations.</p>
                <button
                    className="mt-4 w-full py-2 bg-primary text-white rounded-lg text-xs font-bold hover:brightness-110 transition-all shadow-md shadow-primary/20">Upgrade
                    Now</button>
            </div>
        </aside>
    )
}

export default SidebarMenu;