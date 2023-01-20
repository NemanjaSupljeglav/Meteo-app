/* eslint-disable default-case */
import React, { useEffect, useRef, useState } from "react";

export default function Autocomplete({ options, value, onChange }) {
  const [showOptions, setShowOptions] = useState(false);
  const [cursor, setCursor] = useState(-1);
  const [parentState, setParentState] = useState("");

  const handleChange = data => {
    setParentState(data);
  };

  return (
    <div className="w-full  mr-16">
      <input
        type="text"
        className="w-full border-1 px-8 py-3  rounded-lg focus:outline-none focus:ring focus:border-blue-700 text-gray-500 bg-sky-100 text-lg"
        value={parentState}
        onChange={e => handleChange(e.target.value)}
        onFocus={() => setShowOptions(true)}
      />
    </div>
  );
}

Autocomplete.defaultProps = {
  type: "text",
  value: "",
  error: false,
  helperText: "",
  defaultText: "",
  required: false,
  disabled: false,
  name: "",
  showAll: false,
  showDefault: false,
  showValueAndText: false,
  showText: false,
  id: "",
  clear: true
};
