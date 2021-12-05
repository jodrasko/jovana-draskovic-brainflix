import VideoItem from "../VideoItem/VideoItem";
import "./VideoList.scss";

const VideoList = (props) => {
  return (
    <section className="next-video">
      <h3 className="next-video__heading">NEXT VIDEOS</h3>
      <ul className="next-video__list">
        {props.videos.map((video) => {
          return (
            <VideoItem
              key={video.id}
              video={video}
              onVideoSelect={props.onVideoSelect}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default VideoList;
