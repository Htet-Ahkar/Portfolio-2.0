import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

//Constants
const buttons = [
  { name: "About", url: `/` },
  { name: "Blogs", url: `/blogs` },
  { name: "Projects", url: `/projects` },
];

const Header = () => {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  //Darkmode on
  useEffect(() => {
    const wrapper = document.querySelector("#__next");
    if (localStorage.getItem("theme") == "dark") {
      wrapper.classList.add("dark");
      setIsDarkMode(true);
    }

    //Change Logo
    if (router.pathname == "/admin") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [router.pathname]);

  //Dark mode toggle
  const modeToggle = (e) => {
    const target = e.target.parentNode.parentNode.parentNode.parentNode;

    setIsDarkMode(!isDarkMode);
    target.classList.toggle("dark");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //LocalStorage
  useEffect(() => {
    if (isDarkMode) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    //Container
    <div
      className={`relative h-24 w-full px-5  bg-bg flex items-center justify-between dark:bg-primary lg:h-36 lg:px-12 shadow-sm md:shadow-none ${
        isDarkMode && `shadow-white`
      }`}
    >
      {/* Logo and DarkMode Btn */}
      <div className="flex items-center">
        <h1 className="px-10 text-3xl font-bold dark:text-secondary md:text-5xl lg:px-20">
          <Link href={router.pathname == "/" ? "/admin" : "/"}>
            {isAdmin ? "Admin" : "Xero"}
          </Link>
        </h1>
        <div
          className="h-7 w-7 cursor-pointer dark:bg-secondary dark:rounded-lg lg:w-12 lg:h-12"
          onClick={modeToggle}
        >
          <img
            className="w-full h-ful"
            src={`/SocialMedias Icons/LightAndDarkIcons/${
              isDarkMode ? `moon-svgrepo-com.svg` : `day-sunny.svg`
            }`}
          />
        </div>
      </div>
      {/* Nav Btn Container */}
      <div className="flex gap-7 text-3xl lg:text-4xl">
        {/* Desktop Nav Btns */}
        {buttons.map((btn) => (
          <a key={btn.name} href={btn.url} className="hidden md:block">
            <div className="py-4 cursor-pointer hover:border-b-4 border-primary dark:border-dark-primary">
              <h1 className="font-semibold dark:text-secondary">{btn.name}</h1>
            </div>
          </a>
        ))}
        {/* Mobile Menu */}
        <div
          className={`transition-all duration-300 ease-in-out h-12 w-12 md:hidden cursor-pointer select-none ${
            isMenuOpen && `rotate-90`
          }`}
          onClick={toggleMenu}
        >
          <img
            src={`${
              isDarkMode ? `menu-svgrepo-com-dark.svg` : `menu-svgrepo-com.svg`
            }`}
          />
        </div>
      </div>
      {/* Mobile Menu Btns */}
      {isMenuOpen && (
        <div className="absolute top-24 lg:top-36 flex flex-col shadow-md w-screen -left-1 bg-bg dark:bg-dark-bg">
          {buttons.map((btn) => (
            <a
              href={btn.url}
              key={btn.name}
              className="h-24 cursor-pointer border-black dark:border-dark-primary border-b hover:border-b-4 text-primary dark:text-dark-secondary dark:hover:text-dark-primary text-3xl font-semibold"
            >
              <div className="w-full h-full text-center flex justify-center items-center">
                <h1>{btn.name}</h1>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
