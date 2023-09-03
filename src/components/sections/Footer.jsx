import { Link } from "react-router-dom";
import "../../App.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <ul className="footer-links">
          <li>
            <Link to="/ContactUs">Contact Us</Link>
          </li>
          <li>
            <Link to="/SignUp">Sign Up</Link>
          </li>
          <li>
            <Link to="/PrivacyPolicy">Privacy Policy</Link>
          </li>
        </ul>
        <p className="footer-copyright">@2023 Fun Kids Entertainment</p>
      </div>
    </footer>
  );
}

export default Footer;
