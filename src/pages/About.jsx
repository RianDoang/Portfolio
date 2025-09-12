import { useEffect, useState, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import Container from "../components/Container";

const AboutAnim = lazy(() =>
  import("../components/animation/Animation").then((module) => ({
    default: module.AboutAnim,
  })),
);

export default function About() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [triggerPoint, setTriggerPoint] = useState(false);

  useEffect(() => {
    const updateTriggers = () => {
      if (window.innerWidth < 768) {
        // Mobile
        setTriggerPoint(200);
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        // Tablet
        setTriggerPoint(200);
      } else {
        // Desktop
        setTriggerPoint(320);
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
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [triggerPoint, hasAnimated]);

  return (
    <Container>
      <div className="flex items-center justify-between">
        <div className="w-full lg:w-[63%]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: hasAnimated ? 1 : 0,
              y: hasAnimated ? 0 : 30,
            }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="pb-4 text-3xl font-semibold text-slate-100 sm:text-5xl md:pb-8 md:text-6xl">
              👨‍💻 About Me
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: hasAnimated ? 1 : 0,
              y: hasAnimated ? 0 : 30,
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <p className="text-justify text-sm text-gray-300 sm:text-base md:text-left">
              I&apos;m a Computer Engineering and Networking graduate with a
              passion for web development. I specialize in creating dynamic and
              user-friendly websites using HTML, CSS, and JavaScript. My
              background in networking enhances my ability to design robust,
              efficient systems. Let&apos;s collaborate to bring innovative
              solutions to life!
            </p>
          </motion.div>
        </div>
        <div className="hidden md:flex md:w-[35%]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: hasAnimated ? 1 : 0,
              y: hasAnimated ? 0 : 30,
            }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Suspense>
              <AboutAnim />
            </Suspense>
          </motion.div>
        </div>
      </div>
    </Container>
  );
}
