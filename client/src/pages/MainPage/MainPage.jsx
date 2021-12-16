import { Component } from "react";
import axios from "axios";
import "./MainPage.scss";
// import NavigationBar from "../../components/NavigationBar/NavigationBar";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import CommentList from "../../components/CommentList/CommentList";
import CommentForm from "../../components/CommentForm/CommentForm";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import VideoList from "../../components/VideoList/VideoList";
const API_KEY = "0f7f483e-637d-4da3-9386-7caa79ef5384";

// Home Page and Video Details Page
class MainPage extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  // axios get request function and set response data to state
  getVideos = () => {
    const url = `https://project-2-api.herokuapp.com/videos?api_key=${API_KEY}`;

    axios
      .get(url)
      .then((res) => {
        this.setState({
          videos: res.data
        });
      })
      .catch((err) => {
        console.log("error in axios", err);
      });
  };

  //axios get request function and set response data to state
  getVideoDetails = (id) => {
    const url = `https://project-2-api.herokuapp.com/videos/${id}?api_key=${API_KEY}`;

    axios
      .get(url)
      .then((res) => {
        this.setState({
          selectedVideo: res.data
        });
      })
      .catch((err) => {
        console.log("error in axios", err);
      });
  };

  //getting videos from api upon website mount
  componentDidMount() {
    //invoking getVideos function to get all videos
    this.getVideos();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state !== prevState) {
      // this will be called for the first time
      // after this.getVideos() in the componentDidMount() updated state

      //state change will call render() again
      if (!this.state.selectedVideo) {
        const firstElementId = this.state.videos[0].id;
        this.getVideoDetails(firstElementId);
      }
    }
    if (this.props !== prevProps) {
      // the next video was clicked
      if (this.props.match.params.videoId) {
        this.getVideoDetails(this.props.match.params.videoId);
      }
    }
  }

  render() {
    // render only if the selectedVideo is set in state
    const existSelectedVideo = this.state.selectedVideo != null;

    const nextVideos =
      existSelectedVideo &&
      this.state.videos.filter(
        (video) => video.id !== this.state.selectedVideo.id
      );
    if (existSelectedVideo) {
      window.scrollTo(0, 0);
    }

    return (
      <>
        {/* <NavigationBar /> */}
        {existSelectedVideo && (
          <>
            <VideoPlayer
              videoImage={this.state.selectedVideo.image}
              videoUrl={this.state.selectedVideo.video}
            />
            <div className="main">
              <div className="video-details">
                <VideoDetails detail={this.state.selectedVideo} />
                <CommentForm />
                <CommentList comments={this.state.selectedVideo.comments} />
              </div>
              <VideoList videos={nextVideos} />
            </div>
          </>
        )}
        ;
      </>
    );
  }
}

export default MainPage;
