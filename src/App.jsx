import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import AllTvSeriesPage from "./pages/AllTvSeriesPage";
import AllMoviesPage from "./pages/AllMoviesPage";
import AppContextProvider from "./context/AppContext";

function App() {
  return (
    <AppContextProvider>
      <Routes>

        <Route path="/" element={<Navigate to="/login" />} />

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/AllTvSeries" element={<AllTvSeriesPage />} />
          <Route path="/AllMovies" element={<AllMoviesPage />} />
        </Route>

      </Routes>
    </AppContextProvider>
  );
}

export default App;
