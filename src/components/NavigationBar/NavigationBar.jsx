import BrainFlixLogo from "../../assets/images/logo/BrainFlix-logo.svg";
import "./NavigationBar.scss";
import UploadForm from "../UploadForm/UploadForm";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <header className="main-header">
      <div className="main-header__container">
        <Link to="/home">
          <img
            src={BrainFlixLogo}
            alt="brainflix logo"
            className="main-header__logo"
          />
        </Link>
      </div>
      <UploadForm />
    </header>
  );
}

export default NavigationBar;
