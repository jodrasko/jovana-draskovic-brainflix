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

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      const currentVideoId = this.props.match.params.videoId;
      // console.log("[MainPage] currentVideoId=", currentVideoId);
      let currentVideo = detailsData[0];
      if (currentVideoId) {
        currentVideo = detailsData.find((video) => video.id === currentVideoId);
      }
      this.setState({
        selectedVideo: currentVideo
      });
    }
  }

  render() {
    // console.log("MainPage Props:", this.props);

    const nextVideos = videoData.filter(
      (video) => video.id !== this.state.selectedVideo.id
    );

    return (
      <div>
        <NavigationBar />
        <VideoPlayer videoImage={this.state.selectedVideo.image} />
        <div className="main">
          <div className="video-details">
            <VideoDetails detail={this.state.selectedVideo} />
            <CommentForm />
            <CommentList comments={this.state.selectedVideo.comments} />
          </div>
          <VideoList videos={nextVideos} />
        </div>
      </div>
    );
  }
}

export default MainPage;
