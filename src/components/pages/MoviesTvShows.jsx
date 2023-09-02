import "../../App.css";
import { MoviesTVShowsBanner } from "../sections/Banner";
import CustomDivider from "../sections/Divider";
import MoviesTVShowsComponent from "./../sections/MoviesTVShows";

function MoviesTVShows() {
  return (
    <>
      <MoviesTVShowsBanner />
      <CustomDivider />
      <MoviesTVShowsComponent />
    </>
  );
}

export default MoviesTVShows;
