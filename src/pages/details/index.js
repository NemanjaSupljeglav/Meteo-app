//React
import React, { useState, useContext, useEffect } from "react";

//Components
import SelectList from "../../components/atoms/inputs/SelectList";
import CheckBoxGroup from "../../components/atoms/inputs/CheckBoxGroup";
import DrawChart from "../../components/atoms/UI/drawChart";
//Context
import { MeteoContext } from "../../MeteoContext";

export default function Details() {
  //state
  const [viewType, setViewType] = useState("");

  const items = [
    { id: "1", name: "No view" },
    { id: "2", name: "Hourly View" },
    { id: "3", name: "Daily View" }
  ];

  const context = useContext(MeteoContext);
  return context?.oneDetails ? (
    <div className="mt-20 w-screen  overflow-auto ">
      <h1 className="mt-6 text-sky-600 drop-shadow  flex justify-center text-xl ">
        Meteorologic data for {context?.oneDetails?.data?.name}
      </h1>
      <div className="mx-3 flex justify-center">
        <SelectList value={viewType} onChange={setViewType} items={items} />
      </div>
      {viewType === "Hourly View" ? (
        <>
          <div className="mt-5 text-sky-500 drop-shadow  flex justify-left text-xl ml-6 w">
            Hourly Weather Variables
          </div>

          <div className="mt-1 text-sky-600 w-full grid md:grid-cols-2 lg:grid-cols-4 ">
            <div className="ml-16 md:ml-16 flex justify-right">
              <CheckBoxGroup
                selectedValues={[]}
                remove={"true"}
                options={[
                  { value: 1, label: "Temperature (2 m)" },
                  { value: 2, label: "Relative Humidity (2 m)" },
                  { value: 3, label: "Dewpoint (2 m)" },
                  { value: 4, label: "Apparent Temperature" }
                ]}
              />
            </div>
            <div className="ml-16 md:ml-16 flex justify-right">
              <CheckBoxGroup
                className="bg-sky-500  text-gray-500"
                selectedValues={[]}
                remove={"true"}
                options={[
                  { value: 5, label: "Weathercode" },
                  { value: 6, label: "Sealevel Pressure" },
                  { value: 7, label: "Surface Pressure" },
                  { value: 8, label: "Cloudcover Total" }
                ]}
              />
            </div>
            <div className="ml-16 md:ml-16 flex justify-right sm:justify-left">
              <CheckBoxGroup
                selectedValues={[]}
                remove={"true"}
                options={[
                  { value: 1, label: "Temperature (2 m)" },
                  { value: 2, label: "Relative Humidity (2 m)" },
                  { value: 3, label: "Dewpoint (2 m)" },
                  { value: 4, label: "Apparent Temperature" }
                ]}
              />
            </div>
            <div className="ml-16 md:ml-16 flex justify-right">
              <CheckBoxGroup
                className="bg-sky-500  text-gray-500"
                selectedValues={[]}
                remove={"true"}
                options={[
                  { value: 5, label: "Weathercode" },
                  { value: 6, label: "Sealevel Pressure" },
                  { value: 7, label: "Surface Pressure" },
                  { value: 8, label: "Cloudcover Total" }
                ]}
              />
            </div>
          </div>
        </>
      ) : viewType === "Daily View" ? (
        <>
          <div className="mt-5 text-sky-500 drop-shadow  flex justify-left text-xl ml-6 w">
            Hourly Weather Variables
          </div>
          <div className="mt-1 text-sky-600 w-full grid md:grid-cols-2 lg:grid-cols-2 ">
            <div className="ml-16 flex justify-right">
              <CheckBoxGroup
                selectedValues={[]}
                remove={"true"}
                options={[
                  { value: 9, label: "Weathercode" },
                  { value: 10, label: "Maximum Temperature (2 m)" },
                  { value: 11, label: "Minimum Temperature (2 m))" },
                  { value: 12, label: "Maximum Apparent Temperature (2 m)" }
                ]}
              />
            </div>
            <div className="ml-16 flex justify-right">
              <CheckBoxGroup
                className="bg-sky-500  text-gray-500"
                selectedValues={[]}
                remove={"true"}
                options={[
                  { value: 13, label: "Precipitation Sum" },
                  { value: 14, label: "Rain Sum" },
                  { value: 15, label: "Precipitation Hours" },
                  { value: 16, label: "Maximum Wind Speed (10 m)" }
                ]}
              />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      <div className="mt-6 text-sky-600 drop-shadow ">
        <DrawChart data={context?.dataForChart} />
      </div>
    </div>
  ) : (
    <></>
  );
}
