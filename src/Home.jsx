import { useRef } from "react";
import Navbar from "./pages/Navbar";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
// import { Noise } from "../components/animation/Animation";

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

      {/* Profile Section */}
      <section
        ref={profileRef}
        id="profile"
        className="flex flex-col items-center justify-center gap-4 pt-28 pb-14 md:pb-24 lg:flex-row lg:gap-0"
      >
        <Profile handleContactClick={handleContactClick} />
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        id="about"
        className="flex flex-col items-center justify-between bg-gray-900 py-10 text-white md:flex-row md:py-20"
      >
        <About />
      </section>

      {/* Project Section */}
      <section
        ref={projectsRef}
        id="projects"
        className="w-full py-14 md:py-28"
      >
        <Projects />
      </section>

      {/* Experience Section */}
      <section
        ref={experienceRef}
        id="experience"
        className="w-full bg-gray-900 py-14 md:py-28"
      >
        <Experience />
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="w-full pt-4 md:pt-18">
        <Contact />
      </section>

      <Footer
        handleContactClick={handleContactClick}
        handleProfileClick={handleProfileClick}
      />
    </div>
  );
}
