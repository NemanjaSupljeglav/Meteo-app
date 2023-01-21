import React, { useState, useCallback } from "react";
import CheckBox from "./CheckBox";

const CheckBoxGroup = React.forwardRef(
  (
    {
      options,
      id,
      selectedValues,
      name,
      onChange,
      onClick,
      errorText,
      checked,
      handleRemove
    },
    ref
  ) => {
    const error = errorText ? (
      <p className="mt-2 text-sm text-red-600">{errorText}</p>
    ) : null;
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

    const handleOnchange = (val, checked) => {
      if (onChange) {
        if (checked) {
          let index = selectedValues.indexOf(val);
          if (index === -1) {
            selectedValues.push(val);
          }
        } else {
          let index = selectedValues.indexOf(val);
          if (index !== -1) {
            selectedValues.splice(index, 1);
          }
        }
        onChange([...selectedValues]);
      }
      forceUpdate();
    };
    return (
      <div className="flex flex-col">
        <div className="flex flex-col ">
          {options.map((option, index) => {
            return (
              <div
                className="flex items-center justify-between text-sky-500"
                key={index}
              >
                <CheckBox
                  id={option.label}
                  labelText={option.label}
                  value={option.value}
                  name={option.value}
                  onChange={e => {
                    handleOnchange(option.value, e.target.checked);
                  }}
                  checked={
                    checked ? checked : selectedValues.includes(option.value)
                  }
                  {...option}
                />
              </div>
            );
          })}
        </div>
        {error}
      </div>
    );
  }
);

CheckBoxGroup.defaultProps = {
  indeterminate: false,
  onChange: () => {},
  errorText: "",
  onClick: () => {},
  selectedValues: [],
  options: [],
  handleRemove: () => {}
};

export default CheckBoxGroup;
