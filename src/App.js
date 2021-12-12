import { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import MainPage from "./page/MainPage/MainPage";
import VideoUploadPage from "./page/VideoUploadPage/VideoUploadPage";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Redirect from="/" exact={true} to="/home" />
            <Route path="/home" component={MainPage} />
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
