// import BrainFlixLogo from "../../assets/images/logo/BrainFlix-logo.svg";
import "./CommentForm.scss";
// import UploadForm from "../UploadForm/UploadForm";

function CommentForm() {
  return (
    <section class="conversation">
      <h3 class="conversation__heading">3 Comments</h3>

      <div class="conversation__container">
        <div class="conversation__avatar"></div>

        <form class="comment-form">
          <div class="comment-form__input-container">
            <label class="comment-form__label" for="comment">
              JOIN THE CONVERSATION
            </label>
            <textarea
              type="text"
              name="commentText"
              id="comment"
              minlength="2"
              maxlength="200"
              placeholder="Add a new comment"
              className="comment-form__textarea"
            ></textarea>
          </div>
          <div class="comment-form__button-container">
            <button type="submit" className="comment-form__button">
              COMMENT
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CommentForm;
