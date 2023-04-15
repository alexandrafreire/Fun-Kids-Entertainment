import "../../App.css";
import HomePageBanner from "../sections/Banner";
import CustomDivider from "../sections/Divider";
import SitesCollectionCards from "../sections/SitesCollectionCards";

function Home() {
  return (
    <>
      <HomePageBanner />
      <CustomDivider />
      <SitesCollectionCards />
    </>
  );
}

export default Home;
