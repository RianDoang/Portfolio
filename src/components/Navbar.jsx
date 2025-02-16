import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "../input.css";

export default function Navbar({ sections }) {
  const [active, setActive] = useState("Profile");
  const [transformStyle, setTransformStyle] = useState("translateY(0)");
  const [shadowStyle, setShadowStyle] = useState("");
  const [isNavMenuVisible, setIsNavMenuVisible] = useState(false);
  const navMenuRef = useRef(null);
  const hamburgerMenuRef = useRef(null);

  const toggleNavMenu = () => {
    if (!isNavMenuVisible) {
      setIsNavMenuVisible(true);
      hamburgerMenuRef.current.classList.add("hamburger-active");
      navMenuRef.current.classList.remove("hidden");
      navMenuRef.current.classList.add("flex");
      setTimeout(() => {
        navMenuRef.current.classList.add("opacity-100", "translate-y-0");
        navMenuRef.current.classList.remove("-translate-y-4", "opacity-0");
      }, 50);
    } else {
      setIsNavMenuVisible(false);
      hamburgerMenuRef.current.classList.remove("hamburger-active");
      navMenuRef.current.classList.remove("opacity-100", "translate-y-0");
      navMenuRef.current.classList.add("-translate-y-4", "opacity-0");
      setTimeout(() => {
        navMenuRef.current.classList.remove("flex");
        navMenuRef.current.classList.add("hidden");
      }, 200);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        if (window.scrollY > 1) {
          setTransformStyle("translateY(-25px) ");
          setShadowStyle("drop-shadow-[0px_4px_10px_rgba(255,255,255,0.5)]");
        } else {
          setTransformStyle("translateY(0)");
          setShadowStyle("");
        }
      } else {
        setTransformStyle("translateY(0)");
        setShadowStyle("");
      }

      sections.forEach((section) => {
        const element = section.ref.current;
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 3) {
            setActive(section.name);
          }
        }
      });
    };

    const handleClickOutside = (event) => {
      if (
        navMenuRef.current &&
        !navMenuRef.current.contains(event.target) &&
        hamburgerMenuRef.current &&
        !hamburgerMenuRef.current.contains(event.target)
      ) {
        setIsNavMenuVisible(false);
        hamburgerMenuRef.current.classList.remove("hamburger-active");
        navMenuRef.current.classList.remove("opacity-100", "translate-y-0");
        navMenuRef.current.classList.add("-translate-y-4", "opacity-0");
        setTimeout(() => {
          navMenuRef.current.classList.remove("flex");
          navMenuRef.current.classList.add("hidden");
        }, 200);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sections]);

  const handleClick = (e, section) => {
    e.preventDefault();
    const element = section.ref.current;
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", " ");
      setActive(section.name);
    }
  };

  return (
    <nav
      className="absolute top-0 w-full h-[70px] z-50 flex items-center justify-center transition-all duration-300 md:sticky"
      style={{ transform: transformStyle }}
    >
      <div className="mx-4 z-10 flex items-center w-full justify-between">
        <span className="md:hidden">
          <p className="cursor-default font-semibold text-xl text-white">
            Rian
          </p>
        </span>
        <div
          id="hamburgerMenu"
          ref={hamburgerMenuRef}
          className="flex flex-col p-2 gap-1.5 cursor-pointer md:hidden"
          onClick={toggleNavMenu}
        >
          <span className="origin-top-left transition duration-300 ease-in-out flex h-[3px] w-4 rounded-sm bg-cyan-500"></span>
          <span className="transition duration-300 ease-in-out flex h-[3px] w-5 rounded-sm bg-cyan-500"></span>
          <span className="origin-bottom-left transition duration-300 ease-in-out flex h-[3px] w-6 rounded-sm bg-cyan-500"></span>
        </div>
      </div>

      {/* Menu Navigation */}
      <div
        id="navMenu"
        ref={navMenuRef}
        className={`absolute top-full right-5 w-48 shadow-lg shadow-slate-700 bg-slate-200 rounded-xl py-3 transition-all duration-200 ease-in-out 
          md:flex md:w-auto md:relative md:top-8 md:right-1/2 md:translate-x-1/2 md:px-7 md:rounded-full md:translate-y-0 md:opacity-100 md:shadow-none md:bg-slate-100
          hidden -translate-y-4 opacity-0
          ${shadowStyle}`}
      >
        <ul className="w-full block md:flex md:justify-between">
          {sections.map((section) => (
            <li
              key={section.name}
              className={`transition duration-150 ${
                active === section.name
                  ? "text-cyan-500 font-medium transition duration-150 hover:bg-gray-300 md:m-0 md:px-4 md:hover:bg-transparent"
                  : active === "Profile"
                  ? "transition duration-150 text-slate-950 hover:bg-gray-300 md:m-0 md:px-4 md:hover:text-cyan-500 font-medium md:hover:bg-transparent"
                  : "transition duration-150 text-slate-950/70 hover:bg-gray-300 md:m-0 md:px-4 md:hover:text-cyan-500 font-medium md:hover:bg-transparent"
              }`}
            >
              <a
                href={`#${section.name.toLowerCase()}`}
                className="flex pl-4 py-2 text-base md:pl-0"
                onClick={(e) => handleClick(e, section)}
              >
                {section.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      ref: PropTypes.shape({
        current: PropTypes.instanceOf(Element),
      }).isRequired,
    })
  ).isRequired,
};
