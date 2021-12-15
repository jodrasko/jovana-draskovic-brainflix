import BrainFlixLogo from "../../assets/images/logo/BrainFlix-logo.svg";
import AvatarLogo from "../../assets/images/Mohan-muruge.jpg";
import "./NavigationBar.scss";
import { Link } from "react-router-dom";

// Navigation Bar Section on all pages
function NavigationBar() {
  return (
    <header className="header">
      <div className="header__logo-box">
        <Link to="/home">
          <img
            src={BrainFlixLogo}
            alt="brainflix logo"
            className="header__logo"
          />
        </Link>
      </div>

      <div className="header__container">
        <form className="header__form">
          <div className="header__input-box">
            <input
              className="header__input"
              type="text"
              name="search"
              id="search"
              minLength="2"
              maxLength="30"
              placeholder="Search"
            />
          </div>
          <div className="header__avatar-left">
            <img src={AvatarLogo} alt="avatar" className="header__avatar" />
          </div>

          <div className="header__button-box">
            <Link to="/video-upload">
              <button type="button" className="header__button">
                UPLOAD
              </button>
            </Link>
          </div>
          <div className="header__avatar-right">
            <img src={AvatarLogo} alt="avatar" className="header__avatar" />
          </div>
        </form>
      </div>
    </header>
  );
}

export default NavigationBar;
