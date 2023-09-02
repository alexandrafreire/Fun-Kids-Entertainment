import "../../App.css";
import { BooksBanner } from "../sections/Banner";
import CustomDivider from "../sections/Divider";
import BooksComponent from "../sections/Books";

function Books() {
  return (
    <>
      <BooksBanner />
      <CustomDivider />
      <BooksComponent />
    </>
  );
}

export default Books;
