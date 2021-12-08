import "./VideoUploadPage.scss";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import VideoUploadForm from "../../components/VideoUploadForm/VideoUploadForm";

function VideoUploadPage() {
  console.log("VideoUploadPage");
  return (
    <div>
      <NavigationBar />
      <VideoUploadForm />
    </div>
  );
}

export default VideoUploadPage;
