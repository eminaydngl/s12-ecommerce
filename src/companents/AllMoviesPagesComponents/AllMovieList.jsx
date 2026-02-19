import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import axios from "axios";

function AllMovieList() {

    const { addToFavorites } = useContext(AppContext)
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get("https://my-backend-3y3r.onrender.com/contents")
            .then((response) => {
                setMovies(response.data);
                console.log(response.data)
            });
    }, []);
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">

            {movies
                .filter(movie => movie.type === "movie")
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
                                    onClick={() => addToFavorites(movie)}
                                    className="w-full py-2.5 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold rounded-xl mb-2"
                                >
                                    Add to Favorites
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
    )
}

export default AllMovieList;