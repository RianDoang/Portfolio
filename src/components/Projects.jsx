import { useState } from "react";
import TailwindIcon from "../assets/Experience/skills/Tailwind.svg";
import ReactIcon from "../assets/Experience/skills/ReactJs.svg";

export default function Projects() {
  const [isTouchedQR, setIsTouchedQR] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h5 className="text-xs text-cyan-500 font-semibold">Projects</h5>
        <h1 className="text-3xl font-bold pb-5 text-center md:text-6xl">
          🚀Highlight Projects
        </h1>
        <p className="w-[90%] text-center text-slate-500 pb-20 text-sm md:text-base md:w-1/2">
          Demonstrating my ability to turn complex technical requirements into
          successful projects, I have consistently delivered innovative and
          efficient solutions in both web development and networking.
        </p>
      </div>
      <div className="w-[95%] flex flex-col items-center justify-center gap-10 md:flex-row md:flex-wrap md:mx-auto">
        <a
          href="https://riandoang.github.io/QRMe/"
          target="_blank"
          className="flex items-center justify-center w-full md:w-[45%] lg:w-[30%]"
          onTouchStart={() => setIsTouchedQR(true)}
          onTouchEnd={() => setIsTouchedQR(false)}
        >
          <div
            className={`w-4/5 flex flex-col justify-center p-2 rounded transition duration-150 bg-slate-900 lg:w-auto
    ${
      isTouchedQR
        ? "scale-[1.03] shadow-lg shadow-slate-700"
        : "shadow-sm shadow-slate-800 hover:shadow-lg hover:shadow-slate-700 hover:scale-[1.03]"
    }`}
          >
            <img
              className="rounded-sm mb-3"
              src="src/assets/image/Projects/QRMe.png"
              alt="QRMe Projects"
            />
            <h3 className="ml-2 mb-1 text-xl font-semibold">QR Generate</h3>
            <p className="text-sm ml-2 my-2 flex items-center gap-2">
              Technology:
              {/* Tailwind */}
              <img
                src={TailwindIcon}
                alt="Tailwind CSS"
                className="w-5 h-5 md:w-6 md:h-6"
              />
              {/* React JS */}
              <img
                src={ReactIcon}
                alt="React JS"
                className="w-5 h-5 md:w-6 md:h-6"
              />
            </p>
          </div>
        </a>
      </div>
    </>
  );
}
