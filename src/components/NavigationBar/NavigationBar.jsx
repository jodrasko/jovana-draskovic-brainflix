import BrainFlixLogo from "../../assets/images/logo/BrainFlix-logo.svg";
import "./NavigationBar.scss";
import UploadForm from "../UploadForm/UploadForm";

function NavigationBar() {
  return (
    <header className="main-header">
      <div>
        <img
          src={BrainFlixLogo}
          alt="brainflix logo"
          className="main-header__logo"
        />
      </div>
      <UploadForm />
    </header>
  );
}

export default NavigationBar;
