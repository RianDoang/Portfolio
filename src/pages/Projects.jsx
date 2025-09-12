import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import JsIcon from "../assets/Experience/skills/Js.svg";
// import PhpIcon from "../assets/Experience/skills/Php.svg";
// import TailwindIcon from "../assets/Experience/skills/Tailwind.svg";
// import ReactIcon from "../assets/Experience/skills/ReactJs.svg";
import QRProject from "../assets/projects/QRMe.png";
import RYStore from "../assets/projects/RealmYoke-Store.png";
import RYGames from "../assets/projects/RealmYoke-Games.png";
import FollGone from "../assets/projects/FollGone.png";
import Container from "../components/Container";

export default function Projects() {
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
        setTriggerPoint(600);
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
      description:
        "Website untuk membuat text atau link custom menjadi sebuah QR code dengan mudah dan dapat digunakan secara praktis oleh siapapun.",
    },
    {
      href: "https://riandoang.github.io/RealmYoke-Store/",
      imgSrc: RYStore,
      imgAlt: "RealmYoke Store Projects",
      title: "RealmYoke Store",
      description:
        "Platform e-commerce yang menyediakan top-up items game online secara aman, cepat, dan murah dengan pengalaman berbelanja yang nyaman.",
    },
    {
      href: "https://riandoang.github.io/RealmYoke-Games/",
      imgSrc: RYGames,
      imgAlt: "RealmYoke Games Projects",
      title: "RealmYoke Games",
      description:
        "Platform yang menyediakan tempat berbagai game yang dapat diunduh secara gratis dan mudah digunakan.",
    },
    {
      href: "https://follgone.vercel.app/",
      imgSrc: FollGone,
      imgAlt: "FollGone Projects",
      title: "FollGone",
      description:
        "Platform berguna untuk melihat siapa saja yang belum anda ikuti balik ataupun orang yang tidak mengikuti anda di Instagram secara aman dan praktis.",
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
    <Container>
      <div
        id="projects-section"
        className="flex flex-col items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: hasAnimated ? 1 : 0,
          }}
          transition={{ duration: 0.5, delay: 0.1 }}
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
          <h1 className="pb-5 text-center text-3xl font-semibold text-gray-100 sm:text-5xl md:text-6xl">
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
          className="w-[90%] pb-20 text-center text-sm text-gray-500 sm:text-base lg:w-1/2"
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
          >
            <div className="flex w-[95%] flex-col justify-center overflow-hidden rounded-lg border border-gray-700 bg-gray-900 transition duration-150 lg:w-auto">
              <img className="" src={project.imgSrc} alt={project.imgAlt} />

              <div className="flex flex-col items-start gap-4 p-5 text-gray-100">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="line-clamp-3 text-sm text-gray-400">
                  {project.description}
                </p>
                <a
                  href={project.href}
                  target="_blank"
                  className="flex items-center justify-center rounded bg-cyan-500 px-3 py-2 text-sm transition duration-100 hover:bg-cyan-600"
                >
                  Read more
                  <svg
                    className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
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
              >
                <div className="flex w-4/5 flex-col justify-center rounded bg-slate-900 p-2 transition duration-150 lg:w-auto">
                  <img
                    className="mb-3 rounded-sm"
                    src={project.imgSrc}
                    alt={project.imgAlt}
                  />
                  <h3 className="mb-1 ml-2 text-xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="my-2 ml-2 flex items-center gap-2 text-sm">
                    {project.description}
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
    </Container>
  );
}
