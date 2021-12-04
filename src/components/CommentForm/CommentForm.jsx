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
              rows="5"
              placeholder="Add a new comment"
            ></textarea>
          </div>
          <div class="comment-form__button-container">
            <button type="submit">COMMENT</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CommentForm;
