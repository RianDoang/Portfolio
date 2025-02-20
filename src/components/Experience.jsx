import { useState } from "react";
import "../input.css";
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

  return (
    <>
      <h1
        data-aos="fade-up"
        className="text-3xl ml-4 font-bold text-left mb-5 md:text-6xl"
      >
        🎯Specialized Skills
      </h1>
      <p
        data-aos="fade-up"
        data-aos-delay="100"
        className="w-[95%] pb-20 mx-auto text-left text-sm text-slate-500 md:text-base md:ml-8 lg:w-1/2"
      >
        With a solid foundation in both hardware and software, I excel in
        integrating comprehensive technical knowledge with practical
        applications to deliver robust and efficient solutions.
      </p>
      <div className="w-[95%] mx-auto flex-wrap flex items-center justify-center gap-x-7 gap-y-16 pb-10 lg:justify-evenly lg:gap-0">
        {/* HTML */}
        <div>
          {/* Mobile */}
          <div
            data-aos="fade-up"
            className="group relative flex flex-col items-center md:hidden"
            onTouchStart={() => setIsTouchedHtml(true)}
            onTouchEnd={() => setIsTouchedHtml(false)}
          >
            <span
              className={`absolute -top-1 -translate-y-0 flex flex-col items-center justify-center opacity-0 transition duration-300 group-hover:-translate-y-10 group-hover:opacity-100 group-hover:delay-150 
          ${isTouchedHtml ? "-translate-y-10 opacity-100 delay-150" : ""}`}
            >
              <p>HTML</p>
              <img
                src={CaretDownIcon}
                alt="Caret Down Icon"
                className="invert-100"
              />
            </span>
            <div
              className={`w-28 h-28 flex items-center justify-center p-4 cursor-pointer rounded z-10 border-1 shadow-md transition duration-150 border-slate-900 shadow-slate-900 bg-gray-700 md:p-5 md:w-32 md:h-32 group-hover:animate-[scaleIn_0.3s_ease-in-out] ${
                isTouchedHtml ? "animate-[scaleIn_0.3s_ease-in-out]" : ""
              }`}
            >
              <img src={HtmlIcon} alt="HTML Icon" />
            </div>
          </div>

          {/* Tablet, Desktop */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="group relative hidden flex-col items-center md:flex"
          >
            <span className="absolute -top-1 translate-y-0 flex flex-col items-center justify-center opacity-0 transition duration-300 group-hover:-translate-y-10 group-hover:z-10 group-hover:opacity-100 group-hover:delay-150">
              <p>HTML</p>
              <img
                src={CaretDownIcon}
                alt="Caret Down Icon"
                className="invert-100"
              />
            </span>
            <div className="w-28 h-28 flex items-center justify-center p-4 cursor-pointer rounded z-10 border-1 shadow-md transition duration-150 border-slate-900 shadow-slate-900 bg-gray-700 md:p-5 md:w-32 md:h-32 group-hover:animate-[scaleIn_0.3s_ease-in-out]">
              <img src={HtmlIcon} alt="HTML Icon" />
            </div>
          </div>
        </div>

        {/* CSS */}
        <div>
          {/* Mobile */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="group relative flex flex-col items-center md:hidden"
            onTouchStart={() => setIsTouchedCss(true)}
            onTouchEnd={() => setIsTouchedCss(false)}
          >
            <span
              className={`absolute -top-1 -translate-y-0 flex flex-col items-center justify-center opacity-0 transition duration-300 group-hover:-translate-y-10 group-hover:opacity-100 group-hover:delay-150
          ${isTouchedCss ? "-translate-y-10 opacity-100 delay-150" : ""}`}
            >
              <p>CSS</p>
              <img
                src={CaretDownIcon}
                alt="Caret Down Icon"
                className="invert-100"
              />
            </span>
            <div
              className={`w-28 h-28 flex items-center justify-center p-4 cursor-pointer rounded z-10 border-1 shadow-md transition duration-150 border-slate-900 shadow-slate-900 bg-gray-700 md:p-5 md:w-32 md:h-32 group-hover:animate-[scaleIn_0.3s_ease-in-out] ${
                isTouchedCss ? "animate-[scaleIn_0.3s_ease-in-out]" : ""
              }`}
            >
              <img src={CssIcon} alt="CSS Icon" />
            </div>
          </div>

          {/* Tablet, Desktop */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="group relative hidden flex-col items-center md:flex"
          >
            <span className="absolute -top-1 translate-y-0 flex flex-col items-center justify-center opacity-0 transition duration-300 group-hover:-translate-y-10 group-hover:z-10 group-hover:opacity-100 group-hover:delay-150">
              <p>CSS</p>
              <img
                src={CaretDownIcon}
                alt="Caret Down Icon"
                className="invert-100"
              />
            </span>
            <div className="w-28 h-28 flex items-center justify-center p-4 cursor-pointer rounded z-10 border-1 shadow-md transition duration-150 border-slate-900 shadow-slate-900 bg-gray-700 md:p-5 md:w-32 md:h-32 group-hover:animate-[scaleIn_0.3s_ease-in-out]">
              <img src={CssIcon} alt="CSS Icon" />
            </div>
          </div>
        </div>

        {/* JavaScript */}
        <div>
          {/* Mobile */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="group relative flex flex-col items-center md:hidden"
            onTouchStart={() => setIsTouchedJs(true)}
            onTouchEnd={() => setIsTouchedJs(false)}
          >
            <span
              className={`absolute -top-1 -translate-y-0 flex flex-col items-center justify-center opacity-0 transition duration-300 group-hover:-translate-y-10 group-hover:opacity-100 group-hover:delay-150
          ${isTouchedJs ? "-translate-y-10 opacity-100 delay-150" : ""}`}
            >
              <p>JavaScript</p>
              <img
                src={CaretDownIcon}
                alt="Caret Down Icon"
                className="invert-100"
              />
            </span>
            <div
              className={`w-28 h-28 flex items-center justify-center p-4 cursor-pointer rounded z-10 border-1 shadow-md transition duration-150 border-slate-900 shadow-slate-900 bg-gray-700 md:p-5 md:w-32 md:h-32 group-hover:animate-[scaleIn_0.3s_ease-in-out] ${
                isTouchedJs ? "animate-[scaleIn_0.3s_ease-in-out]" : ""
              }`}
            >
              <img src={JsIcon} alt="JavaScript Icon" />
            </div>
          </div>

          {/* Tablet, Desktop */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="group relative hidden flex-col items-center md:flex"
          >
            <span className="absolute -top-1 translate-y-0 flex flex-col items-center justify-center opacity-0 transition duration-300 group-hover:-translate-y-10 group-hover:z-10 group-hover:opacity-100 group-hover:delay-150">
              <p>JavaScript</p>
              <img
                src={CaretDownIcon}
                alt="Caret Down Icon"
                className="invert-100"
              />
            </span>
            <div className="w-28 h-28 flex items-center justify-center p-4 cursor-pointer rounded z-10 border-1 shadow-md transition duration-150 border-slate-900 shadow-slate-900 bg-gray-700 md:p-5 md:w-32 md:h-32 group-hover:animate-[scaleIn_0.3s_ease-in-out]">
              <img src={JsIcon} alt="JavaScript Icon" />
            </div>
          </div>
        </div>

        {/* Tailwind --> */}
        <div>
          {/* Mobile */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="group relative flex flex-col items-center md:hidden"
            onTouchStart={() => setIsTouchedTailwind(true)}
            onTouchEnd={() => setIsTouchedTailwind(false)}
          >
            <span
              className={`absolute -top-1 -translate-y-0 flex flex-col items-center justify-center opacity-0 transition duration-300 group-hover:-translate-y-10 group-hover:opacity-100 group-hover:delay-150
          ${isTouchedTailwind ? "-translate-y-10 opacity-100 delay-150" : ""}`}
            >
              <p>Tailwind CSS</p>
              <img
                src={CaretDownIcon}
                alt="Caret Down Icon"
                className="invert-100"
              />
            </span>
            <div
              className={`w-28 h-28 flex items-center justify-center p-4 cursor-pointer rounded z-10 border-1 shadow-md transition duration-150 border-slate-900 shadow-slate-900 bg-gray-700 md:p-5 md:w-32 md:h-32 group-hover:animate-[scaleIn_0.3s_ease-in-out] ${
                isTouchedTailwind ? "animate-[scaleIn_0.3s_ease-in-out]" : ""
              }`}
            >
              <img src={TailwindIcon} alt="Tailwind CSS Icon" />
            </div>
          </div>

          {/* Tablet, Deskop */}
          <div
            data-aos="fade-up"
            className="group relative hidden flex-col items-center md:flex"
          >
            <span className="absolute -top-1 translate-y-0 flex flex-col items-center justify-center opacity-0 transition duration-300 group-hover:-translate-y-10 group-hover:z-10 group-hover:opacity-100 group-hover:delay-150">
              <p>Tailwind CSS</p>
              <img
                src={CaretDownIcon}
                alt="Caret Down Icon"
                className="invert-100"
              />
            </span>
            <div className="w-28 h-28 flex items-center justify-center p-4 cursor-pointer rounded z-10 border-1 shadow-md transition duration-150 border-slate-900 shadow-slate-900 bg-gray-700 md:p-5 md:w-32 md:h-32 group-hover:animate-[scaleIn_0.3s_ease-in-out]">
              <img src={TailwindIcon} alt="Tailwind CSS Icon" />
            </div>
          </div>
        </div>

        {/* PHP */}
        <div>
          {/* Mobile */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="group relative flex flex-col items-center md:hidden"
            onTouchStart={() => setIsTouchedPhp(true)}
            onTouchEnd={() => setIsTouchedPhp(false)}
          >
            <span
              className={`absolute -top-1 -translate-y-0 flex flex-col items-center justify-center opacity-0 transition duration-300 group-hover:-translate-y-10 group-hover:opacity-100 group-hover:delay-150
          ${isTouchedPhp ? "-translate-y-10 opacity-100 delay-150" : ""}`}
            >
              <p>PHP</p>
              <img
                src={CaretDownIcon}
                alt="Caret Down Icon"
                className="invert-100"
              />
            </span>
            <div
              className={`w-28 h-28 flex items-center justify-center p-4 cursor-pointer rounded z-10 border-1 shadow-md transition duration-150 border-slate-900 shadow-slate-900 bg-gray-700 md:p-5 md:w-32 md:h-32 group-hover:animate-[scaleIn_0.3s_ease-in-out] ${
                isTouchedPhp ? "animate-[scaleIn_0.3s_ease-in-out]" : ""
              }`}
            >
              <img src={PhpIcon} alt="PHP Icon" />
            </div>
          </div>

          {/* Tablet, Desktop */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="group relative hidden flex-col items-center md:flex"
          >
            <span className="absolute -top-1 translate-y-0 flex flex-col items-center justify-center opacity-0 transition duration-300 group-hover:-translate-y-10 group-hover:z-10 group-hover:opacity-100 group-hover:delay-150">
              <p>PHP</p>
              <img
                src={CaretDownIcon}
                alt="Caret Down Icon"
                className="invert-100"
              />
            </span>
            <div className="w-28 h-28 flex items-center justify-center p-4 cursor-pointer rounded z-10 border-1 shadow-md transition duration-150 border-slate-900 shadow-slate-900 bg-gray-700 md:p-5 md:w-32 md:h-32 group-hover:animate-[scaleIn_0.3s_ease-in-out]">
              <img src={PhpIcon} alt="PHP Icon" />
            </div>
          </div>
        </div>

        {/* Node JS */}
        <div>
          {/* Mobile */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="group relative flex flex-col items-center md:hidden"
            onTouchStart={() => setIsTouchedNode(true)}
            onTouchEnd={() => setIsTouchedNode(false)}
          >
            <span
              className={`absolute -top-1 -translate-y-0 flex flex-col items-center justify-center opacity-0 transition duration-300 group-hover:-translate-y-10 group-hover:opacity-100 group-hover:delay-150
          ${isTouchedNode ? "-translate-y-10 opacity-100 delay-150" : ""}`}
            >
              <p>Node JS</p>
              <img
                src={CaretDownIcon}
                alt="Caret Down Icon"
                className="invert-100"
              />
            </span>
            <div
              className={`w-28 h-28 flex items-center justify-center p-4 cursor-pointer rounded z-10 border-1 shadow-md transition duration-150 border-slate-900 shadow-slate-900 bg-gray-700 md:p-5 md:w-32 md:h-32 group-hover:animate-[scaleIn_0.3s_ease-in-out] ${
                isTouchedNode ? "animate-[scaleIn_0.3s_ease-in-out]" : ""
              }`}
            >
              <img src={NodeJsIcon} alt="Node Js Icon" />
            </div>
          </div>

          {/* Tablet, Desktop */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="group relative hidden flex-col items-center md:flex"
          >
            <span className="absolute -top-1 translate-y-0 flex flex-col items-center justify-center opacity-0 transition duration-300 group-hover:-translate-y-10 group-hover:z-10 group-hover:opacity-100 group-hover:delay-150">
              <p>Node JS</p>
              <img
                src={CaretDownIcon}
                alt="Caret Down Icon"
                className="invert-100"
              />
            </span>
            <div className="w-28 h-28 flex items-center justify-center p-4 cursor-pointer rounded z-10 border-1 shadow-md transition duration-150 border-slate-900 shadow-slate-900 bg-gray-700 md:p-5 md:w-32 md:h-32 group-hover:animate-[scaleIn_0.3s_ease-in-out]">
              <img src={NodeJsIcon} alt="Node Js Icon" />
            </div>
          </div>
        </div>

        {/* React JS */}
        <div>
          {/* Mobile */}
          <div
            data-aos="fade-up"
            data-aos-delay="700"
            className="group relative flex flex-col items-center md:hidden"
            onTouchStart={() => setIsTouchedReact(true)}
            onTouchEnd={() => setIsTouchedReact(false)}
          >
            <span
              className={`absolute -top-1 -translate-y-0 flex flex-col items-center justify-center opacity-0 transition duration-300 group-hover:-translate-y-10 group-hover:opacity-100 group-hover:delay-150
          ${isTouchedReact ? "-translate-y-10 opacity-100 delay-150" : ""}`}
            >
              <p>React JS</p>
              <img
                src={CaretDownIcon}
                alt="Caret Down Icon"
                className="invert-100"
              />
            </span>
            <div
              className={`w-28 h-28 flex items-center justify-center p-4 cursor-pointer rounded z-10 border-1 shadow-md transition duration-150 border-slate-900 shadow-slate-900 bg-gray-700 md:p-5 md:w-32 md:h-32 group-hover:animate-[scaleIn_0.3s_ease-in-out] ${
                isTouchedReact ? "animate-[scaleIn_0.3s_ease-in-out]" : ""
              }`}
            >
              <img src={ReactIcon} alt="React Icon" />
            </div>
          </div>

          {/* Tablet, Desktop */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="group relative hidden flex-col items-center md:flex"
          >
            <span className="absolute -top-1 translate-y-0 flex flex-col items-center justify-center opacity-0 transition duration-300 group-hover:-translate-y-10 group-hover:z-10 group-hover:opacity-100 group-hover:delay-150">
              <p>React JS</p>
              <img
                src={CaretDownIcon}
                alt="Caret Down Icon"
                className="invert-100"
              />
            </span>
            <div className="w-28 h-28 flex items-center justify-center p-4 cursor-pointer rounded z-10 border-1 shadow-md transition duration-150 border-slate-900 shadow-slate-900 bg-gray-700 md:p-5 md:w-32 md:h-32 group-hover:animate-[scaleIn_0.3s_ease-in-out]">
              <img src={ReactIcon} alt="React Icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-12 mt-10" id="experience">
        <p data-aos="fade" className="text-xs text-center text-cyan-500">
          Experience
        </p>
        <h1
          data-aos="fade-up"
          className="text-3xl font-bold text-center mb-5 md:text-6xl"
        >
          🏢Work Experiences
        </h1>
        <p
          data-aos="fade-up"
          className="w-[95%] mx-auto text-slate-500 text-center pb-20 text-sm md:text-base lg:w-1/2"
        >
          Combining technical expertise with practical application, I have
          successfully contributed to various roles, leveraging my skills in
          computer engineering, networking, and web development to drive
          impactful results.
        </p>

        <div className="w-[95%] mx-auto flex flex-col items-center justify-center gap-10">
          {/* BNN Tangsel */}
          <div
            data-aos="fade-up"
            className="border-4 border-cyan-400 rounded-2xl w-full bg-gradient-to-tl from-cyan-600 to-cyan-900 flex flex-col items-start justify-center md:flex-row"
          >
            <div className="flex justify-center items-start mt-7 w-[25%]">
              <img
                className="object-cover w-20 ml-10 md:m-0 md:w-32"
                src={Bnn}
                alt="Bnn Tangsel"
              />
            </div>
            <div className="w-full py-8 md:w-[75%]">
              <div className="flex justify-between items-center mx-auto w-[90%] md:w-[95%] md:ml-0">
                <div className="flex flex-col justify-start">
                  <h1 className="text-4xl font-bold -mb-1">BNN</h1>
                  <h3 className="font-semibold">@infobnn_ri</h3>
                  <p className="font-bold my-2">Jan 2023 - Feb 2023</p>
                </div>
                <span className="px-6 py-3 text-xs font-semibold rounded-lg bg-cyan-950 opacity-90 md:text-sm md:py-4 md:px-9">
                  IT Support
                </span>
              </div>
              <div className="w-[90%] mx-auto flex flex-col md:ml-0 md:w-[95%]">
                <h3 className="font-medium text-2xl">
                  The responsibilities include:
                </h3>
                <ul className="list-disc pl-4 flex flex-col gap-2 mt-2 leading-snug">
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
          </div>

          {/* BSA Land */}
          <div
            data-aos="fade-up"
            className="border-4 border-cyan-400 rounded-2xl w-full bg-gradient-to-tl from-sky-800 to-cyan-600 flex flex-col items-start justify-center md:flex-row"
          >
            <div className="flex justify-center items-start mt-7 w-[25%]">
              <img
                className="object-cover w-20 ml-10 md:m-0 md:w-32"
                src={Bsa}
                alt="Bsa Land"
              />
            </div>
            <div className="w-full py-8 md:w-[75%]">
              <div className="flex justify-between items-center mx-auto w-[90%] md:w-[95%] md:ml-0">
                <div className="flex flex-col justify-start">
                  <h1 className="text-4xl font-bold -mb-1">BSA Land</h1>
                  <h3 className="font-semibold">@bsalandofficial</h3>
                  <p className="font-bold my-2">Feb 2023 - March 2023</p>
                </div>
                <span className="px-6 py-3 text-xs font-semibold rounded-lg bg-cyan-950 opacity-90 md:text-sm md:py-4 md:px-9">
                  IT Support
                </span>
              </div>
              <div className="w-[90%] mx-auto flex flex-col md:ml-0 md:w-[95%]">
                <h3 className="font-medium text-2xl">
                  The responsibilities include:
                </h3>
                <ul className="list-disc pl-4 flex flex-col gap-2 mt-2 leading-snug">
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
          </div>
        </div>
      </div>
    </>
  );
}
