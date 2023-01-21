//React
import React from "react";

export default function SelectList({ value, onChange, items }) {
  return (
    <div className="w-full text-4xl mt-3 max-w-max px-1 py-1 rounded-md ">
      <select
        onChange={event => onChange(event.target.value)}
        placeholder="Hourly View"
        value={value}
        className="w-64 px-1 py-3  rounded-lg focus:outline-none focus:ring focus:border-sky-500 text-gray-500 bg-sky-100 text-lg border-solid border-2 border-sky-500 "
      >
        {items?.map(item => (
          <option key={item?.id}>{item.name}</option>
        ))}
      </select>
    </div>
  );
}

SelectList.defaultProps = {
  value: "",
  onChange: () => {},
  items: []
};
