import { useRef } from "react";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Noise } from "../components/animation/Animation";
import "../input.css";

export default function Main() {
  const profileRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const sections = [
    { name: "Profile", ref: profileRef },
    { name: "About", ref: aboutRef },
    { name: "Projects", ref: projectsRef },
    { name: "Experience", ref: experienceRef },
    { name: "Contact", ref: contactRef },
  ];

  const handleContactClick = (e) => {
    e.preventDefault();
    contactRef.current.scrollIntoView({ behavior: "smooth" });
    history.replaceState(null, "", "");
  };

  const handleProfileClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.replaceState(null, "", "");
  };

  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-screen pointer-events-none -z-10">
        <Noise
          patternSize={250}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={20}
        />
      </div>

      <Navbar sections={sections} />

      <div className="relative text-white">
        {/* Profile Section */}
        <section
          ref={profileRef}
          id="profile"
          className="w-[90%] flex flex-col items-center justify-center mx-auto pt-28 pb-20 gap-4 lg:flex-row lg:gap-0"
        >
          <Profile handleContactClick={handleContactClick} />
        </section>

        {/* About Section */}
        <section
          ref={aboutRef}
          id="about"
          className="flex flex-col items-center justify-between py-14 my-5 text-white md:flex-row"
        >
          <About />
        </section>

        {/* Project Section */}
        <section ref={projectsRef} id="projects" className="w-full py-10">
          <Projects />
        </section>

        {/* Experience Section */}
        <section ref={experienceRef} id="experience" className="py-10">
          <Experience />
        </section>

        {/* Contact Section */}
        <section ref={contactRef} id="contact" className="w-full">
          <Contact />
        </section>

        <Footer
          handleContactClick={handleContactClick}
          handleProfileClick={handleProfileClick}
        />
      </div>
    </div>
  );
}
