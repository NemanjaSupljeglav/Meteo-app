import React from "react";
import Autocomplete from "../../components/atoms/inputs/Autocomplete";

export default function Home() {
  return (
    <div className="mt-20 w-screen h-full flex justify-center ">
      <div>
        {/*    <div className="bg-sky-400 text-4xl rounded-full mt-3 max-w-max px-6 py-3 text-blue-100 ">
          Meteo app
        </div> */}
        <div className="bg-sky-400 text-4xl mt-3 max-w-max px-1 py-1 rounded-lg mx-3">
          <Autocomplete />
        </div>
      </div>
    </div>
  );
}
