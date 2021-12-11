import "./VideoPlayer.scss";

function VideoPlayer(props) {
  return (
    <div className="video">
      <video className="video__player" poster={props.videoImage} controls>
        <source
          src="https://project-2-api.herokuapp.com/stream"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;
