import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import "jquery/dist/jquery.slim.min";
import "popper.js/dist/popper.min.js";
import * as React from "react";
import ChartGroup from "src/components/ChartGroup";
import "./App.css";
import Header from "./components/Header";

class App extends React.Component {
  public render() {
    const items = [
      { name: "Home", url: "#home" },
      { name: "Link", url: "#link" },
      { name: "Menu3", url: "#menu3" }
    ];

    return (
      <div>
        <Header theme="dark" items={items} title="Wykresy" />
        <ChartGroup />
      </div>
    );
  }
}

export default App;
