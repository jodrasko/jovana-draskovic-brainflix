import { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import VideoUploadPage from "./page/VideoUploadPage/VideoUploadPage";
import PageNotFound from "./components/PageNotFound/PageNotFound";

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <MainPage />
      // </div>
      <>
        <BrowserRouter>
          <Switch>
            <Redirect from="/home" to="/" />
            <Route path="/" exact={true} component={MainPage} />
            <Route path="/video-upload" component={VideoUploadPage} />
            <Route
              path="/:videoId"
              render={(routerProps) => {
                console.log("Router Props:", routerProps);
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
