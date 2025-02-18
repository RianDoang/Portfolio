import { useState, Suspense, lazy } from "react";
import PropTypes from "prop-types";
import RotatingText from "../components/animation/RotatingText";
import GmailIcon from "../assets/Experience/profile/Gmail.svg";
import GithubIcon from "../assets/Experience/profile/Github.svg";
import Linkedincon from "../assets/Experience/profile/Linkedin.svg";

const ProfileAnim = lazy(() =>
  import("../components/animation/Animation").then((module) => ({
    default: module.ProfileAnim,
  }))
);

const ProfileMobileAnim = lazy(() =>
  import("../components/animation/Animation").then((module) => ({
    default: module.ProfileMobileAnim,
  }))
);

export default function Profile({ handleContactClick }) {
  const [isTouchedGmail, setIsTouchedGmail] = useState(false);
  const [isTouchedGithub, setIsTouchedGithub] = useState(false);
  const [isTouchedLinkedin, setIsTouchedLinkedin] = useState(false);

  return (
    <>
      <div className="w-full text-slate-50 lg:w-1/2">
        <div className="text-[22px] font-medium flex items-center gap-2 md:text-2xl">
          <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="700">
            <h1>I&apos;m a</h1>
          </div>

          <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="700">
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
          </div>
        </div>
        <div>
          <div data-aos="fade-up" data-aos-delay="900" data-aos-duration="700">
            <h1 className="text-4xl font-bold md:text-6xl">Muhamad Riansyah</h1>
          </div>

          <div data-aos="fade-up" data-aos-delay="1100" data-aos-duration="700">
            <p className="text-slate-500 mt-3 text-sm">
              Call me Rian, graduated from SMK Letris Indonesia 1 majoring in
              Computer and Network Engineering which I chose for the 2021/2024
              period.
            </p>
          </div>
        </div>
        <div className="flex gap-7 mt-7">
          <div
            data-aos="fade-up"
            data-aos-delay="1500"
            data-aos-duration="700"
            data-aos-offset="0"
          >
            {/* Gmail */}
            <button
              onClick={handleContactClick}
              onTouchStart={() => setIsTouchedGmail(true)}
              onTouchEnd={() => setIsTouchedGmail(false)}
            >
              <div
                className={`w-10 h-10 flex items-center justify-center p-1 rounded-lg cursor-pointer transition duration-300 ease-in-out bg-slate-300 hover:rotate-3 hover:scale-110 hover:shadow-md hover:shadow-slate-700 ${
                  isTouchedGmail
                    ? "rotate-3 scale-110 shadow-md shadow-slate-700"
                    : "hover:rotate-3 hover:scale-110 hover:shadow-md hover:shadow-slate-700"
                }`}
              >
                <img src={GmailIcon} alt="Gmail Icon" />
              </div>
            </button>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="1600"
            data-aos-duration="700"
            data-aos-offset="0"
          >
            {/* Github */}
            <a
              href="https://github.com/riandoang/"
              target="_blank"
              onTouchStart={() => setIsTouchedGithub(true)}
              onTouchEnd={() => setIsTouchedGithub(false)}
            >
              <div
                className={`w-10 h-10 flex items-center justify-center p-1 rounded-lg transition duration-300 ease-in-out bg-slate-300 hover:rotate-3 hover:scale-110 hover:shadow-md hover:shadow-slate-700 ${
                  isTouchedGithub
                    ? "rotate-3 scale-110 shadow-md shadow-slate-700"
                    : "hover:rotate-3 hover:scale-110 hover:shadow-md hover:shadow-slate-700"
                }`}
              >
                <img src={GithubIcon} alt="Github Icon" />
              </div>
            </a>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="1700"
            data-aos-duration="700"
            data-aos-offset="0"
          >
            {/* Linkeind */}
            <a
              href="#"
              onTouchStart={() => setIsTouchedLinkedin(true)}
              onTouchEnd={() => setIsTouchedLinkedin(false)}
            >
              <div
                className={`w-10 h-10 flex items-center justify-center p-1 rounded-lg transition duration-300 ease-in-out bg-slate-300 hover:rotate-3 hover:scale-110 hover:shadow-md hover:shadow-slate-700 ${
                  isTouchedLinkedin
                    ? "rotate-3 scale-110 shadow-md shadow-slate-700"
                    : "hover:rotate-3 hover:scale-110 hover:shadow-md hover:shadow-slate-700"
                }`}
              >
                <img src={Linkedincon} alt="Linkedin Icon" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="1300"
        data-aos-duration="700"
        className="flex-1 flex items-center justify-center md:justify-end"
      >
        <Suspense>
          <div className="hidden md:flex">
            <ProfileAnim />
          </div>
          <div className="flex md:hidden">
            <ProfileMobileAnim />
          </div>
        </Suspense>
      </div>
    </>
  );
}

Profile.propTypes = {
  handleContactClick: PropTypes.func.isRequired,
};
