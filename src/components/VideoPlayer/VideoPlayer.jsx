import "./VideoPlayer.scss";
//import UploadForm from "../UploadForm/UploadForm";
import ControlBar from "../ControlBar/ControlBar";

function VideoPlayer() {
  return (
    <div className="video">
      <video className="video__player" poster="https://i.imgur.com/l2Xfgpl.jpg">
        <source
          src="https://project-2-api.herokuapp.com/stream"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <ControlBar />
    </div>
  );
}

export default VideoPlayer;
