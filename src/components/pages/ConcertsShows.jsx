import "../../App.css";
import { ConcertsShowsBanner } from "../sections/Banner";
import CustomDivider from "../sections/Divider";
import SitesCardCollectionConcertsShows from "../../ui-components/SitesCardCollectionConcertsShows";

function ConcertsShows() {
  return (
    <>
      <ConcertsShowsBanner />
      <CustomDivider />
      <SitesCardCollectionConcertsShows />
    </>
  );
}

export default ConcertsShows;
