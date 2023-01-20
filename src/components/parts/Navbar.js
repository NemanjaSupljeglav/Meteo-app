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
      <nav className="h-20 bg-sky-500 text-gray-600  w-full fixed drop-shadow">
        <ul className="flex items-center justify-between h-full px-5 drop-shadow">
          <Link to="/">
            <li className="rounded-full bg-sky-500 hover:bg-sky-400 p-2 text-blue-100 z-50">
              <HomeOutlinedIcon
                fontSize="large"
                className="text-blue-100 font-medium"
              />
            </li>
          </Link>
          <h1 className="text-blue-100 font-bold">Frontend test</h1>
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
      <div className="flex items-center justify-between w-full">
        <div className="flex sm:hidden">
          <div
            className={
              isNavOpen
                ? "block mt-20 w-full fixed bg-sky-400 h-full"
                : "hidden"
            }
          >
            <h1 className="mx-8 font-bold text-blue-100 mt-2">Favourites</h1>
            <ul className="flex flex-col  h-full w-full">
              <li className="flex  my-2 mx-2  p-3 rounded-md bg-sky-500">
                <button
                  href="/portfolio"
                  className="mr-auto text-blue-100 font-bold hover:text-blue-200"
                >
                  Stola
                </button>
                <DeleteOutlineIcon
                  fontSize="large"
                  className="rounded-full p-2 hover:cursor-pointer hover:bg-sky-400 text-blue-100 bg-sky-500"
                />
              </li>
              <li className="flex  my-2 mx-2  p-3 rounded-md bg-sky-500">
                <button
                  href="/portfolio"
                  className="mr-auto text-blue-100 font-bold hover:text-blue-200"
                >
                  Stola
                </button>
                <DeleteOutlineIcon
                  fontSize="large"
                  className="rounded-full p-2 hover:cursor-pointer hover:bg-sky-400 text-blue-100 bg-sky-500"
                />
              </li>
              <li className="flex  my-2 mx-2  p-3 rounded-md bg-sky-500">
                <button
                  href="/portfolio"
                  className="mr-auto text-blue-100 font-bold hover:text-blue-200"
                >
                  Stola
                </button>
                <DeleteOutlineIcon
                  fontSize="large"
                  className="rounded-full p-2 hover:cursor-pointer hover:bg-sky-400 text-blue-100 bg-sky-500"
                />
              </li>
              <li className="flex  my-2 mx-2  p-3 rounded-md bg-sky-500">
                <button
                  href="/portfolio"
                  className="mr-auto text-blue-100 font-bold hover:text-blue-200"
                >
                  Stola
                </button>
                <DeleteOutlineIcon
                  fontSize="large"
                  className="rounded-full p-2 hover:cursor-pointer hover:bg-sky-400 text-blue-100 bg-sky-500"
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="hidden  sm:flex flex-col h-screen bg-sky-400 min-w-max mt-10">
          <h1 className="mt-12 mx-6 w-64 text-blue-100 font-bold">
            Favourites
          </h1>
          <ul className="flex flex-col  h-full min-w-max">
            <li className="flex  my-2 mx-2  p-3 rounded-md bg-sky-500">
              <button
                href="/portfolio"
                className="mr-auto text-blue-100 font-bold hover:text-blue-200"
              >
                Stola
              </button>
              <DeleteOutlineIcon
                fontSize="large"
                className="rounded-full p-2 hover:cursor-pointer hover:bg-sky-400 text-blue-100 bg-sky-500"
              />
            </li>
            <li className="flex  my-2 mx-2  p-3 rounded-md bg-sky-500">
              <button
                href="/portfolio"
                className="mr-auto text-blue-100 font-bold hover:text-blue-200"
              >
                Stola
              </button>
              <DeleteOutlineIcon
                fontSize="large"
                className="rounded-full p-2 hover:cursor-pointer hover:bg-sky-400 text-blue-100 bg-sky-500"
              />
            </li>
            <li className="flex  my-2 mx-2  p-3 rounded-md bg-sky-500">
              <button
                href="/portfolio"
                className="mr-auto text-blue-100 font-bold hover:text-blue-200"
              >
                Stola
              </button>
              <DeleteOutlineIcon
                fontSize="large"
                className="rounded-full p-2 hover:cursor-pointer hover:bg-sky-400 text-blue-100 bg-sky-500"
              />
            </li>
            <li className="flex  my-2 mx-2  p-3 rounded-md bg-sky-500">
              <button
                href="/portfolio"
                className="mr-auto text-blue-100 font-bold hover:text-blue-200"
              >
                Stola
              </button>
              <DeleteOutlineIcon
                fontSize="large"
                className="rounded-full p-2 hover:cursor-pointer hover:bg-sky-400 text-blue-100 bg-sky-500"
              />
            </li>
            <li className="flex  my-2 mx-2  p-3 rounded-md bg-sky-500">
              <button
                href="/portfolio"
                className="mr-auto text-blue-100 font-bold hover:text-blue-200"
              >
                Stola
              </button>
              <DeleteOutlineIcon
                fontSize="large"
                className="rounded-full p-2 hover:cursor-pointer hover:bg-sky-400 text-blue-100 bg-sky-500"
              />
            </li>
            <li className="flex  my-2 mx-2  p-3 rounded-md bg-sky-500">
              <button
                href="/portfolio"
                className="mr-auto text-blue-100 font-bold hover:text-blue-200"
              >
                Stola
              </button>
              <DeleteOutlineIcon
                fontSize="large"
                className="rounded-full p-2 hover:cursor-pointer hover:bg-sky-400 text-blue-100 bg-sky-500"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
