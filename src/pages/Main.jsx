import { useRef } from "react";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
// import { Noise } from "../components/animation/Animation";
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
    <div className="relative text-white">
      <Navbar sections={sections} />

      <div className="mx-5 sm:mx-7 md:mx-10">
        {/* Profile Section */}
        <section
          ref={profileRef}
          id="profile"
          className="flex flex-col items-center justify-center gap-4 pt-28 lg:flex-row lg:gap-0"
        >
          <Profile handleContactClick={handleContactClick} />
        </section>

        {/* About Section */}
        <section
          ref={aboutRef}
          id="about"
          className="my-5 flex flex-col items-center justify-between pt-28 text-white md:flex-row"
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
      </div>

      <Footer
        handleContactClick={handleContactClick}
        handleProfileClick={handleProfileClick}
      />
    </div>
  );
}
