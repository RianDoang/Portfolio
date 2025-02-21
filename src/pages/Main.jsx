import { useState, useEffect, useRef } from "react";
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
  const [scrollY, setScrollY] = useState(0);

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

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

      <div className="relative text-white">
        <div className="fixed z-50 top-5 right-5 bg-black text-white p-2 rounded">
          ScrollY: {scrollY}
        </div>

        <Navbar sections={sections} />

        {/* Profile Section */}
        <section
          ref={profileRef}
          id="profile"
          className="w-[90%] flex flex-col items-center justify-center mx-auto pt-28 gap-4 lg:flex-row lg:gap-0"
        >
          <Profile handleContactClick={handleContactClick} />
        </section>

        {/* About Section */}
        <section
          ref={aboutRef}
          id="about"
          className="flex flex-col items-center justify-between pt-28 my-5 text-white md:flex-row"
        >
          <About />
        </section>

        {/* Project Section */}
        <section ref={projectsRef} id="projects" className="w-full pt-28">
          <Projects />
        </section>

        {/* Experience Section */}
        <section ref={experienceRef} id="experience" className="w-full pt-28">
          <Experience />
        </section>

        {/* Contact Section */}
        <section ref={contactRef} id="contact" className="w-full pt-18">
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
