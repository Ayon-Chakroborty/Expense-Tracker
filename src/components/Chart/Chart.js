import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
    const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalExpenseInMonth = Math.max(...dataPointValue);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
        key={dataPoint.label} 
        value={dataPoint.value} 
        maxValue={totalExpenseInMonth} 
        label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
