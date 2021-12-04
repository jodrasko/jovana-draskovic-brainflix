import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoDetails from "./data/video-details.json";
import CommentList from "./components/CommentList/CommentList";
import CommentForm from "./components/CommentForm/CommentForm";

function App() {
  const comments = VideoDetails[0].comments;

  return (
    <div className="App">
      <NavigationBar />
      <VideoPlayer />
      <CommentForm />
      <CommentList comments={comments} />
    </div>
  );
}

export default App;
