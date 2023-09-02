import "../../App.css";
import { GamesBanner } from "../sections/Banner";
import CustomDivider from "../sections/Divider";
import GamesComponent from "../sections/Games";

function Games() {
  return (
    <>
      <GamesBanner />
      <CustomDivider />
      <GamesComponent />
    </>
  );
}

export default Games;
