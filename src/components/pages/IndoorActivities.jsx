import "../../App.css";
import { IndoorActivitiesBanner } from "../sections/Banner";
import CustomDivider from "../sections/Divider";
import SitesCardCollectionIndoorActivities from "../../ui-components/SitesCardCollectionIndoorActivities";

function IndoorActivities() {
  return (
    <>
      <IndoorActivitiesBanner />
      <CustomDivider />
      <SitesCardCollectionIndoorActivities />
    </>
  );
}

export default IndoorActivities;
