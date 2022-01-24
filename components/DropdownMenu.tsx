import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const DropdownMenu = ({ isMenuOpen, setIsMenuOpen, buttons }) => {
  const router = useRouter();

  // Scroll lock toggle
  useEffect(() => {
    document.body.style.overflowY = isMenuOpen ? "hidden" : "scroll";

    return () => {};
  }, [isMenuOpen]);

  return (
    <div
      className={`absolute flex flex-col shadow-md w-full bg-bg h-screen -z-10 left-0
      transition-all duration-700 ease-out
      dark:bg-dark-bg
      ${isMenuOpen ? "top-24 lg:top-36" : "top-[-1000%]"}
      `}
    >
      {buttons.map((btn) => (
        <Link href={btn.url} key={btn.name}>
          <a
            onClick={() => {
              setIsMenuOpen(false);
            }}
            className={`h-24 cursor-pointer border-black border-b text-3xl font-semibold  
            dark:text-dark-secondary dark:border-dark-primary
            ${
              router.pathname == btn.url
                ? "bg-primary text-primaryText"
                : "text-primary"
            }
            `}
          >
            <div
              className="w-full h-full text-center flex justify-center items-center
            "
            >
              <h1 className="z-10">{btn.name}</h1>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default DropdownMenu;
