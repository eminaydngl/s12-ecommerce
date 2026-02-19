import SearchBar from "../companents/HomePagesComponents/SearchBar";
import TrendingMovies from "../companents/HomePagesComponents/TrendingMovies";
import TrendingSeries from "../companents/HomePagesComponents/TrendingSeries";
import FavoriteSection from "../companents/HomePagesComponents/FavoriteSection";

function HomePage() {
    return (
        <>

            <SearchBar />
            <TrendingMovies />
            <TrendingSeries />
            <FavoriteSection />
        </>
    );
}

export default HomePage;
