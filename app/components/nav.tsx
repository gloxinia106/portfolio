import { useState } from "react";
import { useSwiper } from "swiper/react";

interface NavProps {
  slideIndex: number;
}

export const Nav = ({ slideIndex }: NavProps) => {
  const swiper = useSwiper();
  const [toggleNavPopup, setToggleNavPopup] = useState(false);
  const onClickNav = () => {
    setToggleNavPopup((prev) => !prev);
  };
  return (
    <header
      className={`fixed z-50 top-0 text-white bg-white transition-colors duration-500 w-full ${
        slideIndex === 0 ? "md:bg-inherit" : "md:bg-white"
      }`}
    >
      <div className="flex justify-between mx-auto max-w-6xl py-4 px-8">
        <div
          onClick={() => {
            swiper.slideTo(0);
          }}
          className={`text-2xl text-black cursor-pointer transition-colors duration-100 font-semibold opacity-70 ${
            slideIndex === 0 ? "md:text-white" : "md:text-black"
          }`}
        >
          CJH's Portfolio
        </div>
        <nav>
          <ul
            className={`hidden md:flex space-x-5 transition-colors duration-100 opacity-70 ${
              slideIndex === 0 ? "text-white" : "text-black"
            }`}
          >
            <li
              onClick={() => {
                swiper.slideTo(1);
              }}
              className="flex items-center cursor-pointer px-5 justify-center font-semibold"
            >
              About
            </li>

            <li
              onClick={() => {
                swiper.slideTo(2);
              }}
              className="flex items-center cursor-pointer px-5 justify-center font-semibold"
            >
              Archiving
            </li>
          </ul>
        </nav>
        <div className="flex justify-between h-full md:hidden">
          <button className="text-black" onClick={onClickNav}>
            {toggleNavPopup ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <nav
        className={`${
          toggleNavPopup || "hidden"
        } md:hidden px-6 border-t py-4 text-black`}
      >
        <ul className="space-y-6">
          <li
            onClick={() => {
              swiper.slideTo(1);
            }}
            className="font-bold cursor-pointer"
          >
            About
          </li>
          <li
            onClick={() => {
              swiper.slideTo(2);
            }}
            className="font-bold cursor-pointer"
          >
            Archiving
          </li>
        </ul>
      </nav>
    </header>
  );
};
