import "./VideoUploadForm.scss";
import UploadVideoPreview from "../../assets/images/Upload-video-preview.jpg";

function VideoUploadForm() {
  return (
    <section className="publish-form">
      <h2 className="publish-form__title">Upload Video </h2>
      <form className="publish-form__form">
        <div className="publish-form__container">
          <div className="publish-form__thumbnail-container">
            <label className="publish-form__label" htmlFor="video-thumbnail">
              VIDEO THUMBNAIL
            </label>
            <img
              src={UploadVideoPreview}
              alt="upload video preview"
              className="publish-form__thumbnail"
              id="video-thumbnail"
            />
          </div>
          <div className="publish-form__text-container">
            <div className="publish-form__input-container">
              <label className="publish-form__label" htmlFor="title">
                TITLE YOUR VIDEO
              </label>
              <input
                className="publish-form__input"
                type="text"
                name="title"
                id="title"
                minLength="2"
                maxLength="30"
                placeholder="Add a title to your video"
                required
              />
            </div>

            <div className="publish-form__input-container">
              <label className="publish-form__label" htmlFor="description">
                ADD A VIDEO DESCRIPTION
              </label>
              <textarea
                className="publish-form__description"
                name="description"
                id="description"
                placeholder="Add a description to your video"
                required
              ></textarea>
            </div>
          </div>
        </div>
        <div className="publish-form__button-container">
          <button type="submit" className="publish-form__button">
            PUBLISH
          </button>
          {/* </div> */}
          {/* <div className="publish-form__button-container"> */}
          <button type="submit" className="publish-form__button-colorless">
            CANCEL
          </button>
        </div>
      </form>
    </section>
  );
}

export default VideoUploadForm;
