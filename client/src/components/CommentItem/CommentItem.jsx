import "./CommentItem.scss";

// Comment Item below Comment Form on Main Page
const CommentItem = (props) => {
  const item = props.comment;

  function newDate(timestamp) {
    return new Date(timestamp);
  }

  function getFormattedDate(date) {
    const year = date.getFullYear();

    let month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : "0" + month;

    let day = date.getDate().toString();
    day = day.length > 1 ? day : "0" + day;

    return month + "/" + day + "/" + year;
  }

  return (
    <article className="comment__article">
      <div className="comment__avatar"></div>
      <div className="comment__card">
        <div className="comment__heading">
          <h3 className="comment__label">{item.name}</h3>
          <span className="comment__value">
            {getFormattedDate(newDate(item.timestamp))}
          </span>
        </div>
        <p className="comment__text">{item.comment}</p>
      </div>
    </article>
  );
};

export default CommentItem;
