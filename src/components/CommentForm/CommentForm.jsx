import "./CommentForm.scss";

function CommentForm() {
  return (
    <section class="conversation">
      <div class="conversation__container">
        <div class="conversation__avatar"></div>

        <form class="comment-form">
          <div class="comment-form__input-container">
            <label class="comment-form__label" for="commentText">
              JOIN THE CONVERSATION
            </label>
            <textarea
              name="commentText"
              id="commentText"
              placeholder="Add a new comment"
              className="comment-form__text"
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
