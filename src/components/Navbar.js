import { React, useState } from "react";
import { Link } from "react-router-dom";

//MUI
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FolderSpecialOutlinedIcon from "@mui/icons-material/FolderSpecialOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div>
      <nav className="h-20 bg-sky-500 text-gray-600 fixed w-full">
        <ul className="flex items-center justify-between h-full px-10">
          <Link to="/">
            <li className="rounded-full bg-sky-500 hover:bg-sky-400 p-2">
              <HomeOutlinedIcon fontSize="large" />
            </li>
          </Link>
          <li>Meteo App</li>
          <Link
            onClick={() => setIsNavOpen(prev => !prev)}
            className="rounded-full bg-sky-500 hover:bg-sky-400 sm:hidden p-2"
          >
            {isNavOpen ? (
              <ArrowBackIcon fontSize="large" />
            ) : (
              <FolderSpecialOutlinedIcon fontSize="large" />
            )}
          </Link>
        </ul>
      </nav>
      <div className="flex items-center justify-between ">
        <section className="flex sm:hidden  w-full h-full">
          <div className={isNavOpen ? "block mt-20 w-full" : "hidden"}>
            <h1 className=" my-8 mx-8 ">Favourites</h1>
            <ul className="flex flex-col  h-full w-full">
              <li className="flex space-x-2 my-2 mx-5 bg-sky-100 p-3 rounded-md">
                <button href="/portfolio" className="mr-auto">
                  Mostar
                </button>
                <DeleteOutlineIcon
                  fontSize="large"
                  className="rounded-full hover:bg-sky-200 p-2 hover:cursor-pointer"
                />
              </li>{" "}
              <li className="flex space-x-2 my-2 mx-5 bg-sky-100 p-3 rounded-md">
                <button href="/portfolio" className="mr-auto">
                  Trebiunje
                </button>
                <DeleteOutlineIcon
                  fontSize="large"
                  className="rounded-full hover:bg-sky-200 p-2 hover:cursor-pointer"
                />
              </li>{" "}
              <li className="flex space-x-2 my-2 mx-5 bg-sky-100 p-3 rounded-md">
                <button href="/portfolio" className="mr-auto">
                  Banja luka
                </button>
                <DeleteOutlineIcon
                  fontSize="large"
                  className="rounded-full hover:bg-sky-200 p-2 hover:cursor-pointer"
                />
              </li>{" "}
              <li className="flex space-x-2 my-2 mx-5 bg-sky-100 p-3 rounded-md">
                <button href="/portfolio" className="mr-auto">
                  Portfolio
                </button>
                <DeleteOutlineIcon
                  fontSize="large"
                  className="rounded-full hover:bg-sky-200 p-2 hover:cursor-pointer"
                />
              </li>
            </ul>
          </div>
        </section>

        <div className="hidden  sm:flex flex-col bg-sky-300 h-screen bg-sky-100 fixed top-[80px] w-1/4">
          <h1 className=" my-8 mx-6 ">Favourites</h1>
          <ul className="flex flex-col  h-full w-full">
            <li className="flex  my-2 mx-2  p-3 rounded-md">
              <button href="/portfolio" className="mr-auto">
                MostarMo starMostar
              </button>
              <DeleteOutlineIcon
                fontSize="large"
                className="rounded-full hover:bg-sky-200 p-2 hover:cursor-pointer"
              />
            </li>{" "}
            <li className="flex  my-2 mx-2  p-3 rounded-md">
              <button href="/portfolio" className="mr-auto">
                Stolac
              </button>
              <DeleteOutlineIcon
                fontSize="large"
                className="rounded-full hover:bg-sky-200 p-2 hover:cursor-pointer"
              />
            </li>{" "}
            <li className="flex  my-2 mx-2  p-3 rounded-md">
              <button href="/portfolio" className="mr-auto">
                Novi sad
              </button>
              <DeleteOutlineIcon
                fontSize="large"
                className="rounded-full hover:bg-sky-200 p-2 hover:cursor-pointer"
              />
            </li>{" "}
            <li className="flex  my-2 mx-2  p-3 rounded-md">
              <button href="/portfolio" className="mr-auto">
                Bg
              </button>
              <DeleteOutlineIcon
                fontSize="large"
                className="rounded-full hover:bg-sky-200 p-2 hover:cursor-pointer"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
