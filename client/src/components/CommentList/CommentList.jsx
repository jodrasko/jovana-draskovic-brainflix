import CommentItem from "../CommentItem/CommentItem";
import "./CommentList.scss";

// Comments below Comment Form on Main Page
const CommentList = (props) => {
  return (
    <section className="comments">
      {props.comments.map((comment) => {
        return <CommentItem key={comment.timestamp} comment={comment} />;
      })}
    </section>
  );
};

export default CommentList;
