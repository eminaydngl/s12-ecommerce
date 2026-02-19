import axios from "axios";
import { createContext, useState, useEffect } from "react"

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [user, setUser] = useState("Guest")
  const [favorites, setFavorites] = useState([]);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const stored = localStorage.getItem("favorites")
    axios.get("https://my-backend-3y3r.onrender.com/contents")
      .then((response) => {
        setMovies(response.data);
        console.log(response.data)
      });
    if (stored) {
      setFavorites(JSON.parse(stored))
    }

  }, [])

  function addToFavorites(movie) {
    const alreadyExist = favorites.find(item => item.id === movie.id)
    console.log("addToFavorites çalıştı")

    if (!alreadyExist) {
      const updated = [...favorites, movie]
      setFavorites(updated);
      localStorage.setItem("favorites", JSON.stringify(updated));
    }
  }

  function removeMovies(item) {
    const updated = favorites.filter(movie => movie.id !== item.id);
    setFavorites(updated)
    localStorage.setItem("favorites", JSON.stringify(updated))
  }

  return (
    <AppContext.Provider value={{ user, setUser, favorites, addToFavorites, removeMovies, movies, setMovies }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;
