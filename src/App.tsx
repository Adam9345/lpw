import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import "jquery/dist/jquery.slim.min";
import "popper.js/dist/popper.min.js";
import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChartGroup from "src/components/ChartGroup";
import ChartJS from "src/components/ChartJS";
import "./App.css";
import Header from "./components/Header";

class App extends React.Component {
  public render() {
    const items = [
      { name: "CanvasJS", url: "/lpw/" },
      { name: "ChartJS", url: "/lpw/chartjs" }
    ];

    return (
      <Router>
        <div>
          <Header theme="dark" items={items} title="Charts" />
          <Switch>
            <Route exact={true} path="/" component={ChartGroup} />
            <Route exact={true} path="/lpw/" component={ChartGroup} />
            <Route path="/lpw/chartjs" component={ChartJS} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
