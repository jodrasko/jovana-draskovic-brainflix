import React from "react";
import { Redirect } from "react-router";
import "./VideoUploadPage.scss";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import VideoUploadForm from "../../components/VideoUploadForm/VideoUploadForm";

class VideoUploadPage extends React.Component {
  state = {
    redirectToHome: false
  };

  handleSubmit = () => {
    this.setState({
      redirectToHome: true
    });
  };

  render() {
    if (this.state.redirectToHome) {
      return <Redirect to="/home" />;
    }
    return (
      <>
        <NavigationBar />
        <VideoUploadForm onSubmit={this.handleSubmit} />
      </>
    );
  }
}

export default VideoUploadPage;
