import "./CommentItem.scss";

//{
//     "name": "Micheal Lyons",
//     "comment": "They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.",
//     "likes": 0,
//     "timestamp": 1628522461000
//   },

const CommentItem = (props) => {
  const item = props.comment;

  //   const handlePlantSelect = e => {
  //     e.preventDefault();
  //     props.onPlantSelect(props.id);
  //   }

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
    // <li className="plant-nav-item">
    //   <button className="plant-nav-item__link" onClick={handlePlantSelect}>{
    //     props.name}
    //   </button>
    // </li>

    <article class="comment__article">
      <div class="comment__avatar"></div>
      <div class="comment__card">
        <div class="comment__heading">
          <h3 class="comment__label">{item.name}</h3>
          <span class="comment__value">
            {getFormattedDate(newDate(item.timestamp))}
          </span>
        </div>
        <p class="comment__text">{item.comment}</p>
      </div>
    </article>
  );
};

export default CommentItem;
