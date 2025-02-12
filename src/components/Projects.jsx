import { useState } from "react";
// import HtmlIcon from "../assets/experience/skills/Html.svg";
// import CssIcon from "../assets/experience/skills/Css.svg";
import JsIcon from "../../public/Js.svg";
import PhpIcon from "../assets/experience/skills/Php.svg";
import TailwindIcon from "../assets/experience/skills/Tailwind.svg";
// import NodeJsIcon from "../assets/experience/skills/NodeJs.svg";
import ReactIcon from "../assets/experience/skills/ReactJs.svg";
import QRProject from "../assets/projects/QRMe.png";
import RYStore from "../assets/projects/RealmYoke-Store.png";
import RYGames from "../assets/projects/RealmYoke-Games.png";

export default function Projects() {
  const [isTouchedQR, setIsTouchedQR] = useState(false);
  const [isTouchedRYS, setIsTouchedRYS] = useState(false);
  const [isTouchedRYG, setIsTouchedRYG] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      href: "https://riandoang.github.io/QRMe/",
      imgSrc: QRProject,
      imgAlt: "QRMe Projects",
      title: "QR Generate",
      technologies: [TailwindIcon, JsIcon],
    },
    {
      href: "https://riandoang.github.io/RealmYoke-Store/",
      imgSrc: RYStore,
      imgAlt: "RealmYoke Store Projects",
      title: "RealmYoke Store",
      technologies: [TailwindIcon, ReactIcon, PhpIcon],
    },
    {
      href: "https://riandoang.github.io/RealmYoke-Games/",
      imgSrc: RYGames,
      imgAlt: "RealmYoke Games Projects",
      title: "RealmYoke Games",
      technologies: [TailwindIcon, ReactIcon],
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

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
      <div className="w-[95%] grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 md:mx-auto">
        {displayedProjects.map((project, index) => (
          <a
            key={index}
            href={project.href}
            target="_blank"
            className="flex items-center justify-center w-full"
            onTouchStart={() => {
              if (index === 0) setIsTouchedQR(true);
              if (index === 1) setIsTouchedRYS(true);
              if (index === 2) setIsTouchedRYG(true);
            }}
            onTouchEnd={() => {
              if (index === 0) setIsTouchedQR(false);
              if (index === 1) setIsTouchedRYS(false);
              if (index === 2) setIsTouchedRYG(false);
            }}
          >
            <div
              className={`w-4/5 flex flex-col justify-center p-2 rounded transition duration-150 bg-slate-900 lg:w-auto
                ${
                  (index === 0 && isTouchedQR) ||
                  (index === 1 && isTouchedRYS) ||
                  (index === 2 && isTouchedRYG)
                    ? "scale-[1.03] shadow-lg shadow-slate-700"
                    : "shadow-sm shadow-slate-800 hover:shadow-lg hover:shadow-slate-700 hover:scale-[1.03]"
                }`}
            >
              <img
                className="rounded-sm mb-3"
                src={project.imgSrc}
                alt={project.imgAlt}
              />
              <h3 className="ml-2 mb-1 text-xl font-semibold">
                {project.title}
              </h3>
              <p className="text-sm ml-2 my-2 flex items-center gap-2">
                Technology:
                {project.technologies.map((tech, techIndex) => (
                  <img
                    key={techIndex}
                    src={tech}
                    alt="Technology Icon"
                    className="w-5 h-5"
                  />
                ))}
              </p>
            </div>
          </a>
        ))}
      </div>
      {projects.length > 6 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </>
  );
}
