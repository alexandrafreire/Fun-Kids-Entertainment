import { Link } from "react-router-dom";
import "../../App.css";

function Footer() {
  return (
    <footer>
      <div>
        <ul>
          <li>
            <Link to="/ContactUs">Contact us</Link>
          </li>
          <li>
            <Link to="/SignUp">Sign Up</Link>
          </li>
          <li>
            <Link to="/TermsOfService">Terms of Service</Link>
          </li>
          <li>
            <Link to="/PrivacyPolicy">Privacy Policy</Link>
          </li>
        </ul>
        <p>@2022 Fun Kids Entertainment</p>
      </div>
    </footer>
  );
}

export default Footer;
