//React
import React, { useState, useContext, useEffect } from "react";

//Components
import SelectList from "../../components/atoms/inputs/SelectList";
import CheckBoxGroup from "../../components/atoms/inputs/CheckBoxGroup";

//Context
import { MeteoContext } from "../../MeteoContext";

export default function Details() {
  //state
  const [viewType, setViewType] = useState("");
  const [checked, setChecked] = useState(true);

  const items = [
    { id: "1", name: "No view" },
    { id: "2", name: "Hourly View" },
    { id: "3", name: "Daily View" }
  ];

  const context = useContext(MeteoContext);
  return context?.oneDetails ? (
    <div className="mt-20 w-screen h-full flex justify-center flex-col overflow-auto">
      <h1 className="mt-6 text-sky-600 drop-shadow  flex justify-center text-xl ">
        Meteorologic data for {context?.oneDetails?.data?.name}
      </h1>
      <div className="mx-3 flex justify-center">
        <SelectList value={viewType} onChange={setViewType} items={items} />
      </div>
      <div className="mt-5 text-gray-500 drop-shadow  flex justify-left text-xl ml-6 w">
        Hourly Weather Variables
      </div>
      <div className="mt-6 text-sky-600 md:flex md:flex-row">
        <CheckBoxGroup
          className="bg-sky-500 md:w-[25%] text-gray-500"
          selectedValues={[]}
          remove={"true"}
          options={[
            { value: 1, label: "Temperature (2 m)" },
            { value: 2, label: "Relative Humidity (2 m)" },
            { value: 3, label: "Dewpoint (2 m)" },
            { value: 4, label: "Apparent Temperature" }
          ]}
        />
        <div className="bg-gray-500 md:w-[25%] "> drugi dio</div>
        <div className="bg-sky-500 md:w-[25%] "> treci dio </div>
        <div className="bg-gray-500 md:w-[25%] "> cetvrti dio</div>
      </div>
      <div className="mt-6 text-sky-600 drop-shadow  flex justify-center text-xl ">
        Nemanjaaa
      </div>
      <div className="mt-6 text-sky-600 drop-shadow  flex justify-center text-xl ">
        Nemanjaaa
      </div>
    </div>
  ) : (
    <></>
  );
}

/*
     <div className="mt-6 text-sky-600 md:flex md:flex-row">
        <div className="bg-sky-500 md:w-[25%] "> Prvi dio </div>
        <div className="bg-gray-500 md:w-[25%] "> drugi dio</div>
        <div className="bg-sky-500 md:w-[25%] "> treci dio </div>
        <div className="bg-gray-500 md:w-[25%] "> cetvrti dio</div>
      </div>

*/
