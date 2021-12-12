import "./VideoItem.scss";
import { Link } from "react-router-dom";

// A single item on the list of next videos on Main Page
const VideoItem = (props) => {
  const item = props.video;

  return (
    <li>
      <Link to={`/videos/${item.id}`} className="video-item">
        <div className="video-item__image-box">
          <img
            src={item.image}
            alt={item.title}
            className="video-item__image"
          />
        </div>
        <div className="video-item__container">
          <h2 className="video-item__title">{item.title}</h2>
          <span className="video-item__channel">{item.channel}</span>
        </div>
      </Link>
    </li>
  );
};

export default VideoItem;
