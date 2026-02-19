import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";

function Favorilist() {

    const {favorites ,removeMovies} = useContext(AppContext)




    

    return (
        <div class="p-8 flex-1">
            <div class="mb-8">
                <h1 class="text-3xl font-bold tracking-tight">My Favorites</h1>
                <p class="text-slate-500 dark:text-slate-400 mt-1">{favorites.length} Titles</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">

                {favorites
                    .map(movie => (
                        <div
                            key={movie.id}
                            className="group relative bg-white dark:bg-card-dark rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-transparent dark:border-slate-800/50"
                        >
                            <div className="aspect-[2/3] relative overflow-hidden">
                                <img
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    src={movie.image}
                                    alt={movie.title}

                                />


                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                    <button
                                        onClick={() => removeMovies(movie)}
                                        className="w-full py-2.5 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold rounded-xl mb-2"
                                    >
                                        delete from favorites
                                    </button>
                                </div>
                            </div>

                            <div className="p-4">
                                <div className="flex items-center gap-1.5 mb-2">
                                    <span className="px-2 py-0.5 rounded-md bg-red-100 text-[10px] font-bold uppercase">
                                        {movie.genre}
                                    </span>

                                    <div className="flex items-center ml-auto gap-1">
                                        <span className="text-yellow-500 text-sm">★</span>
                                        <span className="text-sm font-bold">
                                            {movie.rating}
                                        </span>
                                    </div>
                                </div>
                                <h3 className="font-bold truncate">
                                    {movie.title}
                                </h3>


                                <p className="text-[11px] line-clamp-2 mt-1">
                                    {movie.description}
                                </p>
                            </div>
                        </div>
                    ))}

            </div>
        </div>
    )
}

export default Favorilist;