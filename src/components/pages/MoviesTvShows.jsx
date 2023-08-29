import "../../App.css";
import { MoviesTVShowsBanner } from "../sections/Banner";
import CustomDivider from "../sections/Divider";
import TvCardCollection from "../../ui-components/TvCardCollection";

function MoviesTVShows() {
  return (
    <>
      <MoviesTVShowsBanner />
      <CustomDivider />
      <TvCardCollection />
    </>
  );
}

export default MoviesTVShows;
