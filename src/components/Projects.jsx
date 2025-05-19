import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import JsIcon from "../assets/Experience/skills/Js.svg";
import PhpIcon from "../assets/Experience/skills/Php.svg";
import TailwindIcon from "../assets/Experience/skills/Tailwind.svg";
import ReactIcon from "../assets/Experience/skills/ReactJs.svg";
import QRProject from "../assets/projects/QRMe.png";
import RYStore from "../assets/projects/RealmYoke-Store.png";
import RYGames from "../assets/projects/RealmYoke-Games.png";
import FollGone from "../assets/projects/FollGone.png";

export default function Projects() {
  const [isTouchedQR, setIsTouchedQR] = useState(false);
  const [isTouchedRYS, setIsTouchedRYS] = useState(false);
  const [isTouchedRYG, setIsTouchedRYG] = useState(false);
  const [isTouchedFG, setIsTouchedFG] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [triggerPoint, setTriggerPoint] = useState(false);
  const [hasAnimatedProject, setHasAnimatedProject] = useState(false);
  const [triggerProject, settriggerProject] = useState(false);

  useEffect(() => {
    const updateTriggers = () => {
      if (window.innerWidth < 768) {
        // Mobile
        setTriggerPoint(500);
        settriggerProject(860);
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        // Tablet
        setTriggerPoint(550);
        settriggerProject(890);
      } else {
        // Desktop
        setTriggerPoint(650);
        settriggerProject(850);
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

      if (window.scrollY > triggerProject && !hasAnimatedProject) {
        setHasAnimatedProject(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [triggerPoint, hasAnimated, triggerProject, hasAnimatedProject]);

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
    {
      href: "https://follgone.vercel.app/",
      imgSrc: FollGone,
      imgAlt: "FollGone Projects",
      title: "FollGone",
      technologies: [TailwindIcon, ReactIcon],
    },
  ];

  const handleShowMoreClick = () => {
    setShowAll(!showAll);
    if (showAll) {
      document
        .getElementById("projects-section")
        .scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        id="projects-section"
        className="flex flex-col items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: hasAnimated ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          <h5 className="text-xs font-semibold text-cyan-500">Projects</h5>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: hasAnimated ? 1 : 0,
            y: hasAnimated ? 0 : 30,
          }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="pb-5 text-center text-3xl font-semibold sm:text-5xl md:text-6xl">
            🚀 Highlight Projects
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: hasAnimated ? 1 : 0,
            y: hasAnimated ? 0 : 30,
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-[90%] pb-20 text-center text-sm text-slate-500 sm:text-base lg:w-1/2"
        >
          <p>
            Demonstrating my ability to turn complex technical requirements into
            successful projects, I have consistently delivered innovative and
            efficient solutions in both web development and networking.
          </p>
        </motion.div>
      </div>

      {/* Container Proyek */}
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {/* 6 Proyek Awal */}
        {projects.slice(0, 6).map((project, index) => (
          <motion.a
            key={index}
            href={project.href}
            target="_blank"
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: hasAnimatedProject ? 1 : 0,
              y: hasAnimatedProject ? 0 : 50,
            }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
            className="flex w-full items-center justify-center"
            onTouchStart={() => {
              if (index === 0) setIsTouchedQR(true);
              if (index === 1) setIsTouchedRYS(true);
              if (index === 2) setIsTouchedRYG(true);
              if (index === 3) setIsTouchedFG(true);
            }}
            onTouchEnd={() => {
              if (index === 0) setIsTouchedQR(false);
              if (index === 1) setIsTouchedRYS(false);
              if (index === 2) setIsTouchedRYG(false);
              if (index === 3) setIsTouchedFG(false);
            }}
          >
            <div
              className={`flex w-[90%] flex-col justify-center rounded bg-slate-900 p-2 transition duration-150 lg:w-auto ${
                (index === 0 && isTouchedQR) ||
                (index === 1 && isTouchedRYS) ||
                (index === 2 && isTouchedRYG) ||
                (index === 3 && isTouchedFG)
                  ? "scale-[1.03] shadow-lg shadow-slate-700"
                  : "shadow-sm shadow-slate-800 hover:scale-[1.03] hover:shadow-lg hover:shadow-slate-700"
              }`}
            >
              <img
                className="mb-3 rounded-sm"
                src={project.imgSrc}
                alt={project.imgAlt}
              />
              <h3 className="mb-1 ml-2 text-xl font-semibold">
                {project.title}
              </h3>
              <p className="my-2 ml-2 flex items-center gap-2 text-sm">
                Technology:
                {project.technologies.map((tech, techIndex) => (
                  <img
                    key={techIndex}
                    src={tech}
                    alt="Technology Icon"
                    className="h-5 w-5"
                  />
                ))}
              </p>
            </div>
          </motion.a>
        ))}

        {/* Proyek Tambahan dengan Animasi */}
        <AnimatePresence>
          {showAll &&
            projects.slice(6).map((project, index) => (
              <motion.a
                key={index + 6}
                href={project.href}
                target="_blank"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: hasAnimatedProject ? 1 : 0,
                  y: hasAnimatedProject ? 0 : 50,
                }}
                transition={{ duration: 0.3, delay: index * 0.2 }}
                className="flex w-full items-center justify-center"
                onTouchStart={() => {
                  if (index === 0) setIsTouchedQR(true);
                  if (index === 1) setIsTouchedRYS(true);
                  if (index === 2) setIsTouchedRYG(true);
                  if (index === 3) setIsTouchedFG(true);
                }}
                onTouchEnd={() => {
                  if (index === 0) setIsTouchedQR(false);
                  if (index === 1) setIsTouchedRYS(false);
                  if (index === 2) setIsTouchedRYG(false);
                  if (index === 3) setIsTouchedFG(false);
                }}
              >
                <div
                  className={`flex w-4/5 flex-col justify-center rounded bg-slate-900 p-2 transition duration-150 lg:w-auto ${
                    (index === 0 && isTouchedQR) ||
                    (index === 1 && isTouchedRYS) ||
                    (index === 2 && isTouchedRYG) ||
                    (index === 3 && isTouchedFG)
                      ? "scale-[1.03] shadow-lg shadow-slate-700"
                      : "shadow-sm shadow-slate-800 hover:scale-[1.03] hover:shadow-lg hover:shadow-slate-700"
                  }`}
                >
                  <img
                    className="mb-3 rounded-sm"
                    src={project.imgSrc}
                    alt={project.imgAlt}
                  />
                  <h3 className="mb-1 ml-2 text-xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="my-2 ml-2 flex items-center gap-2 text-sm">
                    Technology:
                    {project.technologies.map((tech, techIndex) => (
                      <img
                        key={techIndex}
                        src={tech}
                        alt="Technology Icon"
                        className="h-5 w-5"
                      />
                    ))}
                  </p>
                </div>
              </motion.a>
            ))}
        </AnimatePresence>
      </div>

      {/* Tombol Show More */}
      {projects.length > 6 && (
        <div className="mt-14 flex w-full items-center">
          <div className="h-[0.5px] flex-grow bg-slate-500/50"></div>
          <button
            onClick={handleShowMoreClick}
            className="cursor-pointer rounded border border-slate-500/50 bg-transparent px-4 py-2 text-white transition hover:bg-slate-500/20"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
          <div className="h-[0.5px] flex-grow bg-slate-500/50"></div>
        </div>
      )}
    </>
  );
}
