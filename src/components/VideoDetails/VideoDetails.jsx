import "./VideoDetails.scss";
import Views from "../../assets/images/Icons/views.svg";
import Likes from "../../assets/images/Icons/likes.svg";
import UserImpression from "../../components/UserImpression/UserImpression";
// import UploadForm from "../UploadForm/UploadForm";

// {
//     "title": "BMX Rampage: 2021 Highlights",
//     "channel": "Red Cow",
//     "image": "https://i.imgur.com/l2Xfgpl.jpg",
//     "description": "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
//     "views": "1,001,023",
//     "likes": "110,985",
//     "duration": "4:01",
//     "video": "https://project-2-api.herokuapp.com/stream",
//     "timestamp": 1626032763000,
//     "comments": [
//       {
//         "name": "Micheal Lyons",
//         "comment": "They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.",
//         "likes": 0,
//         "timestamp": 1628522461000
//       },

function VideoDetails(props) {
  const detail = props.detail; // detail is a keyword for one object from the video-details.json file.

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
    // <header className="main-header">
    //   <div>
    //     <img
    //       src={BrainFlixLogo}
    //       alt="brainflix logo"
    //       className="main-header__logo"
    //     />
    //   </div>
    //   <UploadForm />
    // </header>

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
    </section>
  );
}

export default VideoDetails;
