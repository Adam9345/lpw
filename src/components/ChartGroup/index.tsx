import * as React from "react";
import Chart from "src/components/Chart";
import { charts } from "./chart-options";

class ChartGroup extends React.Component {
  public renderChart() {
    const chart = charts.map((item, index) => (
      <Chart key={`chart-${index}`} options={item} />
    ));

    return chart;
  }
  public render() {
    return <div>{this.renderChart()}</div>;
  }
}

export default ChartGroup;
