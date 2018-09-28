import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import "jquery/dist/jquery.slim.min";
import "popper.js/dist/popper.min.js";
import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChartGroup from "src/components/ChartGroup";
import "./App.css";
import Header from "./components/Header";

class App extends React.Component {
  public render() {
    const items = [
      { name: "Home", url: "/lpw/" },
      { name: "Link", url: "/lpw/link" },
      { name: "Menu3", url: "#menu3" }
    ];

    return (
      <Router>
        <div>
          <Header theme="dark" items={items} title="Wykresy" />
          <Switch>
            <Route exact={true} path="/" component={ChartGroup} />
            <Route exact={true} path="/lpw/" component={ChartGroup} />
            <Route path="/lpw/link" component={ChartGroup} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
