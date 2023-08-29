import "../../App.css";
import { BooksBanner } from "../sections/Banner";
import CustomDivider from "../sections/Divider";
import BooksCardCollection from "../../ui-components/BooksCardCollection";

function Books() {
  return (
    <>
      <BooksBanner />
      <CustomDivider />
      <BooksCardCollection />
    </>
  );
}

export default Books;
