//React
import { React, useState } from "react";

//MUI
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between  ">
      <section className="flex sm:hidden">
        <div
          className="space-y-2 fixed top-10 right-10"
          onClick={() => setIsNavOpen(prev => !prev)}
        >
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        </div>

        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          <div
            className="absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <h1 className=" my-8 mx-8">Favourites</h1>
          <ul className="flex flex-col  min-h-[250px]">
            <li className=" my-3 mx-16 hover:list-disc bg-slate-200">
              <a href="/about">About</a>
            </li>
            <li className=" my-3 mx-16 hover:list-disc bg-slate-200">
              <a href="/portfolio">Portfolio</a>
            </li>
            <li className=" my-3 mx-16 hover:list-disc bg-slate-200">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </section>

      <div className="hidden  sm:flex flex-col bg-sky-300 h-screen">
        <HomeOutlinedIcon />
        <h1 className=" my-8 mx-6">Favourites</h1>
        <ul className="flex flex-col">
          <li className=" my-3 mx-12">
            <a href="/about">About</a>
          </li>
          <li className=" my-3 mx-12">
            <a href="/portfolio">Portfolio</a>
          </li>
          <li className=" my-3 mx-12">
            <a href="/contact">Contact</a>
          </li>{" "}
          <li className=" my-3 mx-12">
            <a href="/contact">Contact</a>
          </li>{" "}
          <li className=" my-3 mx-12">
            <a href="/contact">Contact</a>
          </li>{" "}
          <li className=" my-3 mx-12">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
      }
    `}</style>
    </div>
  );
}
