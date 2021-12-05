// import BrainFlixLogo from "../../assets/images/logo/BrainFlix-logo.svg";
import "./UserImpression.scss";
// import UploadForm from "../UploadForm/UploadForm";

function UserImpression(props) {
  return (
    <div className="user-impression">
      <img
        src={props.iconSource}
        alt={props.iconAlt}
        className="user-impression__icon"
      />
      <span className="user-impression__value">{props.value}</span>
    </div>
  );
}

export default UserImpression;
