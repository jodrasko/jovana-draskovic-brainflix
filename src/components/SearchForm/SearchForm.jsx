import { Link } from "react-router-dom";
import "./SearchForm.scss";

function SearchForm() {
  return (
    <div className="search-form__container">
      <form className="search-form__form">
        <input
          className="search-form__input"
          type="text"
          name="userName"
          id="name"
          minLength="2"
          maxLength="30"
          placeholder="Search"
        />

        <div className="search-form__box">
          <div className="search-form__avatar"></div>
          <div className="search-form__button-container">
            <Link to="/video-upload">
              <button type="button" className="search-form__button">
                UPLOAD
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
