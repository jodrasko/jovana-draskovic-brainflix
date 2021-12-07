import { Component } from "react";
import "./MainPage.scss";
import NavigationBar from "../NavigationBar/NavigationBar";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import detailsData from "../../data/video-details.json";
import videoData from "../../data/videos.json";
import CommentList from "../CommentList/CommentList";
import CommentForm from "../CommentForm/CommentForm";
import VideoDetails from "../VideoDetails/VideoDetails";
import VideoList from "../VideoList/VideoList";

class MainPage extends Component {
  state = {
    videos: videoData, //videos.json
    selectedVideo: detailsData[0] // video-details.json
  };

  handleVideoSelect = (id) => {
    this.setState({
      selectedVideo: detailsData.find((video) => video.id === id)
    });
  };

  render() {
    console.log("MainPage Props:", this.props);

    const nextVideos = videoData.filter(
      (video) => video.id !== this.state.selectedVideo.id
    );

    return (
      <div>
        <NavigationBar />
        <VideoPlayer />
        <div className="main">
          <div className="video-details">
            <VideoDetails detail={this.state.selectedVideo} />
            <CommentForm />
            <CommentList comments={this.state.selectedVideo.comments} />
          </div>
          <VideoList
            videos={nextVideos}
            onVideoSelect={this.handleVideoSelect}
          />
        </div>
      </div>
    );
  }
}

export default MainPage;
