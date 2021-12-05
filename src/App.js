import { Component } from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import detailsData from "./data/video-details.json";
import videoData from "./data/videos.json";
import CommentList from "./components/CommentList/CommentList";
import CommentForm from "./components/CommentForm/CommentForm";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import VideoList from "./components/VideoList/VideoList";

class App extends Component {
  state = {
    videos: videoData, //videos.json
    selectedVideo: detailsData[0] // video-details.json
  };

  //   const handleVideoClick = (e) => {
  //     e.preventDefault();
  //     props.onVideoSelect(item.id);
  //   };

  handleVideoSelect = (id) => {
    this.setState({
      selectedVideo: detailsData.find((video) => video.id === id)
    });
  };

  render() {
    const nextVideos = videoData.filter(
      (video) => video.id !== this.state.selectedVideo.id
    );

    return (
      //   <div className="plant-page">
      //     <PlantNav
      //       plants={plantNavPlants}
      //       onPlantSelect={this.handlePlanSelect}
      //     />
      //     <PlantDetails selectedPlant={this.state.selectedPlant}/>
      //   </div>
      <div className="App">
        <NavigationBar />
        <VideoPlayer />
        <VideoDetails detail={this.state.selectedVideo} />
        <CommentForm />
        <CommentList comments={this.state.selectedVideo.comments} />
        <VideoList videos={nextVideos} onVideoSelect={this.handleVideoSelect} />
      </div>
    );
  }
}

export default App;
