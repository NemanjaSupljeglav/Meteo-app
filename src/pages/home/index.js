/* eslint-disable react-hooks/exhaustive-deps */

//React
import React, { useEffect, useContext, useState } from "react";

//Atoms
import Autocomplete from "../../components/atoms/inputs/Autocomplete";

//Context
import { MeteoContext } from "../../MeteoContext";

export default function Home() {
  //state
  const [city, setCity] = useState("");
  const [citys, setCitys] = useState([]);

  const context = useContext(MeteoContext);

  const handleFavourite = data => {
    context.handleAdFavourite(data);
  };
  const handleRemoveFavourite = data => {
    context.handleRemoveFavourite(data);
  };
  const handleGetDetails = data => {
    context.handleGetOneDetails(data);
  };
  useEffect(() => {
    context.handleAutocompleteList(citys);
  }, [citys]);

  return (
    <div className="mt-20 w-screen h-full flex justify-center snap-none ">
      <div>
        <div className=" mx-3">
          <Autocomplete
            value={city}
            onChange={setCity}
            clickStarIcon={handleRemoveFavourite}
            clickStarBorderIcon={handleFavourite}
            items={context?.cityList}
            setItems={setCitys}
            url={`https://geocoding-api.open-meteo.com/v1/search?name=${city}`}
            handleItem={handleGetDetails}
          />
        </div>
      </div>
    </div>
  );
}
