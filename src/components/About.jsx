import { Suspense, lazy } from "react";

const AboutAnim = lazy(() =>
  import("../components/animation/Animation").then((module) => ({
    default: module.AboutAnim,
  }))
);

export default function About() {
  return (
    <>
      <div className="w-full lg:w-[63%]">
        <h1 className="mx-5 pb-4 font-semibold text-4xl md:pb-8 md:text-6xl">
          👨‍💻About Me
        </h1>
        <p className="mx-5 text-sm text-slate-300 md:text-base">
          I&apos;m a Computer Engineering and Networking graduate with a passion
          for web development. I specialize in creating dynamic and
          user-friendly websites using HTML, CSS, and JavaScript. My background
          in networking enhances my ability to design robust, efficient systems.
          Let&apos;s collaborate to bring innovative solutions to life!
        </p>
      </div>
      <div className="hidden md:flex md:w-[35%]">
        <Suspense>
          <AboutAnim />
        </Suspense>
      </div>
    </>
  );
}
