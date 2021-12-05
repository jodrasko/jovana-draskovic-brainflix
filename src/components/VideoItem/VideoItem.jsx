import "./VideoItem.scss";

// {
//     "id": "84e96018-4022-434e-80bf-000ce4cd12b8",
//     "title": "BMX Rampage: 2021 Highlights",
//     "channel": "Red Cow",
//     "image": "https://i.imgur.com/l2Xfgpl.jpg"
//   }

const VideoItem = (props) => {
  const item = props.video;

  const handleVideoClick = (e) => {
    e.preventDefault();
    props.onVideoSelect(item.id);
  };

  return (
    <li className="video-item" onClick={handleVideoClick}>
      <div className="video-item__image-box">
        <img src={item.image} alt={item.title} className="video-item__image" />
      </div>
      <div className="video-item__container">
        <h2 className="video-item__title">{item.title}</h2>
        <span className="video-item__channel">{item.channel}</span>
      </div>
    </li>
  );
};

export default VideoItem;
