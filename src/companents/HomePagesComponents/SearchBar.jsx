import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useState } from "react";

function SearchBar() {

    const { movies } = useContext(AppContext)
    const [isOpen, setIsOpen] = useState(false);
    const categories = [
        "All",
        ...new Set(movies.map(movie => movie.category))
    ];

    return (
        <div className="w-full">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                    <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        search
                    </span>
                    <input
                        className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-slate-800/50 border-none rounded-2xl focus:ring-2 focus:ring-primary shadow-sm dark:shadow-none transition-all placeholder:text-slate-400 dark:text-slate-300"
                        placeholder="Search movies, TV shows, actors..."
                        type="text"
                    />
                </div>

                <div className="flex gap-3 w-full sm:w-auto">

                    <div className="relative w-full sm:w-auto">
                    {/* DROPDOWN
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="w-full sm:flex-none flex items-center justify-center gap-2 px-6 py-3.5 bg-white dark:bg-slate-800/50 text-slate-700 dark:text-slate-200 font-semibold rounded-2xl border border-slate-200 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
                        >
                            Categories
                            <span className="material-icons-round text-lg">
                                expand_more
                            </span>
                        </button>

                        {isOpen && (
                            <ul className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 z-50 overflow-hidden">
                                {categories.map((cat) => (
                                    <li
                                        key={cat}
                                        onClick={() => {
                                            onSelectCategory(cat);
                                            setIsOpen(false);
                                        }}
                                        className="px-4 py-2 cursor-pointer text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all"
                                    >
                                        {cat}
                                    </li>
                                ))}
                            </ul>
                        )}
                    */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
