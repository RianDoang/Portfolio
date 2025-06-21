import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Bnn from "../assets/Experience/bnnTangsel.png";
import Bsa from "../assets/Experience/bsaLand.png";
import HtmlIcon from "../assets/Experience/skills/Html.svg";
import CssIcon from "../assets/Experience/skills/Css.svg";
import JsIcon from "../assets/Experience/skills/Js.svg";
import PhpIcon from "../assets/Experience/skills/Php.svg";
import TailwindIcon from "../assets/Experience/skills/Tailwind.svg";
import NodeJsIcon from "../assets/Experience/skills/NodeJs.svg";
import ReactIcon from "../assets/Experience/skills/ReactJs.svg";
import CaretDownIcon from "../assets/Experience/skills/CaretDown.svg";

export default function Experience() {
  const [isTouchedHtml, setIsTouchedHtml] = useState(false);
  const [isTouchedCss, setIsTouchedCss] = useState(false);
  const [isTouchedJs, setIsTouchedJs] = useState(false);
  const [isTouchedPhp, setIsTouchedPhp] = useState(false);
  const [isTouchedTailwind, setIsTouchedTailwind] = useState(false);
  const [isTouchedNode, setIsTouchedNode] = useState(false);
  const [isTouchedReact, setIsTouchedReact] = useState(false);

  const [hasAnimated, setHasAnimated] = useState(false);
  const [triggerPoint, setTriggerPoint] = useState(false);
  const [hasAnimatedSkill, setHasAnimatedSkill] = useState(false);
  const [triggerSkill, setTriggerSkill] = useState(false);
  const [hasAnimatedExp1, setHasAnimatedExp1] = useState(false);
  const [triggerExp1, settriggerExp1] = useState(false);
  const [hasAnimatedExp2, setHasAnimatedExp2] = useState(false);
  const [triggerExp2, settriggerExp2] = useState(false);
  const [hasAnimatedExp3, setHasAnimatedExp3] = useState(false);
  const [triggerExp3, settriggerExp3] = useState(false);

  useEffect(() => {
    const updateTriggers = () => {
      if (window.innerWidth < 768) {
        // Mobile
        setTriggerPoint(1690);
        setTriggerSkill(1915);
        settriggerExp1(2675);
        settriggerExp2(3030);
        settriggerExp3(3650);
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        // Tablet
        setTriggerPoint(1490);
        setTriggerSkill(1680);
        settriggerExp1(2166);
        settriggerExp2(2400);
        settriggerExp3(2740);
      } else {
        // Desktop
        setTriggerPoint(1620);
        setTriggerSkill(1800);
        settriggerExp1(2030);
        settriggerExp2(2300);
        settriggerExp3(2500);
      }
    };

    updateTriggers();
    window.addEventListener("resize", updateTriggers);

    return () => window.removeEventListener("resize", updateTriggers);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > triggerPoint && !hasAnimated) {
        setHasAnimated(true);
      }

      if (window.scrollY > triggerSkill && !hasAnimatedSkill) {
        setHasAnimatedSkill(true);
      }

      if (window.scrollY > triggerExp1 && !hasAnimatedExp1) {
        setHasAnimatedExp1(true);
      }

      if (window.scrollY > triggerExp2 && !hasAnimatedExp2) {
        setHasAnimatedExp2(true);
      }

      if (window.scrollY > triggerExp3 && !hasAnimatedExp3) {
        setHasAnimatedExp3(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [
    triggerPoint,
    hasAnimated,
    triggerSkill,
    hasAnimatedSkill,
    triggerExp1,
    hasAnimatedExp1,
    triggerExp2,
    hasAnimatedExp2,
    triggerExp3,
    hasAnimatedExp3,
  ]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: hasAnimated ? 1 : 0,
          y: hasAnimated ? 0 : 50,
        }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-5 text-left text-3xl font-semibold sm:text-5xl md:text-6xl">
          🎯 Specialized Skills
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: hasAnimated ? 1 : 0,
          y: hasAnimated ? 0 : 50,
        }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p className="pb-20 text-justify text-sm text-slate-500 sm:text-base md:text-left lg:w-1/2">
          With a solid foundation in both hardware and software, I excel in
          integrating comprehensive technical knowledge with practical
          applications to deliver robust and efficient solutions.
        </p>
      </motion.div>

      <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-16 pb-10 lg:justify-evenly lg:gap-0">
        {/* HTML */}
        <div>
          {/* Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: hasAnimatedSkill ? 1 : 0,
              y: hasAnimatedSkill ? 0 : 50,
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div
              className="group relative flex flex-col items-center md:hidden"
              onTouchStart={() => setIsTouchedHtml(true)}
              onTouchEnd={() => setIsTouchedHtml(false)}
            >
              <span
                className={`absolute -top-1 flex -translate-y-0 flex-col items-center justify-center opacity-0 transition duration-300 group-hover:-translate-y-10 group-hover:opacity-100 group-hover:delay-150 ${isTouchedHtml ? "-translate-y-10 opacity-100 delay-150" : ""}`}
              >
                <p>HTML</p>
                <img
                  src={CaretDownIcon}
                  alt="Caret Down Icon"
                  className="invert-100"
                />
              </span>
              <div
                className={`z-10 flex h-28 w-28 cursor-pointer items-center justify-center rounded border-1 border-slate-900 bg-gray-700 p-4 shadow-md shadow-slate-900 transition duration-150 group-hover:animate-[scaleIn_0.3s_ease-in-out] md:h-32 md:w-32 md:p-5 ${
                  isTouchedHtml ? "animate-[scaleIn_0.3s_ease-in-out]" : ""
                }`}
              >
                <img src={HtmlIcon} alt="HTML Icon" />
              </div>
            </div>
          </motion.div>

          {/* Tablet, Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: hasAnimatedSkill ? 1 : 0,
              y: hasAnimatedSkill ? 0 : 50,
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div
              data-aos-offset="300"
              className="group relative hidden flex-col items-center md:flex"
            >
              <span className="absolute -top-1 flex translate-y-0 flex-col items-center justify-center opacity-0 transition duration-300 group-hover:z-10 group-hover:-translate-y-10 group-hover:opacity-100 group-hover:delay-150">
                <p>HTML</p>
                <img
                  src={CaretDownIcon}
                  alt="Caret Down Icon"
                  className="invert-100"
                />
              </span>
              <div className="z-10 flex h-28 w-28 cursor-pointer items-center justify-center rounded border-1 border-slate-900 bg-gray-700 p-4 shadow-md shadow-slate-900 transition duration-150 group-hover:animate-[scaleIn_0.3s_ease-in-out] md:h-32 md:w-32 md:p-5">
                <img src={HtmlIcon} alt="HTML Icon" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* CSS */}
        <div>
          {/* Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: hasAnimatedSkill ? 1 : 0,
              y: hasAnimatedSkill ? 0 : 50,
            }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div
              className="group relative flex flex-col items-center md:hidden"
              onTouchStart={() => setIsTouchedCss(true)}
              onTouchEnd={() => setIsTouchedCss(false)}
            >
              <span
                className={`absolute -top-1 flex -translate-y-0 flex-col items-center justify-center opacity-0 transition duration-300 group-hover:-translate-y-10 group-hover:opacity-100 group-hover:delay-150 ${isTouchedCss ? "-translate-y-10 opacity-100 delay-150" : ""}`}
              >
                <p>CSS</p>
                <img
                  src={CaretDownIcon}
                  alt="Caret Down Icon"
                  className="invert-100"
                />
              </span>
              <div
                className={`z-10 flex h-28 w-28 cursor-pointer items-center justify-center rounded border-1 border-slate-900 bg-gray-700 p-4 shadow-md shadow-slate-900 transition duration-150 group-hover:animate-[scaleIn_0.3s_ease-in-out] md:h-32 md:w-32 md:p-5 ${
                  isTouchedCss ? "animate-[scaleIn_0.3s_ease-in-out]" : ""
                }`}
              >
                <img src={CssIcon} alt="CSS Icon" />
              </div>
            </div>
          </motion.div>

          {/* Tablet, Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: hasAnimatedSkill ? 1 : 0,
              y: hasAnimatedSkill ? 0 : 50,
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="group relative hidden flex-col items-center md:flex">
              <span className="absolute -top-1 flex translate-y-0 flex-col items-center justify-center opacity-0 transition duration-300 group-hover:z-10 group-hover:-translate-y-10 group-hover:opacity-100 group-hover:delay-150">
                <p>CSS</p>
                <img
                  src={CaretDownIcon}
                  alt="Caret Down Icon"
                  className="invert-100"
                />
              </span>
              <div className="z-10 flex h-28 w-28 cursor-pointer items-center justify-center rounded border-1 border-slate-900 bg-gray-700 p-4 shadow-md shadow-slate-900 transition duration-150 group-hover:animate-[scaleIn_0.3s_ease-in-out] md:h-32 md:w-32 md:p-5">
                <img src={CssIcon} alt="CSS Icon" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* JavaScript */}
        <div>
          {/* Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: hasAnimatedSkill ? 1 : 0,
              y: hasAnimatedSkill ? 0 : 50,
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative flex flex-col items-center md:hidden"
            onTouchStart={() => setIsTouchedJs(true)}
            onTouchEnd={() => setIsTouchedJs(false)}
          >
            <span
              className={`absolute -top-1 flex -translate-y-0 flex-col items-center justify-center opacity-0 transition duration-300 group-hover:-translate-y-10 group-hover:opacity-100 group-hover:delay-150 ${isTouchedJs ? "-translate-y-10 opacity-100 delay-150" : ""}`}
            >
              <p>JavaScript</p>
              <img
                src={CaretDownIcon}
                alt="Caret Down Icon"
                className="invert-100"
              />
            </span>
            <div
              className={`z-10 flex h-28 w-28 cursor-pointer items-center justify-center rounded border-1 border-slate-900 bg-gray-700 p-4 shadow-md shadow-slate-900 transition duration-150 group-hover:animate-[scaleIn_0.3s_ease-in-out] md:h-32 md:w-32 md:p-5 ${
                isTouchedJs ? "animate-[scaleIn_0.3s_ease-in-out]" : ""
              }`}
            >
              <img src={JsIcon} alt="JavaScript Icon" />
            </div>
          </motion.div>

          {/* Tablet, Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: hasAnimatedSkill ? 1 : 0,
              y: hasAnimatedSkill ? 0 : 50,
            }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative hidden flex-col items-center md:flex"
          >
            <span className="absolute -top-1 flex translate-y-0 flex-col items-center justify-center opacity-0 transition duration-300 group-hover:z-10 group-hover:-translate-y-10 group-hover:opacity-100 group-hover:delay-150">
              <p>JavaScript</p>
              <img
                src={CaretDownIcon}
                alt="Caret Down Icon"
                className="invert-100"
              />
            </span>
            <div className="z-10 flex h-28 w-28 cursor-pointer items-center justify-center rounded border-1 border-slate-900 bg-gray-700 p-4 shadow-md shadow-slate-900 transition duration-150 group-hover:animate-[scaleIn_0.3s_ease-in-out] md:h-32 md:w-32 md:p-5">
              <img src={JsIcon} alt="JavaScript Icon" />
            </div>
          </motion.div>
        </div>

        {/* Tailwind --> */}
        <div>
          {/* Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: hasAnimatedSkill ? 1 : 0,
              y: hasAnimatedSkill ? 0 : 50,
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative flex flex-col items-center md:hidden"
            onTouchStart={() => setIsTouchedTailwind(true)}
            onTouchEnd={() => setIsTouchedTailwind(false)}
          >
            <span
              className={`absolute -top-1 flex -translate-y-0 flex-col items-center justify-center opacity-0 transition duration-300 group-hover:-translate-y-10 group-hover:opacity-100 group-hover:delay-150 ${isTouchedTailwind ? "-translate-y-10 opacity-100 delay-150" : ""}`}
            >
              <p>Tailwind CSS</p>
              <img
                src={CaretDownIcon}
                alt="Caret Down Icon"
                className="invert-100"
              />
            </span>
            <div
              className={`z-10 flex h-28 w-28 cursor-pointer items-center justify-center rounded border-1 border-slate-900 bg-gray-700 p-4 shadow-md shadow-slate-900 transition duration-150 group-hover:animate-[scaleIn_0.3s_ease-in-out] md:h-32 md:w-32 md:p-5 ${
                isTouchedTailwind ? "animate-[scaleIn_0.3s_ease-in-out]" : ""
              }`}
            >
              <img src={TailwindIcon} alt="Tailwind CSS Icon" />
            </div>
          </motion.div>

          {/* Tablet, Deskop */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: hasAnimatedSkill ? 1 : 0,
              y: hasAnimatedSkill ? 0 : 50,
            }}
            transition={{ duration: 0.5 }}
            className="group relative hidden flex-col items-center md:flex"
          >
            <span className="absolute -top-1 flex translate-y-0 flex-col items-center justify-center opacity-0 transition duration-300 group-hover:z-10 group-hover:-translate-y-10 group-hover:opacity-100 group-hover:delay-150">
              <p>Tailwind CSS</p>
              <img
                src={CaretDownIcon}
                alt="Caret Down Icon"
                className="invert-100"
              />
            </span>
            <div className="z-10 flex h-28 w-28 cursor-pointer items-center justify-center rounded border-1 border-slate-900 bg-gray-700 p-4 shadow-md shadow-slate-900 transition duration-150 group-hover:animate-[scaleIn_0.3s_ease-in-out] md:h-32 md:w-32 md:p-5">
              <img src={TailwindIcon} alt="Tailwind CSS Icon" />
            </div>
          </motion.div>
        </div>

        {/* PHP */}
        <div>
          {/* Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: hasAnimatedSkill ? 1 : 0,
              y: hasAnimatedSkill ? 0 : 50,
            }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="group relative flex flex-col items-center md:hidden"
            onTouchStart={() => setIsTouchedPhp(true)}
            onTouchEnd={() => setIsTouchedPhp(false)}
          >
            <span
              className={`absolute -top-1 flex -translate-y-0 flex-col items-center justify-center opacity-0 transition duration-300 group-hover:-translate-y-10 group-hover:opacity-100 group-hover:delay-150 ${isTouchedPhp ? "-translate-y-10 opacity-100 delay-150" : ""}`}
            >
              <p>PHP</p>
              <img
                src={CaretDownIcon}
                alt="Caret Down Icon"
                className="invert-100"
              />
            </span>
            <div
              className={`z-10 flex h-28 w-28 cursor-pointer items-center justify-center rounded border-1 border-slate-900 bg-gray-700 p-4 shadow-md shadow-slate-900 transition duration-150 group-hover:animate-[scaleIn_0.3s_ease-in-out] md:h-32 md:w-32 md:p-5 ${
                isTouchedPhp ? "animate-[scaleIn_0.3s_ease-in-out]" : ""
              }`}
            >
              <img src={PhpIcon} alt="PHP Icon" />
            </div>
          </motion.div>

          {/* Tablet, Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: hasAnimatedSkill ? 1 : 0,
              y: hasAnimatedSkill ? 0 : 50,
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative hidden flex-col items-center md:flex"
          >
            <span className="absolute -top-1 flex translate-y-0 flex-col items-center justify-center opacity-0 transition duration-300 group-hover:z-10 group-hover:-translate-y-10 group-hover:opacity-100 group-hover:delay-150">
              <p>PHP</p>
              <img
                src={CaretDownIcon}
                alt="Caret Down Icon"
                className="invert-100"
              />
            </span>
            <div className="z-10 flex h-28 w-28 cursor-pointer items-center justify-center rounded border-1 border-slate-900 bg-gray-700 p-4 shadow-md shadow-slate-900 transition duration-150 group-hover:animate-[scaleIn_0.3s_ease-in-out] md:h-32 md:w-32 md:p-5">
              <img src={PhpIcon} alt="PHP Icon" />
            </div>
          </motion.div>
        </div>

        {/* Node JS */}
        <div>
          {/* Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: hasAnimatedSkill ? 1 : 0,
              y: hasAnimatedSkill ? 0 : 50,
            }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="group relative flex flex-col items-center md:hidden"
            onTouchStart={() => setIsTouchedNode(true)}
            onTouchEnd={() => setIsTouchedNode(false)}
          >
            <span
              className={`absolute -top-1 flex -translate-y-0 flex-col items-center justify-center opacity-0 transition duration-300 group-hover:-translate-y-10 group-hover:opacity-100 group-hover:delay-150 ${isTouchedNode ? "-translate-y-10 opacity-100 delay-150" : ""}`}
            >
              <p>Node JS</p>
              <img
                src={CaretDownIcon}
                alt="Caret Down Icon"
                className="invert-100"
              />
            </span>
            <div
              className={`z-10 flex h-28 w-28 cursor-pointer items-center justify-center rounded border-1 border-slate-900 bg-gray-700 p-4 shadow-md shadow-slate-900 transition duration-150 group-hover:animate-[scaleIn_0.3s_ease-in-out] md:h-32 md:w-32 md:p-5 ${
                isTouchedNode ? "animate-[scaleIn_0.3s_ease-in-out]" : ""
              }`}
            >
              <img src={NodeJsIcon} alt="Node Js Icon" />
            </div>
          </motion.div>

          {/* Tablet, Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: hasAnimatedSkill ? 1 : 0,
              y: hasAnimatedSkill ? 0 : 50,
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative hidden flex-col items-center md:flex"
          >
            <span className="absolute -top-1 flex translate-y-0 flex-col items-center justify-center opacity-0 transition duration-300 group-hover:z-10 group-hover:-translate-y-10 group-hover:opacity-100 group-hover:delay-150">
              <p>Node JS</p>
              <img
                src={CaretDownIcon}
                alt="Caret Down Icon"
                className="invert-100"
              />
            </span>
            <div className="z-10 flex h-28 w-28 cursor-pointer items-center justify-center rounded border-1 border-slate-900 bg-gray-700 p-4 shadow-md shadow-slate-900 transition duration-150 group-hover:animate-[scaleIn_0.3s_ease-in-out] md:h-32 md:w-32 md:p-5">
              <img src={NodeJsIcon} alt="Node Js Icon" />
            </div>
          </motion.div>
        </div>

        {/* React JS */}
        <div>
          {/* Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: hasAnimatedSkill ? 1 : 0,
              y: hasAnimatedSkill ? 0 : 50,
            }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="group relative flex flex-col items-center md:hidden"
            onTouchStart={() => setIsTouchedReact(true)}
            onTouchEnd={() => setIsTouchedReact(false)}
          >
            <span
              className={`absolute -top-1 flex -translate-y-0 flex-col items-center justify-center opacity-0 transition duration-300 group-hover:-translate-y-10 group-hover:opacity-100 group-hover:delay-150 ${isTouchedReact ? "-translate-y-10 opacity-100 delay-150" : ""}`}
            >
              <p>React JS</p>
              <img
                src={CaretDownIcon}
                alt="Caret Down Icon"
                className="invert-100"
              />
            </span>
            <div
              className={`z-10 flex h-28 w-28 cursor-pointer items-center justify-center rounded border-1 border-slate-900 bg-gray-700 p-4 shadow-md shadow-slate-900 transition duration-150 group-hover:animate-[scaleIn_0.3s_ease-in-out] md:h-32 md:w-32 md:p-5 ${
                isTouchedReact ? "animate-[scaleIn_0.3s_ease-in-out]" : ""
              }`}
            >
              <img src={ReactIcon} alt="React Icon" />
            </div>
          </motion.div>

          {/* Tablet, Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: hasAnimatedSkill ? 1 : 0,
              y: hasAnimatedSkill ? 0 : 50,
            }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="group relative hidden flex-col items-center md:flex"
          >
            <span className="absolute -top-1 flex translate-y-0 flex-col items-center justify-center opacity-0 transition duration-300 group-hover:z-10 group-hover:-translate-y-10 group-hover:opacity-100 group-hover:delay-150">
              <p>React JS</p>
              <img
                src={CaretDownIcon}
                alt="Caret Down Icon"
                className="invert-100"
              />
            </span>
            <div className="z-10 flex h-28 w-28 cursor-pointer items-center justify-center rounded border-1 border-slate-900 bg-gray-700 p-4 shadow-md shadow-slate-900 transition duration-150 group-hover:animate-[scaleIn_0.3s_ease-in-out] md:h-32 md:w-32 md:p-5">
              <img src={ReactIcon} alt="React Icon" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-10 pt-12" id="experience">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: hasAnimatedExp1 ? 1 : 0,
          }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-center text-xs text-cyan-500">Experience</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: hasAnimatedExp1 ? 1 : 0,
            y: hasAnimatedExp1 ? 0 : 50,
          }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="mb-5 text-center text-3xl font-semibold sm:text-5xl md:text-6xl">
            🏢 Work Experiences
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: hasAnimatedExp1 ? 1 : 0,
            y: hasAnimatedExp1 ? 0 : 50,
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="mx-auto w-[95%] pb-20 text-center text-sm text-slate-500 sm:text-base lg:w-1/2">
            Combining technical expertise with practical application, I have
            successfully contributed to various roles, leveraging my skills in
            computer engineering, networking, and web development to drive
            impactful results.
          </p>
        </motion.div>

        <div className="flex flex-col items-center justify-center gap-10">
          {/* BNN Tangsel */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: hasAnimatedExp2 ? 1 : 0,
              y: hasAnimatedExp2 ? 0 : 50,
            }}
            transition={{ duration: 0.5 }}
            className="flex w-full flex-col items-start justify-center rounded-2xl border-4 border-cyan-400 bg-gradient-to-tl from-cyan-600 to-cyan-900 md:flex-row"
          >
            <div className="mt-7 flex w-[25%] items-start justify-center">
              <img
                className="ml-10 w-20 object-cover md:m-0 md:w-32"
                src={Bnn}
                alt="Bnn Tangsel"
              />
            </div>
            <div className="w-full py-8 md:w-[75%]">
              <div className="mx-auto flex w-[90%] items-center justify-between md:ml-0 md:w-[95%]">
                <div className="flex flex-col justify-start">
                  <h1 className="-mb-1 text-4xl font-bold">BNN</h1>
                  <h3 className="font-semibold">@infobnn_ri</h3>
                  <p className="my-2 font-bold">Jan 2023 - Feb 2023</p>
                </div>
                <span className="rounded-lg bg-cyan-950 px-6 py-3 text-xs font-semibold opacity-90 md:px-9 md:py-4 md:text-sm">
                  IT Support
                </span>
              </div>
              <div className="mx-auto flex w-[90%] flex-col md:ml-0 md:w-[95%]">
                <h3 className="text-2xl font-medium">
                  The responsibilities include:
                </h3>
                <ul className="mt-2 flex list-disc flex-col gap-2 pl-4 leading-snug">
                  <li>Carry out WiFi repairs for all rooms</li>
                  <li>Training is part of intelligence members</li>
                  <li>Help sort the suspect&apos;s track record files</li>
                  <li>Perform maintenance and repairs on computer equipment</li>
                  <li>
                    Input suspect data and then print the suspect file sheet
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* BSA Land */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: hasAnimatedExp3 ? 1 : 0,
              y: hasAnimatedExp3 ? 0 : 50,
            }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex w-full flex-col items-start justify-center rounded-2xl border-4 border-cyan-400 bg-gradient-to-tl from-sky-800 to-cyan-600 md:flex-row"
          >
            <div className="mt-7 flex w-[25%] items-start justify-center">
              <img
                className="ml-10 w-20 object-cover md:m-0 md:w-32"
                src={Bsa}
                alt="Bsa Land"
              />
            </div>
            <div className="w-full py-8 md:w-[75%]">
              <div className="mx-auto flex w-[90%] items-center justify-between md:ml-0 md:w-[95%]">
                <div className="flex flex-col justify-start">
                  <h1 className="-mb-1 text-4xl font-bold">BSA Land</h1>
                  <h3 className="font-semibold">@bsalandofficial</h3>
                  <p className="my-2 font-bold">Feb 2023 - March 2023</p>
                </div>
                <span className="rounded-lg bg-cyan-950 px-6 py-3 text-xs font-semibold opacity-90 md:px-9 md:py-4 md:text-sm">
                  IT Support
                </span>
              </div>
              <div className="mx-auto flex w-[90%] flex-col md:ml-0 md:w-[95%]">
                <h3 className="text-2xl font-medium">
                  The responsibilities include:
                </h3>
                <ul className="mt-2 flex list-disc flex-col gap-2 pl-4 leading-snug">
                  <li>Create networks within the office</li>
                  <li>Carry out maintenance of office equipment</li>
                  <li>Analyze server hardware that is in trouble</li>
                  <li>Participate in creating office hybrid network designs</li>
                  <li>
                    Set the server to continue running without interruption
                  </li>
                  <li>
                    Help the IT team on a project so that it runs smoothly
                    according to procedures
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
