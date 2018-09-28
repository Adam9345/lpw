import * as React from "react";
import * as CanavsJSReact from "./CanvasJS/canvasjs.react";
import { IProps } from "./interfaces";

class Chart extends React.Component<IProps> {
  public render() {
    const CanvasJSChart = CanavsJSReact.CanvasJSChart;
    return <CanvasJSChart options={this.props.options} />;
  }
}

export default Chart;
