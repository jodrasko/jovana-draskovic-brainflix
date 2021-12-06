import "./UserImpression.scss";

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
