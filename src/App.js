import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import Details from "./data/video-details.json";
import CommentList from "./components/CommentList/CommentList";
import CommentForm from "./components/CommentForm/CommentForm";
import VideoDetails from "./components/VideoDetails/VideoDetails";

function App() {
  const detail = Details[0]; // will replace with selectedVideoDetail
  const comments = detail.comments;

  return (
    <div className="App">
      <NavigationBar />
      <VideoPlayer />
      <VideoDetails detail={detail} />
      <CommentForm />
      <CommentList comments={comments} />
    </div>
  );
}

export default App;
