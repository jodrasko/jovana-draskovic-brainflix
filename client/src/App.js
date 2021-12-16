import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import MainPage from "./pages/MainPage/MainPage";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";
import NavigationBar from "./components/NavigationBar/NavigationBar";

// BrainFlix Application
class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <NavigationBar />
          <Switch>
            {/* <Redirect from="/" exact={true} to="/home" /> */}
            <Route path="/" exact={true} component={MainPage} />
            <Route path="/video-upload" component={VideoUploadPage} />
            <Route
              path="/videos/:videoId"
              render={(routerProps) => {
                return <MainPage {...routerProps} />;
              }}
            />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
