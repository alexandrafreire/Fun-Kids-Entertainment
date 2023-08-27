import "../../App.css";
import { OutdoorActivitiesBanner } from "../sections/Banner";
import CustomDivider from "../sections/Divider";
import SitesCardCollectionOutdoorActivities from "../../ui-components/SitesCardCollectionOutdoorActivities";

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
