/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable default-case */

//React
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Services
import { postFunc } from "../../../services/mainApiServices";

//MUI
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

const Autocomplete = ({
  value,
  onChange,
  url,
  items,
  setItems,
  clickStarIcon,
  clickStarBorderIcon,
  handleItem,
  datacy
}) => {
  const handleChange = data => {
    onChange(data);
  };
  const handleAddItem = data => {
    clickStarBorderIcon(data);
  };
  const handleRemoveItem = data => {
    clickStarIcon(data);
  };
  const searchFunc = async () => {
    const response = await postFunc(url, value);
    setItems(response);
  };

  useEffect(() => {
    if (value) searchFunc();
  }, [value]);

  return (
    <div className="w-full text-4xl mt-3 max-w-max px-1 py-1 rounded-md">
      <input
        type="text"
        className="w-full px-6 py-3  rounded-lg focus:outline-none focus:ring focus:border-sky-500 text-gray-500 bg-sky-100 text-lg border-solid border-2 border-sky-500"
        value={value}
        onChange={e => handleChange(e.target.value)}
        placeholder="Search"
        datacy={datacy}
      />
      <ul className="flex flex-col   w-full  border-b border-l border-r border-sky-500 rounded-b-md mt-[-7px]">
        {items ? (
          items.map((item, index) => (
            <li
              className={
                index === 0
                  ? "flex  mb-1   border-sky-500 pt-1"
                  : "flex  mb-1   border-t border-sky-500"
              }
              key={item?.id}
            >
              <Link
                to="/details"
                className="mr-auto text-gray-500 hover:text-gray-600 text-lg px-6 pb-3 pt-5"
                onClick={() => handleItem(item)}
              >
                {item?.name}
              </Link>
              {item?.status ? (
                <StarIcon
                  fontSize="large"
                  className="rounded-full p-2 m-3 hover:cursor-pointer hover:bg-sky-200 text-sky-500 drop-shadow"
                  onClick={() => handleRemoveItem(item)}
                  datacy="starIcon"
                />
              ) : (
                <StarBorderIcon
                  fontSize="large"
                  className="rounded-full p-2 m-3 hover:cursor-pointer hover:bg-sky-200 text-sky-500 drop-shadow"
                  onClick={() => handleAddItem(item)}
                  datacy="StarBorderIcon"
                />
              )}
            </li>
          ))
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
};

Autocomplete.defaultProps = {
  value: "",
  onChange: () => {},
  url: "",
  items: [],
  setItems: () => {},
  clickStarIcon: () => {},
  clickStarBorderIcon: () => {},
  handleItem: () => {}
};

export default Autocomplete;
