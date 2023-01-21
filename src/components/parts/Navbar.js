import { React, useState, useContext } from "react";
import { Link } from "react-router-dom";

//MUI
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FolderSpecialOutlinedIcon from "@mui/icons-material/FolderSpecialOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";

//Context
import { MeteoContext } from "../../MeteoContext";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const context = useContext(MeteoContext);

  const handleRemoveFavourite = data => {
    context.handleRemoveFavourite(data);
  };

  const handleAscendingDescending = () => {
    context.handleAscendingDescending();
  };

  const handleGetDetails = data => {
    context.handleGetOneDetails(data);
  };

  return (
    <div className="z-50">
      <nav className="h-20 bg-sky-500 text-gray-600  w-full fixed drop-shadow z-50">
        <ul className="flex items-center justify-between h-full px-5 drop-shadow ">
          <Link to="/">
            <li className="rounded-full bg-sky-500 hover:bg-sky-400 p-2 text-blue-100 z-50">
              <HomeOutlinedIcon
                fontSize="large"
                className="text-blue-100 font-medium"
              />
            </li>
          </Link>
          <h1 className="text-blue-100 font-bold">Meteo app</h1>
          <Link
            onClick={() => setIsNavOpen(prev => !prev)}
            className="rounded-full bg-sky-500 hover:bg-sky-400 sm:hidden p-2 text-blue-100"
          >
            {isNavOpen ? (
              <ArrowBackIcon fontSize="large" />
            ) : (
              <FolderSpecialOutlinedIcon fontSize="large" />
            )}
          </Link>
        </ul>
      </nav>
      <div className="flex items-center justify-between w-full mt-[-40px]">
        <div className="flex sm:hidden">
          <div
            className={
              isNavOpen
                ? "block mt-20 w-full fixed bg-sky-400 h-full"
                : "hidden"
            }
          >
            <div className="py-2 w-full text-blue-100 font-bold  flex flex-row align-middle mt-0">
              <div className="mt-12  ml-4 mr-auto">Favourites</div>
              <SortByAlphaIcon
                fontSize="large"
                className="rounded-full p-2 hover:cursor-pointer hover:bg-sky-400 text-blue-100 bg-sky-500  drop-shadow mt-11 mr-5"
                onClick={() => handleAscendingDescending()}
              />
            </div>

            <ul className="flex flex-col  min-w-max mt-0 overflow-auto">
              {context?.favourite?.length !== 0 ? (
                context?.favourite?.map(item => (
                  <li
                    className="flex  my-1 mx-2  p-3 rounded-md bg-sky-500"
                    key={item?.id}
                  >
                    <Link
                      to="/details"
                      className="mr-auto text-blue-100 font-bold hover:text-blue-200"
                      onClick={() => {
                        handleGetDetails(item);
                        setIsNavOpen(prev => !prev);
                      }}
                    >
                      {item?.name}
                    </Link>
                    <DeleteOutlineIcon
                      fontSize="large"
                      className="rounded-full p-2 hover:cursor-pointer hover:bg-sky-400 text-blue-100 bg-sky-500 drop-shadow"
                      onClick={() => handleRemoveFavourite(item)}
                    />
                  </li>
                ))
              ) : (
                <li className="flex  my-1 mx-2  p-3 text-blue-100">Empty</li>
              )}
            </ul>
          </div>
        </div>

        <div className="hidden  sm:flex flex-col h-screen bg-sky-400 min-w-[250px] mt-10  top-0 ">
          <div className="py-2 w-64 text-blue-100 font-bold  flex flex-row align-middle mt-11">
            <div className="mt-12  ml-4">Favourites</div>
            <SortByAlphaIcon
              fontSize="large"
              className="rounded-full p-2 hover:cursor-pointer hover:bg-sky-400 text-blue-100 bg-sky-500 ml-auto mr-5 drop-shadow mt-11"
              onClick={() => handleAscendingDescending()}
            />
          </div>

          <ul className="flex flex-col  min-w-max mt-0 overflow-auto">
            {context?.favourite?.length !== 0 ? (
              context?.favourite?.map(item => (
                <li
                  className="flex  my-1 mx-2  p-3 rounded-md bg-sky-500"
                  key={item?.id}
                >
                  <Link
                    to="/details"
                    className="mr-auto text-blue-100 font-bold hover:text-blue-200"
                    onClick={() => handleGetDetails(item)}
                  >
                    {item?.name}
                  </Link>
                  <DeleteOutlineIcon
                    fontSize="large"
                    className="rounded-full p-2 hover:cursor-pointer hover:bg-sky-400 text-blue-100 bg-sky-500 drop-shadow"
                    onClick={() => handleRemoveFavourite(item)}
                  />
                </li>
              ))
            ) : (
              <li className="flex  my-1 mx-2  p-3 text-blue-100">Empty</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
