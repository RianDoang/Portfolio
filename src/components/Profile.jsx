import { useState, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import RotatingText from "../components/animation/RotatingText";
import GmailIcon from "../assets/Experience/profile/Gmail.svg";
import GithubIcon from "../assets/Experience/profile/Github.svg";
import Linkedincon from "../assets/Experience/profile/Linkedin.svg";

const ProfileAnim = lazy(() =>
  import("../components/animation/Animation").then((module) => ({
    default: module.ProfileAnim,
  })),
);

const ProfileMobileAnim = lazy(() =>
  import("../components/animation/Animation").then((module) => ({
    default: module.ProfileMobileAnim,
  })),
);

export default function Profile({ handleContactClick }) {
  const [isTouchedGmail, setIsTouchedGmail] = useState(false);
  const [isTouchedGithub, setIsTouchedGithub] = useState(false);
  const [isTouchedLinkedin, setIsTouchedLinkedin] = useState(false);

  return (
    <>
      <div className="w-full text-slate-50 lg:w-1/2">
        <div className="mb-5 flex flex-col items-start gap-0 text-[22px] font-medium sm:mb-0 sm:flex-row sm:items-center sm:gap-2 sm:text-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h1>I&apos;m a</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <RotatingText
              texts={[
                "Front-End Developer",
                "Web Designer",
                "Network Infrastructure",
              ]}
              mainClassName="overflow-hidden justify-center rounded-lg font-semibold italic text-white"
              staggerFrom={"first"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              rotationInterval={2500}
            />
          </motion.div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.4, delay: 0.9 }}
          >
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              Muhamad Riansyah
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.4, delay: 1.1 }}
          >
            <p className="mt-3 text-sm text-slate-500">
              Call me Rian, graduated from SMK Letris Indonesia 1 majoring in
              Computer and Network Engineering which I chose for the 2021/2024
              period.
            </p>
          </motion.div>
        </div>
        <div className="mt-7 flex gap-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.4, delay: 1.5 }}
          >
            {/* Gmail */}
            <button
              onClick={handleContactClick}
              onTouchStart={() => setIsTouchedGmail(true)}
              onTouchEnd={() => setIsTouchedGmail(false)}
            >
              <div
                className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-slate-300 p-1 transition duration-300 ease-in-out hover:scale-110 hover:rotate-3 hover:shadow-md hover:shadow-slate-700 sm:h-10 sm:w-10 ${
                  isTouchedGmail
                    ? "scale-110 rotate-3 shadow-md shadow-slate-700"
                    : "hover:scale-110 hover:rotate-3 hover:shadow-md hover:shadow-slate-700"
                }`}
              >
                <img src={GmailIcon} alt="Gmail Icon" />
              </div>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.4, delay: 1.6 }}
          >
            {/* Github */}
            <a
              href="https://github.com/riandoang/"
              target="_blank"
              onTouchStart={() => setIsTouchedGithub(true)}
              onTouchEnd={() => setIsTouchedGithub(false)}
            >
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-lg bg-slate-300 p-1 transition duration-300 ease-in-out hover:scale-110 hover:rotate-3 hover:shadow-md hover:shadow-slate-700 sm:h-10 sm:w-10 ${
                  isTouchedGithub
                    ? "scale-110 rotate-3 shadow-md shadow-slate-700"
                    : "hover:scale-110 hover:rotate-3 hover:shadow-md hover:shadow-slate-700"
                }`}
              >
                <img src={GithubIcon} alt="Github Icon" />
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.4, delay: 1.7 }}
          >
            {/* Linkeind */}
            <a
              href="https://linkedin.com/in/muhamad-riansyah"
              target="_blank"
              onTouchStart={() => setIsTouchedLinkedin(true)}
              onTouchEnd={() => setIsTouchedLinkedin(false)}
            >
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-lg bg-slate-300 p-1 transition duration-300 ease-in-out hover:scale-110 hover:rotate-3 hover:shadow-md hover:shadow-slate-700 sm:h-10 sm:w-10 ${
                  isTouchedLinkedin
                    ? "scale-110 rotate-3 shadow-md shadow-slate-700"
                    : "hover:scale-110 hover:rotate-3 hover:shadow-md hover:shadow-slate-700"
                }`}
              >
                <img src={Linkedincon} alt="Linkedin Icon" />
              </div>
            </a>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.4, delay: 1.3 }}
        className="flex flex-1 items-center justify-center md:justify-end"
      >
        <Suspense>
          <div className="hidden md:flex">
            <ProfileAnim />
          </div>
          <div className="flex md:hidden">
            <ProfileMobileAnim />
          </div>
        </Suspense>
      </motion.div>
    </>
  );
}

Profile.propTypes = {
  handleContactClick: PropTypes.func.isRequired,
};
