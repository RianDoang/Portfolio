import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

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
      className="absolute top-0 z-50 flex h-[70px] w-full items-center justify-center transition-all duration-300 md:sticky"
      style={{ transform: transformStyle }}
    >
      <div className="z-10 mx-4 flex w-full items-center justify-between">
        <span className="md:hidden">
          <p className="cursor-default text-xl font-semibold text-white">
            Rian
          </p>
        </span>
        <div
          id="hamburgerMenu"
          ref={hamburgerMenuRef}
          className="flex cursor-pointer flex-col gap-1.5 p-2 md:hidden"
          onClick={toggleNavMenu}
        >
          <span className="flex h-[3px] w-4 origin-top-left rounded-sm bg-cyan-500 transition duration-300 ease-in-out"></span>
          <span className="flex h-[3px] w-5 rounded-sm bg-cyan-500 transition duration-300 ease-in-out"></span>
          <span className="flex h-[3px] w-6 origin-bottom-left rounded-sm bg-cyan-500 transition duration-300 ease-in-out"></span>
        </div>
      </div>

      {/* Menu Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.5 }}
        className="md:relative md:right-1/2 md:flex md:w-auto md:translate-x-1/2"
      >
        <div
          id="navMenu"
          ref={navMenuRef}
          className={`absolute top-16 right-5 hidden w-48 -translate-y-4 rounded-xl bg-slate-200 py-3 opacity-0 shadow-lg shadow-slate-700 transition-all duration-200 ease-in-out md:relative md:top-10 md:right-1/2 md:flex md:w-auto md:translate-x-1/2 md:translate-y-0 md:rounded-full md:bg-slate-100 md:px-7 md:opacity-100 md:shadow-none ${shadowStyle}`}
        >
          <ul className="block w-full md:flex md:justify-between">
            {sections.map((section) => (
              <li
                key={section.name}
                className={`transition duration-150 ${
                  active === section.name
                    ? "font-medium text-cyan-500 transition duration-150 hover:bg-gray-300 md:m-0 md:px-4 md:hover:bg-transparent"
                    : active === "Profile"
                      ? "font-medium text-slate-950 transition duration-150 hover:bg-gray-300 md:m-0 md:px-4 md:hover:bg-transparent md:hover:text-cyan-500"
                      : "font-medium text-slate-950/60 transition duration-150 hover:bg-gray-300 md:m-0 md:px-4 md:hover:bg-transparent md:hover:text-cyan-500"
                }`}
              >
                <a
                  href={`#${section.name.toLowerCase()}`}
                  className="flex py-2 pl-4 text-base md:pl-0"
                  onClick={(e) => handleClick(e, section)}
                >
                  {section.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
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
    }),
  ).isRequired,
};
