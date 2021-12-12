import "./VideoDetails.scss";
import Views from "../../assets/images/Icons/views.svg";
import Likes from "../../assets/images/Icons/likes.svg";
import UserImpression from "../../components/UserImpression/UserImpression";

// Video Details of the Main Page
function VideoDetails(props) {
  const detail = props.detail;

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
    <section className="details">
      <h1 className="details__title">{detail.title}</h1>
      <div className="details__data">
        <div className="details__left">
          <h2 className="details__channel">By {detail.channel}</h2>
          <span className="details__date">
            {" "}
            {getFormattedDate(newDate(detail.timestamp))}
          </span>
        </div>
        <div className="details__right">
          <UserImpression
            iconSource={Views}
            iconAlt="views icon"
            value={detail.views}
          />
          <UserImpression
            iconSource={Likes}
            iconAlt="likes icon"
            value={detail.likes}
          />
        </div>
      </div>
      <p className="details__description">{detail.description}</p>
      <h3 className="details__heading">{detail.comments.length} Comments</h3>
    </section>
  );
}

export default VideoDetails;
