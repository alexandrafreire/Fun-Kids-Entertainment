import "../../App.css";
import { GamesBanner } from "../sections/Banner";
import CustomDivider from "../sections/Divider";
import GamesCardCollection from "../../ui-components/GamesCardCollection";

function Games() {
  return (
    <>
      <GamesBanner />
      <CustomDivider />
      <GamesCardCollection />
    </>
  );
}

export default Games;
