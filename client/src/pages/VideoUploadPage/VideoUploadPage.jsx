import React from "react";
import { Redirect } from "react-router";
import "./VideoUploadPage.scss";
import VideoUploadForm from "../../components/VideoUploadForm/VideoUploadForm";

// Video Upload Page
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
      return <Redirect to="/" />;
    }
    return <VideoUploadForm onSubmit={this.handleSubmit} />;
  }
}

export default VideoUploadPage;
