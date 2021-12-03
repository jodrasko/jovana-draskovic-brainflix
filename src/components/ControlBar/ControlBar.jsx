import Play from "../../assets/images/Icons/play.svg";
import FullScreen from "../../assets/images/Icons/fullscren.svg";
import VolumeUp from "../../assets/images/Icons/volume_up.svg";
import "./ControlBar.scss";

function ControlBar() {
  return (
    <div className="controls">
      <div className="controls__play">
        <img src={Play} alt="play video icon" className="controls__icon" />
      </div>
      <div className="controls__range">
        <input
          type="range"
          id="scrubber"
          name="scrubber"
          min="0"
          max="11"
        ></input>
        <label for="scrubber" className="controls__label">
          0:00/4:01
        </label>
      </div>
      <div className="controls__extra">
        <img
          src={FullScreen}
          alt="expand video icon"
          className="controls__icon"
        />
        <img
          src={VolumeUp}
          alt="volume video icon"
          className="controls__icon"
        />
      </div>
    </div>
  );
}

export default ControlBar;
