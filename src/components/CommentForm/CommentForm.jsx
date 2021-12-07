import "./CommentForm.scss";

function CommentForm() {
  return (
    <section className="conversation">
      <div className="conversation__container">
        <div className="conversation__avatar"></div>

        <form className="comment-form">
          <div className="comment-form__input-container">
            <label className="comment-form__label" htmlFor="commentText">
              JOIN THE CONVERSATION
            </label>
            <textarea
              name="commentText"
              id="commentText"
              placeholder="Add a new comment"
              className="comment-form__text"
            ></textarea>
          </div>
          <div className="comment-form__button-container">
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
