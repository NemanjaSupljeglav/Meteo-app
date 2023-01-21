import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const userData = [
  {
    day: "23.Jan",
    data: 500
  },
  {
    day: "24.Jan",
    data: 3000
  },
  {
    day: "25.Jan",
    data: 2000
  },
  {
    day: "26.Jan",
    data: 5000
  },
  {
    day: "27.Jan",
    data: 4000
  },
  {
    day: "28.Jan",
    data: 3000
  }
];

function DrawChart({ title, data, dataKey, grid }) {
  return (
    <div className="chart">
      <ResponsiveContainer width="99%" aspect={3} className="">
        <LineChart data={data}>
          <XAxis dataKey="day" stroke="black" tick={{ fill: "#0260b3" }} />
          <YAxis dataKey="data" stroke="#0260b3" tick={{ fill: "#0260b3" }} />
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

export default DrawChart;
