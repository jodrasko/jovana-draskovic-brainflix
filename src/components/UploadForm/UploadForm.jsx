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
          minlength="2"
          maxlength="30"
          placeholder="Search"
        />

        <div className="uploadform__box">
          <div className="uploadform__avatar"></div>
          <button type="submit" className="uploadform__button">
            UPLOAD
          </button>
        </div>
      </form>
    </div>
  );
}

export default UploadForm;
