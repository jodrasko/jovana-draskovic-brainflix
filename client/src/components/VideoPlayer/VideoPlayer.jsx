import "./VideoPlayer.scss";

// Video player on Main Page
function VideoPlayer(props) {
  return (
    <section className="video">
      <video
        className="video__player"
        poster={props.videoImage}
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
