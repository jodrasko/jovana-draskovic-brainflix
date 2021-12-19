import "./VideoPlayer.scss";

// Video player on Main Page
function VideoPlayer(props) {
  const videoImage = props.videoImage.includes("http")
    ? props.videoImage
    : `${process.env.REACT_APP_API_URL}/${props.videoImage}`;
  console.log("props.videoImage =", props.videoImage);
  console.log("videoImage =", videoImage);

  return (
    <section className="video">
      <video
        className="video__player"
        poster={videoImage}
        controls
        preload="none"
      >
        <source src={props.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}

export default VideoPlayer;
