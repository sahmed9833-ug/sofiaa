import Logo from "../logo/Logo";
import BaseButton from "./BaseButton";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const navigationItems = [
    { title: "Home", path: "/" },
    { title: "Experience", path: "/experience" },
    { title: "Education", path: "/education" },
  ];

  const isWindowScrolled = () => window.scrollY > 50;

  useEffect(() => {
    setScrolled(isWindowScrolled);
    window.addEventListener("scroll", () => setScrolled(isWindowScrolled));
  }, []);

  return (
    <div>
      <div
        className={`${
          isMenuOpen
            ? "noise bg-black/20 backdrop-blur-sm shadow-sm z-10 transition-transform"
            : "bg-transparent -z-10"
        } h-screen w-screen fixed sm:hidden`}
        onClick={() => setMenuOpen(!isMenuOpen)}
      ></div>
      <header
        className={`header ${isScrolled || isMenuOpen ? "with-background animate-bouncy-header" : ""}`}
      >
        <nav className="p-4 sm:pl-0 max-w-prose mx-auto sm:flex justify-between">
          <div className="flex">
            <div className="flex flex-1"></div>

            <a
              href="/"
              className={`${
                isScrolled ? "w-14 sm:w-20" : "w-36 h-36 flex-shrink-0 sm:w-36"
              } cursor-pointer transition-all animate-bouncy-btn motion-reduce:transition-none`}
              aria-label="Home"
            >
              <Logo />
            </a>

            <div className="flex-1 sm:hidden my-auto">
              <div className=" w-fit float-right ">
                <BaseButton
                  title="menu"
                  classes="smol animate-bouncy-btn"
                  onClick={() => setMenuOpen(!isMenuOpen)}
                >
                  <svg
                    className="stroke-periwinkle-medium dark:stroke-slate-300 w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </BaseButton>
              </div>
            </div>
          </div>
          <ul
            className={`${isMenuOpen ? "" : "hidden"} pt-4 sm:pt-0 sm:flex sm:items-center`}
          >
            {navigationItems.map((page, i) => (
              <li
                key={page.title}
                className="mb-4 last:mb-2 sm:last:mb-0 sm:mr-4 sm:last:mr-0 sm:mb-0 h-fit"
              >
                <BaseButton
                  title={page.title}
                  path={page.path}
                  classes={`animate-bouncy-btn delay-${i * 141} origin-bottom`}
                />
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
}
