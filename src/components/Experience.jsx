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
  return (
    <>
      <h1 className="text-3xl ml-4 font-bold text-left mb-5 md:text-6xl">
        🎯Specialized Skills
      </h1>
      <p className="w-[95%] ml-4 text-slate-500 text-left pb-20 text-sm md:text-base md:ml-8 lg:w-1/2">
        With a solid foundation in both hardware and software, I excel in
        integrating comprehensive technical knowledge with practical
        applications to deliver robust and efficient solutions.
      </p>
      <div className="w-[95%] mx-auto flex-wrap flex items-center justify-center gap-x-7 gap-y-16 pb-10 lg:justify-evenly lg:gap-0">
        {/* HTML */}
        <div>
          {/* Mobile */}
          <motion.button
            whileHover={{
              scale: [1.0, 0.9, 1.0],
              transition: { duration: 0.3 },
            }}
            className="group relative flex flex-col items-center md:hidden"
          >
            <span className="absolute -top-1 translate-y-0 flex flex-col items-center justify-center opacity-0 transition duration-300 group-hover:-translate-y-10 group-hover:z-10 group-hover:opacity-100 group-hover:delay-150">
              <p>HTML</p>
              <img
                src={CaretDownIcon}
                alt="Caret Down Icon"
                className="invert-100"
              />
            </span>
            <div className="w-28 h-28 flex items-center justify-center p-4 cursor-pointer rounded z-10 border-1 shadow-md transition duration-150 border-slate-900 shadow-slate-900 bg-gray-700 md:p-5 md:w-32 md:h-32">
              <img src={HtmlIcon} alt="HTML Icon" />
            </div>
          </motion.button>

          {/* Tablet, Desktop */}
          <motion.button
            whileHover={{
              scale: [1.0, 0.9, 1.0],
              transition: { duration: 0.3 },
            }}
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
            <div className="w-28 h-28 flex items-center justify-center p-4 cursor-pointer rounded z-10 border-1 shadow-md transition duration-150 border-slate-900 shadow-slate-900 bg-gray-700 md:p-5 md:w-32 md:h-32">
              <img src={HtmlIcon} alt="HTML Icon" />
            </div>
          </motion.button>
        </div>

        {/* CSS */}
        <div>
          {/* Mobile */}
          <motion.button
            whileHover={{
              scale: [1.0, 0.9, 1.0],
              transition: { duration: 0.3 },
            }}
            className="group relative flex flex-col items-center md:hidden"
          >
            <span className="absolute -top-1 translate-y-0 flex flex-col items-center justify-center opacity-0 transition duration-300 group-hover:-translate-y-10 group-hover:z-10 group-hover:opacity-100 group-hover:delay-150">
              <p>CSS</p>
              <img
                src={CaretDownIcon}
                alt="Caret Down Icon"
                className="invert-100"
              />
            </span>
            <div className="w-28 h-28 flex items-center justify-center p-4 cursor-pointer rounded z-10 border-1 shadow-md transition duration-150 border-slate-900 shadow-slate-900 bg-gray-700 md:p-5 md:w-32 md:h-32">
              <img src={CssIcon} alt="CSS Icon" />
            </div>
          </motion.button>

          {/* Tablet, Desktop */}
          <motion.button
            whileHover={{
              scale: [1.0, 0.9, 1.0],
              transition: { duration: 0.3 },
            }}
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
            <div className="w-28 h-28 flex items-center justify-center p-4 cursor-pointer rounded z-10 border-1 shadow-md transition duration-150 border-slate-900 shadow-slate-900 bg-gray-700 md:p-5 md:w-32 md:h-32">
              <img src={CssIcon} alt="CSS Icon" />
            </div>
          </motion.button>
        </div>

        {/* JavaScript */}
        <div>
          {/* Mobile */}
          <motion.button
            whileHover={{
              scale: [1.0, 0.9, 1.0],
              transition: { duration: 0.3 },
            }}
            className="group relative flex flex-col items-center md:hidden"
          >
            <span className="absolute -top-1 translate-y-0 flex flex-col items-center justify-center opacity-0 transition duration-300 group-hover:-translate-y-10 group-hover:z-10 group-hover:opacity-100 group-hover:delay-150">
              <p>JavaScript</p>
              <img
                src={CaretDownIcon}
                alt="Caret Down Icon"
                className="invert-100"
              />
            </span>
            <div className="w-28 h-28 flex items-center justify-center p-4 cursor-pointer rounded z-10 border-1 shadow-md transition duration-150 border-slate-900 shadow-slate-900 bg-gray-700 md:p-5 md:w-32 md:h-32">
              <img src={JsIcon} alt="JavaScript Icon" />
            </div>
          </motion.button>

          {/* Tablet, Desktop */}
          <motion.button
            whileHover={{
              scale: [1.0, 0.9, 1.0],
              transition: { duration: 0.3 },
            }}
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
            <div className="w-28 h-28 flex items-center justify-center p-4 cursor-pointer rounded z-10 border-1 shadow-md transition duration-150 border-slate-900 shadow-slate-900 bg-gray-700 md:p-5 md:w-32 md:h-32">
              <img src={JsIcon} alt="JavaScript Icon" />
            </div>
          </motion.button>
        </div>

        {/* Tailwind --> */}
        <div>
          {/* Mobile */}
          <motion.button
            whileHover={{
              scale: [1.0, 0.9, 1.0],
              transition: { duration: 0.3 },
            }}
            className="group relative flex flex-col items-center md:hidden"
          >
            <span className="absolute -top-1 translate-y-0 flex flex-col items-center justify-center opacity-0 transition duration-300 group-hover:-translate-y-10 group-hover:z-10 group-hover:opacity-100 group-hover:delay-150">
              <p>Tailwind CSS</p>
              <img
                src={CaretDownIcon}
                alt="Caret Down Icon"
                className="invert-100"
              />
            </span>
            <div className="w-28 h-28 flex items-center justify-center p-4 cursor-pointer rounded z-10 border-1 shadow-md transition duration-150 border-slate-900 shadow-slate-900 bg-gray-700 md:p-5 md:w-32 md:h-32">
              <img src={TailwindIcon} alt="Tailwind CSS Icon" />
            </div>
          </motion.button>

          {/* Tablet, Deskop */}
          <motion.button
            whileHover={{
              scale: [1.0, 0.9, 1.0],
              transition: { duration: 0.3 },
            }}
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
            <div className="w-28 h-28 flex items-center justify-center p-4 cursor-pointer rounded z-10 border-1 shadow-md transition duration-150 border-slate-900 shadow-slate-900 bg-gray-700 md:p-5 md:w-32 md:h-32">
              <img src={TailwindIcon} alt="Tailwind CSS Icon" />
            </div>
          </motion.button>
        </div>

        {/* PHP */}
        <div>
          {/* Mobile */}
          <motion.button
            whileHover={{
              scale: [1.0, 0.9, 1.0],
              transition: { duration: 0.3 },
            }}
            className="group relative flex flex-col items-center md:hidden"
          >
            <span className="absolute -top-1 translate-y-0 flex flex-col items-center justify-center opacity-0 transition duration-300 group-hover:-translate-y-10 group-hover:z-10 group-hover:opacity-100 group-hover:delay-150">
              <p>PHP</p>
              <img
                src={CaretDownIcon}
                alt="Caret Down Icon"
                className="invert-100"
              />
            </span>
            <div className="w-28 h-28 flex items-center justify-center p-4 cursor-pointer rounded z-10 border-1 shadow-md transition duration-150 border-slate-900 shadow-slate-900 bg-gray-700 md:p-5 md:w-32 md:h-32">
              <img src={PhpIcon} alt="PHP Icon" />
            </div>
          </motion.button>

          {/* Tablet, Desktop */}
          <motion.button
            whileHover={{
              scale: [1.0, 0.9, 1.0],
              transition: { duration: 0.3 },
            }}
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
            <div className="w-28 h-28 flex items-center justify-center p-4 cursor-pointer rounded z-10 border-1 shadow-md transition duration-150 border-slate-900 shadow-slate-900 bg-gray-700 md:p-5 md:w-32 md:h-32">
              <img src={PhpIcon} alt="PHP Icon" />
            </div>
          </motion.button>
        </div>

        {/* Node JS */}
        <div>
          {/* Mobile */}
          <motion.button
            whileHover={{
              scale: [1.0, 0.9, 1.0],
              transition: { duration: 0.3 },
            }}
            className="group relative flex flex-col items-center md:hidden"
          >
            <span className="absolute -top-1 translate-y-0 flex flex-col items-center justify-center opacity-0 transition duration-300 group-hover:-translate-y-10 group-hover:z-10 group-hover:opacity-100 group-hover:delay-150">
              <p>Node JS</p>
              <img
                src={CaretDownIcon}
                alt="Caret Down Icon"
                className="invert-100"
              />
            </span>
            <div className="w-28 h-28 flex items-center justify-center p-4 cursor-pointer rounded z-10 border-1 shadow-md transition duration-150 border-slate-900 shadow-slate-900 bg-gray-700 md:p-5 md:w-32 md:h-32">
              <img src={NodeJsIcon} alt="Node Js Icon" />
            </div>
          </motion.button>

          {/* Tablet, Desktop */}
          <motion.button
            whileHover={{
              scale: [1.0, 0.9, 1.0],
              transition: { duration: 0.3 },
            }}
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
            <div className="w-28 h-28 flex items-center justify-center p-4 cursor-pointer rounded z-10 border-1 shadow-md transition duration-150 border-slate-900 shadow-slate-900 bg-gray-700 md:p-5 md:w-32 md:h-32">
              <img src={NodeJsIcon} alt="Node Js Icon" />
            </div>
          </motion.button>
        </div>

        {/* React JS */}
        <div>
          {/* Mobile */}
          <motion.button
            whileHover={{
              scale: [1.0, 0.9, 1.0],
              transition: { duration: 0.3 },
            }}
            className="group relative flex flex-col items-center md:hidden"
          >
            <span className="absolute -top-1 translate-y-0 flex flex-col items-center justify-center opacity-0 transition duration-300 group-hover:-translate-y-10 group-hover:z-10 group-hover:opacity-100 group-hover:delay-150">
              <p>React JS</p>
              <img
                src={CaretDownIcon}
                alt="Caret Down Icon"
                className="invert-100"
              />
            </span>
            <div className="w-28 h-28 flex items-center justify-center p-4 cursor-pointer rounded z-10 border-1 shadow-md transition duration-150 border-slate-900 shadow-slate-900 bg-gray-700 md:p-5 md:w-32 md:h-32">
              <img src={ReactIcon} alt="React Icon" />
            </div>
          </motion.button>

          {/* Tablet, Desktop */}
          <motion.button
            whileHover={{
              scale: [1.0, 0.9, 1.0],
              transition: { duration: 0.3 },
            }}
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
            <div className="w-28 h-28 flex items-center justify-center p-4 cursor-pointer rounded z-10 border-1 shadow-md transition duration-150 border-slate-900 shadow-slate-900 bg-gray-700 md:p-5 md:w-32 md:h-32">
              <img src={ReactIcon} alt="React Icon" />
            </div>
          </motion.button>
        </div>
      </div>
      <div className="pt-12 mt-10" id="experience">
        <p className="text-xs text-center text-cyan-500">Experience</p>
        <h1 className="text-3xl font-bold text-center mb-5 md:text-6xl">
          🏢Work Experiences
        </h1>
        <p className="w-[95%] mx-auto text-slate-500 text-center pb-20 text-sm md:text-base lg:w-1/2">
          Combining technical expertise with practical application, I have
          successfully contributed to various roles, leveraging my skills in
          computer engineering, networking, and web development to drive
          impactful results.
        </p>

        <div className="w-[95%] mx-auto flex flex-col items-center justify-center gap-10">
          {/* BNN Tangsel */}
          <div className="border-4 border-cyan-400 rounded-2xl w-full bg-gradient-to-tl from-cyan-700 to-cyan-800 flex flex-col items-start justify-center md:flex-row">
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
          <div className="border-4 border-cyan-400 rounded-2xl w-full bg-gradient-to-tl from-cyan-700 to-cyan-600 flex flex-col items-start justify-center md:flex-row">
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
