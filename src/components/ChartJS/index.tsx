import * as React from "react";
import { Bar, HorizontalBar, Pie } from "react-chartjs-2";
import { dataBar, dataPie, options } from "./chart-options";

class ChartJS extends React.Component {
  public render() {
    return (
      <div>
        <Bar data={dataBar} width={800} height={300} options={options} />
        <HorizontalBar
          data={dataBar}
          width={800}
          height={300}
          options={options}
        />
        <Pie data={dataPie} width={800} height={300} />
        <Bar data={dataBar} width={800} height={300} options={options} />
        <HorizontalBar
          data={dataBar}
          width={800}
          height={300}
          options={options}
        />
        <Pie data={dataPie} width={800} height={300} />
        <Bar data={dataBar} width={800} height={300} options={options} />
        <HorizontalBar
          data={dataBar}
          width={800}
          height={300}
          options={options}
        />
        <Pie data={dataPie} width={800} height={300} />
      </div>
    );
  }
}

export default ChartJS;
