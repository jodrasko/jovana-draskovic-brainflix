import { Link } from "react-router-dom";
import "./UploadForm.scss";

function UploadForm() {
  return (
    <div className="uploadform__container">
      <form className="uploadform__form">
        <input
          className="uploadform__input"
          type="text"
          name="userName"
          id="name"
          minLength="2"
          maxLength="30"
          placeholder="Search"
        />

        <div className="uploadform__box">
          <div className="uploadform__avatar"></div>
          <Link to="/video-upload">Video Upload Page</Link>
          <button type="submit" className="uploadform__button">
            UPLOAD
          </button>
        </div>
      </form>
    </div>
  );
}

export default UploadForm;
