import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

// Components
import DropdownMenu from "./DropdownMenu";

//Constants
import { buttons } from "../constants/index";

const Header = () => {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Next Auth
  const { data: session } = useSession();

  //Darkmode on
  useEffect(() => {
    const body = document.body;
    if (localStorage.getItem("theme") == "dark") {
      body.classList.add("dark");
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
  const modeToggle = () => {
    const target = document.body;

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
    <nav
      className={`relative h-24 w-full flex items-center z-10 shadow-sm  
      md:shadow-none
      ${isDarkMode && `shadow-white`}`}
    >
      <div
        className="w-full h-full flex items-center justify-between bg-bg px-5
        lg:px-12
      dark:bg-primary
      "
      >
        {/* Logo and DarkMode Btn */}
        <div className="flex items-center">
          <h1
            className="pr-5 text-3xl font-bold dark:text-secondary
            hover:animate-pulse
        md:text-5xl md:px-10
        lg:px-20"
          >
            {/* to change */}
            <Link
              href={
                router.pathname == "/" ? `${session ? `/admin` : `/`}` : "/"
              }
            >
              {isAdmin ? "Admin" : "Xero"}
            </Link>
          </h1>
          <div
            className="h-7 w-7 cursor-pointer
          hover:scale-90 transition-all
          dark:bg-black
          lg:w-12 lg:h-12

          "
            onClick={modeToggle}
          >
            <img
              className="w-full h-ful"
              src={`/LightAndDarkIcons/${
                isDarkMode ? `moon-svgrepo.svg` : `day-sunny.svg`
              }`}
            />
          </div>
        </div>
        {/* Nav Btn Container */}
        <div className="flex gap-7 text-3xl lg:text-4xl">
          {/* Desktop Nav Btns */}
          {buttons.map((btn) => (
            <a key={btn.name} href={btn.url} className="hidden md:block">
              <div
                className="py-4 cursor-pointer flex flex-col items-center
            after:content-[''] after:block after:w-0 after:h-[3px] after:bg-primary after:rounded-3xl after:mt-2
            after:transition-all after:duration-500
            hover:after:w-11/12
            dark:after:bg-dark-primary
            "
              >
                <h1 className="font-semibold dark:text-secondary">
                  {btn.name}
                </h1>
              </div>
            </a>
          ))}
          {/* Mobile Menu */}
          <div
            className={`transition-all duration-300 ease-in-out h-12 w-12 md:hidden cursor-pointer select-none flex items-center justify-center ${
              isMenuOpen && `rotate-90`
            }`}
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="dark:fill-dark-primary"
            >
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
          </div>
        </div>
        {/* Mobile Menu Btns */}
        <DropdownMenu
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          buttons={buttons}
        />
      </div>
    </nav>
  );
};

export default Header;
