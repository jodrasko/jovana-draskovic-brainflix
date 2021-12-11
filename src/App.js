import { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import VideoUploadPage from "./page/VideoUploadPage/VideoUploadPage";
import PageNotFound from "./components/PageNotFound/PageNotFound";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Redirect from="/" exact={true} to="/home" />
            <Route path="/home" component={MainPage} />
            {/* <Route path="/video-upload" component={VideoUploadPage} /> */}
            <Route
              path="/video-upload"
              render={(routerProps) => {
                // console.log("Router VideoUploadPage Props:", routerProps);
                return <VideoUploadPage {...routerProps} />;
              }}
            />
            <Route
              path="/videos/:videoId"
              render={(routerProps) => {
                // console.log("Router Props:", routerProps);
                return <MainPage {...routerProps} />;
              }}
            />
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
