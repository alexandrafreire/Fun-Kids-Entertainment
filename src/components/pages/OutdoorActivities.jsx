import "../../App.css";
import { OutdoorActivitiesBanner } from "../sections/Banner";
import CustomDivider from "../sections/Divider";
import SitesCardCollectionOutdoorActivities from "../sections/SitesCollectionCards";

function OutdoorActivities() {
  return (
    <>
      <OutdoorActivitiesBanner />
      <CustomDivider />
      <SitesCardCollectionOutdoorActivities />
    </>
  );
}

export default OutdoorActivities;
