import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function DrawChart({ data, dataKeyX, dataKeyY }) {
  return (
    <div className="chart">
      <ResponsiveContainer width="99%" aspect={3} className="">
        <LineChart data={data}>
          <XAxis dataKey={dataKeyX} stroke="black" tick={{ fill: "#0260b3" }} />
          <YAxis
            dataKey={dataKeyY}
            stroke="#0260b3"
            tick={{ fill: "#0260b3" }}
          />
          <Line type="monotone" dataKey={"data"} stroke="#0260b3" />
          <Tooltip />
          <CartesianGrid
            vertical
            horizontal={false}
            verticalFill={["#54afff", "#6db9fc"]}
            fillOpacity={0.2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

DrawChart.defaultProps = {
  title: "",
  data: [],
  dataKey: "",
  items: []
};

export default DrawChart;
